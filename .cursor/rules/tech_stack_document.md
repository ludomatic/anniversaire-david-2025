# Tech Stack Document

This document explains the technology choices behind the project "Cadeau d'anniversaire par tirage au sort" in simple, everyday language. The goal is to build a single-page web landing page, hosted on Netlify, that displays a celebratory lottery win with a unique prize: a concert ticket. The project is designed with a modern, elegant look, and works seamlessly on both smartphones and desktop computers. Below, you will find a breakdown of the various technologies used and the rationale for choosing each one.

## Frontend Technologies

The frontend is the part of the application that users interact with directly. For this project, we use basic web technologies:

- **HTML**: This is the skeleton of the page. HTML structures the three distinct sections (the lottery win display, the description of the prize, and the participant identification form) so that they can each take up the full screen.
- **CSS**: CSS is used to style the page, ensuring that the design is elegant and modern. It controls layout details such as colors, typography, spacing, and also includes responsive design elements so that the page looks great on devices of all sizes.
- **JavaScript**: JavaScript brings the page to life. It handles interactive elements like the confetti animation when displaying the lottery win, hover effects on buttons and titles, smooth transitions between sections, and the popup confirmation after the form is submitted.

By using these technologies, we create an engaging and visually appealing interface that captures the celebratory event in an intuitive and interactive manner.

## Backend Technologies

For this project, no traditional backend technology is used. This means:

- There is **no server-side processing** or backend database involved, simplifying the development process.
- The form submission is handled entirely on the client side. When the user submits their identification details (name, surname, email), a popup confirms that the information has been recorded, and the page reloads. This straightforward approach avoids the complexity of setting up server-side logic.

## Infrastructure and Deployment

The project will be deployed using Netlify, which is an excellent choice for hosting a single-page application like this one. Here’s why:

- **Netlify** is designed for static sites and single-page applications, making it an ideal and cost-effective solution.
- Netlify supports continuous deployment, ensuring that any updates made through Git push are automatically built and live on the site without manual intervention.
- Version control (typically via Git) integrates smoothly with Netlify, allowing for collaborative development and easy rollbacks if necessary.

Using Netlify ensures the project is reliable, scalable, and simple to deploy and maintain.

## Third-Party Integrations

Although this project is primarily a standalone page, it does include a few key third-party integrations:

- **External Image Source**: The background image for the prize description section is loaded from an external URL. This helps maintain a high-quality visual presentation without additional overhead in the project.
- **Animation Effects**: While not a separate service, the confetti explosion and other interactive animations (like hover effects) are implemented using JavaScript libraries and custom code, enhancing the celebratory atmosphere of the lottery win.

These integrations ensure that the page remains interactive and visually appealing without needing complex integrations or external API calls.

## Security and Performance Considerations

Even though this is a simple, static landing page, some basic considerations have been made to ensure security and performance:

- **Security Measures**: With no backend or user authentication, security risks are minimal. The design avoids handling sensitive data by keeping all interactions on the client side. Standard practices in delivering static content (via HTTPS, secure hosting on Netlify) are utilized.
- **Performance Optimizations**: Using just HTML, CSS, and JavaScript minimizes the overhead. The animations and interactive elements are optimized to run smoothly on both mobile devices and desktops, ensuring a seamless user experience.

## Conclusion and Overall Tech Stack Summary

In summary, the project uses a lean and effective tech stack that perfectly fits its needs:

- **Frontend Technologies**: HTML, CSS, JavaScript – to create an engaging, interactive, and responsive user interface.
- **Backend Technologies**: None – simplifying the architecture by handling all functions on the client side.
- **Infrastructure and Deployment**: Netlify – enabling easy, robust, and scalable hosting with continuous deployment capabilities.
- **Third-Party Integrations**: External image sourcing and enhanced animation effects – contributing to a visually dynamic and exciting presentation.

These technology choices ensure that the landing page meets the project goals: delivering an immersive, celebratory experience that is simple to navigate, visually appealing, and optimized for all devices. The careful selection of these technologies underlines our commitment to a modern and efficient implementation that truly reflects the spirit of a fun and winning lottery event.