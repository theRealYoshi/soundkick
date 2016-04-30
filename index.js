var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var { ToggleButton } = require("sdk/ui/button/toggle");
var panels = require("sdk/panel");
var self = require("sdk/self");

require("sdk/tabs").on("ready", logURL);

var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./musical-16.png",
    "32": "./musical-32.png",
    "64": "./musical-64.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url("panel.html"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}


function handleClick(state) {
  // if soundcloud not open upon click open soundcloud
  // iterate through all open tabs and open soundcloud if not open
  tabs.open("http://www.soundcloud.com/");
}

function logURL(tab) {
  console.log(tab.url);
  if (tab.url === 'https://soundcloud.com/' || tab.url === 'http://www.soundcloud.com'){
    console.log('this is a soundcloud tab');
    // create popup notification with the index.html
    // check to see if loggedin

  }
}
