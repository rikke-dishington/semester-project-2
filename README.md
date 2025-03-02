# Semester Project 2
<img width="1325" alt="Screenshot 2024-02-04 at 23 48 31" src="https://github.com/rikke-dishington/semester-project-2/assets/85433495/273c7a0e-5ac6-440f-8d63-d27d4f3f0aa9">

## Description
An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.

When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.

## Table of Contents
* [Delivery](#delivery)
* [Features](#features)
* [Technical stack](#technical_stack)
* [Getting started](#getting_started)
* [Development guidelines](#development_guidelines)
* [Testing](#testing)
* [Building for production](#building_for_production)
* [Contributing](#contributing)

## Delivery

### Links
* [GitHub - Repository link](https://github.com/rikke-dishington/semester-project-2)
* [Netlify - Hosted application demo link](https://beamish-flan-146217.netlify.app)

## Features

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

## Technical Stack

### Core Technologies
- React 18
- Styled Components for styling
- Zustand for state management
- React Router for navigation

### Key Libraries
- Dependencies listed in package.json

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Development Guidelines

### Code Style
- Follow React best practices
- Use functional components with hooks
- Implement proper error handling
- Maintain consistent naming conventions

### State Management
- Use Zustand for global state
- Organize stores by feature
- Keep actions and selectors separate

### Component Structure
- Organize by feature
- Maintain separation of concerns
- Use common components for reusability

## Testing
Run tests with:
```bash
npm test
```

## Building for Production
Build the project with:
```bash
npm run build
```

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
