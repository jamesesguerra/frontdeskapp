import axios from "axios";


const BASE_URL = "http://localhost:5001/customers";

const getAll = () => {
    const request = axios.get(BASE_URL);
    return request.then(response => response.data);
}

const create = (firstName, lastName, phoneNumber) => {
    const newCustomer = { firstName, lastName, phoneNumber };
    const request = axios.post(BASE_URL, newCustomer);
    return request.then(response => response.data);
}

export default { getAll, create };
