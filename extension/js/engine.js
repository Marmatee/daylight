var css1 = "ul.switcher li:nth-child(1)";
var css2 = "ul.switcher li:nth-child(2)";
var css3 = "ul.switcher li:nth-child(3)";
var css4 = "ul.switcher li:nth-child(4)";

var img1 = "http://i.imgur.com/DYm1aqo.jpg";
var img2 = "http://i.imgur.com/pWNgnmO.jpg";
var img3 = "http://i.imgur.com/09ierta.jpg";
var img4 = "http://i.imgur.com/Ve1wAfQ.jpg";

// var value = document.querySelectorAll("body")[0].style.background.replace(/(url\(|\)|")/g, '');

$('head').append("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>");

// Put any pic you want in here
var bg = "http://i.imgur.com/Ve1wAfQ.jpg";


// var hellohello = chrome.storage.sync.get("background", function(obj) {console.log(obj.background);});

$('body').css('background','url('+bg+')');

//switcher
$('body').append(' <div class="dropdown"> <input type="checkbox" id="checkbox-toggle"> <label for="checkbox-toggle" class="dropper"><i class="fa fa-picture-o" aria-hidden="true"></i></label> <ul class="switcher"> <li><a href="javascript:void(0)"><img src="http://i.imgur.com/DYm1aqos.jpg"></a></li><li><a href="javascript:void(0)"><img src="http://i.imgur.com/pWNgnmOs.jpg"></a></li><li><a href="javascript:void(0)"><img src="http://i.imgur.com/09iertas.jpg"></a></li><li><a href="javascript:void(0)"><img src="http://i.imgur.com/Ve1wAfQs.jpg"></a></li></ul></div>');

// testing
//<input type="button" id="get" value="get" style="position: absolute; z-index:1000;">

(function($) {
  $(document).ready(function() {


    $(css1).click(function() {
      $('body').css('background', 'url('+img1+')');
       var value = document.querySelectorAll("body")[0].style.background.replace(/(url\(|\)|")/g, '');
        // alert(value);

        chrome.storage.sync.set({'background': value}, function(){
          alert('Success!');
        });

        // chrome.storage.sync.get("background", function(obj) {
        //   console.log(obj.background);
        // });

    });


    $(css2).click(function() {
      $('body').css('background', 'url('+img2+')');
    });

    $(css3).click(function() {
      $('body').css('background', 'url('+img3+')');
    });

    $(css4).click(function() {
      $('body').css('background', 'url('+img4+')');
    });

  });
})(jQuery);


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
