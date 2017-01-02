# daylight
A Chrome extension to customise the Apple iCloud web interface

![alt text](https://github.com/Marmatee/daylight/blob/master/screenshots/screenshot-0.0.2.gif?raw=true "daylight")

### "Refractor" 0.0.3-alpha
- This release allows us to customise the Apple iCloud background image.
- The background image is saved when leaving the page/quitting Chrome.
- *untested* Theoretically the saved background image will sync between other devices running Chrome/daylight which you are signed into with your Google Account.

### Notes
- Images will need to be the same size otherwise the ease-in-out property looks stretchy (try it, that's the best i can explain)
- Due to the "label" bug that has been present in the last two builds, I am going to have to rewrite the frontend in JS instead of plain CSS
- http://fontawesome.io/icon/pencil-square-o/ - Use for the text input box

### Installation
- To test the extension yourself, download and extract daylight*.zip and then follow these instructions: https://developer.chrome.com/extensions/getstarted#unpacked

- Load the "unpacked extension" in the daylight*/extension folder (which contains the manifest.json file)


### Credits
- flutberf - http://imgur.com/gallery/hvLyp
- willpeavy - http://www.willpeavy.com/minifier/
- Vizantiyec - http://codepen.io/Vizantiyec/pen/vObqZo
