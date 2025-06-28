document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-theme');
  const body = document.body;

  const modes = ['dark-mode', 'light-mode', 'sepia-mode'];
  const icons = {
    'dark-mode': '🌙',
    'light-mode': '☀️',
    'sepia-mode': '📜'
  };

  // Initialize current mode from body class
  let currentModeIndex = modes.findIndex(mode => body.classList.contains(mode));
  if (currentModeIndex === -1) currentModeIndex = 0;

  function applyMode(index) {
    body.classList.remove(...modes);
    const selectedMode = modes[index];
    body.classList.add(selectedMode);
    toggleBtn.textContent = icons[selectedMode];
  }

  toggleBtn.addEventListener('click', () => {
    currentModeIndex = (currentModeIndex + 1) % modes.length;
    applyMode(currentModeIndex);
  });

  applyMode(currentModeIndex); // Apply mode on initial load

  // === Modal Functionality ===
  window.openModal = function (id) {
    const modal = document.getElementById("jobModal");
    const modalText = document.getElementById("modalText");

    if (modal && modalText) {
      modalText.innerHTML = getModalContent(id);
      modal.style.display = "flex";
    }
  };

  window.closeModal = function () {
    const modal = document.getElementById("jobModal");
    if (modal) {
      modal.style.display = "none";
    }
  };

  function getModalContent(id) {
    switch (id) {
      case 'utsa':
        return `
          <h3>The University of Texas at San Antonio</h3>
          <p>Graduate Research & Teaching Assistant</p>
          <ul>
            <li>Assisted Dr. Miltos Alamaniotis with Electric Network Theory course (47+ students).</li>
            <li>Graded assignments, explained AC/DC analysis, circuit laws, and network theorems.</li>
            <li>Held office hours, review sessions, and supported research using MATLAB/Simulink.</li>
          </ul>
        `;
      case 'skyspan':
        return `
          <h3>Skyspan Private Ltd.</h3>
          <p>Software Engineer Consultant</p>
          <ul>
            <li>Built scalable full-stack apps using React.js, Node.js, and AWS services.</li>
            <li>Managed backend with GraphQL, optimized SQL queries, and integrated CI/CD pipelines.</li>
            <li>Deployed cloud systems and conducted API testing via Postman.</li>
          </ul>
        `;
      case 'saggezza':
        return `
          <h3>Saggezza Pvt Ltd</h3>
          <p>Software Engineer</p>
          <ul>
            <li>Developed secure enterprise apps for banking using PostgreSQL, MySQL, and Oracle Cloud.</li>
            <li>Enhanced Finacle APIs to support customer transactions and secure third-party integrations.</li>
            <li>Optimized SQL performance and contributed to core banking logic implementations.</li>
          </ul>
        `;
      default:
        return `<p>No details available for this role.</p>`;
    }
  }
});
