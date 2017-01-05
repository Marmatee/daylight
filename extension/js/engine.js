var css1 = "ul.switcher li:nth-child(1)";
var css2 = "ul.switcher li:nth-child(2)";
var css3 = "ul.switcher li:nth-child(3)";
var css4 = "ul.switcher li:nth-child(4)";

var img1 = "http://i.imgur.com/DYm1aqo.jpg";
var img2 = "http://i.imgur.com/pWNgnmO.jpg";
var img3 = "http://i.imgur.com/09ierta.jpg";
var img4 = "http://i.imgur.com/Ve1wAfQ.jpg";

$('head').append("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>");

// Old way - static variable
// var bg = "http://i.imgur.com/Ve1wAfQ.jpg";

// Now it saves them
chrome.storage.sync.get("background", function(obj) {
    bg = (obj.background);
    $('body').css('background', 'url(' + bg + ')');
});

// Old way - static bg
// $('body').css('background','url('+bg+')');

//switcher
$('body').append('<div class="dropdown"> <input type="checkbox" id="checkbox-toggle"> <label for="checkbox-toggle" class="dropper"><i class="fa fa-picture-o" aria-hidden="true"></i></label> <ul class="switcher"> <p class="custombglabel">Paste custom background here: </p><input class="custombg" type="text" id="custombg"> <li><a href="javascript:void(0)"><img src="http://i.imgur.com/DYm1aqos.jpg"></a></li><li><a href="javascript:void(0)"><img src="http://i.imgur.com/pWNgnmOs.jpg"></a></li><li><a href="javascript:void(0)"><img src="http://i.imgur.com/09iertas.jpg"></a></li><li><a href="javascript:void(0)"><img src="http://i.imgur.com/Ve1wAfQs.jpg"></a></li></ul></div>');

// text input
// <input class="custombg" type="text" id="custombg"></input>


(function($) {
    $(document).ready(function() {
        $(css1).click(function() {
            $('body').css('background', 'url(' + img1 + ')');
            var value = document.querySelectorAll("body")[0].style.background.replace(/(url\(|\)|")/g, '');
            // alert(value);

            chrome.storage.sync.set({
                'background': value
            }, function() {
                // alert('Success!');
            });
        });


        $(css2).click(function() {
            $('body').css('background', 'url(' + img2 + ')');
            var value = document.querySelectorAll("body")[0].style.background.replace(/(url\(|\)|")/g, '');

            chrome.storage.sync.set({
                'background': value
            }, function() {});
        });

        $(css3).click(function() {
            $('body').css('background', 'url(' + img3 + ')');
            var value = document.querySelectorAll("body")[0].style.background.replace(/(url\(|\)|")/g, '');

            chrome.storage.sync.set({
                'background': value
            }, function() {});
        });

        $(css4).click(function() {
            $('body').css('background', 'url(' + img4 + ')');
            var value = document.querySelectorAll("body")[0].style.background.replace(/(url\(|\)|")/g, '');

            chrome.storage.sync.set({
                'background': value
            }, function() {});
        });

    });
})(jQuery);

// Custom Backgrounds
$("#custombg").on("keydown", function search(e) {
    if (e.keyCode == 13) {
        var custom = ($(this).val());
        $('body').css('background', 'url(' + custom + ')');
        var value = document.querySelectorAll("body")[0].style.background.replace(/(url\(|\)|")/g, '');
        chrome.storage.sync.set({
            'background': value
        }, function() {});
    }
});




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
//     <p class="custombglabel">Paste custom background here: </p><input class="custombg" type="text" id="custombg">
//         <li><a href="javascript:void(0)"><img src="http://i.imgur.com/DYm1aqos.jpg"></a></li>
//         <li><a href="javascript:void(0)"><img src="http://i.imgur.com/pWNgnmOs.jpg"></a></li>
//         <li><a href="javascript:void(0)"><img src="http://i.imgur.com/09iertas.jpg"></a></li>
//         <li><a href="javascript:void(0)"><img src="http://i.imgur.com/Ve1wAfQs.jpg"></a></li>
//     </ul>
// </div>
