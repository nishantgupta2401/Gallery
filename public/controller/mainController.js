angular.module('test').controller("mainController", ['$scope', '$http', '$location', '$state', '$timeout', '$rootScope', '$cookieStore', function($scope, $http, $location, $state, $timeout, $rootScope, $cookieStore) {
    
    $scope.init = function() {
        if ($cookieStore.get('login_user')) {
            var user_data = $cookieStore.get("login_user");
            $rootScope.userDetails = user_data[0];
        } else {
            $rootScope.userDetails = ""
        }
    };
   
    $scope.logout = function() {
        $cookieStore.remove("login_user");
        $scope.init();
        $state.go("signin");
    };

}]);