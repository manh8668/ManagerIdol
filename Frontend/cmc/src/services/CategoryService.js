import axios from 'axios';

const API_CATEGORY_URL = 'http://localhost:8080/admin/category',
    API_CATEGORY_ADD = 'http://localhost:8080/admin/category/add',
    API_CATEGORY_UPDATE = 'http://localhost:8080/admin/category/update',
    API_CATEGORY_DELETE = 'http://localhost:8080/admin/category/delete',
    API_CATEGORY_SEARCH = 'http://localhost:8080/admin/category/?query=',
    API_CATEGORY_ID = 'http://localhost:8080/admin/category/id';

class CategoryService {
    getCategoryList() {
        return axios.get(API_CATEGORY_URL);
    }

    addCategory(category) {
        return axios.post(API_CATEGORY_ADD, category);
    }

    updateCategory(category) {
        return axios.post(API_CATEGORY_UPDATE, category);
    }
    deleteCategory(id) {
        return axios.get(API_CATEGORY_DELETE + '?id=' + id);
    }

    getCategoryById(id) {
        return axios.get(API_CATEGORY_ID + '?id=' + id);
    }

    searchCategory(query) {
        return axios.get(API_CATEGORY_SEARCH + query);
    }
}

export default new CategoryService();
