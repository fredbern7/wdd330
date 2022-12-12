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
                <div class="view-container" id="view-container">
                <div class="results" id="results">

                </div>
                </div>
                <div class="storeFoods" id="storeFoods">
                    
                </div>
            </main>
        ` 
    }
    
    renderResults(list, parentElement) {
        for (let i = 0; i < list.length; i++) {
            this.renderItems(list[i], parentElement);
        }
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
    renderDetails(item) {
        //render details of searched Items
        // let ul = document.createElement('ul');
        // let list = []
        // for (let i = 1; i < 20; i++) {
        //     if (`item.strIngredient${i}` != null ||`item.strIngredient${i}` != " ") {
        //         list.push(`<li class="item.strIngredient${i}">item.strMeasure${i} item.strIngredient${i}</li>`)
        //     }
        // };
        console.log("Details View");
        let detailsDiv = document.getElementById('view-container');
        detailsDiv.innerHTML = "";
        detailsDiv.innerHTML = `
        <div class="back-add">
            <input class="back" type="button" value="Back" data-name="${item.idMeal}">
            <input class="add" type="button" value="Add" data-name="${item.idMeal}">
        </div>
        <div class="foodAndIngredients">
            <div class="food">
                <img class="img" src="${item.strMealThumb}" alt="${item.strMeal}">
                <p>${item.strMeal}</p>
            </div>

            <div class="ingredient">
            <h3>Ingredients</h3>
                <ul id="ingredi">
                    <li class="${item.strIngredient1}">${item.strMeasure1} ${item.strIngredient1}</li>
                    <li class="${item.strIngredient2}">${item.strMeasure2} ${item.strIngredient2}</li>
                    <li class="${item.strIngredient3}">${item.strMeasure3} ${item.strIngredient3}</li>
                    <li class="${item.strIngredient4}">${item.strMeasure4} ${item.strIngredient4}</li>
                    <li class="${item.strIngredient5}">${item.strMeasure5} ${item.strIngredient5}</li>
                    <li class="${item.strIngredient6}">${item.strMeasure6} ${item.strIngredient6}</li>
                    <li class="${item.strIngredient7}">${item.strMeasure7} ${item.strIngredient7}</li>
                    <li class="${item.strIngredient8}">${item.strMeasure8} ${item.strIngredient8}</li>
                    <li class="${item.strIngredient9}">${item.strMeasure9} ${item.strIngredient9}</li>
                    <li class="${item.strIngredient10}">${item.strMeasure10} ${item.strIngredient10}</li>
                    <li class="${item.strIngredient11}">${item.strMeasure11} ${item.strIngredient11}</li>
                    <li class="${item.strIngredient12}">${item.strMeasure12} ${item.strIngredient12}</li>
                    <li class="${item.strIngredient13}">${item.strMeasure13} ${item.strIngredient13}</li>
                    <li class="${item.strIngredient14}">${item.strMeasure14} ${item.strIngredient14}</li>
                    <li class="${item.strIngredient15}">${item.strMeasure15} ${item.strIngredient15}</li>
                    <liclass="${item.strIngredient16}">${item.strMeasure16} ${item.strIngredient16}</li>
                    <li class="${item.strIngredient17}">${item.strMeasure17} ${item.strIngredient17}</li>
                    <li class="${item.strIngredient18}">${item.strMeasure18} ${item.strIngredient18}</li>
                    <li class="${item.strIngredient19}">${item.strMeasure19} ${item.strIngredient19}</li>
                    <li class="${item.strIngredient20}">${item.strMeasure20} ${item.strIngredient20}</li>
                </ul>
            </div>
        </div>
        <div class="instructions">
            <h3>Instructions</h3>
            <p>${item.strInstructions}</p>
        </div>
        `;
        return;
    }
    renderLocalList() {
        //render local List Items
    }
    renderLocalListItemDetails() {
        //render details of the selected 
    }
  }