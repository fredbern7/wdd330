import List from './Controller.js';
//on load grab the array and insert it into the page
const myList = new List('list');
let Link = `https://swapi.dev/api/people/`;
window.addEventListener('load', () => {
  myList.GetLink(Link);
});