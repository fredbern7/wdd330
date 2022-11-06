 // Hike View handler
  export default class View {
    constructor(listElementId) {
      // will need this
      this.imgBasePath = '//byui-cit.github.io/cit261/examples/';

    }
    renderPage(parentElement) {
      parentElement.innerHTML = `
        <div class="nav" id="nav">
            <button type="button" id="previous">Previous</button>
            <button type="button" id="next">Next</button>
        </div>
      `;
    }
    renderItemList(AllItems, item) {
      let li = document.createElement('li');
      li.classList.add("li");
      li.setAttribute("data-name", item.name)
      li.appendChild(this.renderOneHikeLight(item));
      document.getElementById('list').appendChild(li);
    }
    renderOneHikeLight(item) {
      // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
      let div = document.createElement('div');
      div.classList.add('hike');
      div.innerHTML = `
        <h2 class="hike-h2" id="name" >${item.name}</h2>
      </div>
    `;

      return div;
    }
    
    renderItemFull(item) {
      document.getElementById('hikes').innerHTML = `
        <button class='btn' id='btn'>Go back</button>
        <li class="li">
        <div class="one-hike">
        <div class="one-hike-container">
        <img class="img" src="${this.imgBasePath}/${hike.imgSrc}" alt="${hike.imgAlt}">
        <h2 class="hike-h2">${item.name}</h2>
        </div>
        <li>
      `;
    }
}

