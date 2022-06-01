window.addEventListener("load", (event) => {
  let roadImage = document.querySelector("#game");
  let gameCar = document.querySelector("#gameCar");
  let gameText = document.querySelector("#gameText");

  let car = document.querySelector(".car");
  let cust = document.querySelectorAll(".block").forEach((el) => {
    moveLeft(el);
  });

  addEventListener(
    "keydown",
    (e) => {
      keyDownTop(e, car);
    },
    false
  );
  addEventListener(
    "keyup",
    (e) => {
      console.log(e);
    },
    false
  );

  drawSelectCars(CARS);

  // button start
  document.querySelector(".w-100").addEventListener("click", () => {
    document.querySelector(".screen-login").style.visibility = "hidden";
  });
});

// window.onload = loads;

// var roadimage = document.getElementById('game');
// var gameCar = document.getElementById("gameCar");
// var gameText = document.getElementById("gameText");
// roadimage.width = window.innerWidth;
// roadimage.height = window.innerHeight;
// gameCar.width = window.innerWidth;
// gameCar.height = window.innerHeight;
// gameText.width = window.innerWidth;
// gameText.height = window.innerHeight;

// var speedGame = 4;
// var speedCar = 4;

// var isPause = false;

// var ctxroadimage = roadimage.getContext("2d");
// var ctxcarimage = gameCar.getContext("2d");
// var ctxtextimage = gameText.getContext("2d");

// var countYar = 1;
// var countRefresh = 1;

// var img = new Image();
// img.src = 'bg.jpg';

// var imgCar = new Image();
// imgCar.src = "car2.png";

// var imgBush = new Image();
// imgBush.src = "block.png";

// var isMoveCarTop = false;
// var isMoveCarBotton = false;

// var score = 4;

// function loads() {
//     addEventListener("keydown", keyDownTop, false);
//     addEventListener("keyup", keyUpBotton, false);
//     drawCar();
//     drawBack();
//     drawBush();
//     drawText();
// }

// function keyDownTop(e) {
//     var keyId = e.keyCode;
//     if (keyId == 87) {
//         isMoveCarTop = true;
//     }

//     if (keyId == 83) {
//         isMoveCarBotton = true;
//     }

//     if (keyId == 27) {
//         if (isPause) {
//             isPause = false;
//         } else {
//             isPause = true;
//         }

//     }

//     // 32 пробел
//     if (keyId == 32) {
//         if (countRefresh == 1) {
//             yarost();
//         }

//     }

// }

// function keyUpBotton(e) {
//     var keyId = e.keyCode;
//     if (keyId == 87) {
//         isMoveCarTop = false;
//     }

//     if (keyId == 83) {
//         isMoveCarBotton = false;
//     }
// }

// function yarost() {
//     ctxcarimage.shadowColor = 'red';
//     ctxcarimage.shadowBlur = 50;
//     var timeYar = setInterval(function () {
//         countYar++;
//         if (countYar == 4) {
//             countYar = 1;
//             clearInterval(timeYar);
//             fPauseRef();
//         }
//     }, 1000);
// }

// function fPauseRef() {
//     ctxcarimage.shadowColor = 'red';
//     ctxcarimage.shadowBlur = 0;
//     var timeRef = setInterval(() => {
//         countRefresh++;
//         if (countRefresh == 5) {
//             countRefresh = 1;
//             clearInterval(timeRef);
//         }
//     }, 1000);
// }

// function drawBack() {
//     ctxroadimage.clearRect(0, 0, window.innerWidth, window.innerHeight);
//     ctxroadimage.drawImage(img, fonX, 0, window.innerWidth, window.innerHeight);
//     ctxroadimage.drawImage(img, fonX + window.innerWidth, 0, window.innerWidth, window.innerHeight);
//     fonX -= speedGame;

//     if (fonX < -windowX) {
//         fonX += windowX;
//     }
// }

// var fonX = 0;
// var windowX = window.innerWidth;
// setInterval(start, 1);

// function start() {
//     if (isPause) {
//         drawBack();
//         drawCar();
//         drawBush();
//         //console.log(score);
//     }

// }

// var CarYPosition = 500;

// function drawCar() {
//     if (isMoveCarTop) {
//         CarYPosition -= speedCar;
//     }

