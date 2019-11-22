angular.module('test').controller("stickerController", ['$scope', '$http', '$location', '$state', '$timeout', '$cookies', '$cookieStore', '$rootScope', '$stateParams', function($scope, $http, $location, $state, $timeout, $cookies, $cookieStore, $rootScope, $stateParams) {

    $scope.init = () => {
        $scope.getImages();
    }


    $scope.getImages = () => {

        $scope.stickers = [{'image': 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}, 
                         {'image': 'https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}, 
                         {'image': 'https://images.pexels.com/photos/355296/pexels-photo-355296.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}, 
                         {'image': 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}, 
                         {'image': 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&h=750&w=1260'}, 
                         {'image': 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'},
                         {'image': 'https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}, 
                         {'image': 'https://images.pexels.com/photos/870711/pexels-photo-870711.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'},
                         {'image': 'https://images.pexels.com/photos/2437295/pexels-photo-2437295.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}
                        ]

    }

   
}]);