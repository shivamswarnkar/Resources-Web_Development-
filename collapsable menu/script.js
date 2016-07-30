
var isOpen = false;
var mainH;

function menu(){
	var nav_bar = document.getElementsByClassName("nav-bar")[0];
	if(!isOpen){
		document.getElementById("menu-icon").style.backgroundColor = "white"; 
		var links = document.getElementsByClassName("links");
		var curr;
		document.getElementById("break").visibility = "Visible";
		for(var i=1; i < links.length; ++i){
			curr = document.getElementById("menu-"+i);
			curr.style.visibility = "Visible";
			curr.style.width = "100%;";
			//sleep(1000);

		}
		
		mainH = nav_bar.style.height;
		nav_bar.style.height = "210px";

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
		}
		isOpen  = false;
		nav_bar.style.height = mainH;

	}
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
