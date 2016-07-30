
var isOpen = false;
var initi = Array();

function menu(){
	if(!isOpen){
		document.getElementById("menu-icon").style.backgroundColor = "white"; 
		var links = document.getElementsByClassName("links");
		var curr;
		document.getElementById("break").visibility = "Visible";
		for(var i=1; i < links.length; ++i){
			curr = document.getElementById("menu-"+i);
			curr.style.visibility = "Visible";
			curr.style.width = "100%;";
			initi[i] = curr.innerHTML;
			curr.innerHTML += "<br />";
			//sleep(1000);

		}
		isOpen  = true;
	}

	else{
		document.getElementById("menu-icon").style.backgroundColor = "purple"; 
		var links = document.getElementsByClassName("links");
		var curr;
		document.getElementById("break").visibility = "hidden";
		for(var i=1; i < links.length; ++i){
			curr = document.getElementById("menu-"+i);
			curr.style.visibility = "hidden";
			curr.innerHTML = initi[i];
		}
		isOpen  = false;

	}
	console.log("here");

}


/*-----------Sleep Function----------*/
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   	//waiting
   }
   console.log("done sleeping");
}
/*-----------Sleep Function----------*/
