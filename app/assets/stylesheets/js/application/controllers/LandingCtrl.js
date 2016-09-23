(function() {
    function LandingCtrl($Scope,Image) {
     
                                        $Scope.image = Image ;
                                      

                                        }
    
   angular
    .module('myapp')
        .controller("LandingCtrl", ["$scope","Image", LandingCtrl]);
})();    
    