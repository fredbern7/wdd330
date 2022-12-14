import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor(mainId) {
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

    let navBtn = ['about', 'myRecipe', 'viewedItems', 'searchedItems']
    let about = document.getElementById(navBtn[0]);
    let myRecipe = document.getElementById(navBtn[1]);
    let viewedItems = document.getElementById(navBtn[2]);
    let searchedItems = document.getElementById(navBtn[3]);
    about.addEventListener('click', () => {
      console.log("about");
    })
    myRecipe.addEventListener('click', () => {
      console.log("myRecipe");
      let promise = this.Model.StoredList();
      console.log(promise);
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
      document.getElementById('div-description').innerHTML = `<p class = "description">Here are your saved items...</p>`;
      this.Storedoutput(promise, parentElement);
      this.toggle();
      
    })
    viewedItems.addEventListener('click', () => {
      console.log("viewedItems")
    })
    searchedItems.addEventListener('click', () => {
      console.log("searchedItems")
    })

  }
  viewRecipe() {
    let allItems = this.Model.getAllSavedItems();
    console.log(allItems);
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
        document.getElementById('buttonDiv').remove();
        document.getElementById('detailsSecond').remove();
        parentElement.innerHTML = "";
        document.getElementById('div-description').innerHTML = "";
        document.getElementById('div-description').innerHTML = `<p class = "description">Search result... click one to view the details</p>`;
        let promise = this.Model.search(input);
        this.output(promise, parentElement);
      }
    })
    
  }

  output(promise, parentElement) {
    let btnNames = ["back", "add"];
    console.log(promise);
    promise
    .then((data) => {
      console.log(data);
      let list = data.meals;
      console.log(list);
      this.View.renderResults(list, parentElement)
      console.log('log1')
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
    console.log('show one item');
    document.getElementById('div-description').innerHTML = `
    <p class = "description">If you like it add it to you recipe list...</p>
    `;
    this.Model.oneItem(id)
    .then((data) => {
      console.log(data)
      let item = data.meals[0];
      this.View.renderDetails(item, btnNames);
    })

    setTimeout(() => {
      this.Model.oneItem(id)
      .then((data) => {
        console.log(data)
        let item = data.meals[0];
        this.buttonListener(item, btnNames);
      })
      console.log('setTimeout')
    }, 7000);
  }

  buttonListener(item, btnNames) {
    console.log('work')
    let idOne = `${btnNames[0]}`;
    let idTwo = `${btnNames[1]}`;
    console.log(idTwo);
    let buttonOne = document.getElementById(idOne);
    let buttonTwo = document.getElementById(idTwo);
    console.log(buttonOne);
    buttonOne.addEventListener('click', () => {
      this.clearDivs()
    })

    buttonTwo.addEventListener('click', () => {
      if ( buttonTwo == 'add') {
        this.Model.saveItem(item);
      } else if (buttonTwo == 'delete') {
        this.Model.deleteItem(item);
      }
      this.clearDivs();
    })
  }

  clearDivs() {
    document.getElementById('results').classList.add('results');
    document.getElementById('results').classList.remove('hide');
    document.getElementById('buttonDiv').remove();
    document.getElementById('detailsSecond').remove();
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


  //show list by country
  bycountry() {

  }

  // getLocalList and render
  localList() {

  }
  // previous search items
  searchList() {

  }
  // previous viewed items
  viewedList() {

  }

  //other functions**************

  ViewResultOneItem() {

  }

  ViewLocalOneItem() {

  }

  saveItem() {

  }

  deleteItem() {


  }



}