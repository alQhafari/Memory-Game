$(document).ready(function () {
  $(".card-img-overlay").hide();
});


$("#btn").click(function randomImage() {
  $(".card-img-overlay").hide();
  let pic = [
    "pic-1.jpg",
    "pic-2.jpg",
    "pic-3.jpg",
    "pic-1.jpg",
    "pic-2.jpg",
    "pic-3.jpg",
  ];
  let array = [];

  while (pic.length !== 0) {
    let randomIndex = Math.floor(Math.random() * pic.length);
    array.push(pic[randomIndex]);
    pic.splice(randomIndex, 1);
  }
  let img1 = array[0];
  let img2 = array[1];
  let img3 = array[2];
  let img4 = array[3];
  let img5 = array[4];
  let img6 = array[5];
  $("#pic1").attr("src", img1);
  $("#pic2").attr("src", img2);
  $("#pic3").attr("src", img3);
  $("#pic4").attr("src", img4);
  $("#pic5").attr("src", img5);
  $("#pic6").attr("src", img6);

  setTimeout(hideImg, 1000);

  function hideImg() {
    $(".card-img-overlay").show();
  }
});

let imgArray = [];
let overlayArray = [];
let count = 2;
let countFinish = 0;

function showImg(idOverlay) {
  let selectClass = $(`#${idOverlay}`).attr("class");
  const myArray = selectClass.split(" ");
  let word = myArray[1];
  let imgSrc = $(`.${word}`).attr("src");

  if (checkImg(idOverlay) == true) {
    $(`#${idOverlay}`).hide();
    imgArray.push(imgSrc);
    overlayArray.push(idOverlay);
    count--;
    if (count == 0) {
      setTimeout(compareImg(imgArray, overlayArray), 10000);
    }
  }
}

function checkImg(idOverlay) {
  if ($(`#${idOverlay}`).is(":visible")) {
    return true;
  } else {
    return false;
  }
}

function compareImg(imgArray, overlayArray) {
  if (imgArray[0] == imgArray[1]) {
    imgArray.length = 0;
    overlayArray.length = 0;
    count = 2;
    countFinish++;
    if (countFinish >= 3) {
      alert("Selamat!!");
      countFinish = 0;
    }
  } else if (imgArray[0] != imgArray[1]) {
    let idOverlay1 = overlayArray[0];
    $(`#${idOverlay1}`).show();
    let idOverlay2 = overlayArray[1];
    $(`#${idOverlay2}`).show();
    imgArray.length = 0;
    overlayArray.length = 0;
    count = 2;
  }
}
