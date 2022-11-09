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
  GetLink(Link) {
    this.Model.Link(Link);
    let url = this.Model.url(Link);
    this.ShowItem(url);
  }

  ShowItem(url) {
    fetch(url)
    .then((response) => {
      if (!response.ok) {throw new Error(`HTTP error, status = ${response.status}`);}
      return response.json();})
    .then((data) => {
      console.log(data);
      this.View.renderPage(this.parentElement);
      let list = this.Model.getItem(data.results);
      this.List = list;
      this.View.renderItem(this.parentElement, list);
      let link = data.next;
      //str.replace(/.$/, '!')
      this.addItemListener(link);
      let previous = document.getElementById('previous');
      let next = document.getElementById('next');
      if (data.previous == null) {
        previous.disabled = true;
      } else {
        previous.disabled = false;
        this.previousListener(previous, data.previous);
      }
      if (data.next == null) {
        next.disabled = true;
      } else {
        next.disabled = false;
        this.nextListener(next, data.next);
      }
      })
    .catch((error) => {
      console.log(error)
      });
    }
  backLink() {
      let page = backLink.charAt(link.length-1)
      if (backLink != null) {
        if(page < 10 ) {
          let page = n - 1;
          let Link = backLink.replace(/.$/, `${page}`)
          let y = document.getElementById('btn');
          y.addEventListener('click', () => {
            this.parentElement.innerHTML="";
            this.GetLink(Link)
          })
        } else {
          link.replace(/.$/, `${9}`)
        }
      }
  }
  showOneItem(name, link) {
    let oneItem = this.Model.getItemByName(this.List, name)
    this.View.renderItemFull(oneItem,this.parentElement)
    this.backBtn(link);
    document.getElementById('itembtn').classList.add('active');
    document.getElementById('film').classList.remove('active');
    document.getElementById('starship').classList.remove('active');
    document.getElementById('vehicle').classList.remove('active');
    document.getElementById('basic').classList.remove('hide');
    document.getElementById('starshipUl').classList.add('hide');
    document.getElementById('filmUl').classList.add('hide');
    document.getElementById('vehicleUl').classList.add('hide');
    this.itemBtn();
    this.films();
    this.starship();
    this.vehicles();
  }
  itemBtn() {
    document.getElementById('itembtn').addEventListener('click', () => {
      document.getElementById('itembtn').classList.add('active');
      document.getElementById('film').classList.remove('active');
      document.getElementById('starship').classList.remove('active');
      document.getElementById('vehicle').classList.remove('active');
      document.getElementById('basic').classList.remove('hide');
      document.getElementById('starshipUl').classList.add('hide');
      document.getElementById('filmUl').classList.add('hide');
      document.getElementById('vehicleUl').classList.add('hide');
    })
  }
  films() {
    document.getElementById('film').addEventListener('click', () => {
      document.getElementById('itembtn').classList.remove('active');
      document.getElementById('film').classList.add('active');
      document.getElementById('starship').classList.remove('active');
      document.getElementById('vehicle').classList.remove('active');
      document.getElementById('basic').classList.add('hide');
      document.getElementById('starshipUl').classList.add('hide');
      document.getElementById('filmUl').classList.remove('hide');
      document.getElementById('vehicleUl').classList.add('hide');
    })
  }
  starship() {
    document.getElementById('starship').addEventListener('click', () => {
      document.getElementById('itembtn').classList.remove('active');
      document.getElementById('film').classList.remove('active');
      document.getElementById('starship').classList.add('active');
      document.getElementById('vehicle').classList.remove('active');
      document.getElementById('basic').classList.add('hide');
      document.getElementById('starshipUl').classList.remove('hide');
      document.getElementById('filmUl').classList.add('hide');
      document.getElementById('vehicleUl').classList.add('hide');
    })
  }
  vehicles() {
    document.getElementById('vehicle').addEventListener('click', () => {
      document.getElementById('itembtn').classList.remove('active');
      document.getElementById('film').classList.remove('active');
      document.getElementById('starship').classList.remove('active');
      document.getElementById('vehicle').classList.add('active');
      document.getElementById('basic').classList.add('hide');
      document.getElementById('starshipUl').classList.add('hide');
      document.getElementById('filmUl').classList.add('hide');
      document.getElementById('vehicleUl').classList.remove('hide');
    })
  }


  backBtn(link) {
    let page = link.charAt(link.length-1)
      if (link != null) {
        if(page < 10 ) {
          let n = page - 1;
          let Link = link.replace(/.$/, `${n}`)
          this.backBtnListener(Link);
        } else {
          y.addEventListener('click', () => {
            let Link = link.replace(/.$/, `${9}`)
            this.backBtnListener(Link);
          })
        }
    }
  }
  backBtnListener(Link) {
    let y = document.getElementById('navigationBtn');
    y.addEventListener('click', () => {
      this.parentElement.innerHTML="";
      this.GetLink(Link);
    })
  }
  previousListener(previous, link) {
    let Link = link;
    previous.addEventListener('click', () => {
      this.GetLink(Link);
    });
  }
  nextListener(next, link) {
    let Link = link;
    next.addEventListener('click', () => {
      this.GetLink(Link);
    });
  }
  addItemListener(link) {
    const childrenArray = Array.from(this.parentElement.children[1].children);
    console.log(link);
    childrenArray.forEach(child => {
      child.addEventListener('click', e => {
        // why currentTarget instead of target?
        this.showOneItem(e.currentTarget.dataset.name, link);
      });
    });
  }
}