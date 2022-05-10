import axios from "axios";

export default class MarcaService {

    url = "http://192.168.1.136:8080/marca/";

    obtnMarcas() {
        return axios.get(this.url + "list");
    }

    obtnMarcasPag(page, numReg, fieldSort, orderSort) {
        if (fieldSort != null && orderSort != null) {
            return axios.get(this.url + "paged?page=" + page + "&size=" + numReg + "&sort=" + fieldSort + "," + orderSort);
        } else {
            return axios.get(this.url + "paged?page=" + page + "&size=" + numReg);
        }
    }

    nuevaMarca(marca) {
        return axios.post(this.url + "new", marca);
    }

    recogerId(marca) {
        return axios.get(this.url + "recoger/id/" + marca);
    }

    existeMarca(marca) {
        return axios.get(this.url + "exists/marca/" + marca);
    }

    buscarMarca(busq, page, numReg) {
        return axios.get(this.url + "search/marca/" + busq + "?page=" + page + "&size=" + numReg);
    }

}