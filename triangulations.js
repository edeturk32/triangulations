$("#canvas").click(function(event){
     alert(event.type);
     document.getElementById("p1").innerHTML = "Event type: " + event.type; 
});
