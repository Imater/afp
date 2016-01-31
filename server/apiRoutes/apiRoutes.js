import { Router } from 'express';
import api from '../api';

const apiRoutes = Router();

apiRoutes.get('/', (req, res) => {
  res.end('Welcome to api routes');
});

apiRoutes.get('/hello', (req, res) => {
  res.end('hello');
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
  console.info('get news');
  api.getNews().then(function(result){
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
