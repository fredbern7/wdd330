import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor(formDivId, LocalListId) {
    this.formDivElement = document.getElementById(formDivId);
    this.LocalListElement = document.getElementById(LocalListId);
    this.Model = new Model();
    this.View = new View(formDivId, LocalListId);
  }

  form() {
    console.log('List');

    }
  localList() {
      console.log('locaList');
  }
}