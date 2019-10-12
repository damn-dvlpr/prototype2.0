// setInterval(function(){
	var size = document.images.length;				//to get number of images in DOM
	for(i = 0; i < size; i++){
		var url=document.images.item(i).src;       //to get url of all images in the DOM
		// console.log(url);
		// document.images[i].style.filter = "blur(5px)";
		loadDoc(url);
	} 
// },2000);

function selectiveBlur(status, imgindex){
	// if(status)
		document.images[imgindex].style.filter = "blur(5px)";
	console.log("i_found_an_image");
};

function loadDoc(url) {
	// if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
	// 	xmlhttp=new XMLHttpRequest();
	// }
	// else { // code for IE6, IE5
	// 	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	// }
	// var xhttp = new XMLHttpRequest();
	// // xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	// xhttp.onreadystatechange = function() {
	// 	  if (this.readyState == 4 && this.status == 200) {
	// 	// document.getElementsByTagName("").innerHTML = this.responseText;
	// 		selectiveBlur(this.responseText, i);								//function still to be written to render blurring
	// 	  }
	// };
	// xhttp.open("GET", "http://127.0.0.1:8000?src="+url, true);
	// xhttp.send();

	// fetch('http://aaaaaaadfsdssf.com?src='+url).then(r => r.text()).then(result => {
	// 	console.log("i_found_an_image1");
    // 	// Result now contains the response text, do what you want...
	// })

	// var xhr = new XMLHttpRequest();
	// console.log("i_found_an_image1");
	// xhr.onreadystatechange = selectiveBlur; // Implemented elsewhere.
	// console.log("i_found_an_image2");
	// xhr.open("GET", chrome.extension.getURL("http://127.0.0.1:8000?src="+url), true);
	// console.log("i_found_an_image3");
	// xhr.send();
	// console.log("i_found_an_image4");

	$.ajax(
		{
			type: "GET",
			url: "/download",
			data:{
				"src": url
			},
			success: function(data){
				alert("yaay");
			},
			failure: function(data){
				alert("sad");
			},
		}
	);
	alert("done");

	// var pass_to_python = new Number(7)

	// $.ajax({
	// 	type:'POST',
	// 	contentType:'application/json;charset-utf-08',
	// 	dataType:'json',
	// 	url:'http://127.0.0.1:5000/pass_val?value='+pass_to_python,
	// 	success:function (data) {
	// 		var reply=data.reply;
	// 		if (reply=="success"){
	// 			return;
	// 		}
	// 		else{
	// 			alert("some error ocured in session agent")
	// 		}

	// 	}
	// });
}