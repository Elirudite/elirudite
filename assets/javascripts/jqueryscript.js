$("#green-circle").hover(function (){
	$("#changeling").html("We've changed the text!");
  }, function(){
  $("#changeling").html("This is (the same) sentence! :P");
});

$(".red-square").click(function (){
	$(this).css('background-color', 'blue');
});

$(".red-square").hover(function (){
	$(this).css('width', 400);
});


$(function() {
	$('.draggable').draggable();
})


// w3 schools solution
function createShape() {
	var elmnt = document.getElementsByTagName("DIV")[2];
	var cln = elmnt.cloneNode(true);
	document.body.appendChild(cln);
	cln = '.draggable'
}

// Tried to create a function myself, failed...
// $("button").click(function(){
// 	$("#spawnCreator")
// })
// function createShape() {
// 	var node = document.createElement("DIV");
// 	var shape = document.getElementById("#shape1");
// 	document.body.appendChild(shape);
// } 







// HERE BE jCanvas!!!

$('#polygons')
.drawArc({
  layer: true,
  draggable: true,
  bringToFront: true,
  fillStyle: '#36c',
  x: 150, y: 150,
  radius: 50
})
.drawRect({
  layer: true,
  draggable: true,
  bringToFront: true,
  fillStyle: '#6c1',
  x: 100, y: 100,
  width: 100, height: 100
});

// Add rectangle layer w/o drawing
$('#second').addLayer({
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