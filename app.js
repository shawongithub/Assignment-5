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
    console.log(meals)

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
const detailFetch = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.meals[0]))
}

// const displayDetail = meal => {
//     const detailContainer = document.getElementById("detail-div")
//     detailContainer.className = "detail"
//     const detailInfo = `
//         <img src="${}">
//         <h3>${country.name}</h3>
//     `
//     detailContainer.innerHTML = detailInfo
// }