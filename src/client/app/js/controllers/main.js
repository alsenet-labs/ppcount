/*
* Copyright (c) 2020 ALSENET SA
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

/**
 * @ngdoc function
 * @name ppcountApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ppcountApp
 */

module.exports=[
  '$scope',
  '$rootScope',
  '$timeout',
  '$window',
  '$q',
  function (
    $scope,
    $rootScope,
    $timeout,
    $window,
    $q
  ) {

    angular.extend($scope,{

      init: function(){
        $rootScope.t={
          ok: 'OK',
          cancel: 'Cancel',
          settingsDialogTitle: 'Parameters',
          required: 'This is required !',
          lesserThan: 'That is less than',
          greaterThan: 'That is greater than'
        }

      } // init


    }); // extend scope

    $scope.init();
  }

];
