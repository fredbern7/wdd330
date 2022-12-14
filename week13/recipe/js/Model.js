//database, adding item, editing item, filtering, etc.

let MY_LIST = 'saved_list';
let VIEWED_HISTORY = 'view_history';

export default class Model {
  constructor() {
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

  findItem(item) {
    const one = this.StoredList.includes(item.idMeal);
    return one;
  }

  saveItem(item) {
        let myList = this.StoredList();
        myList.push(item);
        localStorage.setItem(MY_LIST, JSON.stringify(myList));
  }
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

  saveViewedItems(item) {
    let viewedList = this.StoredList();
    viewedList.push(item);
        localStorage.setItem(VIEWED_HISTORY, JSON.stringify(viewedList));
  }

  removeViewedItem() {
    const viewedList = this.StoredList();
    let updatedList = viewedList.filter(one => one.idMeal != item.idMeal);
    localStorage.setItem(VIEWED_HISTORY, JSON.stringify(updatedList));
  }

  ViewList() {
    let viewedListString = localStorage.getItem(VIEWED_HISTORY)
    let viewedList = []
    if (viewedListString) {
        viewedList = JSON.parse(viewedListString)
    }
    return viewedList;
  }

  Visited() {
    const visitedList = this.viewedList();
    const count = {};
    for (let i = 0; i < visitedList.length; i++) {
      const item = visitedList[index];
      if (count[item]) {
        count[item] += 1;
      } else {
        count[item] = 1;
      }
    }
  }
}