 // Hike View handler
  export default class View {
    constructor(listElementId) {
    }
    renderPage(parentElement) {
      parentElement.innerHTML = `
        <div class="nav" id="nav">
            <button class="previous" type="button" id="previous">Previous</button>
            <button class="next" type="button" id="next">Next</button>
        </div>
      `;
    }
    renderItem(parentElement, list) {
      document.getElementById('h1').classList.remove('hide');
      let ol = document.createElement('ol');
      ol.classList.add('content')
      parentElement.appendChild(ol);
      list.forEach(item => {
        let li = document.createElement('li');
        li.setAttribute('data-name', item.name)
        li.innerText = item.name;
        
        ol.appendChild(li)
      });
    }
    
    renderItemFull(oneItem, parentElement) {
      document.getElementById('h1').classList.add('hide');
      let films = oneItem.films;
      let starships = oneItem.starships;
      let vehicles = oneItem.vehicles;
      parentElement.innerHTML = ""
      let h1 = document.createElement('h1')
      h1.classList.add('main-h1');
      h1.innerText = oneItem.name;
      let div = document.createElement('div');
      div.classList.add('backBtnDiv');
      div.setAttribute('id','navBTN')
      let info = document.createElement('div');
      parentElement.appendChild(h1);
      parentElement.appendChild(div);
      parentElement.appendChild(info);
      div.innerHTML = `
        <button class='btn' id='navigationBtn'>List</button>
        <button class='btn' id='itembtn'>Go back</button>
        <button class='btn' id='film'>Films</button>
        <button class='btn' id='starship'>Starship</button>
        <button class='btn' id='vehicle'>Vehicle</button>
      `;
      console.log(oneItem.films)//
      let oneItemDiv = document.createElement('div');
      oneItemDiv.setAttribute('id', 'oneItem');
      oneItemDiv.innerHTML = `
        <ul class="content" id="basic">
        <h2 class='h2'>Basic Information</h2>
          <li>Name: ${oneItem.name}</li>
          <li>Gender: ${oneItem.gender}</li>
          <li>Height: ${oneItem.height}</li>
          <li>Mass: ${oneItem.mass}</li>
          <li>Skin Color${oneItem.skin_color}</li>
        </ul>
      `
      info.appendChild(oneItemDiv);
      let filmDiv = document.createElement('ul');
      filmDiv.classList.add('content');
      filmDiv.setAttribute('id', 'filmUl');
      filmDiv.innerHTML = `<h2 class='h2'>Films Links</h2>`;
      for (let i = 0; i < films.length; i++) {
        let li = document.createElement('li');
        li.innerText = films[i]
        filmDiv.appendChild(li);
      }
      let starshipDiv = document.createElement('ul');
      starshipDiv.classList.add('content');
      starshipDiv.setAttribute('id', 'starshipUl');
      starshipDiv.innerHTML = `<h2 class='h2'>Starships Links</h2>`;
      for (let i = 0; i < starships.length; i++) {
        let li = document.createElement('li');
        li.innerText = starships[i]
        starshipDiv.appendChild(li);
      }
      let vehicleDiv = document.createElement('ul');
      vehicleDiv.classList.add('content');
      vehicleDiv.setAttribute('id', 'vehicleUl');
      vehicleDiv.innerHTML = `<h2 class='h2'>Vehicles Links</h2>`;
      for (let i = 0; i < vehicles.length; i++) {
        let li = document.createElement('li');
        li.innerText = vehicles[i]
        vehicleDiv.appendChild(li);
      }
      info.appendChild(oneItemDiv);
      info.appendChild(filmDiv);
      info.appendChild(starshipDiv);
      info.appendChild(vehicleDiv);

    }
    renderOthers() {

    }
}

