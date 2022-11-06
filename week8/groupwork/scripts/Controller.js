import Model from './Model.js';
import View from './View.js';

// Hike controller
export default class List {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);

    this.Model = new Model();
    this.View = new View(parentId);
    this.button = this.parentElement.children;
    
  }
  LoadHomePagePage() {
      this.Model.Fetch();
      this.Model.lat();
    }
  

    
  // LoadHomePagePage() {
  //   this.View.renderPage(this.parentElement);
  //   this.Model.getList();
  //   // AllHikes.forEach(item => {
  //   //     this.View.renderItemList(AllItems, item);
  //   // });
  //   // this.addItemListener();
  //   return;
  //   }

  showOneItem(name) {
    // use this when you need to show just one hike...with full details
    const item = this.Model.getItemByName(name);
    //console.log(hike);
    this.hikesView.renderItemFull(item,this.parentElement)
    this.backBtn();
  }

  backBtn() {
    let y = document.getElementById('btn');
    y.addEventListener('click', () => {
      this.parentElement.innerHTML="";
      this.showAllItems();
    })
  }

  addItemListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    const childrenArray = Array.from(this.parentElement.children);
    //console.log(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('click', e => {
        // why currentTarget instead of target?
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}

//const myHikesController = new HikesController('hikes');
//myHikesController.showHikeList();

