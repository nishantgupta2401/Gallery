'use strict';
angular.module('test', ['ui.router', 'ngCookies','ngMessages', 'angular-storage', 'ngMaterial', 'ngMaterialSidemenu', 'ngAnimate','ngDroplet'])
    .config(['$urlRouterProvider','$locationProvider', '$stateProvider', 'storeProvider','$httpProvider', function($urlRouterProvider,$locationProvider, $stateProvider, storeProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/signin');
        $stateProvider
            .state('signin', {
                url: '/signin',
                views: {
                    'body': {
                        templateUrl: templateUrl + "templates/signin.html",
                        controller: "loginController"
                    }
                }
            }).state('dashboard', {
                url: '/dashboard',
                views: {
                    'header': {
                        templateUrl: templateUrl + "templates/header.html"
                    },
                    'sidebar': {
                        templateUrl: templateUrl + "templates/sidebar.html"
                    },
                    'body': {
                        templateUrl: templateUrl + "templates/dashboard.html",
                        controller: "stickerController"
                    },
                    'footer': {
                        templateUrl: templateUrl + "templates/footer.html"
                    }
                }
            })
            .state('category', {
                url: '/category',
                views: {
                    'header': {
                        templateUrl: templateUrl + "templates/header.html"
                    },
                    'sidebar': {
                        templateUrl: templateUrl + "templates/sidebar.html"
                    },
                    'body': {
                        templateUrl: templateUrl + "templates/category.html",
                        controller: "stickerController"
                    },
                    'footer': {
                        templateUrl: templateUrl + "templates/footer.html"
                    }
                }
            });
            $locationProvider.html5Mode(true);
    }])
    .directive('progressbar', function ProgressbarDirective() {

        return {

            /**
             * @property restrict
             * @type {String}
             */
            restrict: 'E',

            /**
             * @property scope
             * @type {Object}
             */
            scope: {
                model: '=ngModel'
            },

            /**
             * @property ngModel
             * @type {String}
             */
            require: 'ngModel',

            /**
             * @method link
             * @param scope {Object}
             * @param element {Object}
             * @return {void}
             */
            link: function link(scope, element) {

                var progressBar = new ProgressBar.Path(element[0], {
                    strokeWidth: 2
                });

                scope.$watch('model', function() {

                    progressBar.animate(scope.model / 100, {
                        duration: 1000
                    });

                });

                scope.$on('$dropletSuccess', function onSuccess() {
                    progressBar.animate(0);
                });

                scope.$on('$dropletError', function onSuccess() {
                    progressBar.animate(0);
                });

            }

        }
    })
    
