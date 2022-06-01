const CARS = [
  { name: "Car 1", img: "assets/images/car.png" },
  { name: "Car 2", img: "assets/images/car2.png" },
  { name: "Car 3", img: "assets/images/car3.png" },
];

function clearElevent(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function drawSelectCars(cars) {
  const modalDialog = document.querySelector(".selection-cars");
  clearElevent(modalDialog);
  cars.forEach((car) => {
    modalDialog.appendChild(newCarElement(car));
  });
}

function newCarElement(car) {
  let img = document.createElement("img");
  img.src = car.img;
  img.style = "cursor:pointer";
  img.className = "selection-car";
  img.onclick = () => {
    clickOnCar(img, car);
  };
  return img;
}

function clickOnCar(img, car) {
  clearSelection();
  setActiveCar(car);
  img.classList.add("selected-car");
}

function clearSelection() {
  document.querySelectorAll(".selected-car").forEach((el) => {
    el.classList.remove("selected-car");
  });
}

function setActiveCar(car) {
  document.querySelector(".car").src = car.img;
  document.querySelector("#nameCar").innerHTML = car.name;
}

function keyDownTop(e, el) {
  var keyId = e.keyCode;
  if (keyId == 87) {
    moveUp(el);
  }

  if (keyId == 83) {
    moveDown(el);
  }
}

function moveLeft(element) {
  setInterval(() => {
    let pos = parseInt(element.style.left);
    if (pos < 0) {
      pos = 100;
      element.style.bottom = getRandomInRange(33, 57) + "%";
    }
    element.style.left = pos - 1 + "%";
  }, 30);
}

function moveUp(element) {
  let pos = parseInt(element.style.bottom);
  if (pos > 57) {
    pos = 57;
  }
  element.style.bottom = pos + 4 + "%";
}

function moveDown(element) {
  let pos = parseInt(element.style.bottom);
  if (pos < 33) {
    pos = 33;
  }
  element.style.bottom = pos - 4 + "%";
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;ssss
}
