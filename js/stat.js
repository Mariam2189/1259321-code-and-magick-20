
var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FOUNT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 100;
var barWidth = TEXT_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (times) {
  var maxElement = times[0];

  for (var i = 0; i < times.length; i++) {
    
    if (times[i] > maxElement) {
      maxElement = times[i];
    }

  }

  return maxElement;
}

var getMinElement = function (times) {
  var maxElement = times[0];

  for (var i = 0; i < times.length; i++) {
    
    if (times[i] < maxElement) {
      maxElement = times[i];
    }

  }

  return maxElement;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);
  var down_y = 230;    
  
  for (var i = 0; i < players.length; i++) {
    const player = players[i];

    if (player === "Вы") {

    if(getMinElement(times) === times[i]) {
      ctx.fillStyle = '#000000';
      ctx.font = '18px PT Mono';
      ctx.fillText('Ура вы победили!', 120, 80);
      ctx.fillText('Список результатов:', 120, 100);
    }
     
    ctx.fillStyle = '#E00800';
     
    ctx.fillText(player, 100 + TEXT_WIDTH, down_y);
    ctx.fillRect(100 + TEXT_WIDTH, down_y - 20, barWidth, -( BAR_HEIGHT * times[i]) / maxTime);            
    }

    if (player === "Кекс") {
    ctx.fillStyle = '#0a2477';
    ctx.fillText(player, 200 + TEXT_WIDTH, down_y);
    ctx.fillRect(200 + TEXT_WIDTH,down_y - 20, barWidth, -( BAR_HEIGHT * times[i]) / maxTime);
    }

    if (player === "Катя") {
    ctx.fillStyle = '#65676d';
    ctx.fillText(player, 300 + TEXT_WIDTH, down_y);
    ctx.fillRect(300 + TEXT_WIDTH,down_y - 20, barWidth, -( BAR_HEIGHT * times[i]) / maxTime);
    }

    if (player === "Игорь") {
    ctx.fillStyle = '#3d496d';
    ctx.fillText(player, 400 + TEXT_WIDTH, down_y);
    ctx.fillRect(400 + TEXT_WIDTH,down_y - 20, barWidth, -( BAR_HEIGHT * times[i]) / maxTime);
    }

  } 

};