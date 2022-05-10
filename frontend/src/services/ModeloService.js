import axios from "axios";

export default class ModeloService {

    url = "http://192.168.1.136:8080/modelo/";

    obtenModelos(id) {
        return axios.get(this.url + "list/" + id);
    }

    nuevoModelo(marca) {
        return axios.post(this.url + "new", marca);
    }

    existeModelo(modelo) {
        return axios.get(this.url + "exists/modelo/" + modelo);
    }

}