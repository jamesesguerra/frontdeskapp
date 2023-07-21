from flask import Flask, request
from flask_cors import CORS
from datetime import date
import json


app = Flask(__name__)
CORS(app)


@app.route("/customers", methods=["GET"])
def get_customers():
    with open("./customers.json", "r+") as file:
        customers = json.load(file)
    return customers


@app.route("/customers", methods=["POST"])
def create_customer():
    with open("./customers.json", "r+") as file:
        new_customer = request.get_json()
        customers = json.load(file)
        max_id = customers[-1]["id"]
        new_customer["id"] = max_id + 1
        customers.append(new_customer)
        file.seek(0)
        json.dump(customers, file, indent=4)
    return new_customer


@app.route("/boxes", methods=["GET"])
def get_boxes():
    with open("./boxes.json", "r+") as file:
        boxes = json.load(file)
    return boxes


@app.route("/boxes", methods=["POST"])
def register_box():
    with open("./boxes.json", "r+") as file:
        boxes = json.load(file)
        new_box = request.get_json()
        new_box["id"] = boxes["max_id"] + 1

        if new_box["size"] == "small":
            # small max 46 boxes
            if len(boxes["small"]) <= 46:
                boxes["small"].append(new_box)
            else:
                return "Small box cannot be accepted (not enough space)", 400
        
        elif new_box["size"] == "medium":
            # medium max 14 boxes
            if len(boxes["medium"]) <= 14:
                boxes["medium"].append(new_box)
            else:
                return "Medium box cannot be accepted (not enough space)", 400

        elif new_box["size"] == "large":
            # large max 12 boxes
            if len(boxes["large"]) <= 12:
                boxes["large"].append(new_box)
            else:
                return "Large box cannot be accepted (not enough space)", 400

        boxes["max_id"] += 1
        file.seek(0)
        json.dump(boxes, file, indent=4)

        return new_box
    

@app.route("/boxes", methods=["PUT"])
def retrieve_box():
    with open("./boxes.json", "r+") as file:
        boxes = json.load(file)
        retrieved_box = request.get_json()
        retrieved_box["dateRetrieved"] = date.today().strftime("%-m/%-d/%Y")
        boxes["retrievedBoxes"].append(retrieved_box)

        boxes[retrieved_box["size"]] = [
            box for box in boxes[retrieved_box["size"]] if box["id"] != retrieved_box["id"]
        ]

        file.seek(0)
        json.dump(boxes, file, indent=4)
    return boxes


if __name__ == "__main__":
    app.run(debug=True, port=5001)