import axios from "axios";

export default class MecanicoService {

    url = "http://192.168.1.136:8080/mecanico/";

    obtnMecanicos(page, numReg, fieldOrder, orderSort) {
        if (fieldOrder != null && orderSort != null) {
            return axios.get(this.url + "paged?page=" + page + "&size=" + numReg + "&sort=" + fieldOrder + "," + orderSort);
        } else {
            return axios.get(this.url + "paged?page=" + page + "&size=" + numReg);
        }

    }

    nuevoMecanico(mecanico) {
        return axios.post(this.url + "new", mecanico);
    }

    darBaja(id) {
        return axios.get(this.url + "delete/" + id);
    }

    darAlta(id) {
        return axios.get(this.url + "update/" + id);
    }

    existeDni(dni) {
        return axios.get(this.url + "exists/dni/" + dni);
    }

    existeTelefono(telefono) {
        return axios.get(this.url + "exists/telefono/" + telefono);
    }

    buscarPorNombre(nombre) {
        return axios.get(this.url + "search/mecanico/" + nombre);
    }

    retornaId(dni) {
        return axios.get(this.url + "return/" + dni);
    }

    buscarMecanico(nombre, page) {
        return axios.get(this.url + "search/mecanico/nombre/" + nombre+"?page="+page+"&size=10");
    }

}