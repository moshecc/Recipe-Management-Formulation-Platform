<div align="center">

<a href="https://fascinating-parfait-964ca2.netlify.app/main">
  <img
    src="./assets/recipe-book-logo.png"
    alt="My Recipe Book"
    width="420"
  />
</a>

# Recipe Management & Formulation Platform

**Create, organize, manage, and discover recipes in one responsive platform.**

<br />

<a href="https://fascinating-parfait-964ca2.netlify.app/main">
  <img
    src="https://img.shields.io/badge/OPEN%20LIVE%20WEBSITE-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
    alt="Open live website"
  />
</a>

<br /><br />

### 🌐 Live Application

**[fascinating-parfait-964ca2.netlify.app/main](https://fascinating-parfait-964ca2.netlify.app/main)**

<br />

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-Auth%20%7C%20Firestore%20%7C%20Storage-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Material UI](https://img.shields.io/badge/Material%20UI-5-007FFF?style=flat-square&logo=mui&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

</div>

---

## Main Features

- Email and password authentication with Firebase Authentication
- Google sign-in and guest access
- Create, edit, view, and manage personal recipes
- Store recipe names, ingredients, and preparation instructions
- Upload multiple recipe images to Firebase Storage
- Display recipe images in a responsive carousel
- Store and retrieve recipe data with Cloud Firestore
- Browse external recipe suggestions using the Spoonacular API
- Responsive layout for desktop and mobile devices
- RTL-compatible Material UI components
- Recipe printing and social-sharing support
- Premium subscription routes and tier-based recipe limits
- Custom fallback page for unknown routes



## Technology Stack

### Frontend

- React 18
- React Router DOM
- Material UI, MUI Joy, and Emotion
- Styled Components
- Bootstrap utility classes
- React Icons and Lordicon
- React Responsive Carousel
- React Toastify

### Services and Integrations

- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Spoonacular Recipes API
- PayPal React SDK
- EmailJS
- Netlify

## Application Routes

| Route | Purpose |
| --- | --- |
| `/` | Authentication and landing page |
| `/main` | Main recipe-management workspace |
| `/newrecipe` | Create a new recipe |
| `/recipeUp` | Update an existing recipe |
| `/recipeView` | View recipe details |
| `/main/apiMain` | Browse API-sourced recipes |
| `/main/pro` | Premium plans |
| `/main/pro/creditcard` | Payment flow |
| `/Main/UpdateUser` | User profile settings |
| `/aboutus` | About page |

## Getting Started

### Prerequisites

- Node.js 16 or newer
- npm
- A Firebase project with Authentication, Firestore, and Storage enabled
- A Spoonacular API key

### Installation

```bash
git clone https://github.com/moshecc/Recipe-Management-Formulation-Platform.git
cd Recipe-Management-Formulation-Platform
npm install
npm start
```

The development server will normally be available at:

```text
http://localhost:3000
```

## Service Configuration

Firebase configuration is currently located in:

```text
src/Firebase.jsx
```

Spoonacular API configuration is referenced from:

```text
src/apiCode.js
```

For production deployments, service credentials should be moved to environment variables rather than committed directly to the repository. With Create React App, client-side environment variables must begin with `REACT_APP_`.

Example:

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_SPOONACULAR_API_KEY=your_spoonacular_api_key
```

> Client-side Firebase configuration is visible to browser users by design. Security must be enforced with Firebase Authentication, Firestore Security Rules, Storage Rules, authorized domains, and API restrictions.

## Available Scripts

### `npm start`

Runs the application in development mode.

### `npm test`

Starts the test runner in interactive watch mode.

### `npm run build`

Creates an optimized production build in the `build` directory.

### `npm run eject`

Ejects the Create React App configuration. This action cannot be reversed.

## Project Structure

```text
src/
├── components/       # Pages and reusable UI components
├── router/           # React Router configuration
├── inputFile/        # Recipe image-upload components
├── Classes/          # Recipe data models
├── Firebase.jsx      # Firebase initialization and helpers
├── apiCode.js        # External recipe API configuration
├── App.js            # Shared application context and API loading
└── index.js          # Application entry point
```

## Deployment

The frontend is currently deployed with Netlify:

[https://fascinating-parfait-964ca2.netlify.app/main](https://fascinating-parfait-964ca2.netlify.app/main)

Because the application uses client-side routing, a Netlify SPA fallback should redirect unknown requests to `index.html`.

Example `public/_redirects` file:

```text
/* /index.html 200
```

## Notes

- Creating and storing personal recipes requires an authenticated user.
- Guest access is available for exploring the application.
- Recipe limits depend on the user's subscription tier.
- External recipe availability depends on Spoonacular API limits and configuration.

## Repository

[moshecc/Recipe-Management-Formulation-Platform](https://github.com/moshecc/Recipe-Management-Formulation-Platform)
