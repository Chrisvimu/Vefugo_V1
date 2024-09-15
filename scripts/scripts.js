function toggleDarkMode() {
      const body = document.querySelector('body');
      const darkModeButton = document.getElementById('darkModeButton');
      body.classList.toggle('dark-mode');
      
      // Toggle between sun and moon icon
      if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = '☀️';  // Sun icon for light mode
      } else {
        darkModeButton.textContent = '🌙';  // Moon icon for dark mode
      }
    }

function loadHTMLContent(url, elementId) {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML content:', error));
    }