// retrieving the hikes from a database, adding hikes, editing hikes, filtering, etc.

export default class View {
    constructor() {}
    renderHomePage(mainElement) {}

    renderResults(list, parentElement) {
        document.getElementById('view-container').innerHTML = "";
        let detailsDiv = document.getElementById('view-container');
        for (let i = 0; i < list.length; i++) {
            this.renderItems(list[i], parentElement, detailsDiv);
        }
        detailsDiv.appendChild(parentElement)
        return;
    }

    renderItems(item, parentElement) {
        let div = document.createElement('div');
        div.classList.add('item-div');
        div.innerHTML = `
        <img class="img" src="${item.strMealThumb}" alt="${item.strMeal}">
        <input class="view" id="view" type="button" value="View" data-name="${item.idMeal}">
        <p>${item.strMeal}</p>
        `;
        parentElement.appendChild(div);
        return;

    }
    renderDetails(item, btnNames) {
        let list = [
                    item.strIngredient1, 
                    item.strIngredient2, 
                    item.strIngredient3, 
                    item.strIngredient4, 
                    item.strIngredient5, 
                    item.strIngredient6, 
                    item.strIngredient7, 
                    item.strIngredient8,
                    item.strIngredient9, 
                    item.strIngredient10,
                    item.strIngredient11,
                    item.strIngredient12,
                    item.strIngredient13, 
                    item.strIngredient14,
                    item.strIngredient15,
                    item.strIngredient16, 
                    item.strIngredient17, 
                    item.strIngredient18, 
                    item.strIngredient19,
                    item.strIngredient20
                ];
        let list2 = [
            item.strMeasure1, 
            item.strMeasure2, 
            item.strMeasure3, 
            item.strMeasure4, 
            item.strMeasure5, 
            item.strMeasure6, 
            item.strMeasure7, 
            item.strMeasure8,
            item.strMeasure9, 
            item.strMeasure10,
            item.strMeasure11,
            item.strMeasuret12,
            item.strMeasure13, 
            item.strMeasure14,
            item.strMeasure15,
            item.strMeasure16, 
            item.strMeasure17, 
            item.strMeasure18, 
            item.strMeasure19,
            item.strMeasure20
        ];

        let newList = []
        for (let i = 0; i < list.length; i++) {
            if ((list[i] != '' && list[i] != null) && (list2[i] != '' && list2[i] != null)) {
                let measureAndIngred = `${list2[i]} ${list[i]}`;
                newList.push(measureAndIngred);
            }
        } 
        console.log(newList);
        
        let imgList = [];
        for (let i = 0; i < list.length; i++) {
            if ((list[i] != '' && list[i] != null) && (list2[i] != '' && list2[i] != null)) {
                let imageName = `${list[i]}`;
                imgList.push(imageName);
            }
        }

        document.getElementById('results').classList.remove('results');
        document.getElementById('results').classList.add('hide');
        let detailsDiv = document.getElementById('view-container');

        //buttons
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonDiv');
        buttonDiv.setAttribute('id', 'buttonDiv');
        let buttonOne = document.createElement('button');
        buttonOne.classList.add('back');
        buttonOne.setAttribute('id', `${btnNames[0]}`);
        buttonOne.setAttribute('data-name', `${btnNames[0]}`);
        buttonOne.innerText = `${btnNames[0]}`;
        let buttonTwo = document.createElement('button');
        buttonTwo.classList.add('add');
        buttonTwo.setAttribute('id',`${btnNames[1]}`);
        buttonTwo.setAttribute('data-name',`${btnNames[1]}`);
        buttonTwo.innerText = `${btnNames[1]}`;
        buttonDiv.appendChild(buttonOne);
        buttonDiv.appendChild(buttonTwo);
        detailsDiv.appendChild(buttonDiv);
        //buttons

        let detailsSecond = document.createElement('div');
        detailsSecond.classList.add('detailsSecond');
        detailsSecond.setAttribute('id', 'detailsSecond');
        let foodAndIngredients = document.createElement('div');
        foodAndIngredients.classList.add('foodAndIngredients');
        let food = document.createElement('div');
        food.classList.add('food');
        food.innerHTML = `
            <img class="img" src="${item.strMealThumb}" alt="${item.strMeal}">
            <h2>${item.strMeal}</h2>
            <p>Food Category: ${item.strCategory}</p>
            <p>Style:  ${item.strArea}</p>
            `;
        let ingredient = document.createElement('div');
        ingredient.classList.add('ingredient');
        let ingredientsContainer = document.createElement('div');
        ingredientsContainer.classList.add('ingredientsContainer');
        let h3 = document.createElement('h3');
        h3.innerText = "Ingredients";
        let ul = document.createElement('ul');
        ul.classList.add('ingred-ul')
        ul.setAttribute('id', 'ingredi');
        newList.forEach((one) => {
            let li =  document.createElement('li');
            li.classList.add('li-measure');
            li.innerHTML = `${one}`;
            ul.appendChild(li);
        })
        let ingredientsImages = document.createElement('div');
        ingredientsImages.classList.add('ingredientsImages');
        imgList.forEach((imageName) => {
            let imgDiv = document.createElement('div');
            imgDiv.classList.add('imgDiv');
            imgDiv.innerHTML = `
                <h4>${imageName}</h4><img class="Divimg" src="https://www.themealdb.com/images/ingredients/${imageName}-Small.png" alt="${imageName}">
            `;
            ingredientsImages.appendChild(imgDiv);
        })

        let instructions = document.createElement('div');
        instructions.classList.add('instructions');
        instructions.innerHTML = `
            <h3>Instructions</h3>
            <p>${item.strInstructions}</p>
        `;

        //appendChild
        foodAndIngredients.appendChild(food);
        foodAndIngredients.appendChild(ingredient);
        ingredient.appendChild(ingredientsContainer)
        ingredientsContainer.appendChild(h3);
        ingredientsContainer.appendChild(ul);
        ingredient.appendChild(ingredientsImages);
        detailsSecond.appendChild(foodAndIngredients);
        detailsSecond.appendChild(instructions);
        detailsDiv.appendChild(detailsSecond);
        return;
    }
}