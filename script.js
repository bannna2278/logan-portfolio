// 1. Select the button
const btn = document.getElementById('theme-toggle');

// 2. Listen for the click
btn.addEventListener('click', () => {
  // 3. Toggle the class on the body
  document.body.classList.toggle('dark-mode');
});

const ctaBtn = document.getElementById('call-to-action');

ctaBtn.addEventListener('click', () => {
    window.location.href = 'https://forms.gle/oAMhnqiYG447XmCk9';});