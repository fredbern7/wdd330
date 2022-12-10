import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor(resultsId, mainId) {
    this.mainElement = document.getElementById(mainId);
    this.parentElement = resultsId;
    this.Model = new Model();
    this.View = new View(resultsId);
  }
  
  //search and preview the result
  homepage() {
    this.View.renderHomePage(this.mainElement);
    this.menu();
    let parentElement = document.getElementById(this.parentElement)
    this.random(parentElement);
    this.form(parentElement);
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
      this.addListener();
    })
    return;
  }

  // random pick button and pick random
  random(parentElement) {
    parentElement.innerHTML = "";
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
    this.addListener(parentElement);
    return;
  }

  addListener(parentElement) {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    const childrenArray = parentElement.children;
    console.log(childrenArray)

    // childrenArray.forEach(child => {
    //   child.addEventListener('click', e => {
    //     console.log('work')
    //     // why currentTarget instead of target?
    //     //this.showOneHike(e.currentTarget.dataset.name);
    //   });
    // });
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