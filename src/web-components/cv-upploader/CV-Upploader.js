class CvUploader extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow root for the component
      this.shadow = this.attachShadow({mode: 'open'});
  
      // Render the component
      this.render();
    }
  
    render() {
      // Define the template for the component
      this.shadow.innerHTML = `
        <style>
          .drop-area {
            border: 2px dotted #ccc;
            border-radius: 10px;
            text-align: center;
            padding: 1em;
            margin-bottom: 1em;
          }
  
          input[type="file"] {
            display: none;
          }
        </style>
        <div class="drop-area">
          <p>Drop your CV here or</p>
          <button>Click to select a file</button>
          <input type="file" accept=".pdf,.doc,.docx">
        </div>
      `;
  
      // Add event listeners for drag and drop
      this.shadow.querySelector('.drop-area').addEventListener('dragover', this.handleDragOver);
      this.shadow.querySelector('.drop-area').addEventListener('drop', this.handleFileDrop);
  
      // Add an event listener for clicking the button
      this.shadow.querySelector('input[type="file"]').addEventListener('change', this.handleFileSelect);
      this.shadow.querySelector('button').addEventListener('click', this.openFileDialog);
    }
  
    handleFileDrop(event) {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      this.dispatchEvent(new CustomEvent('cv-upload', {detail: file}));
    }
  
    handleFileSelect(event) {
      const file = event.target.files[0];
      this.dispatchEvent(new CustomEvent('cv-upload', {detail: file}));
    }
  
    handleDragOver(event) {
      event.preventDefault();
    }
  
    openFileDialog() {
      this.shadow.querySelector('input[type="file"]').click();
    }
  }
  
  // Register the component as a custom element
  customElements.define('cv-uploader', CvUploader);
  