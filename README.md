# Random Quote Generator

## Overview

The **Random Quote Generator** is a web application that displays random quotes and their authors. Users can generate new quotes with the click of a button and share the quotes on Twitter. The project is built using **React** and **Vite**, and adheres to the specifications of the [freeCodeCamp Random Quote Machine](https://www.freecodecamp.org/) project.

---

## Features

1. **Random Quotes**: On page load, a random quote is displayed.
2. **Generate New Quotes**: A "New Quote" button fetches a new random quote.
3. **Tweet Quotes**: Users can share the current quote on Twitter via a "Tweet" button.
4. **Responsiveness**: The application is fully responsive and works seamlessly across devices.
5. **Styling**: Custom CSS provides a visually appealing user interface.

---

## User Stories

The application fulfills the following user stories:

1. A wrapper element with `id="quote-box"` contains the app content.
2. The quote text is displayed within an element with `id="text"`.
3. The author's name is displayed within an element with `id="author"`.
4. A button with `id="new-quote"` fetches a new quote.
5. An anchor element with `id="tweet-quote"` allows users to tweet the current quote.
6. On load, the app displays a random quote and author.
7. Clicking "New Quote" updates the quote and author.
8. The tweet link dynamically updates with the current quote and author.
9. The app is horizontally centered on the page.
10. The app is functional with browser zoom at 100%.

---

## Technologies Used

### Frontend:

- **React**: For building reusable UI components.
- **Vite**: For faster development and optimized builds.

### Backend:

- **Quotes API**: A JSON file hosted online providing a collection of quotes.

### Deployment:

- **Netlify**: For automatic deployment and hosting.
- Or Github pages 

### Styling:

- Custom **CSS** for the responsive layout and aesthetic design.

---

## How to Run Locally

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/random-quote-generator.git
   cd random-quote-generator
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

---

## Deployment

### Deploying to Netlify:

1. Push your project to GitHub.
2. Log in to [Netlify](https://www.netlify.com/) and create a new site.
3. Link your repository and deploy.

### Deploying to GitHub Pages:

1. Run the build command:
   ```bash
   npm run build
   ```
2. Push the "dist"` folder to a ``gh-pages` branch.
3. Enable GitHub Pages in the repository settings.

---

## Folder Structure

```
random-quote-generator/
 ├── public/
 ├── src/
 │   ├── components/
 │   │   └── App.jsx
 │   ├── styles/
 │   └── App.css
 ├── package.json
 ├── vite.config.js
 └── README.md
```

---

## Live Demo

Check out the live application: [Random Quote Generator on Netlify](#)

---

## Author

Developed by Jeycee jeyka.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- Inspired by the freeCodeCamp Random Quote Machine project.
- Quotes API courtesy of the freeCodeCamp resources.

---

