'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const APIHandler = require('./service/APIHandlers');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('ui'));

const server = app.listen((process.env.PORT || 3000), () => {
    console.log("Node.js is listening to PORT:" + server.address().port);
});

//WebPageHandlers
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/ui/main.html');
});

app.get('/userDashBoard', (request, response) => {
    response.sendFile(__dirname + '/ui/dist/index.html');
});

app.get('/detectorsetting', (request, response) => {
    response.sendFile(__dirname + '/ui/detector-setting/detector-setting.html');
});

app.get('/mapsetting', (request, response) => {
    response.sendFile(__dirname + '/ui/map-setting/mapsetting.html');
});

app.get('/metasetting', (request, response) => {
    response.sendFile(__dirname + '/ui/meta-setting/metasetting.html');
});
//DetectionData
app.post('/api/detectionData', (request, response) => {
    APIHandler.addDetectionData(request, response)
});

//Tracker
app.get('/api/tracker', (request, response) => {
    APIHandler.getAllTracker(request, response)
});

app.get('/api/tracker/:id', (request, response) => {
    APIHandler.searchTrackerByID(request, response)
});

app.post('/api/tracker', (request, response) => {
    APIHandler.addTracker(request, response)
});

app.put('/api/tracker/:id', (request, response) => {
    APIHandler.updateTrackerByID(request, response)
});

//Detector
app.post('/api/detector', (request, response) => {
    APIHandler.addDetector(request, response)
});

app.get('/api/detector', (request, response) => {
    APIHandler.getDetector(request, response)
});

app.put('/api/detector/axis', (request, response) => {
    APIHandler.putDetector(request, response)
});

app.put('/api/detector/active', (request, response) => {
    APIHandler.updateDetectorActiveLastTime(request, response)
});

app.delete('/api/detector', (request, response) => {
    APIHandler.deleteDetector(request, response)
});

//Map
app.post('/api/map', (request, response) => {
    APIHandler.addMap(request, response)
});

app.get('/api/map', (request, response) => {
    APIHandler.getMap(request, response)
});

app.delete('/api/map/:id', (request, response) => {
    APIHandler.deleteMap(request, response)
});

//Meta
app.post('/api/meta', (request, response) => {
    APIHandler.addMeta(request, response)
});

app.get('/api/meta', (request, response) => {
    APIHandler.getMeta(request, response)
});

app.delete('/api/meta/:id', (request, response) => {
    APIHandler.deleteMeta(request, response)
});

app.put('/api/meta', (request, response) => {
    APIHandler.putMeta(request, response)
});
//TrackingManagement
app.get('/api/startTracking', (request, response) => {
    APIHandler.startPositionTracking(request, response)
});

app.get('/api/stopTracking', (request, response) => {
    APIHandler.stopPositionTracking(request, response)
});