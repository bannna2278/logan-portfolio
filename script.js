// ------------------------------
// Inject CSS into the document
// ------------------------------
const styles = `
/* Default Light Theme */
body {
    background-color: #f4f4f4;
    color: #333333;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease;
}

.content-wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
}

/* Dark Mode */
body.dark-mode {
    background-color: #121212;
    color: #ffffff;
}

/* Navigation */
.navbar {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #7c7777;
    display: flex;
    justify-content: center;
}

.navbar > li {
    padding: 15px 20px;
}

.navbar a {
    color: #ffffff;
    text-decoration: none;
    display: block;
}

/* Dropdown */
.dropdown {
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 180px;
    background-color: #7c7777;
    z-index: 100;
    padding: 0;
    list-style: none;
}

.dropdown:hover > .dropdown-content {
    display: block;
}

.dropdown-content a {
    padding: 10px 15px;
    border-bottom: 1px solid #7c7777;
}

/* Typography */
.intro {
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 30px;
}

h1, h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;
}

/* Icons */
.icon-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    font-size: 60px;
    margin: 30px 0;
}

/* Buttons */
#call-to-action {
    display: block;
    margin: 20px auto;
    padding: 10px 25px;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: transform 0.2s;
}

#call-to-action:hover {
    transform: scale(1.05);
    background-color: #1c86ee;
}

#theme-toggle {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
    padding: 5px 10px;
    cursor: pointer;
}

/* Team Section */
.team-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1000px;
    margin: 20px auto;
    padding: 10px;
}

.team-member {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

body.dark-mode .team-member {
    background: #1e1e1e;
    color: #ffffff;
}

.team-member img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
}

.team-member .bio {
    font-size: 20px;
    color: #444;
}

body.dark-mode .team-member .bio {
    color: #cccccc;
}

/* Projects */
.projects-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.project-image {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

body.dark-mode .project-image {
    box-shadow: 0 2px 6px rgba(255,255,255,0.1);
}
`;

// Add styles to the page
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// ------------------------------
// JavaScript Interactions
// ------------------------------

// Theme toggle
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// CTA button
const ctaBtn = document.getElementById('call-to-action');
ctaBtn.addEventListener('click', () => {
    window.location.href = 'https://forms.gle/oAMhnqiYG447XmCk9';
});
const websiteRepoBtn = document.getElementById('website-repo');
websiteRepoBtn.addEventListener('click', () => {
    window.location.href = 'https://torchchasing.org';});

// Add more interactions as needed