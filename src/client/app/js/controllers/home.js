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
 * @name ppcountApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ppcountApp
 */

module.exports=[
  '$scope',
  '$rootScope',
  '$location',
  '$cookies',
  '$mdDialog',
  function (
    $scope,
    $rootScope,
    $location,
    $cookies,
    $mdDialog
  ) {
    angular.extend($scope,{
      init: function(){
        $scope.data=$rootScope.data={
          count: Number($cookies.get('count'))||0,
          max: Number($cookies.get('max'))||50
        }
        $scope.progress=$scope.data.count/$scope.data.max*100;
        $scope.diameter=50;
        $scope.progressStyle={
          width: $scope.diameter+'px',
          height: $scope.diameter+'px'
        }
      }, // init

      update: function(){
        $scope.progress=$scope.data.count/$scope.data.max*100;
        $cookies.put('count',$scope.data.count);
        $cookies.put('max',$scope.data.max);
      },

      settings: function(){
        var DialogCtrl=[
          '$scope',
          '$mdDialog',
          '$timeout',
          function DialogCtrl(
            $scope,
            $mdDialog,
            $timeout
          ) {
            angular.extend($scope, {
              init: function() {
                $scope.data=angular.extend({},$rootScope.data);
                $scope.t=$rootScope.t;
                $timeout(function(){
                  ival.max=imax.value||50;
                  imax.min=ival.value||1;
                },1000);
              },
              hide: function() {
                $mdDialog.hide();
              },
              cancel: function() {
                $mdDialog.cancel();
              },
              answer: function(answer) {
                console.log(answer)
                $mdDialog.hide(answer);
              }
            });
            $scope.init();
          }
        ]

        $mdDialog.show({
          controller: DialogCtrl,
          templateUrl: 'views/dialog.html',
          parent: angular.element(document.body),
          clickOutsideToClose:true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {
          if (answer) {
            $rootScope.data.count=answer.count;
            $rootScope.data.max=answer.max;
            $scope.update();
          }
        }, function() {
          // cancelled the dialog
        });

      }, // settings

      add: function add(){
        if ($scope.data.count < $scope.data.max) ++$scope.data.count;
        $scope.update();
      },

      remove: function remove(){
        if ($scope.data.count > 0) --$scope.data.count;
        $scope.update();
      }

    }); // extend scope

    $scope.init();
  }

];
