// setInterval(function(){								//to handle pagination for larger webPages
	var size = document.images.length;				//to get number of images in DOM
	for(i = 0; i < size; i++){
		var url=document.images.item(i).src;       //to get url of all images in the DOM
		// console.log(url);
		// document.images[i].style.filter = "blur(5px)";		
		loadDoc();
	} 
// },2000);

function loadDoc() {
	console.log("loaddoc called");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
		// document.getElementsByTagName("").innerHTML = this.responseText;
			selectiveBlur(this.responseText);								//function still to be written to render blurring
		  }
	};
xhttp.open("GET", "http:/httpbin.org/get", false);
console.log("@@@@@afterxhttp open@@@@@@");
// xhttp.timeout=5000;
xhttp.send();
// xhttp.ontimeout=function(){
// 	console.log("fn timed out");
}
console.log("@@@@@afterxhttp sent@@@@@@");
}

function selectiveBlur(imgStatus){
	console.log("ReturnedStatus");
};