angular.module('test').controller("stickerController", ['$scope', '$http', '$location', '$state', '$timeout', '$cookies', '$cookieStore', '$rootScope', '$stateParams', function($scope, $http, $location, $state, $timeout, $cookies, $cookieStore, $rootScope, $stateParams) {

    $scope.stickers = [];
    $scope.stickersList = [];

    $scope.init = () => {
        $scope.getStickers();
    }

    /**
     * @property interface
     * @type {Object}
     */
    $scope.interface = {};

    /**
     * @property uploadCount
     * @type {Number}
     */
    $scope.uploadCount = 0;
    $scope.template_name = "";
    $scope.category_name = "";

    /**
     * @property success
     * @type {Boolean}
     */
    $scope.success = false;

    /**
     * @property error
     * @type {Boolean}
     */
    $scope.error = false;

    // Listen for when the interface has been configured.
    $scope.$on('$dropletReady', function whenDropletReady() {

        $scope.interface.allowedExtensions([/.+/]);
        $scope.interface.setRequestUrl('uploadSticker');
        $scope.interface.defineHTTPSuccess([/2.{2}/]);
        $scope.interface.useArray(false);

    });

    // Listen for when the files have been successfully uploaded.
    $scope.$on('$dropletSuccess', function onDropletSuccess(event, response, files) {

        $scope.uploadCount = files.length;
        $scope.success = true;
        $scope.category_name = "";
        $scope.stic_images = false;


        $timeout(function timeout() {
            $scope.success = false;
            $state.go("dashboard");
        }, 2000);

    });

    // Listen for when the files have failed to upload.
    $scope.$on('$dropletError', function onDropletError(event, response) {

        $scope.otherError = false;
        if (response == 'error') {
            $scope.error = true;
            swal({
                title: "Oops!",
                text: "Please complete all the mandatory fields to upload.",
                timer: 2000,
                showConfirmButton: true
            });
        } else {
            $timeout(function timeout() {
                $scope.otherError = true;
            }, 3000);
        }

    });


    $scope.getStickers = () => {

        $http({
            url: service_url + "getStickers",
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        }).then(function(response) {
            if (response.data.status == "success") {
                $scope.stickers = response.data.files;
                $scope.stickersList = $scope.stickers;
                $scope.categories = response.data.categories;
            }
        });
    };

    $scope.getStickerByCategory = (cat_name) => {

        if(cat_name == 'All'){
            $scope.stickers = $scope.stickersList;
        }else {
            $scope.stickers = $scope.stickersList.filter(item => {
                if(item.startsWith(cat_name)) {
                    return item;
                }
            });
        }
    };

   
}]);