var turn = 1;
 
$("button").click(function() {
    if(turn == 1) {
        $("#screen").text("PLAYER 2 TURN FOLLOWS");
        $(this).addClass("selected");
        $(this).text('X');
        turn = 2;       
    }
    else {   
        $("#screen").text("PLAYER 1 TURN FOLLOWS");
        $(this).addClass("selectedO");
        $(this).text('O');
        turn = 1;
    }
});


var checkstatus = setInterval(check,1000);  
function check() {  
    if ($(".sq1").html()==="X" && $(".sq2").html()==="X" && $(".sq3").html() === "X" ) {  
    alert("Player1 is winner");  
    clearInterval(checkstatus);  

}else if ($(".sq4").html()==="X" && $(".sq5").html()==="X" && $(".sq6").html()==="X" ) {  
    alert("Player1 is winner");  
    clearInterval(checkstatus);  
  
}else if ($(".sq7").html()==="X" && $(".sq8").html()==="X" && $(".sq9").html()==="X" ) {  
    alert("Player 1 is winner");  
    clearInterval(checkstatus);  
  
}else if ($(".sq1").html()==="X" && $(".sq4").html()==="X" && $(".sq7").html()==="X" ) {  
    alert("player 1 is winner");  
    clearInterval(checkstatus);  

}else if ($(".sq2").html()==="X" && $(".sq5").html()==="X" && $(".sq8").html()==="X" ) {  
    alert("Player 1 is winner");  
    clearInterval(checkstatus);  
 
}else if ($(".sq3").html()==="X" && $(".sq6").html()==="X" && $(".sq9").html()==="X" ) {  
    alert("Player 1 is winner");  
    clearInterval(checkstatus);  

}else if ($(".sq1").html()==="X" && $(".sq5").html()==="X" && $(".sq9").html()==="X" ) {  
    alert("Player 1 is winner");  
    clearInterval(checkstatus);  
  
}else if ($(".sq3").html()==="X" && $(".sq5").html()==="X" && $(".sq7").html()==="X" ) {  
    alert("Player 1 is winner");  
    clearInterval(checkstatus);  
 
}else if ($(".sq1").html()==="O" && $(".sq2").html()==="O" && $(".sq3").html()==="O" ) {  
    alert("Player 2 is winner");  
    clearInterval(checkstatus);  
  
}else if ($(".sq4").html()==="O" && $(".sq5").html()==="O" && $(".sq6").html()==="O" ) {  
    alert("Player 2 is winner");  
    clearInterval(checkstatus);  
  
}else if ($(".sq7").html()==="O" && $(".sq8").html()==="O" && $(".sq9").html()==="O" ) {  
    alert("Player 2 is winner");  
    clearInterval(checkstatus);  
  
}else if ($(".sq1").html()==="O" && $(".sq4").html()==="O" && $(".sq7").html()==="O" ) {  
    alert("Player 2 is winner");  
    clearInterval(checkstatus);  

}else if ($(".sq2").html()==="O" && $(".sq5").html()==="O" && $(".sq8").html()==="O" ) {  
    alert("Player 2 is winner");  
    clearInterval(checkstatus);
  
}else if ($(".sq3").html()==="O" && $(".sq6").html()==="O" && $(".sq9").html()==="O" ) {  
    alert("Player 2 is winner");  
    clearInterval(checkstatus);  
 
}else if ($(".sq1").html()==="O" && $(".sq5").html()==="O" && $(".sq9").html()==="O" ) {  
    alert("Player 2 is winner");  
    clearInterval(checkstatus);  

}else if ($(".sq3").html()==="O" && $(".sq5").html()==="O" && $(".sq7").html()==="O" ) {  
    alert("Player 2 is winner");  
    clearInterval(checkstatus);  

}else if($(".sq1").html()!=="" && $(".sq2").html()!=="" && $(".sq3").html()!== "" && $(".sq4").html()!=="" && $(".sq5").html()!=="" && $(".sq6").html()!=="" && $(".sq7").html()!=="" && $(".sq8").html()!=="" && $(".sq9").html()!==""  ) {  
    alert(" No One Is Winner ");  
    clearInterval(checkstatus);   
} 
}

function reset()
{
   $("#screen").text("PLAYER 1 TURN FOLLOWS");
   $(".sq1").html('');
   $(".sq2").html('');
   $(".sq3").html('');
   $(".sq4").html('');
   $(".sq5").html('');
   $(".sq6").html('');
   $(".sq7").html('');
   $(".sq8").html('');
   $(".sq9").html('');
   $(".r").removeClass("selected");
   $(".r").removeClass("selectedO");
   turn=1;
   checkstatus = setInterval(check,1000);
}