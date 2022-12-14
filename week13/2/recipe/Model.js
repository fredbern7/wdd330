//database, adding item, editing item, filtering, etc.

let MY_LIST = 'saved_list';
let SEARCH_HISTORY = 'search_history';
let ADDED_HISTORY = 'added_history';
let DELETED_HISTORY = 'deleted_history';

export default class Model {
  constructor() {
    // We need a constructor...but in this case it isn't doing much
  }
  async random() {
    const url = `https://www.themealdb.com/api/json/v2/9973533/randomselection.php`;
    return fetch(url)
        .then((response) => {
            return response.json();
        })
  }

  async search(input) {
    const url = `https://www.themealdb.com/api/json/v2/9973533/search.php?s=${input}`;
    return fetch(url)
        .then((response) => {
            return response.json();
        })
  }

  async oneItem(id) {
    const url = `https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${id}`;
    return fetch(url)
    .then((response) => {
        return response.json();
    })
  }


  // getSaveItemName(name) {
  //   // filter the LocalItems for the record identified by itemName and return it
  //   return LocalList.find(item => item.name === name);
  // }
  // deleteItem() {

  // }
  
  removeItem(item) {
    const myList = this.StoredList();
    let updatedList = myList.filter(one => one.idMeal != item.idMeal);
    localStorage.setItem(MY_LIST, JSON.stringify(updatedList));
  }

  StoredList() {
    let storedListString = localStorage.getItem(MY_LIST)
    let storedList = []
    if (storedListString) {
        storedList = JSON.parse(storedListString)
    }
    return storedList;
  }

  getAllSavedItems() {
    return this.storedList();
  }
  saveItem(item) {
        let myList = this.StoredList();
        myList.push(item);
        localStorage.setItem(MY_LIST, JSON.stringify(myList));
  }
}