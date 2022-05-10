// Importación de servicios
import ClienteService from "../services/ClienteService.js";
// Importación de componentes
import DTClientes from '../components/DTClientes.vue';

export default {
    components: {
        DTClientes
    },
    data() {
        return {
            // Propiedades para la tabla
            loading: false,
            totalRecords: 0,
            numReg: 10,
            clientes: null,
            lazyParams: {},
            filters: {
                'dni': { value: null, matchMode: 'contains' },
                'nombre': { value: null, matchMode: 'contains' }
            },
            columns: [
                { field: 'dni', header: 'DNI' },
            ],
            // Guarda el nº de página del DataTable en la paginación
            page: 0,
            // Selección del cliente del DataTable
            selectionCliente: null,
            /**
             * - fieldSort = Campo por el que queremos ordenar (dni, nombre...)
             * - orderSort = Si queremos ordenar de forma ascendente o descendente
             */
            fieldSort: null,
            orderSort: null,
        };
    },
    clienteService: null,
    created() {
        this.clienteService = new ClienteService();
    },
    mounted() {
        this.loading = true;
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
        /**
         * Carga los datos en el DataTable
         * - this.page = Es el nº de página de la que queremos ver los datos
         * - this.numReg = por defecto solo se muestra 10 registros
         */
        loadLazyData() {
            this.loading = true;
            this.clienteService
                .obtnClientes(this.page, this.numReg, this.fieldSort, this.orderSort)
                .then((data) => {
                    this.clientes = data.data.content;
                    this.totalRecords = data.data.totalElements;
                    this.loading = false;
                });
        },
        /**
         * Método que sirve para la utilización de la paginación del DataTable...
         * Pasamos el event al lazyParams, donde este contendrá el nº de pagina
         * que hemos seleccionado en el DataTable, y se hace la llamada al método
         * loadLazyData, para que nos muestre los registro de la siguiente pagina
         * - this.page = contiene el nº de pagina seleccionada en el DT
         */
        onPage(event) {
            this.lazyParams = event;
            this.page = this.lazyParams.page;
            this.loadLazyData();
        },
        /**
         * Carga los datos en el DataTable de forma ordenada
         */
        onSort(event) {
            this.lazyParams = event;
            this.page = this.lazyParams.page;

            // Guardamos el campo por el que queremos ordenar
            this.fieldSort = this.lazyParams.sortField;

            /**
             * Si sortOrder == 1, se ordena de forma ascendente
             * Si sortOrder == -1 , se ordena de forma descendente
             */
            if (this.lazyParams.sortOrder == 1) {
                this.orderSort = "asc";
            } else {
                this.orderSort = "desc";
            }

            this.loadLazyData();
        },
        /**
         * Método para filtrar
         */
        onFilter() {
            this.lazyParams.filters = this.filters;
            console.log(this.lazyParams.filters);
        },
        /**
         * Método que recarga la página
         */
        recharge() {
            location.reload();
        },
    },
};