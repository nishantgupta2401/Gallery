angular.module('test').controller("loginController", ['$scope', '$http', '$location', '$state', '$timeout', '$cookies', '$cookieStore', '$rootScope', '$stateParams', function($scope, $http, $location, $state, $timeout, $cookies, $cookieStore, $rootScope, $stateParams) {

    $scope.init = function() {
        if ($cookieStore.get('login_user')) {
            var user_data = $cookieStore.get("login_user");
            $rootScope.userDetails = user_data[0];
            $state.go("dashboard");
        } else {
            $state.go("signin");
        }
    }

    $scope.login = function(user) {
        $http({
            url: service_url + "login",
            method: 'POST',
            data: user,
            headers: { 'Content-Type': 'application/json' }
        }).then(function(response) {
            if (response.data.status == "success") {
                $cookieStore.put('login_user', [response.data.data]);
                var user_data = $cookieStore.get("login_user");
                $rootScope.userDetails = user_data[0];
                swal({
                    title: "Done!",
                    text: "Sign-In successful",
                    timer: 2000,
                    showConfirmButton: true
                });
                $state.go("dashboard");
            } else {
                swal({
                    title: "Oops!",
                    text: response.data.message,
                    timer: 2000,
                    button: false,
                    icon: 'warning'
                });
            }
        });
    };

    $scope.logout = function() {
        $cookieStore.remove("login_user");
        $scope.init();
    };

    /* $scope.forgotPassword = function(email1) {
        $http({
            url: service_url + "forgotPassword",
            method: 'POST',
            data: { "emailId": email1, "userTypeId": 1 },
            headers: { 'Content-Type': 'application/json' }
        }).then(function(response) {
            if (response.data.status == 1) {
                angular.element('#forgot_password_popup').modal('hide');
                angular.element('#code_verify_popup').modal('show');
                $cookieStore.put('emailId', response.data.emailId);
                $scope.init_verification();
            } else if (response.data.status == 3) {
                swal({
                    title: "Oops!",
                    text: "E-mail not found.",
                    timer: 2000,
                    showConfirmButton: true
                });
            } else if (response.data.status == 0) {
                swal({
                    title: "Oops!",
                    text: "Something went wrong.",
                    timer: 2000,
                    showConfirmButton: true
                });
            }
        });
    }

    $scope.verifyCode = function(code) {

        $http({
            url: service_url + "verifyCode",
            method: 'POST',
            data: { "emailId": $rootScope.emailId, "code": code },
            headers: { 'Content-Type': 'application/json' }
        }).then(function(response) {
            if (response.data.status == 'success') {
                angular.element('#code_verify_popup').modal('hide');
                angular.element('#change_password_popup').modal('show');
            } else {
                swal({
                    title: "Oops!",
                    text: "Invalid code. Please check your code and try again.",
                    timer: 2000,
                    icon: 'warning',
                    button: false
                });
            }
        });
    }

    $scope.resetPass = function(user) {

        $http({
            url: service_url + "update_pass",
            method: 'POST',
            data: { "password": user.password, "emailId": $rootScope.emailId },
            headers: { 'Content-Type': 'application/json' }
        }).then(function(response) {
            if (response['data']['status'] == 'success') {
                $scope.user = {};
                $scope.resetform.$setPristine();
                swal("Updated!", "Password Changed successfully", "success");
                $cookieStore.remove("emailId");
                angular.element('#change_password_popup').modal('hide');
                $state.go("dashboard");
            } else {
                swal({
                    title: "Oops!",
                    text: "Something went wrong",
                    timer: 2000,
                    button: false
                });

            }
        });
    }

     $scope.init_verification = function() {

        if ($cookieStore.get("emailId")) {
            $rootScope.emailId = $cookieStore.get("emailId");
        } else {
            $state.go("dashboard");
        }
    } */


   
}]);