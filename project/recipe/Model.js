//database, adding item, editing item, filtering, etc.

let LIST = [];
export default class Model {
  constructor() {
    // We need a constructor...but in this case it isn't doing much
  }
  search() {
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