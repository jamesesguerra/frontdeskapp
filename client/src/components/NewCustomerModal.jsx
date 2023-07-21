import { useState } from "react";

import customerService from "../actions/customers";


const NewCustomerModal = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();

    const handleSubmit = () => {
        customerService
            .create(firstName, lastName, phoneNumber)
            .then(newCustomer => console.log(newCustomer))

        alert(`New customer ${firstName} ${lastName} succesfully created.`)
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
    };

    return (
        <div className="modal fade" id="newCustomerModal" tabindex="-2" aria-hidden="true">
        <div className="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Create a New Customer</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="firstName" class="form-label">First Name</label>
                        <input 
                            class="form-control"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input
                            class="form-control"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                    </div>
                    <div class="mb-3">
                        <label for="phoneNumber" class="form-label">Phone Number</label>
                        <input
                            type="tel"
                            class="form-control"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)} 
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

export default NewCustomerModal;