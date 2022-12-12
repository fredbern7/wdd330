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
    console.log('1');
    this.menu();
    console.log('2');
    let parentElement = document.getElementById("results");
    this.formListener(parentElement);
    this.random(parentElement);
  }
  menu() {
    let menu = document.getElementById('menu');
    menu.addEventListener('click', () => {
        document.getElementById("primaryNav").classList.toggle("hide");
    })
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
        parentElement.innerHTML = "";
        document.getElementById('div-description').innerHTML = "";
        document.getElementById('div-description').innerHTML = `<p class = "description">Search result... click one to view the details</p>`;
        let promise = this.Model.search(input);
        this.output(promise, parentElement);
        document.getElementById('input').value="";
      }
    })
    
  }

  output(promise, parentElement, list) {
    promise
    .then((data) => {
      let list = data.meals;
      this.View.renderResults(list, parentElement)
      console.log('log1')
    })
    setTimeout(() => {
      this.addListener(parentElement)
    }, 3000);
  }

  showOneItem(id, parentElement) {
    document.getElementById("form").classList.add('hide');
    this.formListener(parentElement);
    console.log('show one item');
    document.getElementById('div-description').innerHTML = `
    <p class = "description">If you like it add it to you recipe list...</p>
    `;
    this.Model.oneItem(id)
    .then((data) => {
      console.log(data)
      let item = data.meals[0];
      console.log(item);
      this.View.renderDetails(item, parentElement)
    })
  }

  addListener(parentElement) {
    console.log('listener added...')
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    parentElement;
    const childrenArray = Array.from(parentElement.children);
    childrenArray.forEach(child => {
      child.children[1].addEventListener('click', e => {
        let id = e.currentTarget.dataset.name;
        this.showOneItem(id, parentElement);
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