import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor(mainId) {
    this.mainElement = document.getElementById(mainId);
    this.Model = new Model();
    this.View = new View();
  }
  //
  loadPage() {
    this.form()
    let parentElement = this.mainElement;
    if(navigator.onLine) {
      this.random(parentElement);
    } else {
      alert("Oops! You're offline. Please check your network connection...");
      document.getElementById('message').appendChild(document.createElement('p').innerText = 'No internet connection!');
    }
    this.navBtn()
    if(window.innerWidth > '560px') {
      let hideMenu = document.getElementById('primaryNav');
      hideMenu.classList.remove('hide');
    } else {
      hideMenu.classList.remove('hide');
    }
  }
  random(parentElement) {
    let promise = this.Model.random();
    promise.then((data) =>{
      console.log(data);
    })
    console.log(promise);
    document.getElementById('message').innerHTML = `
    <p class = "description">This is a random selection... please search if your choice is not here...</p>
    `;
    this.output(promise, parentElement)
  }
  navBtn() {
    let menu = document.getElementById('menu');
    menu.addEventListener('click', () => {
      document.getElementById("primaryNav").classList.toggle("hide");
    })
    let navBtn = ['about', 'myRecipe', 'viewedItems', 'searchedItems']
    navBtn.forEach((btnId) => {
      document.getElementById(btnId).addEventListener('click', () => {
        console.log(btnId);
        if(window.innerWidth > '560px') {
          console.log(window.innerWidth);
          document.getElementById("primaryNav").classList.toggle("");
        }else {
          document.getElementById("primaryNav").classList.toggle("hide");
        }
      })
    })
  }

  form(parentElement) {
    let submit = document.getElementById('submit');    
    submit.addEventListener('click', () => {
      let input = document.getElementById("input").required;
      if(!input) {
        alert('no input')
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
    document.getElementById('message').innerHTML = `
    <p class = "description">If you like it add it to you recipe list...</p>
    `;
    this.Model.oneItem(id)
      .then((data) => {
        console.log(data)
        let item = data.meals[0];
        console.log(item);
        this.View.renderDetails(item, parentElement)
      })
    setTimeout(() => {
      const buttonArray = Array.from(document.getElementById('button-div').children)
      childrenArray.forEach('click', e => {
        let target = e.currentTarget.dataset.name;
        console.log(target);
      })
    }, 3000);
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