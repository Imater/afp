import async from 'async';
import db from '../models';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
const simpleGit = require('simple-git')(path.join(__dirname, '..'));


var api = {};

const addInfoToItem = function(item){
  if (item && item.bids && item.bids.length){
    item.name = item.bids[0].bidUser;
    item.lastPrice = item.bids[0].price;
    item.lastTime = item.bids[0].createdAt;
    item.favorite = item.bids[0].price > 200000;
  }
  return item;
};

const addInfoToItems = function(items){
  return items.map((item)=>{
    return addInfoToItem(item.toJSON ? item.toJSON() : item);
  });
};

const JSONify = (items) => items.map((item) => item.toJSON());

const templates = {
  sport: {
    file: path.join(__dirname, '..', '..', 'src', 'components', 'settings.jsx')
  },
  menuItems: {
    file: path.join(__dirname, '..', '..', 'src', 'components', 'settings', 'menuItems.jsx')
  },
}

api.getTemplate = function(params){
  return new Promise((request, reject) => {
    fs.readFile(templates[params.id].file, { encoding: 'utf-8' }, (err, data) => {
      if(err) {
        return reject(err);
      }
      return request({
        template: data
      });
    });
  });
};

api.saveTemplate = function(req){
  return new Promise((request, reject) => {
    fs.writeFile(templates[req.query.id].file, req.body.template, { encoding: 'utf-8' }, (err, data) => {
      if(err) {
        return reject(err);
      }
      simpleGit
      .add(['./**/*', './**/*'])
      //.commit(`auto commit from admin ${req.query.id}`)
      .diff((err, data) => {
        console.info(err, data);
      })
      .commit(`auto commit from admin ${req.query.id}`)
      .then((err, data) => {
        console.info(err, data);
        return request({
          template: data
        });
      });
    });
  });
};

api.updateOneNews = function(item_id, body){
  return new Promise((request, reject) => {
    db.models.news.findOne({
      where: {
        item_id: item_id
      }
    }).then(function(news) {
      news.updateAttributes(body.news).then(function(newsDb){
        return request({
          news: newsDb
        });
      }).catch(function(err){
        return reject(err);
      });
    }).catch(function(err){
      return reject(err);
    });
  });
};

api.addOneNews = function(body){
  return new Promise((request, reject) => {
    db.models.news.create(body.news).then(function(newsDb) {
      return request({
        news: newsDb
      });
    }).catch(function(err){
      return reject(err);
    });
  });
};

api.deleteOneNews = function(item_id){
  return new Promise((request, reject) => {
    db.models.news.destroy({
      where: {
        item_id: item_id
      }
    }).then(function(news) {
      console.info('remove', news);
      return request({
        news: news
      });
    }).catch(function(err){
      return reject(err);
    });
  });
};

api.getAllDjs = function(limit=10000){
  return new Promise((request, reject) => {
    db.models.dj.findAll({
      where: {
        visible: 1
      },
      order: [['id', 'DESC'], ['stage', 'ASC'], ['order', 'ASC']],
      limit: limit
    }).then(function(djsFromDb){
      request(JSONify(djsFromDb));
    }).catch(function(err){
      console.error(err);
    });
  });
};

api.uploadImage = function(body){
  return new Promise((request, reject) => {
    var base64Data = body.image.replace(/^data:image\/png;base64,/, "");
    var hash = crypto.createHash('md5').update(base64Data).digest('hex');
    require("fs").writeFile("upload/images/news/" + hash + ".png", base64Data, 'base64', function(err) {
      if(err) {
        reject(err);
      }
      request({
        name: hash + ".png"
      });
    });
  });
};

api.getTest = function(id){
  return new Promise((request, reject) => {
    const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'assets', 'index.html'), { encoding: 'utf-8' });
    console.info(indexHtml);
    request({done: indexHtml})
  });
};

api.getNews = function(limit=600){
  return new Promise((request, reject) => {
    db.models.news.findAll({
      include: [
      ],
      order: [['date', 'DESC']],
      limit: limit
    }).then(function(newsFromDb){
      request(JSONify(newsFromDb));
    }).catch(function(err){
      console.error(err);
    });
  });
};

