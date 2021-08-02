$(document).ready(function () {
  $("#accordionRecetas").click(function () {
    let elem = $("#accordionRecetas").find("[aria-expanded=true]");
    let id = $(elem[0]).attr("data-bs-target");

    switch (id) {
      case "#receta1":
        $("#img-receta").attr("src", "/assets/receta1.jpeg");
        break;
      case "#receta2":
        $("#img-receta").attr("src", "/assets/receta1.jpeg");
        break;
      case "#receta3":
        $("#img-receta").attr("src", "/assets/receta1.jpeg");
        break;
      case "#receta4":
        $("#img-receta").attr("src", "/assets/receta1.jpeg");
        break;
      default:
        $("#img-receta").attr("src", "/assets/OpenDoodles-Coffee.png");
        break;
    }
  });
});

function myFunction() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ver Mas";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ver Menos";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ver Mas";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ver Menos";
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ver Mas";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ver Menos";
    moreText.style.display = "inline";
  }
}

function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ver Mas";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ver Menos";
    moreText.style.display = "inline";
  }
}

function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ver Mas";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ver Menos";
    moreText.style.display = "inline";
  }
}

function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtn6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ver Mas";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ver Menos";
    moreText.style.display = "inline";
  }
}

function myFunction7() {
  var dots = document.getElementById("dots7");
  var moreText = document.getElementById("more7");
  var btnText = document.getElementById("myBtn7");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ver Mas";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ver Menos";
    moreText.style.display = "inline";
  }
}

function myFunction8() {
  var dots = document.getElementById("dots8");
  var moreText = document.getElementById("more8");
  var btnText = document.getElementById("myBtn8");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ver Mas";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ver Menos";
    moreText.style.display = "inline";
  }
}
