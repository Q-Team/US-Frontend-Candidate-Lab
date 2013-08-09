$(document).ready(function(){
  $("#rsvp").hide();
  
  var height = $(window).height();
  var width = $(window).width();
  var xOffset = width/2 - $("#rsvp").width()/2;
  var yOffset = height/2 - $("#rsvp").height()/2;
  
  $("#rsvp").css("left", xOffset + "px");
  $("#rsvp").css("top", yOffset + "px");
  
  $("#rsvpYes").click(function(){
	rsvp(true);
	return false;
  });
  
  $("#rsvpNo").click(function(){
	rsvp(false);
	return false;
  });
  
  $(".rsvpConfirm").click(function(){
	$(this).parent().fadeOut();
	return false;
  });
  
}); 

window.onresize = function resize() { RePositionMsgBox(); }
function RePositionMsgBox() {
    var height = $(window).height();
	var width = $(window).width();
	var xOffset = width/2 - $("#rsvp").width()/2;
	var yOffset = height/2 - $("#rsvp").height()/2;
  
	$("#rsvp").css("left", xOffset + "px");
	$("#rsvp").css("top", yOffset + "px");
}

function rsvp(answer){
	var msg = "";
	
	if(answer){
		msg = "Are you sure you want to confirm your presence?";
	} else {
		msg = "Are you sure you are not coming?";
	}
	
	$("#rsvpMessage").html(msg);
	$("#rsvp").fadeIn();
}
