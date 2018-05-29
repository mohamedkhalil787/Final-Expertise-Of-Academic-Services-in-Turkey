/*global console,prompt*/

	var dropdown = document.getElementById('dropdown'),
		dropcontent = document.getElementById('dropdown-content'),
		close = document.getElementsByClassName("close"),
		mybutton = document.getElementById('btn'),
		face = document.getElementsByClassName("icon-facebook"),
		tube = document.getElementsByClassName('icon-play'),
		twitter = document.getElementsByClassName('icon-twitter');

  dropdown.onclick = function(){
	  dropcontent.style.display = "block";
  }
  close[0].onclick = function (){
	  dropcontent.style.display = "none";
  }
mybutton.onclick = function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
face[0].onclick = function(){
	window.open('http://www.facebook.com','blank');
}
face[1].onclick = function(){
	window.open('http://www.facebook.com','blank');
}
tube[0].onclick = function(){
	window.open('http://www.youtube.com','blank');
}
tube[1].onclick = function(){
	window.open('http://www.youtube.com','blank');
}
twitter[0].onclick = function(){
	window.open('http://www.twitter.com','blank');
}
twitter[1].onclick = function(){
	window.open('http://www.twitter.com','blank');
}
