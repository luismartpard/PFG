import VehiculoService from '../services/VehiculoService.js';
import ClienteService from '../services/ClienteService.js';
import MarcaService from '../services/MarcaService.js';
import ModeloService from '../services/ModeloService.js';

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            numReg: 10,
            selectedCliente: null,
            lazyParams: {},
            clientes: null,
            cliente: {
                id: null,
                dni: null,
                nombre: null,
                papellido: null,
                sapellido: null,
                telefono: null,
            },
            vehiculo: {
                id: null,
                matricula: null,
                marca: null,
                modelo: '500',
                fechacompra: null,
                cilindrada: null,
                potencia: null,
                combustible: null,
                carroceria: 'Turismo',
                transmision: null,
                km: null,
                cliente: {
                    id: null,
                }
            },
            page: 0,
            nuevoVehDialogo: null,
            selectedMarca: null,
            marcas: null,
            selectedModelo: null,
            modelos: null,
            selectedCombustile: null,
            combustibles: [
                {
                    tipo: 'Gasolina',
                },
                {
                    tipo: 'Diésel',
                },
                {
                    tipo: 'Electrico',
                },
                {
                    tipo: 'Hibrído',
                },
                {
                    tipo: 'Hidrógeno'
                }
            ],
            selectedCarrorecia: null,
            carrocerias: [
                { tipo: 'Turismo' },
                { tipo: 'Furgoneta' },
                { tipo: 'Turismo' },
            ],
            selectedTransmision: null,
            transmision: [
                { tipo: 'Manual' },
                { tipo: 'Automático' }
            ],
            fecha: null,
            guardaIdMarca: null,
            guardaIdModelo: null
        };
    },
    vehiculoService: null,
    clienteService: null,
    marcaService: null,
    modeloService: null,
    created() {
        this.vehiculoService = new VehiculoService();
        this.clienteService = new ClienteService();
        this.marcaService = new MarcaService();
        this.modeloService = new ModeloService();
    },
    mounted() {
        this.lazyParams = {
            first: 0,
            rows: this.$refs.dt.row,
            sortField: null,
            sortOrder: null,
            page: 0,
        }
        this.buscarCliente();
    },
    methods: {

        buscarCliente() {
            var busq = document.getElementById("busqueda").value;
            if (busq != "") {
                this.loading = true;
                this.clienteService.buscarCliente(busq, this.page).then((data) => {
                    this.clientes = data.data.content;
                    this.totalRecords = data.data.totalElements;
                    this.loading = false;
                });
            } else {
                this.clientes = null;
                this.totalRecords = 0;
            }

        },
        cargarMarcas() {
            this.marcaService.obtnMarcas().then((data) => {
                this.marcas = data.data;
            });
        },
        cargarModelos() {
            this.marcaService.recogerId(document.getElementById("marcas").textContent).then((data) => {
                this.modeloService.obtenModelos(data.data).then((data) => {
                    this.modelos = data.data;
                });
            });
        },
        openDialog() {
            if (this.selectedCliente === null) {
                this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Debe buscar un cliente', life: 3000 });
            } else {
                this.nuevoVehDialogo = true;
                this.cliente = this.selectedCliente;
            }

        },
        closeDialog() {
            this.nuevoVehDialogo = false;
        },
        onPage(event) {
            this.lazyParams = event;
            this.page = this.lazyParams.page;
            this.buscarCliente();
        },
        contentMatri() {
            if (document.getElementById("matricula").value != "") {
                document.getElementById("matricula").classList.remove("p-invalid");
                document.getElementById("validation-matr").innerHTML = "";
            }
        },
        checkMatricula() {
            var expr = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/gm;

            if (document.getElementById("matricula").value == "") {
                document.getElementById("matricula").classList.add("p-invalid");
                document.getElementById("validation-matr").innerHTML = "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else if (expr.test(document.getElementById("matricula").value) == false) {
                document.getElementById("matricula").classList.add("p-invalid");
                document.getElementById("validation-matr").innerHTML = "<small class='p-error'>La matrícula no es correcta</small>";
                return false;
            } else {
                document.getElementById("matricula").classList.remove("p-invalid");
                document.getElementById("validation-matr").innerHTML = "";
                return true;
            }
        },
        contentMarca() {
            if (document.getElementById("marcas").textContent != "Selecciona una marca") {
                document.getElementById("marcas").classList.remove("p-invalid");
                document.getElementById("validation-marca").innerHTML = "";
            }
        },
        contentModelo() {
            if (document.getElementById("modelos").textContent != "Selecciona una marca") {
                document.getElementById("modelos").classList.remove("p-invalid");
                document.getElementById("validation-modelo").innerHTML = "";
            }
        },
        checkMarca() {
            if (document.getElementById("marcas").textContent == "Selecciona una marca") {
                document.getElementById("marcas").classList.add("p-invalid");
                document.getElementById("validation-marca").innerHTML = "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else {
                document.getElementById("marcas").classList.remove("p-invalid");
                document.getElementById("validation-marca").innerHTML = "";
                return true;
            }
        },
        checkModelo() {
            if (document.getElementById("modelos").textContent == "Selecciona un modelo") {
                document.getElementById("modelos").classList.add("p-invalid");
                document.getElementById("validation-modelo").innerHTML = "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else {
                document.getElementById("modelos").classList.remove("p-invalid");
                document.getElementById("validation-modelo").innerHTML = "";
                return true;
            }
        },
        checkCombustible() {
            if (document.getElementById("combustible").textContent == "Selecciona el tipo de combustible") {
                document.getElementById("combustible").classList.add("p-invalid");
                document.getElementById("validation-combustible").innerHTML = "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else {
                document.getElementById("combustible").classList.remove("p-invalid");
                document.getElementById("validation-combustible").innerHTML = "";
                return true;
            }
        },
        checkPotencia() {
            if (document.getElementById("potencia").value == "") {
                document.getElementById("potencia").classList.add("p-invalid");
                document.getElementById("validation-potencia").innerHTML = "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else {
                document.getElementById("combustible").classList.remove("p-invalid");
                document.getElementById("validation-potencia").innerHTML = "";
                return true;
            }
        },
        checkTransmision() {
            if (document.getElementById("transmision").textContent == "Selecciona el tipo de transmision") {
                document.getElementById("transmision").classList.add("p-invalid");
                document.getElementById("validation-transmision").innerHTML = "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else {
                document.getElementById("combustible").classList.remove("p-invalid");
                document.getElementById("validation-transmision").innerHTML = "";
                return true;
            }
        },
        checkKm() {
            if (document.getElementById("km").value == "") {
                document.getElementById("km").classList.add("p-invalid");
                document.getElementById("validation-km").innerHTML = "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else {
                document.getElementById("combustible").classList.remove("p-invalid");
                document.getElementById("validation-km").innerHTML = "";
                return true;
            }
        },
        checkFecha() {
            if (document.getElementById("fechaCompra").value == "") {
                document.getElementById("fechaCompra").classList.add("p-invalid");
                document.getElementById("validation-fecha").innerHTML = "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else {
                document.getElementById("fechaCompra").classList.remove("p-invalid");
                document.getElementById("validation-fecha").innerHTML = "";
                return true;
            }
        },
        checkForm() {

            if (this.checkMatricula() == true && this.checkMarca() == true &&
                this.checkModelo() == true && this.checkCombustible() == true
                && this.checkPotencia() == true && this.checkKm() == true && this.checkFecha() == true) {
                this.nuevoVehiculo();
            } else {
                this.checkMatricula();
                this.checkMarca();
                this.checkModelo();
                this.checkCombustible();
                this.checkPotencia();
                this.checkTransmision();
                this.checkKm();
                this.checkFecha();
            }

        },
        nuevoVehiculo() {

            // Cogemos el id del vehículo
            this.vehiculoService.existeMatricula(document.getElementById("matricula").value).then((data) => {
                if (data.data === true) {
                    document.getElementById("matricula").classList.add("p-invalid");
                    document.getElementById("validation-matr").innerHTML = "<small class='p-error'>La matricula ya existe</small>";
                } else {
                    this.marcaService.recogerId(document.getElementById("marcas").textContent).then((data) => {
                        this.guardaIdMarca = data.data;

                        this.vehiculo = {
                            id: null,
                            matricula: document.getElementById("matricula").value,
                            marca: {
                                id: this.guardaIdMarca,
                            },
                            modelo: document.getElementById("modelos").textContent,
                            fechacompra: document.getElementById("fechaCompra").value,
                            potencia: document.getElementById("potencia").value,
                            combustible: document.getElementById("combustible").textContent,
                            transmision: document.getElementById("transmision").textContent,
                            km: document.getElementById("km").value,
                            cliente: {
                                id: this.selectedCliente.id,
                            }
                        }

                        this.vehiculoService.nuevoVehiculo(this.vehiculo).then((data) => {
                            if (data.status === 200) {
                                this.nuevoVehDialogo = false;
                                this.$toast.add({severity:'success', summary: 'Añadido', detail:'Se ha añadido correctamente', group: 'br', life: 3000});
                                location.reload();
                            }
                        });

                    });
                }
            });

        }

    },
}