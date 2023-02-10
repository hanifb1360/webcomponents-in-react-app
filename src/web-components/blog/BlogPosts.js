class BlogComponent extends HTMLElement {
    constructor() {
      super();
  
      // shadow root for the component
      this.shadow = this.attachShadow({mode: 'open'});
  
      // Fetch data from the WordPress API
      this.fetchData();
    }
  
    async fetchData() {
      try {
        const response = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts');
        this.posts = await response.json();
  
        // Render the component
        this.render();
      } catch (error) {
        console.error(error);
      }
    }
  
    render() {
      // template for the component
      this.shadow.innerHTML = `
        <style>
          ul {
            list-style: none;
            padding: 0;
          }
  
          li {
            margin-bottom: 1em;
          }
  
          h2 {
            font-size: 1.2em;
          }
        </style>
        <ul>
          ${this.posts.map(post => `
            <li>
              <h2><a href="${post.link}">${post.title.rendered}</a></h2>
              <p>${post.excerpt.rendered}</p>
            </li>
          `).join('')}
        </ul>
      `;
    }
  }
  
  
  customElements.define('blog-component', BlogComponent);
  