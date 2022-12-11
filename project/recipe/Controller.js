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
    this.random(parentElement);
    return;
  }
  menu() {
    let menu = document.getElementById('menu');
    menu.addEventListener('click', () => {
        document.getElementById("primaryNav").classList.toggle("hide");
    })
  }
  form(parentElement) {
    let submit = document.getElementById('submit');
    submit.addEventListener('click', () => {
      parentElement.innerHTML = "";
      document.getElementById('div-description').innerHTML = "";
      document.getElementById('div-description').innerHTML = `
    <p class = "description">Search result... click one to view the details</p>
    `;
      this.Model.search()
      .then((data) => {
        let list = data.meals;
        console.log(list);
        for (let i = 0; i < list.length; i++) {
          this.View.renderItems(list[i], parentElement);
        }
      })
      document.getElementById('input').value="";
    })
    return;
  }

  // random pick button and pick random
  random(parentElement) {
    document.getElementById('div-description').innerHTML = `
    <p class = "description">This is a random selection... please search if your choice is not here...</p>
    `;
    this.Model.fetching()
    .then((data) => {
      let list = data.meals;
      for (let i = 0; i < list.length; i++) {
       this.View.renderItems(list[i], parentElement);
      }
    })
    setTimeout(() => this.addListener(parentElement), 5000)
    
    return;
  }

  showOneItem(id, parentElement) {
    document.getElementById('div-description').innerHTML = `
    <p class = "description">If you like it add it to you recipe list...</p>
    `;
    parentElement.innerHTML = "";
    this.Model.oneItem(id)
    .then((data) => {
      let item = data.meals[0];
      console.log(item);
      this.View.renderDetails(item, parentElement)
    })
    setTimeout(() => this.removeEmptyLi(), 5000)
  }

  removeEmptyLi() {
    let li = document.getElementById('ingredi');
    let list = Array.from(li.children);
    list.forEach((item) => {
      console.log('1');
    })
  }


  async addListener(parentElement) {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    await parentElement;
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