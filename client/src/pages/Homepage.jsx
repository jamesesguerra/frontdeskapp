import { useEffect, useState } from "react";

import AvailabilityAreaModal from "../components/AvailabilityAreaModal";
import NewCustomerModal from "../components/NewCustomerModal";
import RegisterBoxModal from '../components/RegisterBoxModal';
import RetrieveBoxModal from '../components/RetrieveBoxModal';
import boxService from "../actions/boxes";


const Homepage = () => {
    const [storedBoxes, setStoredBoxes] = useState([]);

    useEffect(() => {
        boxService
            .getAll()
            .then(boxes => {
                setStoredBoxes([...boxes["small"], ...boxes["medium"], ...boxes["large"]]);
            });
    }, []);

    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className="py-5 text-center">Front Desk App</h1>

            <div className="mb-5 d-flex flex-column gap-3 w-50">
                <button
                    className="btn btn-dark py-3"
                    data-bs-toggle="modal"
                    data-bs-target="#newCustomerModal"
                >
                    Create a New Customer
                </button>

                <button
                    className="btn btn-dark py-3"
                    data-bs-toggle="modal"
                    data-bs-target="#registerBoxModal"
                >
                    Register a Box
                </button>

                <button
                    className="btn btn-dark py-3"
                    data-bs-toggle="modal"
                    data-bs-target="#retrieveBoxModal"
                >
                    View All Boxes
                </button>

                <button
                    className="btn btn-dark py-3"
                    data-bs-toggle="modal"
                    data-bs-target="#availabilityAreaModal"
                >
                    View Availability Area
                </button>
            </div>

            <NewCustomerModal />
            <AvailabilityAreaModal storedBoxes={storedBoxes} />
            <RegisterBoxModal storedBoxes={storedBoxes} setStoredBoxes={setStoredBoxes} />
            <RetrieveBoxModal storedBoxes={storedBoxes} setStoredBoxes={setStoredBoxes} />
        </div>
    )
}

export default Homepage;