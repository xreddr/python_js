## Python to JS

# Install

- Clone this repository
- Use the following commands to start a virtual environment in this repository locally, .gitignore is set to ignore 'venv'.
```
python -m venv venv
```
- Activate the virtual environment
```
. venv/scripts/activate
```
- Once the venv is active, upgrade pip to minimum requirements
```
python -m pip install --upgrade 21.1.2
```
- Install requirements.txt to the venv
```
python -m pip install -r requirements.txt
```
- To run the app, move into the app directory in your terminal and use the command:
```
python app.py
```
- You should see the app running on local host, accessible at 127.0.0.1:5000. Though a randomized address may show in the terminal.

# Test

- Open your browser to 127.0.0.1:5000. You should get a JSON responce of "Hello World". Your connection has been made!

- Endpoints are available as /<int:id>/<string>. The request will return the values you entered.

- Entering /0/omega is the only endpoint that will return a new message.