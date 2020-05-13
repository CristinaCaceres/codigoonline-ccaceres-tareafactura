let inputNombre = document.getElementById("inputNombre");
let inputRuc = document.getElementById("inputRuc");
let inputFecha = document.getElementById("inputFecha");
let inputNro = document.getElementById("inputNro");

let inputCantidad = document.getElementById("inputCantidad");
let inputDescripcion = document.getElementById("inputDescripcion");
let inputPUnit = document.getElementById("inputPUnit");
let inputPTotal = document.getElementById("inputPTotal");

let inputTotal2 = document.getElementById("inputTotal2");

let listaArticulos = document.getElementById("tabla__body");
let articulos = [];
let factura = [];
let suma_total = 0.00;

const agregarArticulos = () => {
  listaArticulos.innerHTML = "";
  articulos.forEach(a => {
    let tr = document.createElement("tr");
    tr.setAttribute("class", "tabla__tr");

    let td_cantidad = document.createElement("td");
    td_cantidad.setAttribute("class", "td__cantidad");
    td_cantidad.innerText = a.cantidad;

    let td_descripcion = document.createElement("td");
    td_descripcion.setAttribute("class", "td__descripcion");
    td_descripcion.innerText = a.descripcion;

    let td_punitario = document.createElement("td");
    td_punitario.setAttribute("class", "td__punitario");
    td_punitario.innerText = a.precio_unitario;

    let td_ptotal = document.createElement("td");
    td_ptotal.setAttribute("class", "td__ptotal");
    td_ptotal.innerText = a.precio_total;


    tr.appendChild(td_cantidad);
    tr.appendChild(td_descripcion);
    tr.appendChild(td_punitario);
    tr.appendChild(td_ptotal);

    listaArticulos.appendChild(tr);
  })
  // elemento.focus() => forza al cursor a enforcarse o ubicarse en un elemento
  // en este caso, en el input
  inputCantidad.focus();
}

/*  inputTarea.onkeyup = e => {
   if (e.keyCode === 13) {
    // elemento.click(), forza el click de un elemento
    btnAgregar.click();
   }
  }
  */

btnGuardar.onclick = () => {
  
    let objArticulo = {
      cantidad: inputCantidad.value,
      descripcion: inputDescripcion.value,
      precio_unitario: inputPUnit.value,
      precio_total: inputPTotal.value
    }

    articulos.push(objArticulo);
    console.log(articulos);

    suma_total = suma_total + parseFloat(articulos[articulos.length-1].precio_total);

    console.log(articulos[articulos.length-1].precio_total);
    console.log(suma_total);

    inputTotal2.value = suma_total.toFixed(2);
    
    // limpiando el input luego de ingresar un articulo
    inputCantidad.value = "";
    inputDescripcion.value = "";
    inputPUnit.value = "";
    inputPTotal.value = "0.00";
    // agregar a la tabla de artículos
    agregarArticulos();

    
  
}

btnGuardarTodo.onclick = () => {
  let objFactura = {
    razonsocial: inputNombre.value,
    ruc: inputRuc.value,
    fecha: inputFecha.value,
    nro: inputNro.value,
    total: inputTotal2.value,
    articulos
  }

  factura.push(objFactura);
  console.log(factura);

  // limpiando todo
  inputNombre.value = "";
  inputRuc.value = "";
  inputFecha.value = "";
  inputNro.value = "";

  inputCantidad.value = "";
  inputDescripcion.value = "";
  inputPUnit.value = "";
  inputPTotal.value = "0.00";

  inputTotal2.value = "0.00";

  suma_total = 0;

  console.log(listaArticulos.remove());
  
  
}

inputPUnit.onkeyup = () => {
  inputPTotal.value = (inputCantidad.value * inputPUnit.value).toFixed(2);
  /*console.log(inputPTotal);*/
}

inputCantidad.onkeyup = () => {
  inputPTotal.value = (inputCantidad.value * inputPUnit.value).toFixed(2);
}
