let BotonNombre = document.getElementById('seleccionarNombre')

BotonNombre.addEventListener('click', DatosPersonales)

function DatosPersonales(){
    let inputNombreUno = document.getElementById('NombreUno')
    let inputNombreDos = document.getElementById('NombreDos')
    let inputNombreTres = document.getElementById('NombreTres')
    let SpanNombre = document.getElementById('spanNombre')

    if (inputNombreUno.checked){
        SpanNombre.innerHTML = 'Vanesa Restrepo'
    }
    else if  (inputNombreDos.checked){
        SpanNombre.innerHTML = 'Omar Agudelo'
    }
    else if  (inputNombreTres.checked){
        SpanNombre.innerHTML = 'Mary Luz'
    }
    else (alert("Debe seleccionar un nombre"))
}

let BotonDocumento = document.getElementById('SeleccionarDocumento')

BotonDocumento.addEventListener('click', DatosPersonales)

function DatosPersonales(){
    let inputCedula = document.getElementById('Cedula')
    let inputNid = document.getElementById('Nid')
    let inputPasaporte = document.getElementById('Pasaporte')
    let SpanTipoDocumento = document.getElementById('TipoDocumento')

    if (inputCedula.checked){
        SpanTipoDocumento.innerHTML = 'Cedula'
    }
    else if  (inputNid.checked){
        SpanNombre.innerHTML = 'Nid'
    }
    else if  (inputPasaporte.checked){
        SpanNombre.innerHTML = 'Pasaporte'
    }
    else (alert("Debe seleccionar un nombre"))
}

