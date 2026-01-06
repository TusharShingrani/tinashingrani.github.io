// Update date and time every second
function updateDateTime() {
  const now = new Date();

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dayName = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12;

  document.getElementById('dayName').textContent = dayName;
  document.getElementById('dateDisplay').textContent = `${month} ${date}`;
  document.getElementById('timeDisplay').textContent = `${hours}:${minutes} ${ampm}`;
}

// Initialize on page load
updateDateTime();
setInterval(updateDateTime, 1000);

// Popup functionality
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');
const popupBody = document.getElementById('popupBody');

// Content for each popup
const popupContent = {
  about: {
    title: 'About Me',
    content: `
      <p>Hello! I'm Tina Shingrani, a passionate developer and creative problem solver.</p>
      <p>I love building beautiful and functional web experiences that make a difference.</p>
      <p>My journey in tech has been filled with exciting challenges and continuous learning.</p>
    `
  },
  project1: {
    title: 'Project 1',
    content: `
      <p>This is my first major project showcasing innovative solutions to real-world problems.</p>
      <p>Technologies used: React, Node.js, MongoDB</p>
      <p>Key features include user authentication, real-time updates, and responsive design.</p>
    `
  },
  project2: {
    title: 'Project 2',
    content: `
      <p>An exciting project that demonstrates my skills in full-stack development.</p>
      <p>Technologies used: Vue.js, Express, PostgreSQL</p>
      <p>This project focuses on data visualization and interactive user experiences.</p>
    `
  },
  project3: {
    title: 'Project 3',
    content: `
      <p>A cutting-edge application that pushes the boundaries of web technology.</p>
      <p>Technologies used: Next.js, TypeScript, Firebase</p>
      <p>Features include serverless architecture and advanced analytics.</p>
    `
  },
  learning: {
    title: 'Learning Outcomes',
    content: `
      <p>Through my journey, I've gained expertise in:</p>
      <ul style="margin-left: 1.5rem; margin-top: 1rem;">
        <li>Modern JavaScript frameworks and libraries</li>
        <li>Full-stack web development</li>
        <li>Database design and management</li>
        <li>UI/UX design principles</li>
        <li>Agile development methodologies</li>
        <li>Problem-solving and critical thinking</li>
      </ul>
    `
  }
};

// Add click event listeners to tiles with popups
document.querySelectorAll('.tile.has-popup').forEach(tile => {
  tile.addEventListener('click', () => {
    const popupType = tile.getAttribute('data-popup');
    const content = popupContent[popupType];

    if (content) {
      popupBody.innerHTML = `
        <h2>${content.title}</h2>
        ${content.content}
      `;
      popupOverlay.classList.add('active');
    }
  });
});

// Close popup when clicking the close button
popupClose.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
});

// Close popup when clicking outside the content
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('active');
  }
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
    popupOverlay.classList.remove('active');
  }
});
