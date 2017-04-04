angular.module('lessonApp').controller('lessonCtrl', function($scope) {

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.test = "This is the first thing I remember"

  $scope.announceDay = function(lesson, day) {
    alert(lesson + ' is active on ' + day + '.')
  }

})
