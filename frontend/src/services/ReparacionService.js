import axios from "axios";

export default class ReparacionService {

    url = "http://192.168.1.136:8080/reparacion/";

    obtnReparaciones(page, numReg, fieldSort, orderSort) {
        if (fieldSort != null && orderSort != null) {
            return axios.get(this.url + "paged?page=" + page + "&size=" + numReg + "&sort=" + fieldSort + "," + orderSort);
        } else {
            return axios.get(this.url + "paged?page=" + page + "&size=" + numReg);
        }
    }

    countReparaciones() {
        return axios.get(this.url + "total");
    }

    asignRep(idRep, IdMec) {
        return axios.get(this.url + "assign/" + idRep + "," + IdMec);
    }

    searchRepair(id) {
        return axios.get(this.url + "search/repair/" + id);
    }

    nuevaReparacion(reparacion) {
        return axios.post(this.url + "new", reparacion);
    }

    finalizarReparacion(id) {
        return axios.get(this.url + "finalize/" + id);
    }

    ultimasReparaciones() {
        return axios.get(this.url + "/ultimas");
    }

}