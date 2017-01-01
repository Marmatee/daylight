$('head').append("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>");

// Put any pic you want in here
var bg = "http://i.imgur.com/Ve1wAfQ.jpg";

$('body').css('background','url('+bg+')');

$('body').append('<div class="dropdown"> <input type="checkbox" id="checkbox-toggle"> <label for="checkbox-toggle" class="dropper"><i class="fa fa-picture-o" aria-hidden="true"></i></label> <ul class="switcher"> <li><a href="javascript:void(0)"><img src="http://i.imgur.com/DYm1aqos.jpg"></a></li><li><a href="javascript:void(0)"><img src="http://i.imgur.com/pWNgnmOs.jpg"></a></li><li><a href="javascript:void(0)"><img src="http://i.imgur.com/09iertas.jpg"></a></li><li><a href="javascript:void(0)"><img src="http://i.imgur.com/Ve1wAfQs.jpg"></a></li></ul></div>');



// I know that's HTML - but believe me it's easier to uncomment that stuff, then
// make any modifications I want to, then run it through http://www.willpeavy.com/minifier/
// and paste it in the append shown above.
//
// - Marmatee
//****************************************************************************//
//
// <div class="dropdown">
//     <input type="checkbox" id="checkbox-toggle">
//     <label for="checkbox-toggle" class="dropper"><i class="fa fa-picture-o" aria-hidden="true"></i></label>
//     <ul class="switcher">
//         <li><a href="javascript:void(0)"><img src="http://i.imgur.com/DYm1aqos.jpg"></a></li>
//         <li><a href="javascript:void(0)"><img src="http://i.imgur.com/pWNgnmOs.jpg"></a></li>
//         <li><a href="javascript:void(0)"><img src="http://i.imgur.com/09iertas.jpg"></a></li>
//         <li><a href="javascript:void(0)"><img src="http://i.imgur.com/Ve1wAfQs.jpg"></a></li>
//     </ul>
// </div>
