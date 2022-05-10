import VehiculoService from "../services/VehiculoService.js";
import DTVehiculos from '../components/DTVehiculos.vue';
export default {
    components: {
        DTVehiculos
    },
    data() {
        return {
            loading: false,
            numReg: 10,
            vehiculos: null,
            page: 0,
            totalRecords: 0,
            lazyParams: {},
            selectionVehiculo: null,
            fieldSort: null,
            orderSort: null,
        };
    },
    vehiculoService: null,
    created() {
        this.vehiculoService = new VehiculoService();
    },
    mounted() {
        this.lazyParams = {
            first: 0,
            rows: this.$refs.dt.rows,
            sortField: null,
            sortOrder: null,
            filters: this.filters,
            page: 0,
        };
        this.loadLazyData();
    },
    methods: {
        loadLazyData() {
            this.loading = true;
            this.vehiculoService
                .obtnVehiculos(this.page, this.numReg, this.fieldSort, this.orderSort)
                .then((data) => {
                    this.vehiculos = data.data.content;
                    this.totalRecords = data.data.totalElements;
                    this.loading = false;
                });
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
                this.orderSort = 'asc';
            } else {
                this.orderSort = 'desc';
            }

            this.loadLazyData();

        },
        recharge() {
            location.reload();
        },
    },
};