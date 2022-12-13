renderIngredients(newList) {
    detailsDiv.innerHTML = `

        <div class="foodAndIngredients">
            <div class="food">
                <img class="img" src="${item.strMealThumb}" alt="${item.strMeal}">
                <h2>${item.strMeal}</h2>
            </div>

            <div class="ingredient">
                <div class="ingredientsContainer">
                    <h3>Ingredients</h3>
                        <ul id="ingredi">
                            <li class="${item.strIngredient1}">${item.strMeasure1} ${item.strIngredient1}</li>
                            <li class="${item.strIngredient2}">${item.strMeasure2} ${item.strIngredient2}</li>
                            <li class="${item.strIngredient3}">${item.strMeasure3} ${item.strIngredient3}</li>
                        </ul>
                </div>
                <div class="ingredientsImages">
                        <div class="imgDiv"><h4>${item.strIngredient1}</h4><img class="Divimg" src="https://www.themealdb.com/images/ingredients/${item.strIngredient1}-Small.png" alt="${item.strIngredient1}"></div>
                        <div class="imgDiv"><h4>${item.strIngredient2}</h4><img class="Divimg" src="https://www.themealdb.com/images/ingredients/${item.strIngredient2}-Small.png" alt="${item.strIngredient2}"></div>
                </div>
            </div>
        </div>
        <div class="instructions">
            <h3>Instructions</h3>
            <p>${item.strInstructions}</p>
        </div>
        `;
}