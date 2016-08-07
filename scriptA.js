var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        // Create a model
        var employees = [
            { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788, city: "London" },
            { name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000, city: "Chennai" },
            { name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000, city: "London" },
            { name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000, city: "Chennai" },
            { name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000, city: "London" }
        ];
        // Attach the model to the scope
        $scope.employees = employees;
    });
