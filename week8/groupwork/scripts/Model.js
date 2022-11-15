// normally the model would have more going on...retrieving the hikes from a database, filtering, etc. Our model will be very simple.  We could simply export the hikeList, but a better pattern would be to create a 'getter' function to do it instead. That way as our model changed...we could simply change the getter function and anything using it should be able to remain the same.
const Url = `https://swapi.py4e.com/api/people` //`https://swapi.dev/api/people/`;

export default class Model {
  Link(Link) {
    return this.url(Link);
  }

  url(Link) {
    return Link;
  }
  
  BackLink(backLink) {
    return backLink;
  }
  
  getItem(result) {
    return result;
  }

  getItemByName(List, name) {
    let list = this.getItem(List);
    return list.find(item => item.name === name);
  }
}
  