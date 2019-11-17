# FriendFinder

In this app, I have built a "Friendfinder" application, that takes in users' results from a survey, then compare them with other users and display the best compatibility match with the name and picture.

## My directories and folders are arranged as below:

![Flowchart of folders](./Flowchart_folders.png)

## How the app works

Users take a survey by answering 10 questions and by typing in input into the name and photo fields.

Each user's results are converted in to a simple array and application data is saved in the folder Friends.js.

Then current user's scores are compared with that of others by calculating of difference of each entry question and absolute value of the differences is used.

Finally, once the most compatible friend is found, the data will be displayed with a name and photo of the user.

## Technologies used

Node.js
node_modules
Heroku for deployment
HTML,CSS, Bootstrap
