var keystatus = false;

document.onkeydown = function(evt) {
	if(!keystatus) {
		keystatus = true;
		evt = evt || window.event;
		if(evt.keyCode == 37){
				notes.forEach(function (note) {
					if (note.direction == "left" && note.created >= Date.now() - 1200 && note.created <= Date.now() - 955) {
						if(note.created >= Date.now() - 1200 && note.created <= Date.now() - 1165) {
							$('#left_red').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1164 && note.created <= Date.now() - 1130) {
							$('#left_orange').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1129 && note.created <= Date.now() - 1095) {
							$('#left_yellow').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1094 && note.created <= Date.now() - 1060) {
							$('#left_green').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1059 && note.created <= Date.now() - 1025) {
							$('#left_yellow').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1024 && note.created <= Date.now() - 990) {
							$('#left_orange').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 989 && note.created <= Date.now() - 955) {
							$('#left_red').animate({"opacity": 1},200).animate({"opacity": 0},200);
						}
					socket.emit('note-hit', 'Count: ' + ++count);
					socket.emit('delete-note', note);
					};
				});
				}
		if(evt.keyCode == 38){
				notes.forEach(function (note) {
					if (note.direction == "up" && note.created >= Date.now() - 1200 && note.created <= Date.now() - 955) {
						if(note.created >= Date.now() - 1200 && note.created <= Date.now() - 1165) {
							$('#up_red').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1164 && note.created <= Date.now() - 1130) {
							$('#up_orange').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1129 && note.created <= Date.now() - 1095) {
							$('#up_yellow').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1094 && note.created <= Date.now() - 1060) {
							$('#up_green').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1059 && note.created <= Date.now() - 1025) {
							$('#up_yellow').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1024 && note.created <= Date.now() - 990) {
							$('#up_orange').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 989 && note.created <= Date.now() - 955) {
							$('#up_red').animate({"opacity": 1},200).animate({"opacity": 0},200);
						}
					socket.emit('note-hit', 'Count: ' + ++count);
					socket.emit('delete-note', note);
					};
				});
			}
		if(evt.keyCode == 39){
				notes.forEach(function (note) {
					if (note.direction == "right" && note.created >= Date.now() - 1200 && note.created <= Date.now() - 955) {
						if(note.created >= Date.now() - 1200 && note.created <= Date.now() - 1165) {
							$('#right_red').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1164 && note.created <= Date.now() - 1130) {
							$('#right_orange').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1129 && note.created <= Date.now() - 1095) {
							$('#right_yellow').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1094 && note.created <= Date.now() - 1060) {
							$('#right_green').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1059 && note.created <= Date.now() - 1025) {
							$('#right_yellow').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1024 && note.created <= Date.now() - 990) {
							$('#right_orange').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 989 && note.created <= Date.now() - 955) {
							$('#right_red').animate({"opacity": 1},200).animate({"opacity": 0},200);
						}
					socket.emit('note-hit', 'Count: ' + ++count);
					socket.emit('delete-note', note);
					};
				});
			}
		if(evt.keyCode == 40){
				notes.forEach(function (note) {
					if (note.direction == "down" && note.created >= Date.now() - 1200 && note.created <= Date.now() - 955) {
						if(note.created >= Date.now() - 1200 && note.created <= Date.now() - 1165) {
							$('#down_red').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1164 && note.created <= Date.now() - 1130) {
							$('#down_orange').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1129 && note.created <= Date.now() - 1095) {
							$('#down_yellow').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1094 && note.created <= Date.now() - 1060) {
							$('#down_green').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1059 && note.created <= Date.now() - 1025) {
							$('#down_yellow').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 1024 && note.created <= Date.now() - 990) {
							$('#down_orange').animate({"opacity": 1},200).animate({"opacity": 0},200);
						} else if (note.created >= Date.now() - 989 && note.created <= Date.now() - 955) {
							$('#down_red').animate({"opacity": 1},200).animate({"opacity": 0},200);
						}
					socket.emit('note-hit', 'Count: ' + ++count);
					socket.emit('delete-note', note);
					};
				});
			}
	}
};

document.onkeyup = function() {
	keystatus = false;
}
var notes = [];
var socket = io();
var count = 0;

$('#submit').on('click', function(){
  socket.emit('submit-score', count);
  console.log('score submitted');
});

socket.on('socketID', function(socketID){
  $('#name').text(socketID);
});

socket.on('delete-note', function(id){
  $('#'+id).remove();
});

socket.on('note-hit', function(count){
  $('#count').text(count);
});

socket.on('lost-note', function(direction){
  switch(direction){
	  case 'left':
		$('#left_blue').animate({"opacity": 1},200).animate({"opacity": 0},200);
		break;
	  case 'up':
		$('#up_blue').animate({"opacity": 1},200).animate({"opacity": 0},200);
		break;
	  case 'down':
		$('#down_blue').animate({"opacity": 1},200).animate({"opacity": 0},200);
		break;
	  case 'right':
		$('#right_blue').animate({"opacity": 1},200).animate({"opacity": 0},200);
		break;
  }
});

socket.on('send-arrow', function(arrow) {
  switch(arrow.direction){
    case 'left':
      $('#left_target').append('<img src="left_gif.gif" height="90" width="90" class="note" id=' + arrow.id + ' />');
	  notes[arrow.id] = { direction: arrow.direction, created: Date.now(), id: arrow.id };
	  setTimeout(function () {
		  delete notes[arrow.id];
	  }, 1200);
      break;
    case 'up':
      $('#up_target').append('<img src="up_gif.gif" height="90" width="90" class="note" id = ' + arrow.id + ' />');
	  notes[arrow.id] = { direction: arrow.direction, created: Date.now(), id: arrow.id };
	  setTimeout(function () {
		  delete notes[arrow.id];
	  }, 1200);
	  break;
    case 'down':
      $('#down_target').append('<img src="down_gif.gif" height="90" width="90" class="note" id = ' + arrow.id + ' />');
	  notes[arrow.id] = { direction: arrow.direction, created: Date.now(), id: arrow.id };
	  setTimeout(function () {
		  delete notes[arrow.id];
	  }, 1200);
	  break;
    case 'right':
      $('#right_target').append('<img src="right_gif.gif" height="90" width="90" class="note" id= ' + arrow.id + ' />');
	  notes[arrow.id] = { direction: arrow.direction, created: Date.now(), id: arrow.id };
	  setTimeout(function () {
		  delete notes[arrow.id];
	  }, 1200);
	  break;
  }
  $('.note').animate({ "top": "-90px" }, 1200, "linear").animate({ opacity: 0}, 0)
  setTimeout(function() {
	   $('#' + arrow.id).remove();
  }, 1200);
});

//angular things
var scoreApp = angular.module('scoresApp', []);
scoreApp.controller('scoresCtrl', ['$scope', '$timeout', function($scope, $timeout){
  $scope.sendScore = function(name) {
    if(name !== null && count > 0){
      socket.emit('submit-score', name, count);
      count = 0;
      $('#count').text(count);
    }
  }
  socket.on('scores', function(serverScores){
    $timeout(function () {
      $scope.scores = serverScores;
      console.log('Updated Scores');
      console.log($scope.scores);
      $scope.$digest();
    });
  });
}]);

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
