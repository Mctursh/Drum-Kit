// Detecting key press section

var x = 0;
for (i = 0; i < 7; i++) {
  document.querySelectorAll("button")[x].addEventListener("click", function() {
    var alphabet = this.innerHTML
    checkKey(alphabet);
    buttonAnimation(alphabet);
  })
  x++;
}

// Detecting keyboard press section

document.addEventListener("keydown", function(event) {
  console.log(event);
  checkKey(event.key);
  buttonAnimation(event.key);
})



function checkKey(char) {

  switch (char) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();

      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      break;


    default:
      console.log(char);
  }
}

function buttonAnimation(currentKey) {

    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function () {
      activeKey.classList.remove("pressed")
    }, 100)

}
