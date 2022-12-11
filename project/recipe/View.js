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
        <input class="view" type="button" value="View" data-name="${item.idMeal}">
        <p>${item.strMeal}</p>
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
        <div class="food-instruction">
            <div class="food">
                <img class="img" src="${item.strMealThumb}" alt="${item.strMeal}">
                <p>${item.strMeal}</p>
            </div>

            <div class="instructions">
                <ul id="ingredi">
                    <li>${item.strMeasure1}: ${item.strIngredient1}</li>
                    <li>${item.strMeasure2}: ${item.strIngredient2}</li>
                    <li>${item.strMeasure3}: ${item.strIngredient3}</li>
                    <li>${item.strMeasure4}: ${item.strIngredient4}</li>
                    <li>${item.strMeasure5}: ${item.strIngredient5}</li>
                    <li>${item.strMeasure6}: ${item.strIngredient6}</li>
                    <li>${item.strMeasure7}: ${item.strIngredient7}</li>
                    <li>${item.strMeasure8}: ${item.strIngredient8}</li>
                    <li>${item.strMeasure9}: ${item.strIngredient9}</li>
                    <li>${item.strMeasure10}: ${item.strIngredient10}</li>
                    <li>${item.strMeasure11}: ${item.strIngredient11}</li>
                    <li>${item.strMeasure12}: ${item.strIngredient12}</li>
                    <li>${item.strMeasure13}: ${item.strIngredient13}</li>
                    <li>${item.strMeasure14}: ${item.strIngredient14}</li>
                    <li>${item.strMeasure15}: ${item.strIngredient15}</li>
                    <li>${item.strMeasure16}: ${item.strIngredient16}</li>
                    <li>${item.strMeasure17}: ${item.strIngredient17}</li>
                    <li>${item.strMeasure18}: ${item.strIngredient18}</li>
                    <li>${item.strMeasure19}: ${item.strIngredient19}</li>
                    <li>${item.strMeasure20}: ${item.strIngredient20}</li>
                </ul>
            </div>
        </div>
        <div class="ingredient">

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