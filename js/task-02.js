
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
]
const ulIngredientsRef = document.querySelector('#ingredients');

const ingredientsMarkup = ingredients.map((el) => {
    const li = document.createElement('li');
    li.textContent = el;
    return li;

})
ulIngredientsRef.append(...ingredientsMarkup);
