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

Live Demo
    Frontend (Vercel):
    https://voyage-x-gamma.vercel.app/

    Backend (Render):
    https://voyagex-backend.onrender.com