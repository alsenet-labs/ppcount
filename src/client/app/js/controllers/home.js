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
  '$location',
  '$cookies',
  function (
    $scope,
    $location,
    $cookies
  ) {

    angular.extend($scope,{
      init: function(){
        $scope.count=$cookies.get('count')||0;
        $scope.max=$location.search().max||50;
        $scope.progress=$scope.count/$scope.max*100;
        $scope.diameter=50;
        $scope.progressStyle={
          width: $scope.diameter+'px',
          height: $scope.diameter+'px'
        }
      }, // init

      add: function add(){
        if ($scope.count < $scope.max) ++$scope.count;
        $scope.progress=$scope.count/$scope.max*100;
        $cookies.put('count',$scope.count);
      },

      remove: function remove(){
        if ($scope.count > 0) --$scope.count;
        $scope.progress=$scope.count/$scope.max*100;
        $cookies.put('count',$scope.count);
      }

    }); // extend scope

    $scope.init();
  }

];
