const express = require('express');
const GroupController = require('./controllers/GroupController');
const TipoController = require('./controllers/TypeController');
const MemberController = require('./controllers/MemberController');
const MeetController = require('./controllers/MeetController');
const PeriodController = require('./controllers/PeriodController');
const AttendanceController = require('./controllers/AttendanceController');

const routes = express.Router();

routes.get('/groups', GroupController.index);
routes.post('/groups', GroupController.store);
routes.patch('/groups', GroupController.update);
routes.delete('/groups/:id', GroupController.delete);

routes.get('/type', TipoController.index);
routes.post('/type', TipoController.store);
routes.patch('/type', TipoController.update);
routes.delete('/type/:id', TipoController.delete);

routes.get('/member', MemberController.index);
routes.post('/member', MemberController.store);
routes.patch('/member', MemberController.update);
routes.delete('/member/:id', MemberController.delete);

routes.get('/meet', MeetController.index);
routes.post('/meet', MeetController.store);
routes.get('/meet/:id', MeetController.consult);

routes.get('/period', PeriodController.index);
routes.post('/period', PeriodController.store);

routes.get('/attendance', AttendanceController.index);
routes.post('/attendance', AttendanceController.store);
routes.get('/attendance/:group_id', AttendanceController.att);

module.exports = routes;