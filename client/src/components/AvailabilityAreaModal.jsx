import AvailabilityArea from "./AvailabilityArea";

const AvailabilityAreaModal = ({ storedBoxes }) => {
  return (
    <div>
        <div class="modal fade" id="availabilityAreaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Box Availability Area</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <AvailabilityArea storedBoxes={storedBoxes} />
            </div>
            </div>
        </div>
        </div>    
    </div>
  )
}

export default AvailabilityAreaModal;