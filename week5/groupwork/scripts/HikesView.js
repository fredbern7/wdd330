  // Hike View handler
  export default class HikesView {
    constructor(listElementId) {
      // will need this
      this.imgBasePath = '//byui-cit.github.io/cit261/examples/';

    }
    renderHikeList(hikeList, listElement) {
      // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
      let li = document.createElement('li');
      li.classList.add("li");
      li.setAttribute("data-name", listElement.name)
      li.appendChild(this.renderOneHikeLight(listElement));
      document.getElementById('hikes').appendChild(li);
    }
    renderOneHikeLight(hike) {
      // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
      let div = document.createElement('div');
      div.classList.add('hike');
      div.innerHTML = `
        <h2 class="hike-h2" id="name" >${hike.name}</h2>
        <div class="hike-container">
          <img class="img" src="${this.imgBasePath}/${hike.imgSrc}" alt="${hike.imgAlt}">
          <div class="info">
              <h3 class="hike-h3">Distance</h3>
              <p>${hike.distance}</p>
              <h3 class="hike-h3">Difficulty</h3>
              <p>${hike.difficulty}</p>
          </div>
        </div>
      </div>
    `;

      return div;
    }
    
    renderOneHikeFull(hike) {
      // this method will be used to one hike with full detail...you will need this for the stretch goal! 
      //let li = document.createElement('li');
      //let ul = document.getElementById('hikes');
      //ul.appendChild(li);
      document.getElementById('hikes').innerHTML = `
        <button class='btn' id='btn' ontouchend="window.location='index.html';">Go back</button>
        <li class="li">
        <div class="one-hike">
        <div class="one-hike-container">
        <img class="img" src="${this.imgBasePath}/${hike.imgSrc}" alt="${hike.imgAlt}">
        <h2 class="hike-h2">${hike.name}</h2>
            <div class="one-info">
                <h3 class="hike-h3">Distance</h3>
                <p>${hike.distance}</p>
                <h3 class="hike-h3">Difficulty</h3>
                <p>${hike.difficulty}</p>
                <h3 class="hike-h3">Description</h3>
                <p>${hike.description}</p>
                <h3 class="hike-h3">How to get there</h3>
                <p>${hike.directions}</p>
            </div>
        </div>
        <li>
      `;
    }
}

