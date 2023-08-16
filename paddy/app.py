from flask import Flask, render_template, request
from sqlalchemy import create_engine,Column, String, Integer, FLOAT
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()
class spotters(Base):
    __tablename__ = "spotters"
    number = Column("number", Integer, primary_key=True, autoincrement=True)
    name = Column("name", String)
    lat = Column("lat", FLOAT)
    lng = Column("lng", FLOAT)
    day = Column("day", Integer)

    def __init__(self, number, name, lat, lng, day):
        self.number = number
        self.name = name
        self.lat = lat
        self.lng = lng
        self.day = day

    def __repr__(self):
        return  f"{self.name}{self.lat}{self.lng}{self.day}"
    
engine = create_engine("sqlite:///paddy.db", echo=True)

Base.metadata.create_all(bind=engine)

Session = sessionmaker(bind=engine)
session = Session()

app=Flask(__name__)

@app.route("/sightings", methods=["POST", "GET"])
def sightings():
    if request.method == "GET":
        return render_template("/sightings.html")
    else:
        latitude = request.form.get("lat")
        longitude = request.form.get("lng")
        name = request.form.get("name")
        day = request.form.get("date")
        new = spotters(None, name, latitude, longitude, day)
        session.add(new)
        session.commit()
        return render_template("/sightings.html") 
    
@app.route("/history")
def history():
    return render_template("/hist.html")

@app.route("/")
def index():
    return render_template("/index.html")

@app.route("/restoration")
def restoration():
    return render_template("/restoration.html")

@app.route("/photos")
def photos():
    return render_template("/photos.html")