api.updateNews = function(id){
  return new Promise((request, reject) => {
    db.models.cms_news_item.findAll({
      where: {
        enabled: true
      },
      include: [
        {
          model: db.models.cms_news_item_data,
          attributes: [
            'key',
            'data',
          ],
        },
        {
          model: db.models.cms_news_item_image,
          attributes: [
            'name',
          ],
        },
        {
          model: db.models.cms_lang_translate_value,
          attributes: [
            'translate_id',
            'lang_id',
            'value',
          ],
        }
      ],
      order: [['date', 'DESC']],
      limit: 6000
    }).then(function(newsFromDb){
      async.eachLimit(newsFromDb, 10, function(news, callback){
        var translate = function(news, key){
          var found = news.cms_lang_translate_values.find(function(el){ return el.translate_id === key});
          if(!found) {
            return '';
          } else {
            return found.value;
          }
        };
        var content = function(news, key){
          var found = news.cms_news_item_data.find(function(el){ return el.key === key});
          if(!found) {
            return '';
          } else {
            return found.data;
          }
        };
        var newsDb = news.toJSON();
        var newsItem = {
          title: newsDb.title.replace(/\\"/g, '"'),
          title_eng: translate(newsDb, 8).replace(/\\"/g, '"'),
          content: content(newsDb, 'content').replace(/\\"/g, '"'),
          content_eng: translate(newsDb, 10).replace(/\\"/g, '"') ,
          description: content(newsDb, 'description').replace(/\\"/g, '"'),
          description_eng: translate(newsDb, 9).replace(/\\"/g, '"') ,
          images: JSON.stringify(newsDb.cms_news_item_images),
          enabled: newsDb.enabled,
          group_name: newsDb.group_name,
          showdate: newsDb.showdate,
          date: newsDb.date
        };
        db.models.news.create(newsItem).then(function(newNews){
          callback();
        }).catch(function(err){
          console.error(err);
          callback(err);
        })
      }, function(){
        request(JSONify(newsFromDb));
      })
    }).catch(function(err){
      console.error(err);
    });
  });
};

api.getGallery = function(limit=100000){
  return new Promise((request, reject) => {
    db.models.cms_gallery_gallery.findAll({
      where: {
        enabled: true
      },
      include: [
        {
          model: db.models.cms_gallery_item,
          attributes: [
            'name',
            'link',
            'title'
          ],
          where: {
            enabled: true
          },
          order: [['pos', 'ASC']]
        },
        {
          model: db.models.cms_lang_translate_value,
          attributes: [
            'translate_id',
            'lang_id',
            'value',
          ],
        }
      ],
      limit: limit,
      order: [['pos', 'ASC'], ['gallery_id', 'DESC']],
    }).then(function(galleryFromDb){
      request(JSONify(galleryFromDb));
    }).catch(function(err){
      console.error(err);
    });
  });
};

api.getLotById = function(id){
  return new Promise((request, reject) => {
    db.models.lot.findOne({
      where: {
        id: id,
        visible: 1
      },
      include: [{
        model: db.models.bid,
        attributes: [
          'id',
          'userId',
          'price',
          'createdAt'
        ],
        where: {
          visible: 1,
          userId: {
            $ne: null
          }
        },
        required: false,
        include: [{
          model: db.models.user,
          as: 'bidUser',
          attributes: [
            'firstname',
            'lastname',
            'middlename'
          ],
          required: false
        }]
      }, {
        model: db.models.lotphoto
      }],
      order: [[{model: db.models.bid}, 'createdAt', 'DESC']]
    }).then(function(lotsFromDb){
      request(addInfoToItem(lotsFromDb.toJSON()));
    }).catch(function(err){
      console.error(err);
    });
  });
};

api.saveBid = function(body){
  return new Promise((request, reject) => {
    api.getLotById(body.lotId).then(
      function(oldLot){
        var oldPrice = oldLot.lastPrice;
        var askPrice = oldLot.askPrice;
        if(!oldPrice || askPrice > oldPrice){
          oldPrice = askPrice;
        }
        var newPrice = parseInt(body.price);
        if (oldPrice*1.09 > newPrice){
          return reject({
            error: 'price_too_low',
            oldPrice: oldPrice
          });
        }
        if (isNaN(newPrice)){
          return reject({
            error: 'price_bad',
            oldPrice: oldPrice
          });
        }
        if (oldPrice*10000000 < newPrice){
          return reject({
            error: 'price_too_high',
            oldPrice: oldPrice
          });
        }
        db.models.bid.create({
          userId: body.userId,
          lotId: body.lotId,
          price: body.price
        }).then(function(bid){
          api.getLotById(body.lotId).then(
            function(res){
              request(res);
            }
          );
        }).catch(function(err){
          console.error(err);
        });
      }
    );
  });
};

api.createUser = function(body, withoutEmail){
  return new Promise((request, reject) => {
    db.models.user.create(body).then(function(user){
      if(!withoutEmail){
        api.sendMail(user.toJSON(), function(err, info){
          console.info(err, info);
        });
      }
      request(user.toJSON());
    }).catch(function(err){
      console.error(err);
      reject(err);
    });
  });
};

api.createSubscribe = function(body, withoutEmail){
  return new Promise((request, reject) => {
    db.models.subscribe.create(body).then(function(user){
      request(user.toJSON());
    }).catch(function(err){
      console.error(err);
      reject(err);
    });
  });
};

api.restorePassword = function(body){
  return new Promise((request, reject) => {
    db.models.user.findOne({
      where: {
        email: body.email,
        visible: 1
      }
    }).then(function(user){
      api.sendMail(user.toJSON(), function(err, info){
        console.info(err, info);
      });
      request(user);
    }).catch(function(err){
      console.error(err);
    });
  });
};


api.userInfo = function(body){
  return new Promise((request, reject) => {
    db.models.user.findOne({
      where: {
        email: body.email,
        password: body.password,
        visible: 1
      }
    }).then(function(user){
      request(user);
    }).catch(function(err){
      console.error(err);
    });
  });
};


api.sendMail = function(body, cbEmail = ()=>{}) {
  var transporter;
  var from = 'helptoprotect@ya.ru';
  if(false){
    transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'goblind.outbox@gmail.com',
        pass: 'See6thoh'
      }
    });
    from = 'info@helptoprotect.ru';
  } else if (false) {
    transporter = nodemailer.createTransport();
    from = 'info@helptoprotect.ru';
  } else if (false){
    transporter = nodemailer.createTransport({
      service: 'Yandex',
      auth: {
        user: 'helptoprotect@ya.ru',
        pass: 'See990990you'
      }
    });
  } else if (true){
    var from = 'info@helptoprotect.ru';
    var options = {
      host: 'mail.helptoprotect.ru',
      ignoreTLS: true,
      port: 25,
      auth: {
        user: 'info@helptoprotect.ru ',
        pass: 'pass123'
      }
    };
    transporter = nodemailer.createTransport(smtpTransport(options));
  }
  transporter.sendMail({
    from: from,
    to: body.email,
    subject: 'Your account info for helptoprotect.ru',
    text: 'http://helptoprotect.ru\nEmail: '+body.email+' \nPassword: '+body.password
  }, function(err, info) {
    cbEmail(err, info);
  });
};

api.soldBid = function(body){
  return new Promise((request, reject) => {
    console.info('SOLD BID');
    db.models.lot.findOne({
      where: {
        id: body.lotId
      }
    }).then(
    function(oldLot){
      var status = 'sold';
      if (oldLot.status === 'sold'){
        status = 'active';
      }
      oldLot.updateAttributes({
        status: status
      }).then(function(){
        api.getLotById(body.lotId).then(
          function(res){
            request(res);
          }
        );
      }).catch(function(err){
        reject(err);
      });
    }
    );
  });
};

module.exports = api;

