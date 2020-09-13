var buttonElements = document.querySelectorAll(".drum");
// console.log(buttonElements);

function changeAnimation() {
  var x = "button" + event.key.toUpperCase();
  // console.log(x);
  var changingButton = document.getElementById(x);
  // console.log(changingButton);
  changingButton.classList.add("pressed");
  setTimeout(() => {
    changingButton.classList.remove("pressed");
  }, 100);
}

function changeAnimationOnClick(eVent) {
  var x = "button" + eVent.innerHTML.toUpperCase();
  // console.log(x);
  var changingButton = document.getElementById(x);
  // console.log(changingButton);
  changingButton.classList.add("pressed");
  setTimeout(() => {
    changingButton.classList.remove("pressed");
  }, 100);
}

function playSound() {
  var buttonId;
  buttonId = this.innerHTML;
  console.log(buttonId);

  var audio;

  switch (buttonId) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      changeAnimationOnClick(this);
      break;

    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      changeAnimationOnClick(this);
      break;

    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      changeAnimationOnClick(this);
      break;

    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      changeAnimationOnClick(this);
      break;

    case "j":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      changeAnimationOnClick(this);
      break;

    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      changeAnimationOnClick(this);
      break;

    case "l":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      changeAnimationOnClick(this);
      break;

    default:
      console.log("Not found");
      break;
  }
}

for (var i = 0; i < buttonElements.length; ++i) {
  buttonElements[i].addEventListener("click", playSound);
}

function playSoundUsingKey() {
  var buttonId = event.key;

  var audio;

  switch (buttonId) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      changeAnimation();
      audio.play();
      break;

    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      changeAnimation();
      break;

    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      changeAnimation();
      break;

    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      changeAnimation();
      break;

    case "j":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      changeAnimation();
      break;

    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      changeAnimation();
      break;

    case "l":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      changeAnimation();
      break;

    default:
      console.log("Not found");
      break;
  }
}

addEventListener("keydown", playSoundUsingKey);
