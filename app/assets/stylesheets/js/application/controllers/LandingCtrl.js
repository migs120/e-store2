(function() {
    function LandingCtrl($scope,Image) {
                                      
                                        $scope.image = Image ; 
      
                                        console.log("working")
                                    //  $Scope.image = return "https://s3-us-west-2.amazonaws.com/pics120/mario-e-store/main_categories/index/GnM.png"
                                         
                                        }
    
   angular
    .module('myapp')
        .controller("LandingCtrl", ["$scope","Image", LandingCtrl]);
})();    
    