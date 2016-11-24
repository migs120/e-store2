(function() {

     
               function Image($rootScope) {

                                               var Image = { 
                                                            logo: "https://www.gazelle.com/thehorn/wp-content/uploads/2015/04/A-Many-CellPhones.jpg" 

                                                           };
                                                   
                                                    return Image;
                                            }

                 angular.module('myapp').factory('Image', ['$rootScope',Image]);
    
            })(); 