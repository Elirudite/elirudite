$("#green-circle").hover(function (){
	$("#changeling").html("We've changed the text!");
  }, function (){
  $("#changeling").html("This is (the same) sentence! :P");
});

$(".red-square").click(function (){
	$(this).css('background-color', 'blue');
});

$(".red-square").hover(function (){
	$(this).css('width', 1125);
});


// // Stack Overflow solution: https://stackoverflow.com/questions/14032568/create-a-div-next-to-the-cursor-position-on-click/14032652#14032652
// $(function(){
//     $(document).click(function(e){
//         var x = e.pageX + 'px';
//         var y = e.pageY + 'px';
//         var shape = $('#shape1');
//         var div = $('<div>').css({
//             "position": "absolute",                    
//             "left": x,
//             "top": y
//         });
//         div.append(shape);
//         $(document.body).append(div);        
//     });
// });

// // w3 schools solution
// function createShape() {
// 	var elmnt = document.getElementsByTagName("DIV")[0];
// 	var cln = elmnt.cloneNode(true);
// 	document.body.appendChild(cln);
// 	cln = '.draggable'
// }

// Tried to create a function myself, failed...
// $("button").click(function(){
//  $("#spawnCreator")
// })
// function createShape() {
//  var node = document.createElement("DIV");
//  var shape = document.getElementById("#shape1");
//  document.body.appendChild(shape);
// } 


// $("button").click(function(){
//   var shapePosition = $(".shape-clone").position();
//   alert("X:" + shapePosition.left + " Y:" + shapePosition.top);
// });

$(function() {
  $('.draggable').draggable();
})

$("#dragcircle").mouseup(function(){
var shapePosition = $("#dragcircle").offset();
$("#x-coord").text(shapePosition.left);
$("#y-coord").text(shapePosition.top);
});

// A better Stack Overflow solution: http://stackoverflow.com/questions/2458817/jquery-ui-drag-and-clone-from-original-div-but-keep-clones
$(".shape-clone").live('mouseover', function() {
  var value = 0
  $(".shape-clone").rotate({ 
    bind: 
      { 
        dblclick: function(){
          value +=90;
          $(this).rotate({ animateTo:value })
        }
      } 
  });
  $(".shape-clone").mouseup(function(){
  var offset = $(this).offset();
  $("#result").text( "Coords:" + offset.left + ", " + offset.top );
  });
  $(this).draggable({ 
      containment: 'html'
  });
});
$(".triangle").draggable({ 
    containment: 'html',
    helper: 'clone',
    stop: function(event, ui) {
        $(ui.helper).clone(true).addClass('shape-clone').appendTo('body');
    }
});

// From jquery rotate() documentation
// var value = 0
// $("#triangle").rotate({ 
//   bind: 
//     { 
//       click: function(){
//         value +=90;
//         $(this).rotate({ animateTo:value})
//       }
//     } 
// });

// HERE BE jCanvas!!!
function moreShapes() {
  $('#customtriangle').addLayer({
    type: 'line',
    draggable: true,
    bringToFront: true,
    strokeStyle: '#c33',
    strokeWidth: 2,
    closed: true,
    rounded: true,
    x1: 100, y1: 50,
    x2: 150, y2: 150,
    x3: 200, y3: 100,
    fillStyle: function(layer) {
      var value = Math.round(layer.x / this.width * 360);
      value = Math.min(value, 360);
      return 'hsl(' + value + ', 50%, 50%)';
    },
    handle: {
      type: 'arc',
      fillStyle: '#fff',
      strokeStyle: '#c33',
      strokeWidth: .5,
      radius: 5
    }
  })
  .drawLayers();
}

$('#polygons')
.drawArc({
  layer: true,
  draggable: true,
  bringToFront: true,
  fillStyle: '#36c',
  x: 150, y: 150,
  radius: 50
})
.drawPolygon({
  layer: true,
  draggable: true,
  bringToFront: true,
  fillStyle: '#6c1',
  x: 100, y: 100,
  radius: 50,
  sides: 3,
});

// Add rectangle layer w/o drawing
$('.resizable').addLayer({
  type: 'rectangle',
  draggable: true,
  fillStyle: '#fff',
  strokeStyle: '#c33',
  strokeWidth: 2,
  x: 160, y: 150,
  width: 150, height: 80,
  handlePlacement: 'both',
  handle: {
    type: 'arc',
    fillStyle: '#fff',
    strokeStyle: '#c33',
    strokeWidth: 2,
    radius: 10
  },
  handlestart: function(layer) {
    // code to run when resizing starts
  },
  handlemove: function(layer) {
    // code to run while resizing
  },
  handlestop: function(layer) {
    // code to run while resizing stops
  }
})
.drawLayers();
