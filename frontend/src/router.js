import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import DTClientes from './components/DTClientes.vue';
import DTVehiculos from './components/DTVehiculos.vue';
import DTMecanicos from './components/DTMecanicos.vue';
import DTReparaciones from './components/DTReparaciones.vue';
import DTMarcas from './components/DTMarcas.vue';
import FormCliente from './components/FormCliente.vue';
import FormMecanico from './components/FormMecanico.vue';
import FormVehiculo from './components/FormVehiculo.vue';
import FormReparacion from './components/FormReparacion.vue';
import Ayuda from './components/Ayuda.vue';

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/lista-clientes',
        name: 'Listado Clientes',
        component: DTClientes
    },
    {
        path: '/lista-vehiculos',
        name: 'Listado Vehiculos',
        component: DTVehiculos
    },
    {
        path: '/lista-mecanicos',
        name: 'Listado Mecánicos',
        component: DTMecanicos
    },
    {
        path: '/lista-reparaciones',
        name: 'Listado Reparaciones',
        component: DTReparaciones
    },
    {
        path: '/listado-marcas',
        name: 'Listado Marcas',
        component: DTMarcas
    },
    {
        path: '/nuevo-cliente',
        name: 'Nuevo Cliente',
        component: FormCliente
    },
    {
        path: '/nuevo-mecanico',
        name: 'Nuevo Mecánico',
        component: FormMecanico
    },
    {
        path: '/nuevo-vehiculo',
        name: 'Nuevo Vehículo',
        component: FormVehiculo
    },
    {
        path: '/nueva-reparacion',
        name: 'Nueva Reparación',
        component: FormReparacion
    },
    {
        path: '/ayuda',
        name: 'Ayuda',
        component: Ayuda
    }
    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
