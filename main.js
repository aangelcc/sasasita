let speedfactor = 3;
let pacoClicked = false;

let kalamatiano = null;
let socrates = null;

$("document").ready(function () {
  $("#overlay-loader > div").click(() => {
    alert(
      "Oooooooooops. It seems like Paco escaped! Catch him before he finishes all the μπακλαβάς!!"
    );
    kalamatiano = new Audio("assets/kalamatiano.mp3");

    kalamatiano.addEventListener("canplaythrough", (event) => {
      /* the audio is now playable; play it if permissions allow */
      kalamatiano.play();
      $("#overlay-loader")
        .delay(400)
        .slideUp("slow", () => undefined);
    });
  });

  /* Clicked on Paco */
  $(".box").click(function () {
    if (!pacoClicked) {
      pacoClicked = true;
      alert("You caught me!! I promise I'll never leave the nest again...");
      kalamatiano.pause();
      socrates = new Audio("assets/socrates.mp3");

      socrates.addEventListener("canplaythrough", (event) => {
        /* the audio is now playable; play it if permissions allow */
        socrates.play();
        speedfactor = 0.9;

        $("#overlay-golden").css("display", "flex");
        $(".ticket")
          .fadeOut("slow")
          .fadeIn("slow")
          .fadeOut("slow")
          .fadeIn("slow", function () {
            alert(
              "Catching a wild raccoon is not always easy... That's why you got this prize:\n DREAM HOLIDAYS IN MALAGA!\n What will you get during your stay?:\n - Unlimited porra\n...That's it. What else is needed? :P. \nNow let Paco dance, enjoy the music and be a ΜΑΣΑΜΠΟΥΚΑ!!"
            );
          });
      });
    }
  });

  /* Bouncing */
  Number.prototype.reverse = function () {
    return this > 0 ? -this : Math.abs(this);
  };

  const container = document.querySelector("body");
  const box = document.querySelector(".box");
  const pos = { x: 0, y: 0 };
  let xAxis = 1;
  let yAxis = 1;

  setInterval(drawFrame, 5);

  function drawFrame() {
    let c = getSize(container);
    let b = getSize(box);

    if ((pos.x + b.w >= c.w && xAxis) || pos.x < 0) {
      xAxis = xAxis.reverse();
      //box.style.background = getRandomColor();
    }

    if (pos.y + b.h >= c.h || pos.y < 0) {
      yAxis = yAxis.reverse();
      //box.style.background = getRandomColor();
    }

    pos.x = pos.x + xAxis * speedfactor;
    pos.y = pos.y + yAxis * speedfactor;

    box.style.left = pos.x + "px";
    box.style.top = pos.y + "px";
  }

  function getSize(el) {
    return {
      h: el.clientHeight,
      w: el.clientWidth,
    };
  }

  function getRandomColor() {
    return "hsl(" + getRandomInt(0, 360) + ", 50%, 50%)";
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
