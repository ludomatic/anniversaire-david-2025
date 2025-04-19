flowchart TD
    A[Project Setup\n- Create project directory\n- Initialize Git repository\n- Create index.html, style.css, script.js] --> B[HTML Structure\n- Three full-screen sections\n    - Lottery Win Display (confetti animation)\n    - Gift Description (Metallica concert details, background image)\n    - Identification Form (Nom, Prénom, Email, popup confirmation)]
    B --> C[CSS Styling\n- Style full-screen layout\n- Responsive design\n- Metal theme and hover effects]
    C --> D[JavaScript Functionality\n- Confetti animation implementation\n- Navigation between sections\n- Form submission logic: popup and page reload]
    D --> E[Content Integration\n- Embed concert ticket details\n- Use external background image URL]
    E --> F[Netlify Deployment\n- Connect Git repository\n- Deploy index.html via Netlify with HTTPS]
    F --> G[Testing\n- Cross-device and cross-browser validation\n- Verify animations, navigation, and form behavior]