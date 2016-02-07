import { Router } from 'express';
import api from '../api';

const apiRoutes = Router();

const isAdmin = (req) => {
  return req.headers.host.match(/^admin\./) !== null;
};

apiRoutes.get('/', (req, res) => {
  res.end('Welcome to api routes');
});

apiRoutes.get('/hello', (req, res) => {
  res.end('hello');
});

apiRoutes.post('/upload/image', (req, res) => {
  api.uploadImage(req.body).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.post('/news/update/:id', (req, res) => {
  if(!isAdmin(req)) {
    return res.status(403).send({
      err: 'need auth'
    });
  }
  api.updateOneNews(req.params.id, req.body).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.get('/admin/template', (req, res) => {
  if(!isAdmin(req)) {
    return res.status(403).send({
      err: 'need auth'
    });
  }
  api.getTemplate(req.query).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.post('/admin/template', (req, res) => {
  if(!isAdmin(req)) {
    return res.status(403).send({
      err: 'need auth'
    });
  }
  api.saveTemplate({
    query: req.query,
    body: req.body
  }).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    console.info(err);
    res.status(400).send(err);
  });
});

apiRoutes.put('/news/add', (req, res) => {
  if(!isAdmin(req)) {
    return res.status(403).send({
      err: 'need auth'
    });
  }
  api.addOneNews(req.body).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.delete('/news/delete/:id', (req, res) => {
  if(!isAdmin(req)) {
    return res.status(403).send({
      err: 'need auth'
    });
  }
  api.deleteOneNews(req.params.id).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.get('/test', (req, res) => {
  console.info('test');
  api.getTest().then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.get('/bid', (req, res) => {
  console.info('get bid');
  api.getLotById(2).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.post('/user', (req, res) => {
  api.createUser(req.body).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.post('/subscribe', (req, res) => {
  api.createSubscribe(req.body).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.put('/user', (req, res) => {
  api.userInfo(req.body).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.put('/user/email', (req, res) => {
  api.restorePassword(req.body).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.get('/news', (req, res) => {
  api.getNews().then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.get('/djs', (req, res) => {
  api.getAllDjs().then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.get('/news/update', (req, res) => {
  console.info('update news');
  api.updateNews().then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.get('/gallery', (req, res) => {
  console.info('get gallery');
  api.getGallery().then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

module.exports = apiRoutes;
