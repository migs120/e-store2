(function() {

     
               function Image($rootScope) {

                                               var Image = { 
                                                            logo: "https://s3-us-west-2.amazonaws.com/pics120/mario-e-store/main_categories/index/GnM.png"

                                                           };
                                                   
                                                    return Image;
                                            }

                 angular.module('myapp').factory('Image', ['$rootScope',Image]);
    
            })(); 