# Paddy
#### https://youtu.be/p4ySKxQIdXE
#### Description:
This project is a website that showcases the history and story of a classic 1972 Mini Clubman affectioately known as Paddy,
The website features four pages; the home page, sighitngs page, history page and restoration page...
#### overview:
The websites uses four languages and two frameworks, all of which were covered in CS50, they are;
Python, HTML, CSS, Javascript, Bootstrap and Flask.
The backend is Flask/Python with a SQLite database implemented using sqlalchemy and Javascript handling the Google Map.
The frontend is CSS, HTML and Bootstrap
#### The home page:
The home page has a hero section and below that cards with links to the other pages as well as a short description for each
#### The Sightings Page:
The sightings page is where people can say wether or not theyve seen paddy in person and where. The page includes
a form with their name, the date they saw Paddy and a google map to select where they saw Paddy. The map is implemented
with the Google Maps API and javascript and is interactive to provide a moveable marker that then returns the markers coordinates.
the from then returns to the python their name, the date they filled in and the coordinates of where they moved the map
marker, and in the python the sqlalchemy system is used to store their input in a database called paddy.db
#### The History Page:
The history page contains a horizontal card with an image and then text detailing the cars history and story.
#### The Restoration Page:
The restoration page is nearly identical to the history page but instead details the technicalities of whats been done to Paddy 
to get her looking and driving as she does today.
#### General:
-Every page has a navbar to be easily able to navigate to any of the other pages.
-None of the images are the real images of Paddy purely because the car isnt yet done and i dont yet have great images
 instead i got them from free image websites so that i could complete this project.
-For all questions i had i went to stack overflow but didnt manage to find any code to solve my problems, i learnt bootstrap
  and sqlalchemy from tutorials on youtube but have since lost who i watched.
-My photos were taken from https://www.pexels.com and https://pixabay.com/photos
