from flask import Flask, render_template, request
from sqlalchemy import create_engine, ForeignKey, Column, String, Integer, FLOAT, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()
class spotters(Base):
    __tablename__ = "spotters"
    number = Column("number", Integer, primary_key=True, autoincrement=True)
    name = Column("name", String)
    lat = Column("lat", FLOAT)
    lng = Column("lng", FLOAT)
    month = Column("month", Integer)
    day = Column("day", Integer)
    year = Column("year", Integer)

    def __init__(self, number, name, lat, lng, month, day, year):
        self.number = number
        self.name = name
        self.lat = lat
        self.lng = lng
        self.month = month
        self.day = day
        self.year = year

    def __repr__(self):
        return f"({self.number}){self.name}{self.lat}{self.lng}({self.day}{self.month}{self.year})"
    
engine = create_engine("sqlite:///paddy.db", echo=True)

Base.metadata.create_all(bind=engine)

Session = sessionmaker(bind=engine)
session = Session()

app=Flask(__name__)

@app.route("/sightings", methods=["POST", "GET"])
def sightings():
    if request.method == "GET":
        db = session.query(spotters).all()
        return render_template("/sightings.html")
    else:
        latitude = request.form.get("lat")
        longitude = request.form.get("lng")
        name = request.form.get("name")
        day = request.form.get("day")
        month = request.form.get("month")
        year = request.form.get("year")
        new= spotters(None, name, latitude, longitude, day, month, year)
        session.add(new)
        session.commit()
        db = session.query(spotters).all()
        return render_template("/sightings.html", db=db) 
    
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