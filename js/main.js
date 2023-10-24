function modoLight() {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "black";
  });
  document.querySelectorAll("a").forEach((a) => {
    a.style.color = "black";
  })
  document.querySelector("h1").style.color = "black";
  document.querySelector("h2").style.color = "black";
  document.querySelector("h3").style.color = "black";
  document.querySelector("h4").style.color = "black";
  document.querySelector("h5").style.color = "black";
  document.querySelector("header").style.backgroundColor = "white";
  document.querySelector("header").style.color = "black";
  document.querySelector("footer").style.backgroundColor = "white";
  document.querySelector("footer").style.color = "black";
}

function modoDark() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "white";
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "white";
  });
  document.querySelectorAll("a").forEach((a) => {
    a.style.color = "white";
  })
  document.querySelector("h1").style.color = "white";
  document.querySelector("h2").style.color = "white";
  document.querySelector("h3").style.color = "white";
  document.querySelector("h4").style.color = "white";
  document.querySelector("h5").style.color = "white";
  document.querySelector("header").style.backgroundColor = "black";
  document.querySelector("header").style.color = "white";
  document.querySelector("footer").style.backgroundColor = "black";
  document.querySelector("footer").style.color = "white";
}

function copyRight(){
  document.querySelector(".copyRight").innerHTML = "©copyRight";
  alert("Desarrollado por Macchia Sebastian \n mail: macchiasebastianprog@gmail.com");
}