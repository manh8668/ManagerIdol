import axios from 'axios';

const API_IDOL_URL = 'http://localhost:8080/admin/idol',
    API_IDOL_ADD = 'http://localhost:8080/admin/idol/add',
    API_IDOL_UPDATE = 'http://localhost:8080/admin/idol/update',
    API_IDOL_DELETE = 'http://localhost:8080/admin/idol/delete',
    API_IDOL_SEARCH = 'http://localhost:8080/admin/idol/?query=',
    API_IDOL_ID = 'http://localhost:8080/admin/idol/id';

class IdolService {
    getIdolList() {
        return axios.get(API_IDOL_URL);
    }

    addIdol(idol) {
        return axios.post(API_IDOL_ADD, idol);
    }

    updateIdol(idol) {
        return axios.post(API_IDOL_UPDATE, idol);
    }
    deleteIdol(id) {
        return axios.get(API_IDOL_DELETE + '?id=' + id);
    }

    getIdolById(id) {
        return axios.get(API_IDOL_ID + '?id=' + id);
    }

    searchIdol(query) {
        return axios.get(API_IDOL_SEARCH + query);
    }
}

export default new IdolService();
