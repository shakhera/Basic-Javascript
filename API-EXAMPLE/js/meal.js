
const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = meals => {
    // console.log(mealss.meals);
    // const meals = mealss.meals;
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</p>
            </div>
            <button type="button" onclick="loadMealsDetails(${meal.idMeal})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
             Details
            </button>
        </div>
        `;
        mealContainer.appendChild(mealDiv);

    })
}
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    //search meal
    console.log(searchText);
    loadMeals(searchText);
}
const loadMealsDetails = idMeal => {
    console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetails(data.meals[0]))
}
const displayMealsDetails = meal => {
    console.log(meal);
    document.getElementById('mealDetailsLabel').innerHTML = meal.strMeal;
    const mealDetails = document.getElementById('mealDetailsBody');
    mealDetails.innerHTML = `
        <img src="${meal.strMealThumb}" class="img-fluid">
    `;
}

loadMeals('rice');