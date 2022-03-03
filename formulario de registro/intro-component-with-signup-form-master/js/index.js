
function validarEmail() {
    let correo = document.getElementById("correo");
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo.value)){
        

        alert("La dirección de email " + correo.value + " es correcta.");
    } else {
        alert("La dirección de email es incorrecta.");
    }
}
function ver(){
    let name = document.getElementById("nombre");
    let lastName = document.getElementById("lastName");
    let correo = document.getElementById("correo");
    let contra = document.getElementById("contra");
    let nombre = document.getElementById('errorMensagge1');
    let apellido = document.getElementById('errorMensagge2');
    let email = document.getElementById('errorMensagge3');
    let password = document.getElementById('errorMensagge4');
    if(name.value === ""){
        nombre.style.visibility = "visible";
        name.style.borderColor = "red";
        name.style.backgroundImage = "url(../images/icon-error.svg)";
    }else{
        nombre.style.visibility = "hidden";
        name.style.borderColor = "black";
        name.style.backgroundImage = "none";
    }
    if (lastName.value === "") {
        apellido.style.visibility = "visible";
        lastName.style.borderColor = "red";
        lastName.style.backgroundImage = "url(../images/icon-error.svg)";
    }else{
        apellido.style.visibility = "hidden";
        lastName.style.borderColor = "black";
        lastName.style.backgroundImage = "none";
    }
    if (correo.value === "") {
        email.style.visibility = "visible";
        correo.style.borderColor = "red";
        correo.style.backgroundImage = "url(../images/icon-error.svg)";
        validarEmail(correo.value);
    }else{
        email.style.visibility = "hidden";
        correo.style.borderColor = "black";
        correo.style.backgroundImage = "none";
        validarEmail(correo.value);
    }
    if (contra.value === "") {
        password.style.visibility = "visible";
        contra.style.borderColor = "red";
        contra.style.backgroundImage = "url(../images/icon-error.svg)";
    }else{
        password.style.visibility = "hidden";
        contra.style.borderColor = "black";
        contra.style.backgroundImage = "none";
    }
}
