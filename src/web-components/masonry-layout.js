class MasonryLayout extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: "open" });
  
      this.shadowRoot.innerHTML = `
          <style>
            .grid {
              position: relative;
              max-width: 100%; 
              height: 100vh;
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(300px));
              grid-template-rows: minmax(100px, auto);
              margin:   40px;
              grid-auto-flow: dense;
              grid-gap: 10px;
              
            }
         
          
            
            .grid .grid-item {
              background: #333;
              padding: 20px;
              display: grid;
              font-size: 20px;
              place-items: center;
              text-align: center;
              color: #fff;
              transition: 0.5s;
              
              
            }
            .grid .grid-item:hover {
              background: #1ebae9;
          }
          .grid .grid-item .content {
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
            .grid-item img {
              max-width: 100px;
              margin-bottom: 10px;
              position: relative;
            }
            #grid-item-1 {
              grid-column: span 2;
              grid-row: span 2;
          }
          #grid-item-2 {
              grid-column: span 1;
              grid-row: span 2;
          }
          #grid-item-4 {
              grid-column: span 1;
              grid-row: span 2;
          }
          #grid-item-5 {
              grid-column: span 3;
              grid-row: span 1;
          }
          
          @media (max-width: 650px) {
            .grid {
              grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
              grid-template-rows: minmax(auto, auto);
            }
            .grid .grid-item {
              grid-column: unset !important;
              grid-row: unset !important;
            }
          }
          </style>
          <div class="grid">
          
          <div class="grid-item" id="grid-item-1">
          <div class="content">
          <img src="./images/maurice-sahl-AIRK6woHruo-unsplash.jpg" alt="">
          <h3>Title 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel nam accusamus obcaecati dolor nisi mollitia odio explicabo recusandae error enim soluta assumenda? Laboriosam nisi modi delectus culpa doloremque voluptatibus!</p>
          </div>
          </div>
          <div class="grid-item" id="grid-item-2">
          <div class="content">
          <img src="./images/maurice-sahl-AIRK6woHruo-unsplash.jpg" alt="">
          <h3>Title 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel nam accusamus obcaecati dolor nisi mollitia odio explicabo recusandae error enim soluta assumenda? Laboriosam nisi modi delectus culpa doloremque voluptatibus!</p>
          </div>
          </div>
          <div class="grid-item" id="grid-item-3">
          <div class="content">
          <img src="./images/maurice-sahl-AIRK6woHruo-unsplash.jpg" alt="">
          <h3>Title 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel nam accusamus obcaecati dolor nisi mollitia odio explicabo recusandae error enim soluta assumenda? Laboriosam nisi modi delectus culpa doloremque voluptatibus!</p>
          </div>
          </div>
          <div class="grid-item" id="grid-item-4">
          <div class="content">
          <img src="./images/maurice-sahl-AIRK6woHruo-unsplash.jpg" alt="">
          <h3>Title4</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel nam accusamus obcaecati dolor nisi mollitia odio explicabo recusandae error enim soluta assumenda? Laboriosam nisi modi delectus culpa doloremque voluptatibus!</p>
          </div>
          </div>
          <div class="grid-item" id="grid-item-5">
          <div class="content">
          <img src="./images/maurice-sahl-AIRK6woHruo-unsplash.jpg" alt="">
          <h3>Title 5</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel nam accusamus obcaecati dolor nisi mollitia odio explicabo recusandae error enim soluta assumenda? Laboriosam nisi modi delectus culpa doloremque voluptatibus!</p>
          </div>
          </div>
          <div class="grid-item" id="grid-item-6">
          <div class="content">
          <img src="./images/maurice-sahl-AIRK6woHruo-unsplash.jpg" alt="">
          <h3>Title 6</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel nam accusamus obcaecati dolor nisi mollitia odio explicabo recusandae error enim soluta assumenda? Laboriosam nisi modi delectus culpa doloremque voluptatibus!</p>
          </div>
          </div>
          <div class="grid-item" id="grid-item-7">
          <div class="content">
          <img src="./images/maurice-sahl-AIRK6woHruo-unsplash.jpg" alt="">
          <h3>Title 7</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel nam accusamus obcaecati dolor nisi mollitia odio explicabo recusandae error enim soluta assumenda? Laboriosam nisi modi delectus culpa doloremque voluptatibus!</p>
          </div>
          </div>
          </div>
        `;
    }
  }
  
  customElements.define("masonry-layout", MasonryLayout);