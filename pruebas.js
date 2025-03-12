        function copiarTexto() {
            // Texto que se copiará al portapapeles
            const texto = "1240372@alumno.um.edu.mx";

            // Crear un elemento de texto temporal
            const tempInput = document.createElement("textarea");
            tempInput.value = texto;
            document.body.appendChild(tempInput);

            // Seleccionar y copiar el texto
            tempInput.select();
            document.execCommand("copy");

            // Eliminar el elemento temporal
            document.body.removeChild(tempInput);

            // Mensaje de confirmación
            alert("Texto copiado: " + texto);
        }
