// JavaScript Document

$(document).ready(function (e){
	document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function (){
			navigator .notification.beep (3);
		});//tap bee
		
		$('#vibrar').tap(function (){
			navigator .notification.vibrate (10000);
		});//tap vibrar
		
	},false);//deviceready
});//ready