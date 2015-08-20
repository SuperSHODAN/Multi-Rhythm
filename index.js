var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var twitterModule = require('twit');

var twitter = new twitterModule({
  consumer_key : "3LTvVSMOwrA3ZnD0LtHudpopn",
  consumer_secret : "RvnVQNDhk9tqUDCDK1ANnn8JEqnaY8qJ1dQVctpQz5WZm3m0In",
  access_token : "3406134226-BMwWaf8VPldO50UvKSBJnUYAHi102ajuspautc8",
  access_token_secret: "7jiIqGakQZgaBT7snP9b7MsmuVsBL8O6LgiYC1pPmTO7f"
});

var globalArrowID = -1;
var scoreArray = [];

app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/script'));

app.get('/', function(request, response){
  response.sendFile(__dirname + '/highScores.html');
});

app.get('/chat', function(request, response){
  response.sendFile(__dirname + '/chat.html');
});

app.get('/game', function(request, response){
  response.sendFile(__dirname + '/pharmedirhythm.html');
});

io.on('connection', function(socket){
  console.log(socket.id + ' has connected.');
  socket.emit('socketID', socket.id);
  socket.emit('scores', scoreArray);
  socket.on('chat-message', function(msg){
    if(msg === 'left' || msg === 'up' || msg === 'down' || msg === 'right'){
      io.emit('send-arrow', createArrow(msg));
    }
    io.emit('chat-message', msg);
  });
  socket.on('note-hit', function(count){
    socket.emit('note-hit', count);
  });
  socket.on('delete-note', function(note){
    io.emit('delete-note', note.id);
    socket.broadcast.emit('lost-note', note.direction);
  });
  socket.on('submit-score', function(name, score){
    addScore(name, score);
    io.emit('scores', scoreArray);
  });
  socket.on('disconnect', function(){
    console.log(socket.id + ' has disconnected.');
  });
});

setInterval(function(){
  io.emit('send-arrow', randomArrow());
}, 250);

http.listen(2814, function(){
  var host = http.address().address;
  var port = http.address().port;

  console.log('This app is listening at http://%s:%s', host, port);
});

var stream = twitter.stream('statuses/filter', {track: '#evilChat'});
console.log('Starting evil twitter stream...');
stream.on('tweet', function(tweet){
  console.log(tweet.text);
  io.emit('chat-message', tweet.text.split(' ')[0]);
  io.emit('chat-message', tweet.screen_name + ' ' + tweet.text)
});

function randomArrow(){
  var arrows = ['left', 'up', 'down', 'right'];
  return createArrow(arrows[Math.floor(Math.random() * arrows.length)]);
}

function createArrow(direction){
  globalArrowID++;
  return {
    'direction': direction,
    'id': globalArrowID
  }
}

function addScore(name, score){
  scoreArray.push({'name': name, 'score': score});
  scoreArray.sort(function(a, b){
    return b.score - a.score;
  });
  console.log(scoreArray);
}
