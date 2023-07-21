import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import customerService from "../actions/customers";
import boxService from "../actions/boxes";


const RegisterBoxModal = ({ storedBoxes, setStoredBoxes }) => {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState("");
    const [size, setSize] = useState("");
    const [dateStored, setDateStored] = useState(new Date());

    useEffect(() => {
        customerService
            .getAll()
            .then(customers => setCustomers(customers))
    }, []);

    const handleSubmit = () => {
        boxService
            .create(customer, size, dateStored.toLocaleDateString())
            .then(newBox => {
                setStoredBoxes([...storedBoxes, newBox])
                alert("New box successfully registered.")
            })
            .catch(error => alert(error.response.data))

        setCustomer("");
        setSize("");
    };

    return (
        <div className="modal fade" id="registerBoxModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Register a Box</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <label for="customer" class="form-label">Customer</label>
                    <select
                        id="customer"
                        class="form-select mb-3"
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                    >
                        <option selected>-- Select a Customer --</option>
                        {customers.map((customer, index) => {
                            return (
                                <option 
                                    key={index} 
                                    value={`${customer.firstName} ${customer.lastName}`
                                }>
                                    {customer.id} - {customer.firstName} {customer.lastName}
                                </option>
                            )
                        })}
                    </select>

                    <p>Size</p>

                    <div class="form-check">
                        <input 
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked={size === "small"} 
                            onChange={() => setSize("small")}
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                            small
                        </label>
                    </div>
                    <div class="form-check">
                        <input 
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked={size === "medium"} 
                            onChange={() => setSize("medium")}
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                            medium
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input 
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked={size === "large"} 
                            onChange={() => setSize("large")}
                        />
                        <label class="form-check-label" for="flexRadioDefault3">
                            large
                        </label>
                    </div>
                    
                    <div>
                        <label htmlFor="date" className="mb-2">Date Stored</label>
                        <br />
                        <DatePicker
                            selected={dateStored}
                            onChange={(dateStored)=> setDateStored(dateStored)}
                        />
                    </div>
                </form>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleSubmit}
                >
                    Create
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default RegisterBoxModal;