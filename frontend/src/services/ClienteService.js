import axios from "axios";

export default class ClienteService {

    url = "http://192.168.1.136:8080/cliente/";

    /**
     * Método para obtener registros de forma paginada
     * @param {*} page número de página actual
     * @param {*} numReg número de registros que se van a mostrar(Por defecto es 10)
     * @param {*} fieldSort campo por el que se quiere ordenar
     * @param {*} orderSort tipo de ordenamiento de forma ascendente o descendente
     * @returns devuelve 10 registros de forma paginada
     */
    obtnClientes(page, numReg, fieldSort, orderSort) {

        if (fieldSort != null && orderSort != null) {
            return axios.get(this.url + "paged?page=" + page + "&size=" + numReg + "&sort=" + fieldSort + "," + orderSort);
        } else {
            return axios.get(this.url + "paged?page=" + page + "&size=" + numReg);
        }

    }

    /**
     * Método para añadir un nuevo cliente
     * @param {*} cliente datos del objeto cliente
     * @returns le manda al servidor los datos del cliente 
     * para introducirlo en la base de datos
     */
    nuevoCliente(cliente) {
        return axios.post(this.url + "new", cliente);
    }

    /**
     * Método para borrar de forma lógica a un cliente
     * @param {*} id id del cliente
     * @returns se le pasa el id del cliente para borrarlo de forma lógica
     */
    borrarCliente(id) {
        return axios.get(this.url + "delete/" + id);
    }

    /**
     * Método para comprobar si existe un dni o no en la bbbdd
     * @param {*} dni dni que se va a recoger del formulario
     * @returns retorna true si existe en la bbdd, o false si no existe
     */
    existeDni(dni) {
        return axios.get(this.url + "exists/dni/" + dni);
    }

    /**
     * Método para comprobar si existe un teléfono o no en la bbdd
     * @param {*} telefono telefono que se va a recoger del formulario
     * @returns retorna true si existe en la bbdd, o false si no existe
     */
    existeTelefono(telefono) {
        return axios.get(this.url + "exists/telefono/" + telefono);
    }

    /**
     * Método para saber el total de clientes registrados
     * @returns devuelve el nº de clientes registrados en la bbdd
     */
    countClientes() {
        return axios.get(this.url + "total");
    }


    buscarCliente(nombre, page){
        return axios.get(this.url + "search/nombre/"+nombre+"?page="+page+"&size=10");
    }

}