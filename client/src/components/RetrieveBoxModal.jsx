import { useEffect, useState } from "react";

import boxService from "../actions/boxes";


const RetrieveBoxModal = ({ storedBoxes, setStoredBoxes }) => {
    const [retrievedBoxes, setRetrievedBoxes] = useState([]);

    useEffect(() => {
        boxService
            .getAll()
            .then(boxes => {
                setRetrievedBoxes(boxes["retrievedBoxes"])
            });
    }, []);

    const retrieveBox = (box) => {
        boxService
            .retrieve(box)
            .then(boxes => {
                setStoredBoxes([...boxes["small"], ...boxes["medium"], ...boxes["large"]])
                setRetrievedBoxes(boxes["retrievedBoxes"])
            })
    }

    return (
        <div class="modal fade" id="retrieveBoxModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Boxes</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Stored Boxes</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Retrieved Boxes</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            {storedBoxes.length === 0 && <p className="my-5 text-center">No stored boxes.</p>}
                            <ul className="list-group">
                                {storedBoxes.map((box, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="list-group-item d-flex justify-content-between align-items-center"
                                        >
                                            <div>
                                                <p className="fw-bold">BOX ID #{box.id}</p>
                                                <p>Size: {box.size}</p>
                                                <p>Customer: {box.customer}</p>
                                                <p>Date Stored: {box.dateStored}</p>
                                            </div>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => retrieveBox(box)}
                                            >
                                                Retrieve
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            {retrievedBoxes.length === 0 && <p className="my-5 text-center">No retrieved boxes.</p>}
                            <ul className="list-group">
                                {retrievedBoxes.map((box, index) => {
                                    return (
                                        <li key={index} className="list-group-item">
                                            <p className="fw-bold">BOX ID #{box.id}</p>
                                            <p>Size: {box.size}</p>
                                            <p>Customer: {box.customer}</p>
                                            <p>Date Stored: {box.dateStored}</p>
                                            <p>Date Retrieved: {box.dateRetrieved}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default RetrieveBoxModal;
