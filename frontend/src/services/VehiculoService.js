import axios from 'axios';

export default class VehiculoService {

    url = "http://192.168.1.136:8080/vehiculo/";

    obtnVehiculos(page, numReg, fieldSort, orderSort) {
        if (fieldSort != null && orderSort != null) {
            return axios.get(this.url + "paged?page=" + page + "&size=" + numReg + "&sort=" + fieldSort + "," + orderSort);
        } else {
            return axios.get(this.url + "paged?page=" + page + "&size=" + numReg);
        }
    }

    countVehiculos() {
        return axios.get(this.url + "total");
    }

    nuevoVehiculo(vehiculo) {
        return axios.post(this.url + "new", vehiculo);
    }

    buscarVehiculo(matricula, page, numReg) {
        return axios.get(this.url + "search/matricula/" + matricula + "?page=" + page + "&size=" + numReg);
    }

    existeMatricula(matricula) {
        return axios.get(this.url + "exists/matricula/" + matricula);
    }

}