(function () {
    'use strict';
    var app = angular.module('edApp');
    app.controller('AccordionCtrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {
        // ---------- Custom Accordion ----------
        $scope.accordion = {
            current: null
        };
        $scope.items = [{
            name: 'Module 1',
            progress: 60,
            sub: [{
                name: 'Video 1',
                duration: '20 min',
                icon: 'common/icons/checked-button.png'
            }, {
                name: 'Video 2',
                duration: '20 min',
                icon: 'common/icons/play.png'
            }]
        }, {
            name: 'Module 2',
            progress: 0,
            sub: [{
                name: 'Video 1',
                duration: '20 min',
                icon: 'common/icons/play.png'
            }, {
                name: 'Video 2',
                duration: '20 min',
                icon: 'common/icons/play.png'
            }]
        }, {
            name: 'Module 3',
            progress: 0,
            sub: [{
                name: 'Video 1',
                duration: '20 min',
                icon: 'common/icons/play.png'
            }, {
                name: 'Video 2',
                duration: '20 min',
                icon: 'common/icons/play.png'
            }]
        }, {
            name: 'Module 4',
            progress: 0,
            sub: [{
                name: 'Video 1',
                duration: '20 min',
                icon: 'common/icons/play.png'
            }, {
                name: 'Video 2',
                duration: '20 min',
                icon: 'common/icons/play.png'
            }]
        }];
        // ---------- Custom Dialog ----------
        $scope.status = '  ';
        $scope.customFullscreen = false;
        $scope.showAlert = function (ev) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('This is an alert title')
                    .textContent('You can specify some description text in here.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                    .targetEvent(ev)
            );
        };
        $scope.showDialog = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'components/moduleList/dialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
                .then(function (answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
        };
        function DialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }
    }]);
})();