document.addEventListener("DOMContentLoaded", function () {
  // variables
  let inputData = document.getElementById("txt-datos");
  let labelInfo = document.getElementById("txt-info");

  let btnE = document.getElementById("btn-encrip");
  let btnD = document.getElementById("btn-descript");
  let btnC = document.getElementById("btn-copiar");

  let imagen = document.getElementById("txt-imagen");
  let labelEncriptado = document.getElementById("txt-encriptado");

  console.log(inputData, labelInfo, btnE, btnC, btnD, imagen, labelEncriptado);

  // validamos que tamaño tiene la pantalla

  // ponemos a la escucha a los botones

  if (btnC) {
    btnC.addEventListener("click", () => {
      copiar(labelEncriptado);
    });
  }

  btnE.addEventListener("click", () => {
    encriptar(inputData, labelEncriptado, imagen);
  });

  btnD.addEventListener("click", () => {
    desencriptar(inputData, labelEncriptado, imagen);
  });

  labelEncriptado.style.display = "none";
});

// metodos

function copiar(inputColocar) {

    let areaTextoTemporal = document.createElement("textarea");
    areaTextoTemporal.value = inputColocar.textContent; // o innerText según tu necesidad

    // Añade el área de texto temporal al documento
    document.body.appendChild(areaTextoTemporal);

    // Selecciona y copia el texto
    areaTextoTemporal.select();
    document.execCommand("copy");

    // Elimina el área de texto temporal
    document.body.removeChild(areaTextoTemporal);

    alert("Texto copiado al portapapeles");
}

function encriptar(inputDatos, inputColocar, imagen) {
  let datos = inputDatos.value;

  // validamos que no vengan caracteres especiales ni mayusculas

  datos.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // se incripta el datos

  let encriptado = datos
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  //---------------------

  inputColocar.innerHTML = encriptado;
  inputDatos.value = "";
  imagen.style.display = "none";
  inputColocar.style.display = "block";
}

function desencriptar(inputDatos, inputColocar, imagen) {
  let datos = inputDatos.value;

  // se incripta el datos
  let desencriptado = datos
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/ai/g, "a")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e");

  //---------------------
  inputColocar.innerHTML = desencriptado;
  inputDatos.value = "";
  imagen.style.display = "none";
  inputColocar.style.display = "block";
}
