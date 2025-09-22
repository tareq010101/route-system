# Route Scheduling System

## Description
This is a small REST API built with Node.js and Express to manage drivers and route scheduling.  
It assigns drivers to routes based on availability and ensures each driver handles only one active route.

## Features
- Add new drivers
- Add new routes
- Automatically assign available drivers to routes
- Mark routes as unassigned if no driver is available
- Get all routes with pagination
- Get driver history with past routes

## API Endpoints

### Drivers
- `POST /api/v1/drivers` → Add a new driver
- `GET /api/v1/drivers/:id/history` → Get past routes of a driver

### Routes
- `POST /api/v1/routes` → Add a new route and assign driver
- `GET /api/v1/routes?page=1&limit=10` → Get all routes with pagination

### Schedule
- `GET /api/v1/schedule` → Get all drivers and their current routes

## Installation
1. Clone the repo:
```bash
git clone https://github.com/tareq010101/route-system.git
```
2. Install dependencies:
cd route-system
npm install
3. 
Make sure MongoDB is running locally (default port 27017)
4. Create a .env file in the root directory:
DATABASE=mongodb://127.0.0.1:27017/TransportDRB
PORT=4000

5. npm start

