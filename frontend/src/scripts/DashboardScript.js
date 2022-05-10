import ClienteService from '../services/ClienteService.js';
import VehiculoService from '../services/VehiculoService.js';
import ReparacionService from '../services/ReparacionService.js';
import Dashboard from '../components/Dashboard.vue';

export default {
    components: {
        Dashboard,
    },
    data() {
        return {
            totalClientes: 0,
            totalReparaciones: 0,
            totalVehiculos: 0,
            reparaciones: null,
            numReg: 3,
        }
    },
    clienteService: null,
    vehiculoService: null,
    reparacionService: null,
    created() {
        this.clienteService = new ClienteService();
        this.vehiculoService = new VehiculoService();
        this.reparacionService = new ReparacionService();
    },
    mounted() {
        this.countClientes();
        this.countVehiculos();
        this.countReparaciones();
        this.loadLazyDataReparaciones();
    },
    methods: {
        countClientes() {
            this.clienteService.countClientes().then((data) => {
                this.totalClientes = data.data;
            })
        },
        countVehiculos() {
            this.vehiculoService.countVehiculos().then((data) => {
                this.totalVehiculos = data.data;
            })
        },
        countReparaciones() {
            this.reparacionService.countReparaciones().then((data) => {
                this.totalReparaciones = data.data;
            })
        },
        loadLazyDataReparaciones() {
            this.reparacionService.ultimasReparaciones().then((data) => {
                this.reparaciones = data.data;
            });
        },
        recharge(){
            location.reload();
        }

    },
}