// normally the model would have more going on...retrieving the hikes from a database, filtering, etc. Our model will be very simple.  We could simply export the hikeList, but a better pattern would be to create a 'getter' function to do it instead. That way as our model changed...we could simply change the getter function and anything using it should be able to remain the same.
export default class Model {
  
  Fetch() {
    const myList = `https://swapi.dev/api/people/`;
    fetch(myList)
      .then((response) => {
        if (!response.ok) {throw new Error(`HTTP error, status = ${response.status}`);}
        return response.json();})
      .then((data) => {
        this.List(data);

        })
      .catch((error) => {
        console.log(error)
        });
        this.List();
    return;
  }
  List(data) {
    return data;
  }

  lat() {
    console.log('reached');
    console.log(this.List(data));
  }

  getList() {
    return this.Object;
  }

  getItemByName(name) {
    return List.find(item => item.name === name);
  }
}
  