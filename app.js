const cajaModal = document.getElementById("modalInicio");
const modalBienvenida = new bootstrap.Modal(cajaModal);
const miVideo = document.getElementById("videoModulo");
const btnGenerarEncuesta = document.getElementById("GenerarEncuesta");
modalBienvenida.show();

document.getElementById("GenerarEncuesta").disabled = true;
document.getElementById("btnPregunta2").disabled = true;
document.getElementById("salir").disabled = true;

btnGenerarEncuesta.addEventListener("click", function() {
    document.getElementById("btnPregunta2").disabled = true;
    document.getElementById("salir").disabled = true;
});
miVideo.addEventListener("ended", function() {
    document.getElementById("GenerarEncuesta").disabled = false;
});
document.getElementById("btnEvaluar").addEventListener("click", function() {
    const seleccion = document.querySelector('input[name="pregunta1"]:checked');
    const cajaMensaje = document.getElementById("resultadoEncuesta");
    document.getElementById("btnPregunta2").disabled = true;
    document.getElementById("salir").disabled = true;

    if (seleccion.value === "B") {
        cajaMensaje.innerHTML = '<div class="alert alert-success mb-0">✅ ¡Correcto! Aguante Los Tres.</div>  ';
        document.getElementById("btnPregunta2").disabled = false;
    } else {
        cajaMensaje.innerHTML = '<div class="alert alert-danger mb-0">❌ Incorrecto, intenta de nuevo.</div>';
    }           
});

document.getElementById("btnEvaluar2").addEventListener("click", function() {
    const seleccion = document.querySelector('input[name="pregunta2"]:checked');
    const cajaMensaje = document.getElementById("resultadoEncuesta2");

    if (seleccion.value === "C") {
        cajaMensaje.innerHTML = '<div class="alert alert-success mb-0">✅ ¡Correcto! Aguante Los Tres.</div>  ';
        document.getElementById("salir").disabled = false;
    } else {
        cajaMensaje.innerHTML = '<div class="alert alert-danger mb-0">❌ Incorrecto, intenta de nuevo.</div>';
    }           
});
