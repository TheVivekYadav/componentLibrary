document.addEventListener('DOMContentLoaded', function() {
  const componentsContainer = document.getElementById('components-container');
  const searchInput = document.getElementById('search-input');
  const noResults = document.getElementById('no-results');
  
  // Render all components initially
  renderComponents(componentLibrary);
  
  // Search functionality
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    
    if (searchTerm === '') {
      renderComponents(componentLibrary);
      noResults.classList.add('hidden');
      return;
    }
    
    const filteredComponents = componentLibrary.filter(component => {
      return component.name.toLowerCase().includes(searchTerm) || 
             component.tags.toLowerCase().includes(searchTerm);
    });
    
    renderComponents(filteredComponents);
    
    if (filteredComponents.length === 0) {
      noResults.classList.remove('hidden');
    } else {
      noResults.classList.add('hidden');
    }
  });
  
  // Function to render components
  function renderComponents(components) {
    componentsContainer.innerHTML = '';
    
    components.forEach(component => {
      const componentCard = document.createElement('div');
      componentCard.className = 'component-card bg-white rounded-lg shadow-md overflow-hidden';
      componentCard.setAttribute('data-id', component.id);
      
      componentCard.innerHTML = `
        <div class="p-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-gray-900">${component.name}</h2>
            <button class="show-code-btn text-sm text-blue-600 hover:text-blue-800">View Code</button>
          </div>
          <div class="component-preview">
            ${component.preview}
          </div>
          <div class="component-code relative">
            <button class="copy-button absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md px-2 py-1 text-xs">Copy</button>
            <code>${escapeHTML(component.code)}</code>
          </div>
        </div>
      `;
      
      componentsContainer.appendChild(componentCard);
    });
    
    // Reattach event listeners after rendering
    attachEventListeners();
  }
  
  // Function to attach event listeners to dynamically created elements
  function attachEventListeners() {
    // Show/hide code functionality
    const showCodeButtons = document.querySelectorAll('.show-code-btn');
    showCodeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const componentCard = this.closest('.component-card');
        const codeBlock = componentCard.querySelector('.component-code');
        
        if (codeBlock.style.display === 'block') {
          codeBlock.style.display = 'none';
          this.textContent = 'View Code';
        } else {
          codeBlock.style.display = 'block';
          this.textContent = 'Hide Code';
        }
      });
    });

    // Copy code functionality
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const codeBlock = this.nextElementSibling;
        const textToCopy = codeBlock.textContent;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
          // Visual feedback
          const originalText = this.textContent;
          this.textContent = 'Copied!';
          this.classList.add('copy-success', 'text-white');
          
          setTimeout(() => {
            this.textContent = originalText;
            this.classList.remove('copy-success', 'text-white');
          }, 2000);
        });
      });
    });
  }
  
  // Helper function to escape HTML special characters
  function escapeHTML(html) {
    return html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
