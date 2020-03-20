/*
* Copyright (c) 2018-2020 ALSENET SA
*
* Author(s):
*
*      Luc Deschenaux <luc.deschenaux@freesurf.ch>
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
*/

'use strict';

var angular=require('angular');
require('angular-i18n/angular-locale_fr-ch.js');
window.jQuery=window.$=require('jquery');

var config=require('../../../config.json');

$('html').attr('ng-app',config.appName);
$('title').text(config.appName);

require('../css/main.css');

require('@uirouter/angularjs/release/angular-ui-router.js');
require('angular-messages');
require('angular-material');
require('angular-cookies');

var app=angular.module(config.appName,[
  'ui.router',
  'ngMessages',
  'ngMaterial',
  'ngCookies'
])

angular.module(config.appName)
.config(require('./config.js'))
.run(require('./app.js'))

// services/directives/controllers/filters are now generated automatically by gulpfile.js ("scripts" task)
require('./scripts.js')(app,config);
