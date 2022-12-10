//database, adding item, editing item, filtering, etc.

let MY_LIST = 'saved_list';
let SEARCH_HISTORY = 'search_history';
let ADDED_HISTORY = 'added_history';
let DELETED_HISTORY = 'deleted_history';

export default class Model {
  constructor() {
    // We need a constructor...but in this case it isn't doing much
  }
  async fetching() {
    const url = `https://www.themealdb.com/api/json/v2/9973533/randomselection.php`;
    return fetch(url)
        .then((response) => {
            return response.json();
        })
  }

  async search() {
    let input = document.getElementById('input').value;
    const url = `https://www.themealdb.com/api/json/v2/9973533/search.php?s=${input}`;
    return fetch(url)
        .then((response) => {
            return response.json();
        })
  }

  getSavedItem() {
    // should return a list of all the in the LocalStorage.
    return LocalList;
  }
  getSaveItemName(name) {
    // filter the LocalItems for the record identified by itemName and return it
    return LocalList.find(item => item.name === name);
  }
  deleteItem() {

  }
  StoredList() {
    let storedListString = localStorage.getItem(COMMENT_LIST)
    let storedList = []
    if (storedListString) {
        storedList = JSON.parse(storedListString)
    }
    return storedList;
  }

  getAllSavedItems() {
    return this.storedList();
  }
  getOneHikeComments(name) {
    let List = this.CommentList();
    let comment = [];
    for (let i = 0; i < List.length; i++) {
        if (List[i].name == name) {
            comment.push(List[i]);
        }
    }    
    return comment;
    }
  addComment(comment) {
        let commentsList = this.CommentList();
        commentsList.push(comment);
        localStorage.setItem(COMMENT_LIST, JSON.stringify(commentsList))
  }
}