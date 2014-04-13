  var thresholdX = 50;
  var thresholdY = 50;
  
  //Accelerometer Tilt actions
  function deviceOrientationHandler(axisX, axisY, axisZ, clientAble) {
    var tiltX = Math.round(axisX);
    var tiltY = Math.round(axisY);
    var tiltZ = Math.round(Math.abs(axisZ));  
    $("#ActionZ").html(tiltZ);
  
    if (tiltX > thresholdX)  {
      $("#ActionX").html(tiltX);
      forward();
    } else if (tiltX < -1* thresholdX){
      $("#ActionX").html(tiltX);
      backward();
    } else {
      $("#ActionX").html("Not in x axis");
    }
    if (tiltY > thresholdY)  {
      $("#ActionY").html(tiltY);
      left();
      } else if (tiltY < -1* thresholdY){
      $("#ActionX").html(tiltX);
      right();
      }	else {
	$("#ActionY").html("Not in y axis");
      }
  }
  
  $(function(){
    $("div.action_area").on("tap", tapHandler);
    function tapHandler(event) {
    stop();
    }
  });
//   $(function(){
//     $("div.action_area").on("swipeleft", swipeLeftHandler);
//     function swipeLeftHandler(event) {
//       act3();
//     }
//   });
//   $(function(){
//     $("div.action_area").on("swiperight", swipeRightHandler);
//     function swipeRightHandler(event) {
//       act4(); 
//     }
//   });
 /*
$
(document).bind( "mobileinit", function(event) {
  $.extend($.mobile.zoom, {locked:true,enabled:false});
});
*/