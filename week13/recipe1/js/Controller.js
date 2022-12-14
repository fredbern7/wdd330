import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor(mainId) {
    this.mainElement = document.getElementById(mainId);
    this.Model = new  Model();
    this.View =  new View(mainId);
  }
  //
  loadPage() {
    console.log('loadPage');
    let parentElement = this.mainElement;
    //this.navBtn()
    //let hideMenu = document.getElementById('primaryNav');
    // if(window.innerWidth < '560px') {
    //   hideMenu.classList.remove('hide');
    // } else {
    //   hideMenu.classList.add('hide');
    // }
    const form = document.forms['search'];
    this.random(parentElement);
    this.form(form, parentElement)
    // if(navigator.onLine) {
      
    //   return;
    // } else {
    //   alert("Oops! You're offline. Please check your network connection...");
    //   document.getElementById('message').appendChild(document.createElement('p').innerText = 'No internet connection!');
    // }
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
  form(form, parentElement) {   
    const [input, submit] = form.elements;
    input.addEventListener('input', () => {
      submit.addEventListener('click', () => {
          let value = input.value;
          console.log(value);
        //if (input != "") {
          // console.log('input')
          // let promise = this.Model.search(value);
          // console.log(promise);
          // console.log(promise);
          // document.getElementById('message').innerHTML = `<p class = "description">Here is the result. Please select one to view the details...</p>`;
          // this.output(promise, parentElement)
        //}
      })
    })
  }
  random(parentElement) {
    let promise = this.Model.random();
    document.getElementById('message').innerHTML = `<p class = "description">This is a random selection... please search if your choice is not here...</p>`;
    this.output(promise, parentElement)
  }
  output(promise, parentElement) {
    promise
      .then((data) => {
        let list = data.meals;
        this.View.renderResults(list, parentElement)
        console.log('log1')
      })
    // setTimeout(() => {
    //   this.addListener(parentElement)
    // }, 1000);
  }
  showOneItem(id, parentElement) {
    console.log('show one item');
    document.getElementById('message').innerHTML = `<p class = "description">If you like it add it to you recipe list...</p>`;
    
    this.Model.oneItem(id)
      .then((data) => {
        console.log(data)
        let item = data.meals[0];
        console.log(item);
        this.View.renderDetails(item, parentElement)
      })
    console.log(parentElement.children);
  }

  addListener(parentElement) {
    console.log('listener added...')
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    parentElement;
    const childrenArray = Array.from(parentElement.children);
    childrenArray.forEach(child => {
      child.children[1].addEventListener('click', e => {
        let id = e.currentTarget.dataset.name;
        console.log(id);
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