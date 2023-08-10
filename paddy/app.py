from flask import Flask, render_template, request

app=Flask(__name__)

@app.route("/")
def index():
    return render_template("/index.html")

@app.route("/sightings", methods=["POST", "GET"])
def sightings():
    if request.method == "POST":
        return render_template("/sightings.html")
    else:
        map_location = request.form.get("map_location")
        current_location = request.form.get("current_location")
    
