VoyageX – Full-Stack Travel Booking Application
    VoyageX is a full-stack travel booking web application that allows users to explore destinations, book trips, and manage their travel plans through a secure dashboard.

Features
    -Explore travel destinations by category (Mountain, Beach, City)
    -View detailed place information
    -User authentication (Sign up & Login)
    -Book trips with preferences
    -Personal dashboard to:
        -View upcoming and completed trips
        -Reschedule trips
        -Delete trips
    -Secure access using JWT authentication

Tech Stack
    Frontend:
        React
        Vite
        Tailwind CSS
        React Router
    Backend:
        Node.js
        Express.js
        MongoDB (Mongoose)
        JWT Authentication

Authentication Flow
    -JWT token generated on login/signup
    -Token stored securely on the client
    -Protected routes restrict access to authenticated users only
    -Backend validates user ownership for all trip operations

Dashboard Features
    -Displays all user trips
    -Separates upcoming and completed trips
    -Allows:
        -Trip rescheduling
        -Trip deletion
    -Updates reflected instantly after actions

API Endpoints

VoyageX exposes RESTful APIs to handle authentication, destination exploration, and trip management.  
All protected routes use **JWT-based authentication**.

Authentication

| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/api/auth/register` | Register a new user and generate JWT |
| POST | `/api/auth/login` | Login user and return JWT |
| GET | `/api/auth/me` | Get logged-in user details (protected) |

Destinations

| Method | Endpoint | Description |
|------|--------|------------|
| GET | `/api/destinations` | Fetch all destinations |
| GET | `/api/destinations?category=mountain` | Fetch destinations by category |
| GET | `/api/destinations?category=beach` | Fetch beach destinations |
| GET | `/api/destinations?category=city` | Fetch city destinations |
| GET | `/api/destinations/:id` | Get single destination details |

 Trips / Bookings (Protected)

| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/api/trips` | Book a new trip |
| GET | `/api/trips` | Get all trips of logged-in user |
| GET | `/api/trips?status=upcoming` | Get upcoming trips |
| GET | `/api/trips?status=completed` | Get completed trips |
| PUT | `/api/trips/:id` | Reschedule / update a trip |
| DELETE | `/api/trips/:id` | Delete a trip |

Security
    - JWT tokens are sent via `Authorization: Bearer <token>` header
    - All trip routes are protected
    - Backend validates trip ownership before update or delete operations

Live Demo
    Frontend (Vercel):
    https://voyage-x-gamma.vercel.app/

    Backend (Render):
    https://voyagex-backend.onrender.com