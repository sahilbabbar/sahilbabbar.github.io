(function() {
    var app = angular.module('edApp');
    app.directive('navbar', function(){
        return {
            restrict: 'E',
            templateUrl: 'components/navbar/navbar.html'
        };
    });
    app.directive('edFooter', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/footer/footer.html'
        };
    });
    app.directive('moduleDesc', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/moduleDesc/moduleDesc.html'
        };
    });
    app.directive('mentor', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/mentor/mentor.html'
        };
    });
    app.directive('videoPlayer', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/videoPlayer/videoPlayer.html'
        };
    });
    app.directive('moduleList', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/moduleList/moduleList.html'
        };
    });
    app.directive('rightSideNavigation', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/sideNav/sideNav.html'
        };
    });
})();