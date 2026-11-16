const cajaModal = document.getElementById("modalInicio");
const modalBienvenida = new bootstrap.Modal(cajaModal);
const btnGenerarEncuesta = document.getElementById("GenerarEncuesta");

modalBienvenida.show();
document.getElementById("GenerarEncuesta").disabled = false;
// Al abrir la encuesta, bloqueamos los botones "Continuar" hasta que respondan cada pregunta
btnGenerarEncuesta.addEventListener("click", function() {
    document.getElementById("btnPregunta2").disabled = true;
    document.getElementById("btnPregunta3").disabled = true;
    document.getElementById("btnPregunta4").disabled = true;
    document.getElementById("salir").disabled = true;
});

// Evaluación Pregunta 1
document.getElementById("btnEvaluar").addEventListener("click", function() {
    const seleccion = document.querySelector('input[name="pregunta1"]:checked');
    const cajaMensaje = document.getElementById("resultadoEncuesta");

    if (!seleccion) return;

    if (seleccion.value === "C") {
        cajaMensaje.innerHTML = '<div class="alert alert-success mb-0 fw-normal" style="text-align: justify;">✅ <b>¡Correcto!</b> La presencia de sedantes y opioides residuales puede deprimir la actividad neurológica y la respuesta respiratoria al aumento de CO₂, generando resultados falsamente compatibles con muerte por criterios neurológicos. En pacientes con insuficiencia renal o hepática, la eliminación de estos medicamentos puede prolongarse considerablemente. Por ello, es fundamental excluir su efecto antes de realizar e interpretar el test de apnea.</div>';
        document.getElementById("btnPregunta2").disabled = false;
    } else {
        cajaMensaje.innerHTML = '<div class="alert alert-danger mb-0 fw-normal">❌ Incorrecto, intenta de nuevo.</div>';
    }           
});

// Evaluación Pregunta 2
document.getElementById("btnEvaluar2").addEventListener("click", function() {
    const seleccion = document.querySelector('input[name="pregunta2"]:checked');
    const cajaMensaje = document.getElementById("resultadoEncuesta2");

    if (!seleccion) return;

    if (seleccion.value === "B") {
        cajaMensaje.innerHTML = '<div class="alert alert-success mb-0 fw-normal" style="text-align: justify;">✅ <b>¡Correcto!</b> La hipoxemia significativa constituye un criterio de interrupción del test. Se debe priorizar la seguridad del paciente y restablecer la ventilación. Si la gasometría obtenida no demuestra los criterios requeridos, el resultado no puede considerarse concluyente.</div>';
        document.getElementById("btnPregunta3").disabled = false;
    } else {
        cajaMensaje.innerHTML = '<div class="alert alert-danger mb-0 fw-normal">❌ Incorrecto, intenta de nuevo.</div>';
    }           
});

// Evaluación Pregunta 3
document.getElementById("btnEvaluar3").addEventListener("click", function() {
    const seleccion = document.querySelector('input[name="pregunta3"]:checked');
    const cajaMensaje = document.getElementById("resultadoEncuesta3");

    if (!seleccion) return;

    if (seleccion.value === "C") {
        cajaMensaje.innerHTML = '<div class="alert alert-success mb-0 fw-normal" style="text-align: justify;">✅ <b>¡Correcto!</b> La inestabilidad hemodinámica aumenta el riesgo de colapso cardiovascular durante el test. Antes de realizarlo, deben cumplirse los prerrequisitos de estabilidad circulatoria y oxigenación establecidos en el protocolo vigente.</div>';
        document.getElementById("btnPregunta4").disabled = false;
    } else {
        cajaMensaje.innerHTML = '<div class="alert alert-danger mb-0 fw-normal">❌ Incorrecto, intenta de nuevo.</div>';
    }           
});

// Evaluación Pregunta 4
document.getElementById("btnEvaluar4").addEventListener("click", function() {
    const seleccion = document.querySelector('input[name="pregunta4"]:checked');
    const cajaMensaje = document.getElementById("resultadoEncuesta4");

    if (!seleccion) return;

    if (seleccion.value === "A") {
        cajaMensaje.innerHTML = '<div class="alert alert-success mb-0 fw-normal" style="text-align: justify;">✅ <b>¡Correcto!</b> El test es compatible con apnea si no hay esfuerzo respiratorio, la PaCO₂ alcanza al menos 60 mmHg y aumenta al menos 20 mmHg respecto del basal, y el pH es inferior a 7,30. En este caso, la PaCO₂ aumentó 24 mmHg, alcanzó 63 mmHg y el pH descendió a 7,25.</div>';
        document.getElementById("salir").disabled = false;
    } else {
        cajaMensaje.innerHTML = '<div class="alert alert-danger mb-0 fw-normal">❌ Incorrecto, intenta de nuevo.</div>';
    }           
});