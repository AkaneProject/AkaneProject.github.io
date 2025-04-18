/* Get the element you want displayed in fullscreen mode (a video in this example): */
var elem = document.getElementById("canvas");

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

//gamepads

function browserGamepadConnect(gamepadIndex){
  if(navigator.getGamepads()[gamepadIndex]){return 1}
  return 0;
}
function browserGamepad(gamepadIndex,type,index){
  let gamepad=navigator.getGamepads()[gamepadIndex]
  if(gamepad){
    switch(type){
      case 0:
        return gamepad.axes[index]
      break
      case 1:
        return gamepad.buttons[index].value
      break
    }
  }
  else{
    return "Null"
  }
}