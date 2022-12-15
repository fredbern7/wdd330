import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor(mainId) {
    console.log(mainId);
    this.mainElement = document.getElementById(mainId);
    this.Model = new Model();
    this.View = new View();
  }
  
  //search and preview the result
  homepage() {
    this.View.renderHomePage(this.mainElement);
    this.menu();
    let parentElement = document.getElementById("results");
    this.formListener(parentElement);
    this.random(parentElement);
  }
  menu() {
    let parentElement = document.getElementById("results")
    let menu = document.getElementById('menu');
    menu.addEventListener('click', () => {
      document.getElementById("primaryNav").classList.toggle("hide");
    })

    let navBtn = ['about', 'myRecipe']
    let about = document.getElementById(navBtn[0]);
    let myRecipe = document.getElementById(navBtn[1]);

    about.addEventListener('click', () => {
      window.open('about', '_blank');
    })
    myRecipe.addEventListener('click', () => {
      this.viewMyRecipes(parentElement);
    })
  }

  viewMyRecipes(parentElement) {
    let promise = this.Model.StoredList();
    this.clearDivs()
    if(parentElement) {
      parentElement.innerHTML = "";
    }
    let message;
    if (promise) {
      message = `<p class = "description">Here are your saved items...</p>`;
    } else {
      message = `<p class = "description">There is no item. Please, find your best recipe and save it to your list...</p>`;
    }
    this.message(message)
    this.Storedoutput(promise, parentElement);
    this.toggle();
  }


  // random pick button and pick random
  random(parentElement) {
    document.getElementById('div-description').innerHTML = `
    <p class = "description">This is a random selection... please search if your choice is not here...</p>
    `;
    let promise = this.Model.random()
    this.output(promise, parentElement)
  }

  formListener(parentElement) {
    let submit = document.getElementById('submit');
    submit.addEventListener('click', () => {
      let input = document.getElementById('input').value;
      if (input != "") {
        document.getElementById('results').classList.add('results');
        document.getElementById('results').classList.remove('hide');
        
        let buttonDiv = document.getElementById('buttonDiv');
        if (buttonDiv) {
          buttonDiv.remove()
        }
        let detailsSecond = document.getElementById('detailsSecond');
        if (buttonDiv) {
          detailsSecond.remove()
        }
        parentElement.innerHTML = "";
        document.getElementById('div-description').innerHTML = "";
        document.getElementById('div-description').innerHTML = `<p class = "description">Search result... click one to view the details</p>`;
        let promise = this.Model.search(input);
        this.output(promise, parentElement);
      }
      document.getElementById('input').value = "";
    })
    
  }
  output(promise, parentElement) {
    let btnNames = ["back", "add"];
    promise
    .then((data) => {
      let list = data.meals;
      this.View.renderResults(list, parentElement)
    })
    setTimeout(() => {
      this.addListener(parentElement, btnNames)
    }, 3000);
  }
  Storedoutput(promise, parentElement) {
    let list = promise;
    let btnNames = ["back", "delete"];
    this.View.renderResults(list, parentElement)
    setTimeout(() => {
      this.addListener(parentElement, btnNames)
    }, 3000);
  }

  showOneItem(id, btnNames) {
    let message = `<p class = "description">If you like it add it to you recipe list...</p>`;
    this.menu(message);
    this.Model.oneItem(id)
    .then((data) => {
      let item = data.meals[0];
      this.View.renderDetails(item, btnNames);
    })
    this.addDeleteListener(id, btnNames);
    this.btmMenu();
  }

  addDeleteListener(id, btnNames) {
    setTimeout(() => {this.Model.oneItem(id).then((data) => {
        let item = data.meals[0];
        this.buttonListener(item, btnNames);
      })
    }, 3000);
    setTimeout(() => {this.Model.oneItem(id).then((data) => {
        let item = data.meals[0];
        this.deleteItem(item, btnNames);
      })}, 3000);
  }

  deleteItem(item, btnNames){
    let idTwo = `${btnNames[1]}`;
    if(idTwo != 'add'){
      let buttonThree = document.getElementById(idTwo);
      buttonThree.addEventListener('click', () => {
      this.Model.removeItem(item);
      let parentElement = document.getElementById('results');
      this.clearMessages();
      this.viewMyRecipes(parentElement);
      this.toggle()
    })
    }
  }
  buttonListener(item, btnNames) {
    let idOne = `${btnNames[0]}`;
    let idTwo = `${btnNames[1]}`;
    let buttonOne = document.getElementById(idOne);
    let buttonTwo = document.getElementById(idTwo);
    buttonOne.addEventListener('click', () => {
      this.clearDivs();
      this.btmMenu()
      let detailsSecond = document.getElementById('detailsSecond');
      if(detailsSecond) {
        detailsSecond.remove(); 
      }
    })
    buttonTwo.addEventListener('click', () => {
        if (idTwo == 'add') {
          this.Model.saveItem(item);
          this.clearDivs();
          this.clearMessages();
          let parentElement = document.getElementById('results');
          this.menu()
          this.viewMyRecipes(parentElement);
          this.toggle()
        }
    })
  }
  addListener(parentElement, btnNames) {
    console.log('listener added...')
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    parentElement;
    const childrenArray = Array.from(parentElement.children);
    childrenArray.forEach(child => {
      child.children[1].addEventListener('click', e => {
        let id = e.currentTarget.dataset.name;
        this.showOneItem(id, btnNames);
      });
    });
  }



  //other functions
  message(message) {
    document.getElementById('div-description').innerHTML = message;
  }
  clearMessages() {
    let messageContent = document.getElementById('div-description');
    if(messageContent) {
      document.getElementById('div-description').innerHTML = "";
    }
  }
  toggle() {
    if(window.innerWidth > '560px') {
      console.log(window.innerWidth);
      document.getElementById("primaryNav").classList.toggle("");
    }else {
      document.getElementById("primaryNav").classList.toggle("hide");
    }
  }
  nav() {
    let navElementsArray = Array.from(document.getElementById('primaryNav').children);
    console.log(navElementsArray);
    navElementsArray.addEventListener('click', e => {
      console.log(e.currentTarget.dataset.name);
    })
  }
  btmMenu() {
    let parentElement = document.getElementById("results")
    let menu = document.getElementById('menu');
    menu.addEventListener('click', () => {
      document.getElementById("primaryNav").classList.toggle("hide");
    })
  }
  clearDivs() {
    document.getElementById('results').classList.add('results');
    document.getElementById('results').classList.remove('hide');
    let buttonDiv = document.getElementById('buttonDiv');
    if (buttonDiv) {
      buttonDiv.remove()
    }
    let detailsSecond = document.getElementById('detailsSecond');
      if(detailsSecond) {
        detailsSecond.remove(); 
      }  
  }
}