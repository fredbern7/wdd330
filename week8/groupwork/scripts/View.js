 // Hike View handler
  export default class View {
    constructor(listElementId) {
    }
    renderPage(parentElement) {
      parentElement.innerHTML = `
        <div class="nav" id="nav">
            <button type="button" id="previous">Previous</button>
            <button type="button" id="next">Next</button>
        </div>
      `;
    }
    renderItem(parentElement, list) {
      let div = document.createElement('div');
      parentElement.appendChild(div);
      list.forEach(item => {
        let people = document.createElement('div');
        people.setAttribute('data-name', item.name)
        people.innerHTML = `
          <h1>${item.name}</h1>
        `
        div.appendChild(people)
      });
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
    
    renderItemFull(oneItem, parentElement) {
      parentElement.innerHTML = ""
      let div = document.createElement('div');
      let info = document.createElement('div');
      parentElement.appendChild(div);
      parentElement.appendChild(info);
      div.innerHTML = `
        <button class='btn' id='btn'>Go back</button>
      `;
      info.innerHTML = `
      <h3>${oneItem.name}</h3>
      <p>Hair Color: ${oneItem.hair_color}</p>
      `
      


      
      
    }
}

