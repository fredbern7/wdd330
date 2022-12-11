// retrieving the hikes from a database, adding hikes, editing hikes, filtering, etc.

export default class View {
    constructor() {
    }
    renderHomePage(mainElement) {
        return mainElement.innerHTML = `
            <main>
                <form class="hide">
                    <input type="text" id="input" placeholder="input food....">
                    <input type="button" value="search" id="submit">
                </form>
                <div class="div-description" id="div-description"></div>
                <div class="results" id="results">

                </div>
                <div class="storeFoods" id="storeFoods">
                    
                </div>
            </main>
        ` 
    }
    renderItems(item, parentElement) {
        //render a list of searched Items
        let div = document.createElement('div');
        div.classList.add('item-div');
        div.setAttribute("data-name", item.idMeal);
        div.innerHTML = `
        <img class="img" src="${item.strMealThumb}" alt="${item.strMeal}">
        <p>${item.strMeal}</p>
        <input class="view" type="button" value="View">
        `;
        parentElement.appendChild(div);
        return;

    }
    renderDetails() {
        //render details of searched Items
    }
    renderLocalList() {
        //render local List Items
    }
    renderLocalListItemDetails() {
        //render details of the selected 
    }
  }