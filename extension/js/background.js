var image_array = new Array();
    image_array[0] = "http://i.imgur.com/fLVXu6r.png";
    image_array[1] = "http://i.imgur.com/ipqicfm.jpg";
    image_array[2] = "http://i.imgur.com/09ierta.jpg";
    image_array[3] = "http://i.imgur.com/pWNgnmO.jpg";
    image_array[4] = "http://i.imgur.com/DYm1aqo.jpg";
    image_array[5] = "http://i.imgur.com/2Doe6Uy.png";
    image_array[6] = "http://i.imgur.com/xzCFJr7.jpg";
    image_array[7] = "http://i.imgur.com/V1YXlor.png";
    image_array[8] = "http://i.imgur.com/QVeeFFZ.png";
    image_array[9] = "http://i.imgur.com/V4ZMkGf.jpg";
    image_array[10] = "http://i.imgur.com/Oooi3g3.jpg";
    image_array[11] = "http://i.imgur.com/PkZqm4k.jpg";
    image_array[12] = "http://i.imgur.com/t6IWqaX.jpg";
    image_array[13] = "http://i.imgur.com/blmHPfo.jpg";
    image_array[14] = "http://i.imgur.com/YyYEXAl.jpg";
    image_array[15] = "http://i.imgur.com/Ve1wAfQ.jpg";

    var rand_path = image_array[Math.floor(Math.random() * image_array.length)];

    $(document).ready(function() {
       $('html').css('background-image', 'url('+rand_path+')');
    });

var sheet = document.createElement('style')
    sheet.innerHTML = "html {background-size: cover;}";
    document.body.appendChild(sheet);
