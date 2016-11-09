(function() {
    function LandingCtrl($scope,Image) {
                                      
                                        $scope.image = Image ; 
      
                                         
                                        }
    
   angular
    .module('myapp')
        .controller("LandingCtrl", ["$scope","Image", LandingCtrl]);
})();    
    