# Backend Structure Document

This backend structure document explains the components of the backend environment for our "Cadeau d'anniversaire par tirage au sort" landing page project. Although the project is primarily built as a frontend application, we still outline a backend structure for clarity, potential future expansion, and leveraging hosting platform features.

## 1. Backend Architecture

- The project is designed as a static single-page landing page that is fully built using HTML, CSS, and JavaScript.
- There is no dedicated custom backend server; instead, the site is deployed as static assets.
- The hosting solution (Netlify) offers serverless functionalities which can be used to handle tasks such as form submissions and minimal backend logic if needed in the future.
- Design patterns focus on modularity in the JavaScript code to ensure smooth animation effects, easy interactive behaviors, and maintainability of the user interface.
- This architecture supports scalability and performance by serving pre-built files from a CDN, reducing server response times and infrastructure management overhead.

## 2. Database Management

- Since this project is entirely frontend-focused, there is no traditional database system in place.
- For form submission data, Netlify Forms can be used to capture and store information (name, first name, and email) without building a dedicated backend database.
- Data is stored as form submission records within Netlify’s dashboard. This approach ensures data is handled securely and is accessible for confirmation and future integration if needed.

## 3. Database Schema

Since there is no dedicated SQL or NoSQL database, the data management is handled by Netlify Forms. However, conceptually, if form submissions were stored in a structured database, it might look like this:

- Table: UserSubmissions
  - Field: id (Unique Identifier)
  - Field: first_name (Text)
  - Field: last_name (Text)
  - Field: email (Text, with email format validation)
  - Field: submission_time (Timestamp)

This simple schema represents the kind of information we’re collecting, even though Netlify stores it in its own form data management system rather than an external database.

## 4. API Design and Endpoints

- The project does not include a dedicated backend API. All interactions are handled on the client side.
- If future requirements call for API interactions (for example, to verify form data or trigger server-side workflows), the following design could be considered:
  - RESTful API endpoints designed with a lightweight serverless approach (for instance, using Netlify Functions):
    - POST /api/submitForm: to process and store form submissions
    - GET /api/winDetails: to fetch lottery win display details (if dynamic data is introduced later)
- These endpoints would serve as an intermediary between the frontend and potential backend logic without compromising the simplicity of the current static site setup.

## 5. Hosting Solutions

- **Primary Hosting Provider:**
  - Netlify
    - **Advantages:**
      - Reliability: Netlify is known for its robust uptime and fast content delivery via CDN.
      - Scalability: Static assets served through a CDN ensure that the page performs well under high traffic without significant backend load.
      - Cost-effectiveness: Hosting static sites on Netlify is highly efficient and cheap, with many built-in features such as form handling and serverless functions available.
- Future iterations could include adding Netlify Functions to support minimal dynamic behavior if needed.

## 6. Infrastructure Components

- **Content Delivery Network (CDN):**
  - Utilizes Netlify’s built-in CDN to distribute the static landing page assets efficiently around the world.
- **Caching Mechanisms:**
  - Static assets are cached at the CDN level to ensure fast loading times.
- **Form Submission Handling:**
  - Netlify Forms serve as the lightweight backend alternative for handling user data without the need for a separate database.
- **Optional Serverless Functions:**
  - If a future need arises for a more advanced backend, Netlify Functions (Lambda functions) can be integrated to manage additional logic with minimal configuration.

## 7. Security Measures

- **Data Handling:**
  - All form submissions are processed using the secure Netlify platform, ensuring data is transmitted over HTTPS.
- **Authentication and Authorization:**
  - Not applicable in the current project since there is no login system. For future expansion, standard practices would include JWT-based authentication or third-party auth providers.
- **Data Encryption:**
  - Data in transit is encrypted via secure HTTPS connections.
- **Browser-level Security:**
  - Basic input validation is added on the client side to prevent common security issues.
- **Platform Security:**
  - Rely on Netlify’s infrastructure security for safeguarding against DDoS and other network-level threats.

## 8. Monitoring and Maintenance

- **Monitoring Tools:**
  - Netlify’s dashboard provides insights into traffic, build status, and error logs.
  - Optional integration with third-party tools (e.g., Google Analytics) for monitoring user interactions and performance.
- **Maintenance Procedures:**
  - Regular review of the static site assets and updating external links or images as necessary.
  - Updates to third-party libraries (e.g., for animations and hover effects) will be performed as part of routine maintenance to ensure compatibility and security.
  - Continuous integration and deployment through Netlify’s Git integration allow for automated testing and updated deployments.

## 9. Conclusion and Overall Backend Summary

- Although the project is primarily a frontend landing page, the backend structure is designed to leverage a modern hosting environment that emphasizes performance, security, and ease-of-maintenance.
- The use of Netlify as the hosting provider provides built-in features such as form handling, CDN-based content delivery, and potential serverless functions, thus offering a solid and scalable backend foundation even with minimal coding.
- The architecture focuses on simplicity and efficiency by using client-side interactions paired with Netlify’s secure and cost-effective infrastructure.
- This setup uniquely differentiates the project by ensuring a fast-loading, modern landing page that meets performance needs while being easy to maintain and scalable for future enhancements.

In summary, the backend structure is minimal yet robust, aligning perfectly with the project’s goals of delivering an engaging and reliable user experience for celebrating a lottery win and a metal concert birthday gift.