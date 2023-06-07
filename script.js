let contador = 0;
let win = false;
let solucionado = false;
let errores = 0;
let palabras = ["GATO", "PERRO", "MESA", "SOPA"];
function yest() {
  for (let j of document.querySelectorAll("td")) {
    j.className = "seleccionado";
    solucionado = true;
  }
}

window.onload = function () {
  for (let i of document.querySelectorAll("td")) {
    i.onclick = function () {
      if (i.classList.contains("palabra") || i.className == "seleccionado" || win) {
        if (i.className != "seleccionado") {
          contador += 1;
        }
        i.className = "seleccionado";
      } else {
        i.className = "error";
        errores += 1;
      }
      if (contador == 17) {
        win = true;
        if (!solucionado) {
          yest();
          var element = document.createElement("p");
          element.textContent = "TODAY'S WORD SEARCH SOLVED WITH ONLY ";
          element.textContent += errores.toString();
          element.textContent += " ERRORS!!";
          element.className = "solved";
          document.body.appendChild(element);
        }
      }
    };

    if (i.textContent != "") {
      continue;
    }
    let ccode = Math.round(65 + Math.random() * 25);
    i.textContent = String.fromCharCode(ccode);
  }
};
function solveOne() {
  for (let i of document.querySelectorAll("td")) {
    if(!i.classList.contains("palabra") || !i.classList.contains("palabra1")){
      i.className="";
    }
  }
  let matrix = Array(11).fill(Array(11));
  let c = 0;
  let k=0;
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      
      if (c <= 109) {
        matrix[i, j] = document.querySelectorAll("td")[c].textContent;
        
        if(matrix[i,j]===palabras[0][0]){
          k=0;
          while (k<palabras[0].length) {
            let con = (11*i)+j+(11*k);
            let lh = document.querySelectorAll("td")[11*i+j+k];
            let lv = document.querySelectorAll("td")[con];
            if (j+k<=10 && 11*i+j+k<=109) {
              lh.classList.add("buscando");
            }
            if(i+k<=10 && con<=109){
              lv.classList.add("buscando");
            }
            k+=1;
          }
        }
  
       
        c += 1;
      }
      
      
    }

  }
  document.getElementById("P1G").style.backgroundColor="yellowgreen";
  document.getElementById("P1A").style.backgroundColor="yellowgreen";
  document.getElementById("P1T").style.backgroundColor="yellowgreen";
  document.getElementById("P1O").style.backgroundColor="yellowgreen";
  contador=0;
}
function solveTwo() {
  for (let i of document.querySelectorAll("td")) {
    if(!i.classList.contains("palabra") || !i.classList.contains("palabra2")){
      i.className="";
    }
  }
  let matrix = Array(11).fill(Array(11));
  let c = 0;
  let k=0;
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      
      if (c <= 109) {
        matrix[i, j] = document.querySelectorAll("td")[c].textContent;
        
        if(matrix[i,j]===palabras[1][0]){
          k=0;
          while (k<palabras[1].length) {
            let con = (11*i)+j+(11*k);
            let lh = document.querySelectorAll("td")[11*i+j+k];
            let lv = document.querySelectorAll("td")[con];
            if (j+k<=10 && 11*i+j+k<=109) {
              lh.classList.add("buscando");
            }
            if(i+k<=10 && con<=109){
              lv.classList.add("buscando");
            }
            k+=1;
          }
        }
  
       
        c += 1;
      }
      
      
    }

  }
  document.getElementById("P2P").style.backgroundColor="yellowgreen";
  document.getElementById("P2E").style.backgroundColor="yellowgreen";
  document.getElementById("P2R1").style.backgroundColor="yellowgreen";
  document.getElementById("P2R2").style.backgroundColor="yellowgreen";
  document.getElementById("P2O").style.backgroundColor="yellowgreen";
  contador=0;
}
function solveThree() {
  for (let i of document.querySelectorAll("td")) {
    if(!i.classList.contains("palabra") || !i.classList.contains("palabra3")){
      i.className="";
    }
  }
  let matrix = Array(11).fill(Array(11));
  let c = 0;
  let k=0;
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      
      if (c <= 109) {
        matrix[i, j] = document.querySelectorAll("td")[c].textContent;
        
        if(matrix[i,j]===palabras[2][0]){
          k=0;
          while (k<palabras[2].length) {
            let con = (11*i)+j+(11*k);
            let lh = document.querySelectorAll("td")[11*i+j+k];
            let lv = document.querySelectorAll("td")[con];
            if (j+k<=10 && 11*i+j+k<=109) {
              lh.classList.add("buscando");
            }
            if(i+k<=10 && con<=109){
              lv.classList.add("buscando");
            }
            k+=1;
          }
        }
  
       
        c += 1;
      }
      
      
    }

  }
  document.getElementById("P3M").style.backgroundColor="yellowgreen";
  document.getElementById("P3E").style.backgroundColor="yellowgreen";
  document.getElementById("P3S").style.backgroundColor="yellowgreen";
  document.getElementById("P3A").style.backgroundColor="yellowgreen";
  contador=0;
}
function solveFour() {
  for (let i of document.querySelectorAll("td")) {
    if(!i.classList.contains("palabra") || !i.classList.contains("palabra4")){
      i.className="";
    }
  }
  let matrix = Array(11).fill(Array(11));
  let c = 0;
  let k=0;
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      
      if (c <= 109) {
        matrix[i, j] = document.querySelectorAll("td")[c].textContent;
        
        if(matrix[i,j]===palabras[3][0]){
          k=0;
          while (k<palabras[3].length) {
            let con = (11*i)+j+(11*k);
            let lh = document.querySelectorAll("td")[11*i+j+k];
            let lv = document.querySelectorAll("td")[con];
            if (j+k<=10 && 11*i+j+k<=109) {
              lh.classList.add("buscando");
            }
            if(i+k<=10 && con<=109){
              lv.classList.add("buscando");
            }
            k+=1;
          }
        }
  
       
        c += 1;
      }
      
      
    }

  }
  document.getElementById("P4S").style.backgroundColor="yellowgreen";
  document.getElementById("P4O").style.backgroundColor="yellowgreen";
  document.getElementById("P4P").style.backgroundColor="yellowgreen";
  document.getElementById("P4A").style.backgroundColor="yellowgreen";
  contador=0;
}