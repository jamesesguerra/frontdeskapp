# FrontDeskApp

Repository Setup
```sh
git clone git@github.com:jamesesguerra/frontdeskapp.git
```

Cd into project folder
```sh
cd frontdeskapp/
```

## Setup
## Client 
Install packages
```sh
cd client && npm i
```

## Server 
Cd into server folder
```sh
cd ../server
```

Make a virtual environment
```sh
python -m venv venv
```

Activate the virtual environment
```sh
# windows
\venv\Scripts\activate

# unix
source venv/bin/activate
```

Install dependencies
```sh
pip install -r requirements.txt
```

## Usage
1. Start the server
```sh
# /server 
python app.py
```

2. Start the client server
```sh
cd ../client
npm start
```

3. View the project at http://localhost:3000/