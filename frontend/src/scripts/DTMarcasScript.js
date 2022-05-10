import MarcaService from '../services/MarcaService.js';
import ModeloService from '../services/ModeloService.js';

export default {
    data() {
        return {
            loading: false,
            page: 0,
            pageMo: 0,
            numReg: 10,
            marcas: null,
            totalRecords: 0,
            lazyParams: {},
            expandedRows: [],
            modelos: null,
            nuevaMarcaDialog: false,
            nuevoModeloDialog: false,
            marca: {
                id: null,
                nombre: null
            },
            modelo: {
                id: null,
                marca: {
                    id: null
                },
                nombre: null
            },
            selectionMarca: null,
            fieldSort: null,
            orderSort: null
        }
    },
    marcaService: null,
    modeloService: null,
    created() {
        this.marcaService = new MarcaService();
        this.modeloService = new ModeloService();
    },
    mounted() {
        this.lazyParams = {
            first: 0,
            rows: this.$refs.dt.rows,
            sortField: null,
            sortOrder: null,
            page: 0,
        };
        this.loadLazyData();
    },
    methods: {
        loadLazyData() {
            this.marcaService.obtnMarcasPag(this.page, this.numReg, this.fieldSort, this.orderSort).then((data) => {
                this.marcas = data.data.content;
                this.totalRecords = data.data.totalElements;
            });
        },
        loadLazyDataModelos() {
            this.modeloService.obtenModelos().then((data) => {
                this.modelos = data.data;
            });
        },
        onRowExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Vehículos expandido', detail: event.data.nombre, life: 3000 });
            this.modeloService.obtenModelos(event.data.id).then((data) => {
                this.modelos = data.data;
            });

        },
        onRowCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Vehículo Collapsed', detail: event.data.nombre, life: 3000 });
        },
        openDialog() {
            this.nuevaMarcaDialog = true;
        },
        openDialogModelo() {
            if (this.selectionMarca == null) {
                this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Debe seleccionar una marca', life: 3000 });
            } else {
                this.nuevoModeloDialog = true;
            }
        },
        closeDialog() {
            this.nuevaMarcaDialog = false;
        },
        closeDialogModelo() {
            this.nuevoModeloDialog = false;
        },
        nuevaMarca() {

            if (document.getElementById("marca").value == "") {
                this.$toast.add({ severity: 'error', summary: 'Error', detail: 'El campo está vacío', life: 3000 });
            } else {
                this.marcaService.existeMarca(document.getElementById("marca").value).then((data) => {
                    if (data.data === true) {
                        this.$toast.add({ severity: 'error', summary: 'Error', detail: 'La marca ya está registrada', life: 3000 });
                    } else {
                        this.marcaService.nuevaMarca(this.marca).then((data) => {
                            if (data.status === 200) {
                                this.closeDialog();
                                this.marca = {
                                    id: null,
                                    marca: null,
                                }
                                this.loadLazyData();
                                this.$toast.add({ severity: 'success', summary: 'Marca añadida', detail: "Se ha guardado correctamente", life: 3000 });
                            }
                        });
                    }
                });
            }

        },
        nuevoModelo() {

            if (document.getElementById("modelo").value == "") {
                this.$toast.add({ severity: 'error', summary: 'Error', detail: 'El campo está vacío', life: 3000 });
            } else {
                this.modelo = {
                    id: null,
                    marca: {
                        id: this.selectionMarca.id
                    },
                    nombre: document.getElementById("modelo").value,
                };
                console.log(this.modelo);
                this.modeloService.existeModelo(document.getElementById("modelo").value).then((data) => {
                    if (data.data === true) {
                        this.$toast.add({ severity: 'error', summary: 'Error', detail: 'El modelo ya está registrado', life: 3000 });
                    } else {
                        this.modeloService.nuevoModelo(this.modelo).then((data) => {
                            if (data.status === 200) {
                                this.$toast.add({ severity: 'success', summary: 'Correcto', detail: 'Se ha añadido correctamente', life: 3000 });
                                this.closeDialogModelo();
                                this.modelo = {
                                    id: null,
                                    marca: {
                                        id: null
                                    },
                                    nombre: null
                                }
                                this.loadLazyData();
                            }
                        });
                    }
                });

            }

        },
        onPage(event) {
            this.lazyParams = event;
            this.page = this.lazyParams.page;

            if(document.getElementById("busqueda").value == ""){
                this.loadLazyData();
            } else {
                this.buscarMarca();
            }
        },
        onSort(event) {
            this.lazyParams = event;
            this.page = this.lazyParams.page;
            this.fieldSort = this.lazyParams.sortField;

            if (this.lazyParams.sortOrder == 1) {
                this.orderSort = 'asc';
            } else {
                this.orderSort = 'desc';
            }

            this.loadLazyData();
        },
        buscarMarca() {
            if (document.getElementById("busqueda").value == "") {
                this.loadLazyData();
            } else {
                this.marcaService.buscarMarca(document.getElementById("busqueda").value, this.page, this.numReg).then((data) => {
                    this.marcas = data.data.content;
                    this.totalRecords = data.data.totalElements;
                });
            }
        }

    },
}