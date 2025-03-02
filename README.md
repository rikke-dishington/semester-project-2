# Semester Project 2
<img width="1325" alt="Screenshot 2024-02-04 at 23 48 31" src="https://github.com/rikke-dishington/semester-project-2/assets/85433495/273c7a0e-5ac6-440f-8d63-d27d4f3f0aa9">

## Description
An auction site where users can add items for auction and bid on items. New users receive 1000 credits upon registration, which they can use for bidding. Credits can be earned by selling items. While non-registered users can browse listings, only registered users can participate in bidding.

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

### User Authentication
* Registration with stud.noroff.no email
* User login/logout functionality
* Profile avatar management
* Credit balance tracking

### Auction Features
* Create listings with:
  - Title
  - Deadline date
  - Media gallery
  - Description
* Place bids on active listings
* View bid history
* Search functionality (available to all users)

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
