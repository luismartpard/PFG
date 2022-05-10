import MecanicoService from '../services/MecanicoService.js'


export default {
    data() {
        return {
            mecanico: {
                id: null,
                dni: null,
                nombre: null,
                papellido: null,
                sapellido: null,
                telefono: null
            }
        }
    },
    mecanicoService: null,
    created() {
        this.mecanicoService = new MecanicoService();
    },
    mounted() {

    },
    methods: {
        nuevoMecanico() {
            this.mecanicoService.nuevoMecanico(this.mecanico).then((data) => {
                if (data.status === 200) {
                    this.$toast.add({severity:'success', summary: 'Correcto', detail:'Se ha añadido correctamente', life: 3000});
                    this.mecanico = {
                        id: null,
                        dni: null,
                        nombre: null,
                        papellido: null,
                        sapellido: null,
                        telefono: null
                    }
                    location.reload();
                }
            })
        },
        contentDNI() {
            if (document.getElementById("dni").value != null) {
                document.getElementById("dni").classList.remove("p-invalid");
                document.getElementById("validation-dni").innerHTML = "";
            }
        },
        checkLetraDNI() {
            var dni = document.getElementById("dni").value;
            var numero;
            var letr;
            var letra;
            var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

            if (expresion_regular_dni.test(dni) == true) {
                numero = dni.substr(0, dni.length - 1);
                letr = dni.substr(dni.length - 1, 1);
                numero = numero % 23;
                letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
                letra = letra.substring(numero, numero + 1);
                // Comprueba la letra
                if (letra != letr.toUpperCase()) {
                    document.getElementById("dni").classList.add("p-invalid");
                    document.getElementById("validation-dni").innerHTML = "<small class='p-error'>La letra no corresponde al DNI</small>";
                    return false;
                } else {
                    document.getElementById("dni").classList.remove("p-invalid");
                    document.getElementById("validation-dni").innerHTML = "";
                    return true;
                }
            }

        },
        checkDNI() {

            var expr = /^\d{8}[a-zA-Z]$/;

            // Valida si el campo está vacío
            if (document.getElementById("dni").value == "") {
                document.getElementById("dni").classList.remove("p-invalid");
                document.getElementById("validation-dni").innerHTML =
                    "";
                document.getElementById("dni").classList.add("p-invalid");
                document.getElementById("validation-dni").innerHTML =
                    "<small class='p-error'>El campo es obligatorio</small>";
                return false;
                // Válida el formato del DNI
            } else if (document.getElementById("dni").value.length != "" && expr.test(document.getElementById("dni").value) == false) {
                document.getElementById("dni").classList.add("p-invalid");
                document.getElementById("validation-dni").innerHTML =
                    "<small class='p-error'>Formato no válido. Ej: 12345678A</small>";
                return false;
                // Valida la letra del dni
            } else {
                document.getElementById("dni").classList.remove("p-invalid");
                document.getElementById("validation-dni").innerHTML =
                    "";
                return true;
            }

        },
        contentName() {
            if (document.getElementById("nombre").value != null) {
                document.getElementById("nombre").classList.remove("p-invalid");
                document.getElementById("validation-nombre").innerHTML = "";
            }
        },
        checkName() {
            if (document.getElementById("nombre").value == "") {
                document.getElementById("nombre").classList.add("p-invalid");
                document.getElementById("validation-nombre").innerHTML =
                    "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else {
                document.getElementById("nombre").classList.remove("p-invalid");
                document.getElementById("validation-nombre").innerHTML =
                    "";
                return true;
            }
        },
        contentSurname() {
            if (document.getElementById("papellido").value != null) {
                document.getElementById("papellido").classList.remove("p-invalid");
                document.getElementById("validation-papellido").innerHTML = "";
            }
        },
        checkSurname() {
            if (document.getElementById("papellido").value == "") {
                document.getElementById("papellido").classList.add("p-invalid");
                document.getElementById("validation-papellido").innerHTML =
                    "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else {
                document.getElementById("papellido").classList.remove("p-invalid");
                document.getElementById("validation-papellido").innerHTML =
                    "";
                return true;
            }
        },
        contentSSurname() {
            if (document.getElementById("sapellido").value != null) {
                document.getElementById("sapellido").classList.remove("p-invalid");
                document.getElementById("validation-sapellido").innerHTML = "";
            }
        },
        checkSSurname() {
            if (document.getElementById("sapellido").value == "") {
                document.getElementById("sapellido").classList.add("p-invalid");
                document.getElementById("validation-sapellido").innerHTML =
                    "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else {
                document.getElementById("sapellido").classList.remove("p-invalid");
                document.getElementById("validation-sapellido").innerHTML =
                    "";
                return true;
            }
        },
        contentMobile() {
            if (document.getElementById("telefono").value != null) {
                document.getElementById("telefono").classList.remove("p-invalid");
                document.getElementById("validation-telefono").innerHTML = "";
            }
        },
        checkMobile() {

            var expr = /^[9|8|7|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;

            if (document.getElementById("telefono").value == "") {
                document.getElementById("telefono").classList.add("p-invalid");
                document.getElementById("validation-telefono").innerHTML = "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else if (expr.test(document.getElementById("telefono").value == false)) {
                document.getElementById("telefono").classList.add("p-invalid");
                document.getElementById("validation-telefono").innerHTML = "<small class='p-error'>El formato es incorrecto. Ej: 656799322</small>";
                return false;
            } else {
                document.getElementById("telefono").classList.remove("p-invalid");
                document.getElementById("validation-telefono").innerHTML = "";
                return true;
            }
        },
        // Comprueba todo el formulario
        checkForm() {

            if (document.getElementById("dni").value != "") {
                this.mecanicoService.existeDni(document.getElementById("dni").value).then((data) => {
                    if (data.data === false) {
                        return true;
                    } else {
                        document.getElementById("dni").classList.add("p-invalid");
                        document.getElementById("validation-dni").innerHTML =
                            "<small class='p-error'>El dni ya existe</small>";
                        return false;
                    }
                });

            } 
            
            if (document.getElementById("telefono").value != "") {
                this.mecanicoService.existeTelefono(document.getElementById("telefono").value).then((data) => {
                    console.log(data.data);
                    if (data.data === false) {
                        return true;
                    } else {
                        document.getElementById("telefono").classList.add("p-invalid");
                        document.getElementById("validation-telefono").innerHTML =
                            "<small class='p-error'>El teléfono ya existe</small>"
                        return false;
                    }
                });
            }


            if (this.checkDNI() == true && this.checkLetraDNI() == true
                && this.checkName() == true && this.checkSSurname() == true && this.checkSurname() == true
                && this.checkMobile() == true) {
                this.nuevoMecanico();
            } else {
                this.checkDNI();
                this.checkLetraDNI();
                this.checkName();
                this.checkSurname();
                this.checkSSurname();
                this.checkMobile();
            }

        }
    },
}