//     if (isMoveCarBotton) {
//         CarYPosition += speedCar;
//     }
//     ctxcarimage.clearRect(0, 0, window.innerWidth, window.innerHeight);
//     ctxcarimage.drawImage(imgCar, 100, CarYPosition, 127, 61);
//     //ctxcarimage.strokeRect(100, CarYPosition, 127, 61);

//     if (CarYPosition < 300) {
//         CarYPosition = 300;
//     }

//     if (CarYPosition > 600) {
//         CarYPosition = 600;
//     }

//     // столкновение с куртами
//     // if (100 < fonXBush || 100 < fonXBush2)
//     // {
//     //     if ((227 > fonXBush || 227 > fonXBush2)
//     //     	&& (CarYPosition + 61 > fonYBush || CarYPosition + 61 > fonYBush2)
//     //     	&& (CarYPosition < fonYBush + 50 || CarYPosition < fonYBush2 + 50) )
//     //     {

//     //     		isPause = false;
//     //     }

//     // }

//     // if (
//     // 	(227 > fonXBush + 100 || 227 > fonXBush2 + 100)
//     // 	&&(100 < fonXBush || 100 < fonXBush2)
//     // 	&&(CarYPosition < fonYBush || CarYPosition < fonYBush2)
//     // 	&&(CarYPosition + 61 > fonYBush + 50 || CarYPosition + 61 > fonYBush + 50)
//     // )
//     // {
//     // 	isPause = false;
//     // }

//     bam(100, CarYPosition, fonXBush, fonYBush);
//     bam(100, CarYPosition, fonXBush2, fonYBush2);
//     bam(100, CarYPosition, fonXBush3, fonYBush3);
// }

// function bam(XCar, Ycar, XBush, YBush) {
//     if (XCar < XBush) {
//         if ((XCar + 127 > XBush)
//             && (Ycar + 61 > YBush)
//             && (Ycar < YBush + 50)) {
//             //isPause = false;
//             if (XCar < XBush + 50) {
//                 drawText(true);

//             }
//             else {
//                 drawText(false);
//             }
//             //drawText();

//         }
//     }
// }

// function drawBush() {
//     if (countYar > 1) {
//         fonXBush = window.innerWidth + 10;
//         fonXBush2 = window.innerWidth + 800;
//         fonXBush2 = window.innerWidth + 1600;
//     } else {
//         ctxroadimage.drawImage(imgBush, fonXBush, fonYBush, 50, 50);
//         ctxroadimage.drawImage(imgBush, fonXBush2, fonYBush2, 50, 50);
//         ctxroadimage.drawImage(imgBush, fonXBush3, fonYBush3, 50, 50);
//         //ctxroadimage.strokeRect(fonXBush, fonYBush, 50, 50);
//         //ctxroadimage.strokeRect(fonXBush2, fonYBush2, 50, 50);
//     }

//     fonXBush -= speedGame;
//     fonXBush2 -= speedGame;
//     fonXBush3 -= speedGame;

//     if (fonXBush < -100) {
//         fonXBush = window.innerWidth + 10;
//         fonYBush = Math.floor(Math.random() * (max - min) + min);
//         speedGame += 0.05;
//         speedCar += 0.005;
//     }

//     if (fonXBush2 < -100) {
//         fonXBush2 = window.innerWidth + 10;
//         fonYBush2 = Math.floor(Math.random() * (max - min) + min);
//     }

//     if (fonXBush3 < -100) {
//         fonXBush3 = window.innerWidth + 10;
//         fonYBush3 = Math.floor(Math.random() * (max - min) + min);
//     }

// }

// function drawText(isScore) {
//     ctxtextimage.font = "48px serif";
//     ctxtextimage.clearRect(0, 0, window.innerWidth, window.innerHeight);
//     ctxtextimage.fillText(score, 10, 50);

//     // if(fonXBush == 100 || fonXBush2 == 100 || fonXBush3 == 100) {
//     // 	score ++;
//     // }
//     if (isScore) {
//         score--;
//     }

// }

// // function getRandomInRange(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1)) + min;
// // }
// //var fonYBush = getRandomInRange(300, 510);

// /* function road() {
//     var roadimage = document.getElementById('game').getContext('2d');
//     var img = new Image();
//     img.onload = function(){
//         roadimage.drawImage(img);
//     };
//     img.src = 'bg.jpg'
// }

// road();
// */
