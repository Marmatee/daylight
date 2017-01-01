var css1 = "ul.switcher li:nth-child(1)";
var css2 = "ul.switcher li:nth-child(2)";
var css3 = "ul.switcher li:nth-child(3)";
var css4 = "ul.switcher li:nth-child(4)";

var img1 = "http://i.imgur.com/DYm1aqo.jpg";
var img2 = "http://i.imgur.com/pWNgnmO.jpg";
var img3 = "http://i.imgur.com/09ierta.jpg";
var img4 = "http://i.imgur.com/Ve1wAfQ.jpg";

(function($) {
  $(document).ready(function() {

    $(css1).click(function() {
      $('body').css('background', 'url('+img1+')');
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

// window.onload = function() {
//   var value = document.querySelectorAll("body div.dropdown ul").onclick = function(){
//     var value = document.querySelectorAll("body")[0].style.background
//                 value = value.replace(/(url\(|\)|")/g, '');
//     chrome.storage.sync.set({'background': value});
//   };
// };
//


// window.onload = function() {
//   document.getElementById('save').onclick = function(){
//     var value = document.getElementById('saveLine').value;
//     //alert(value);
//
//     chrome.storage.sync.set({'myLine': value}, function(){
//       alert('Success!');
//     });
//   };
//
//   document.getElementById('get').onclick = function(){
//     chrome.storage.sync.get('myLine', function(data) {
//       alert(data.myLine);
//     });
//   }
//
// }

// console.log(document.querySelectorAll(css3));

// window.onload = function() {
//   document.getElementById('save').onclick = function(){
//     var value = document.getElementById('saveLine').value;
//     chrome.storage.sync.set({'background': value}{
//     });
//   };

// This retrieves the background
//
// var bgurl = document.querySelectorAll("body")[0].style.background
// bgurl = bgurl.replace(/(url\(|\)|")/g, '');
// console.log(bgurl);
