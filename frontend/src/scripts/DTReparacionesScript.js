import ReparacionService from "../services/ReparacionService.js";
import DTReparaciones from '../components/DTReparaciones.vue';
import MecanicoService from '../services/MecanicoService.js';

export default {
    components: {
        DTReparaciones
    },
    data() {
        return {
            dialogoReparacion: false,
            terminarReparacion: false,
            loading: false,
            totalRecords: 0,
            page: 0,
            lazyParams: {},
            numReg: 10,
            fieldSort: null,
            orderSort: null,
            reparaciones: null,
            selectedReparacion: null,
            buscarNombre: null,
            selectedMecanico: null,
            mecanicos: null,
            recogerId: null,
            reparacion: {
                id: null,
                estado: null,
                mecanico: {
                    id: null
                }
            },
            selectedEstado: null,
            estados: [{
                name: 'En espera', value: 0
            },
            {
                name: 'En Reparación', value: 1
            },
            {
                name: 'Finalizado', value: 2
            }],
        };
    },
    reparacionesService: null,
    mecanicosService: null,
    created() {
        this.reparacionesService = new ReparacionService();
        this.mecanicosService = new MecanicoService();
    },
    mounted() {
        this.lazyParams = {
            first: 0,
            rows: this.$refs.dt.rows,
            sortOrder: null,
            sortField: null,
            page: 0,
        };
        this.loadLazyData();
    },
    methods: {
        loadLazyDataMecanicos() {
            this.mecanicosService.buscarPorNombre(this.buscarNombre).then((data) => {
                this.mecanicos = data.data;
            });
        },
        loadLazyData() {
            this.loading = true;
            this.reparacionesService
                .obtnReparaciones(
                    this.page,
                    this.numReg,
                    this.fieldSort,
                    this.orderSort
                )
                .then((data) => {
                    this.reparaciones = data.data.content;
                    this.totalRecords = data.data.totalElements;
                    this.loading = false;
                    console.log(this.reparaciones);
                });
        },
        recharge() {
            location.reload();
        },
        onPage(event) {
            this.lazyParams = event;
            this.page = this.lazyParams.page;
            this.loadLazyData();
        },
        onSort(event) {
            this.lazyParams = event;
            this.page = this.lazyParams.page;

            this.fieldSort = this.lazyParams.sortField;

            if (this.lazyParams.sortOrder == 1) {
                this.orderSort = "asc";
            } else {
                this.orderSort = "desc";
            }

            this.loadLazyData();
        },
        openDialog() {
            if (this.selectedReparacion == null) {
                alert("No se ha seleccionado ninguna reparación");
            } else {
                this.reparacion = this.selectedReparacion;
                this.dialogoReparacion = true;
            }
        },
        openDialog2() {
            if (this.selectedReparacion == null) {
                alert("No se ha seleccionado ninguna reparación");
            } else {
                this.reparacion = this.selectedReparacion;
                this.terminarReparacion = true;
            }
        },
        closeDialog() {
            this.dialogoReparacion = false;
        },
        closeDialog2() {
            this.terminarReparacion = false;
        },
        recargarID() {
            this.reparacion = this.selectedReparacion;
        },
        asignarReparacion() {

            this.mecanicosService.retornaId(document.getElementById("dniMec").textContent).then((data) => {
                this.recogerId = data.data;

                this.reparacionesService.asignRep(this.selectedReparacion.id, this.recogerId).then((data) => {
                    if (data.status === 200) {
                        this.$toast.add({ severity: 'success', summary: 'Correcto', detail: 'Trabajo asignado correctamente', life: 3000 });
                        this.reparacion = {
                            id: null,
                            estado: null,
                            mecanico: {
                                id: null
                            }
                        }
                        location.reload();
                    }
                });
            });
        },
        finalizarReparacion() {
            if (this.selectedReparacion == null) {
                this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Debe seleccionar una reparación', life: 3000 });
            } else if (this.selectedReparacion.mecanico == null) {
                this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Debe tener asignado un mecánico para finalizar', life: 3000 });
            } else {
                this.reparacionesService.finalizarReparacion(this.selectedReparacion.id).then((data) => {
                    if (data.status === 200) {
                        this.$toast.add({ severity: 'success', summary: 'Reparación finalizada', detail: 'Se ha finalizado la reparación correctamente', life: 3000 });
                        location.reload();
                    }
                });
            }
        },
        buscarReparacion() {
            if (document.getElementById("busqueda").value == "") {
                this.loadLazyData();
            } else {
                this.reparacionesService.searchRepair(document.getElementById("busqueda").value).then((data) => {
                    this.reparaciones = data.data;
                });
            }
        }
    },
};