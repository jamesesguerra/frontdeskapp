# FrontDeskApp

## Repository Setup
```sh
git clone git@github.com:jamesesguerra/frontdeskapp.git
```

Cd into project folder
```sh
cd frontdeskapp/
```

**NOTE:** The app runs on React and Flask, so make sure Node/npm and Python is installed.


## Project Setup
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
# still in /server folder 
python app.py
```

2. Open a second terminal and cd into the `frontdeskapp/client` folder.

3. Start the client server
```sh
npm start
```

4. View the project at http://localhost:3000/