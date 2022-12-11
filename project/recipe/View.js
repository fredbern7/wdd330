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
        div.innerHTML = `
        <img class="img" src="${item.strMealThumb}" alt="${item.strMeal}">
        <p>${item.strMeal}</p>
        <input class="view" type="button" value="View" data-name="${item.idMeal}">
        `;
        parentElement.appendChild(div);
        return;

    }
    renderDetails(item, parentElement) {
        //render details of searched Items
        let div = document.createElement('div');
        div.classList.add('details-div');
        div.innerHTML = `
        <div class="back-add">
            <input class="back" type="button" value="HomePage" data-name="${item.idMeal}">
            <input class="add" type="button" value="Add" data-name="${item.idMeal}">
        </div>
        <div class="food-ingredients">
            <div class="food">
                <img class="img" src="${item.strMealThumb}" alt="${item.strMeal}">
                <p>${item.strMeal}</p>
            </div>

            <div class="ingredient">

            </div>

        </div>
        `;
        parentElement.appendChild(div);
        return;
    }
    renderLocalList() {
        //render local List Items
    }
    renderLocalListItemDetails() {
        //render details of the selected 
    }
  }