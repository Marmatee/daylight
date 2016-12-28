// Put any pic you want in here
var bg = "http://i.imgur.com/Ve1wAfQ.jpg";

$('body').css('background','url('+bg+')');

$('body').append('<ul class="menu"><li><a href="#"><i class="fa fa-picture-o big"></i></a><ul>');
$('body').append('<li><a href="#"><img src="http://i.imgur.com/DYm1aqos.jpg"></a></li>');
$('body').append('<li><a href="#"><img src="http://i.imgur.com/pWNgnmOs.jpg"></a></li>');
$('body').append('<li><a href="#"><img src="http://i.imgur.com/09iertas.jpg"></a></li>');
$('body').append('<li><a href="#"><img src="http://i.imgur.com/ipqicfms.jpg"></a></li>');
$('body').append('</ul></li></ul>');

$('body').append("<script>$(document).ready(function(){$('.menu').dropit()});</script>");

$('head').append("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>");
$('head').append("<link rel='stylesheet' href=''>");
