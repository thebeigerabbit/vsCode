from flask import Flask, render_template, request

app=Flask(__name__)

@app.route("/")
def index():
    return render_template("/index.html")

@app.route("/sightings", methods=["POST", "GET"])
def sightings():
    if request.method == "GET":
        return render_template("/sightings.html")
    else:
        latitude = request.form.get("lat")
        longitude = request.form.get("lng")
        latnlng = {1: latitude, 2: longitude}
        return  latnlng
