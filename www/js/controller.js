angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $state, $stateParams) {   

	  $scope.carousel = [
            {photo: "img/Untitled-111.png", name: "Home Fund", details:"Every home is special.invest for that dream or farmhouse that you have always wanted. You've earned it",url:"https://www.google.co.in"},
            {photo: "img/Untitled-222.png", name: "World Cup Calling", details:"Save for your children dream and make more Chances to get this oportunity.",url:"https://www.google.co.in"},
            {photo: "img/Untitled-333.png", name: "Vacation Fund", details:"Every home is special.invest for that dream or farmhouse that you have always wanted. You've earned it",url:"https://www.google.co.in"},
            {photo: "img/Untitled-444.png", name: "Wow Wedding", details:"Save for your children dream and make more Chances to get this oportunity.",url:"https://www.google.co.in"},
		    {photo: "img/Untitled-555.png", name: "Emergency Fund", details:"Every home is special.invest for that dream or farmhouse that you have always wanted. You've earned it",url:"https://www.google.co.in"},
		    {photo: "img/Untitled-666.png", name: "Study Buddy", details:"Save for your children dream and make more Chances to get this oportunity.",url:"https://www.google.co.in"},
		    {photo: "img/Untitled-777.png", name: "Jwellery", details:"Every home is special.invest for that dream or farmhouse that you have always wanted. You've earned it",url:"https://www.google.co.in"}
        ];
          
    $scope.options = {
            visible: 3,
            perspective: 0,
            startSlide: 0,
            border: 0,
            dir: 'ltr',
            width: 200,
            height: 160,
            space: 140,
            loop: true,
            clicking: true,
            controls: true
        };

    $scope.test = function (index) {        
        console.log("Selected = " + index);
        // $scope.selected = index;
    }

});	  