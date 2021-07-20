var app = angular.module("mainApp", ["ngRoute"]);

app.config(function($routeProvider){ 


    $routeProvider
    .when('/smallroomsound', {
        template : console.log("smallroomsound")
    })
    .when ('/world',  { 
            template: "welcome world!"
    })
    .otherwise({

        redirectTo: "/"
    })



});