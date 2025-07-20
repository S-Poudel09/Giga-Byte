var name = "none";





// function for changing image of front page
var toggles = true;
function changeImg(){

	if(toggles === true){
		document.getElementById('wallpaper').src ="media/vision.jpg";
	}
	else{
		document.getElementById('wallpaper').src = "media/viber.jpg";
	}
	toggles = !toggles;
}


function hide_cookie_section() {
	document.querySelector(".cookieT").style.display = "none"
}


//for credit card information
function close_view_purchase_section() {
	document.querySelector(".purchase-section").classList.remove("active");
}



function view_purchase_section() {
	
	var temp = document.querySelector(".purchase-section");
	var cr = document.querySelector(".Cnum").value;
	var add = document.querySelector(".address").value;

	if(cr.length != 0 && add.length != 0)
	{
		if(temp.style.transform != "scale(1)")
		{
			temp.classList.add("active");
		}
	}
	// temp.classList.add('active');
}
function goToHome() {
	window.location.href = '../index.html';
}


function show(index){
	var temp = document.querySelectorAll(".ans");
	var temp2 = temp[index];
	if(temp2.style.display == "inline")
	{
		temp2.style.display = "none"
	}
	else{
		temp2.style.display = "inline"
	}
}


function open_received_msg() {
	document.querySelector(".received").style.transform = "translateX(0%)"
}
function close_received_msg() {
	document.querySelector(".received").style.transform = "translateX(100%)"
}