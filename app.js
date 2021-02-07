document.getElementById('search-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('input').value
    console.log(inputValue)
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + inputValue
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(err => console.log(err))
})


const displayMeals = meals => {
    document.getElementById('input').value = ''
    const container = document.getElementById("all-div")
    meals.forEach(meal => {
        const mealDiv = document.createElement('div')
        mealDiv.className = "meal-class"
        const mealInfo = `
        <img src="${meal.strMealThumb}">
        <br>
        <h5>${meal.strMeal}</h5>
        `
        mealDiv.addEventListener('click', function () {
            detailFetch(meal.idMeal)
        })
        mealDiv.innerHTML = mealInfo
        container.appendChild(mealDiv)
    });
}
const displayError = () => {
    const container = document.getElementById("all-div")
    const mealDiv = document.createElement('div')
    mealDiv.className = "meal-class"
    const mealInfo = `
    <h1>No result found</h1>
    `
    mealDiv.innerHTML = mealInfo
    container.appendChild(mealDiv)
}
const detailFetch = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data.meals[0]))
}

const displayDetail = meal => {
    console.log(meal)
    const detailContainer = document.getElementById("detail-div")
    detailContainer.className = "detail"
    const detailInfo = `
        <img src="${meal.strMealThumb}">
        <br>
        <h5>${meal.strMeal}</h5>
        <ul>
            <li>${meal.strIngredient1}</li>
            <li>${meal.strIngredient2}</li>
            <li>${meal.strIngredient3}</li>
            <li>${meal.strIngredient4}</li>
            <li>${meal.strIngredient5}</li>
        </ul>
    `
    detailContainer.innerHTML = detailInfo
}