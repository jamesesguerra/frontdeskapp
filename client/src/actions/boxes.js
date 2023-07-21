import axios from "axios";


const BASE_URL = "http://localhost:5001/boxes";

const getAll = () => {
    const request = axios.get(BASE_URL);
    return request.then(response => response.data);
}

const create = (customer, size, dateStored) => {
    const newBox = { customer, size, dateStored };
    const request = axios.post(BASE_URL, newBox);
    return request.then(response => response.data)
}

const retrieve = (box) => {
    const request = axios.put(BASE_URL, box);
    return request.then(response => response.data).catch(error => console.log(error));
}

export default { getAll, create, retrieve };
