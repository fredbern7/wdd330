import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';
import CommentsController from './CommentsController.js';

// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);

    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
    this.CommentsController = new CommentsController();
    this.button = this.parentElement.children;
    
  }
  showHikeList() {
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    let AllHikes = this.hikeModel.getAllHikes();
    AllHikes.forEach(hike => {
        this.hikesView.renderHikeList(AllHikes, hike);
    });
    this.addHikeListener();
    this.CommentsController.showAllComments(this.parentElement);
    return;
    }

  showOneHike(name) {
    // use this when you need to show just one hike...with full details
    const hike = this.hikeModel.getHikeByName(name);
    //console.log(hike);
    this.hikesView.renderOneHikeFull(hike,this.parentElement)
    this.backBtn();
    this.CommentsController.showOneHikeComments(this.parentElement, name);
    this.CommentsController.accessForm(name);
    this.addSubmitListenner(name);
  }

  addSubmitListenner(name) {
    let [textarea, btn] = document.forms['comment'].elements;
    btn.addEventListener('click', () => {
      this.CommentsController.saveComments(name, textarea.value);
      this.parentElement.innerHTML="";
      this.showOneHike(name);
    })
  }

  backBtn() {
    let y = document.getElementById('btn');
    y.addEventListener('click', () => {
      this.parentElement.innerHTML="";
      this.showHikeList();
    })
  }

  addHikeListener() {
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

