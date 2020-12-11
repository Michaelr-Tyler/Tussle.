
This repository has only been updated recently for some CSS bug fixes. After finishing my fullstack capstone I will be revisiting this project to refactor. I've learned so much more, and really started to comprhend larger concepts of react. Some things I'd like to change in this include
- [ ] decoupling a few components
- [ ] abstracting logic from reusable components passing through props
- [ ] and documenting my work
- [ ] Handle rendering through state fora better user experience (ie: loading screens, spinners, etc)
- [ ] and more ...
Thank you,
Michael Tyler 12/12/20

# Tussle.
Tussle is an application built to connect indepedent wrestlers to organizers.  Organizers can create events, search wrestlers by type or name, direct message any wrestler they chose, and reject or accept any bids they recieve.  Wrestlers can browse a list of events, filter by city, state, or name, and send a bid in for a spot on the roster.  

### What I learned
1. ERD is everything. I came back to it countless times to help visualize the data flow.
2. Naming variables and modules clear and concisley. This is something I'm working on for all future projects.
3. Commenting and pseudo coding helps when your stuck. It also helps show where your at and where you are going when going to a lead for help.

### Requirements:

NPM (https://www.npmjs.com/)
json-server
run `git clone git@github.com:Michaelr-Tyler/Tussle..git`

then `cd tussle`

`Run npm install` to set up the react app

If you don't already have json-server, run `npm install json-server`

Open a new terminal window, and run `cd src` to navigate to the next directory

In this window, run `json-server -p 8088 Database.json` to start the database

In the previous terminal window, run `npm start` to start the react app

When the browser opens register an account as a wrestler to bid on events and/or 
register as an organizer to create events, message wrestlers, and except bid offers!

![](images/ERDScreenshot.png)
