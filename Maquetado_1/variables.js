const paises = {
    "Argentina": ["Argentino"],
    "Bolivia": ["Boliviano"],
    "Brasil": ["Brasileño"],
    "Chile": ["Chileno"],
    "Colombia": ["Colombiano"],
    "Ecuador": ["Ecuatoriano"],
    "Paraguay": ["Paraguayo"],
    "Perú": ["Peruano"],
    "Uruguay": ["Uruguayo"],
    "Venezuela": ["Venezolano"],
    "México": ["Mexicano"]
};

function actualizarNacionalidad() {
    const paisNacimiento = document.getElementById('paisNacimiento').value;
    const nacionalidadSelect = document.getElementById('nacionalidad');
    nacionalidadSelect.innerHTML = '<option value="">Seleccione una nacionalidad</option>';

    if (paises[paisNacimiento]) {
        paises[paisNacimiento].forEach(nacionalidad => {
            const option = document.createElement('option');
            option.value = nacionalidad;
            option.text = nacionalidad;
            nacionalidadSelect.add(option);
        });
    }

    actualizarPaisEmisionPasaporte();
}

function actualizarPaisEmisionPasaporte() {
    const paisEmisionSelect = document.getElementById('paisEmisionPasaporte');
    paisEmisionSelect.innerHTML = '<option value="">Seleccione un país</option>';

    Object.keys(paises).forEach(pais => {
        const option = document.createElement('option');
        option.value = pais;
        option.text = pais;
        paisEmisionSelect.add(option);
    });
}

$(document).ready(function() {
    $('.select2').select2();
    actualizarPaisEmisionPasaporte();
});