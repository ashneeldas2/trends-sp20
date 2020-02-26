# A2

For the second assignment, you will be working with Firebase to perform CRUD
operations and use queries on a database. In this assignment, we're going to 
create a database of songs. 

## Part 1: Creating the database 

First, navigate to [Firebase](https://firebase.google.com/) and create a 
new project. Go to the settings icon in the upper left, and click on it. Then,
click project settings and go to service accounts. Generate a new private key
and and rename it to `service-account.json`. Put this file in the root of your 
project. Go to the database section (in the navigation bar on the left) and 
create a new realtime database.

## Part 2: Manually make collection

After the realtime database is created, make a new collection in the database
called "Songs". Within this collection, create a document called "song1". 
This document will have three fields, "name", "artist", and "rating", with 
respective values "Never Gonna Give You Up", "Rick Astley", and your 
personal rating of the song out of 5. At this point, your database should look 
something like this: 

<img src="./db.png" height=120px width=600px />

## Part 3: Create new songs

