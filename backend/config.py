from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# create the app
app = Flask(__name__)
CORS(app)

# configure the SQLite database, relative to the app instance folder
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///flapp01.db"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# create the extension / database for the databse instance
db = SQLAlchemy(app)
# initialize the app with the extension
# db.init_app(app)
