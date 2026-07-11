<div align="center">

<a href="https://fascinating-parfait-964ca2.netlify.app/main">
  <img src="assets/logo.webp" alt="My Recipe Book logo" width="320" />
</a>

# Recipe Management & Formulation Platform

### Create, organize, manage, and discover recipes in one responsive platform.

<br />

<a href="https://fascinating-parfait-964ca2.netlify.app/main">
  <img src="https://img.shields.io/badge/Open%20Live%20Application-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Open live application" />
</a>

<br /><br />

**Live website:**  
[https://fascinating-parfait-964ca2.netlify.app/main](https://fascinating-parfait-964ca2.netlify.app/main)

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


## Screenshots

Add current application screenshots to an `assets/screenshots` directory and replace the placeholders below:

<table>
  <tr>
    <td align="center">
      <strong>Main Recipe Workspace</strong><br />
      <img src="assets/screenshots/main-workspace.png" alt="Main recipe workspace" width="420" />
    </td>
    <td align="center">
      <strong>Recipe Details</strong><br />
      <img src="assets/screenshots/recipe-details.png" alt="Recipe details screen" width="420" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Create Recipe</strong><br />
      <img src="assets/screenshots/create-recipe.png" alt="Create recipe form" width="420" />
    </td>
    <td align="center">
      <strong>External Recipe Discovery</strong><br />
      <img src="assets/screenshots/api-recipes.png" alt="External recipe discovery" width="420" />
    </td>
  </tr>
</table>

> Remove any screenshot entry that is not added to the repository, otherwise GitHub will display a broken image placeholder.

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
