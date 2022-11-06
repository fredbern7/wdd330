import List from './Controller.js';
//on load grab the array and insert it into the page
const myList = new List('list');
window.addEventListener('load', () => {
  myList.LoadHomePagePage();
});