# Semester Project 2

## Brief
An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.

When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.

## Table of Contents
* [Workflow Status Badges](#workflow-status-badges)
* [Requirements](#requirements)
* [User stories](#user-stories)
* [Technical Restrictions](#technical-restrictions)
* [Approved resources](#approved-resources)
* [Delivery](#delivery)
* [Links](#links)
* [Dependencies](#dependencies)
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)

## Workflow Status Badges

## Requirements

### User stories
* A user with a stud.noroff.no email may register
* A registered user may login
* A registered user may logout
* A registered user may update their avatar
* A registered user may view their total credit
* A registered user may create a Listing with a title, deadline date, media gallery and description
* A registered user may add a Bid to another user’s Listing
* A registered user may view Bids made on a Listing
* An unregistered user may search through Listings

### Technical Restrictions
* Must use an approved CSS Framework
* Must be hosted on an approved Static Host
* Must use an approved Design Application
* Must use an approved Planning Application

### Approved resources
* CSS processors
 - SASS/SCSS
 - PostCSS

* CSS frameworks
 - Bootstrap (version >5.0.1)
 - Tailwind (version >3.0.0)
 - MUI (version >5.11.8)

* Hosting services
 - GitHub Pages
 - Netlify

* Design applications
 - Adobe XD
 - Figma
 - Sketch

* Planning applications
 - Trello
 - GitHub Projects

 ## Delivery

### Links
* [GitHub Projects - Gantt chart for project timing](https://github.com/users/rikke-dishington/projects/1)
* [Trello - Kanban project board](https://trello.com/invite/b/yYJEHW6m/ATTI5bcf6db2f9b25d6b7a74086e5ec0a9dc6ADB21EA/semester-project-2)
* [Adobe XD - Style guide](https://xd.adobe.com/view/c887df51-e9b8-4d07-b19d-4d8cbb391046-9dd4/?fullscreen)
* [Adobe XD - Design prototype](https://xd.adobe.com/view/82ca242b-6445-4fa5-90e2-608bfa69c13d-d799/?fullscreen)
* [GitHub - Repository link](https://github.com/rikke-dishington/semester-project-2)
* [Netlify - Hosted application demo link](https://beamish-flan-146217.netlify.app)

### Dependencies
* Bootstrap: ^5.3.2
* @babel/core: ^7.19.3
* @babel/preset-env: ^7.19.4
* eslint: ^8.56.0
* eslint-plugin-jest: ^27.6.3
* jest: ^29.2.0
* live-server: ^1.2.2
* npm-run-all: ^4.1.5
* sass: ^1.69.5

### Installation
1. Clone the repository.
2. Install dependencies using npm install.
3. Run npm start to initiate sass & live server

### Usage
1. Build the project with npm run build.
2. Start the development server with npm run dev.
3. Tests are run using npm run test
4. Open the application in your browser.

### Testing
To run all tests: npm run test

#### Unit testing:
npm run test-unit

#### End-to-end testing:
npm run test-e2e-cli