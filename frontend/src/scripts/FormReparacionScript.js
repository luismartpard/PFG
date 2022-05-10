import ReparacionService from '../services/ReparacionService.js';
import VehiculoService from '../services/VehiculoService.js';

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            vehiculos: null,
            numReg: 10,
            reparacion: {
                id: null,
                vehiculo: {
                    id: null
                },
                descliente: null,
                entrada: null,
            },
            lazyParams: {},
            page: 0,
            selectedVehiculo: null,
            vehiculo: {
                id: null
            },
            reparacionDialog: false,
            fecha: null
        }
    },
    reparacionService: null,
    vehiculoService: null,
    created() {
        this.reparacionService = new ReparacionService();
        this.vehiculoService = new VehiculoService();
    },
    mounted() {
        this.lazyParams = {
            first: 0,
            rows: this.$refs.dt.rows,
            page: 0
        };
        this.loadLazyData();
    },
    methods: {
        loadLazyData() {
            this.loading = true;
            this.vehiculoService.obtnVehiculos(this.page, this.numReg).then((data) => {
                this.vehiculos = data.data.content;
                this.totalRecords = data.data.totalElements;
                this.loading = false;
            });
        },
        nuevaReparacion() {

            if(this.checkDesc() == true && this.checkFecha() == true){
                this.reparacion = {
                    id: null,
                    vehiculo: {
                        id: this.selectedVehiculo.id
                    },
                    descliente: document.getElementById("descliente").value,
                    entrada: document.getElementById("fentrada").value,
                }
                this.reparacionService.nuevaReparacion(this.reparacion).then((data) => {
                    if (data.status === 200) {
                        this.reparacionDialog = false;
                        location.reload();
                        this.$toast.add({ severity: 'success', summary: 'Correcto', detail: 'Se ha añadido la reparación', life: 3000 });
                        this.$toast.add({ severity: 'warn', summary: 'Advertencia', detail: 'Asigne un mecánico en la tabla reparaciones', life: 3000 });
                    }
                });
            } else {
                this.checkDesc();
                this.checkFecha();
            }

 
        },
        buscarVehiculo() {

            if (document.getElementById("busqueda").value == "") {
                this.loadLazyData();
            } else {
                this.loading = true;
                this.vehiculoService.buscarVehiculo(document.getElementById("busqueda").value).then((data) => {
                    this.vehiculos = data.data.content;
                    this.totalRecords = data.data.totalElements;
                    this.loading = false;
                });
            }
        },
        onPage(event) {
            this.lazyParams = event;
            this.page = this.lazyParams.page;

            if (document.getElementById("busqueda").value == "") {
                this.loadLazyData();
            } else {
                this.buscarVehiculo();
            }
        },
        openDialog() {
            if (this.selectedVehiculo == null) {
                this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Debe seleccionar un vehículo', life: 3000 });
            } else {
                this.reparacionDialog = true;
            }
        },
        closeDialog() {
            this.reparacionDialog = false;
        },
        checkDesc() {
            if (document.getElementById("descliente").value == "") {
                document.getElementById("descliente").classList.add("p-invalid");
                document.getElementById("validation-descliente").innerHTML = "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else {
                document.getElementById("descliente").classList.remove("p-invalid");
                document.getElementById("validation-descliente").innerHTML = "";
                return true;
            }
        },
        checkFecha() {
            if (document.getElementById("fentrada").value == "") {
                document.getElementById("fentrada").classList.add("p-invalid");
                document.getElementById("validation-fentrada").innerHTML = "<small class='p-error'>El campo es obligatorio</small>";
                return false;
            } else {
                document.getElementById("fentrada").classList.remove("p-invalid");
                document.getElementById("validation-fentrada").innerHTML = "";
                return true;
            }
        },
        checkContentDesc() {
            if (document.getElementById("descliente").value != "") {
                document.getElementById("descliente").classList.remove("p-invalid");
                document.getElementById("validation-descliente").innerHTML = "";
            }
        },
    },
}