// Task 1

const ulRef = document.querySelector('#categories');
console.log(`V spiske ${ulRef.children.length} kategorii`);
[...ulRef.children].forEach((el) => {
    console.log('Kategoria:', el.children[0].textContent);
    console.log('Kolichestvo elementov:', el.children[1].children.length);
});


// Task 2
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


// Task 3

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulGalleryRef = document.querySelector('#gallery');

const markup = images.reduce((acc, { url, alt }) => {
    return acc + `<li><img src='${url}'alt="${alt}" width="300"></li>`;
}, "");
ulGalleryRef.insertAdjacentHTML('beforeend', markup);

// Task 4

const ref = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value')
};

let counterValue = 0;
ref.decrement.addEventListener('click', onDecrement);
ref.increment.addEventListener('click', onIncrement);

function onDecrement(e) {
    ref.span.textContent = counterValue -= 1;
}
function onIncrement(e) {
    ref.span.textContent = counterValue += 1;
}

// Task 5

const refs = {
    input: document.querySelector('#name-input'),
    span:document.querySelector('#name-output'),
}

refs.input.addEventListener('input', changeName);

function changeName(e) {
    e.target.value.trim() !== "" ? refs.span.textContent = e.target.value : refs.span.textContent = "neznakomec"
    
}

// Task 6
const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onValidate);
function onValidate(e) {
    if (+e.target.dataset.length === e.target.value.length) {
        changeClass('valid', 'invalid')
    } else { changeClass('invalid','valid') }
};

function changeClass(add, rem) {
    validationInputRef.classList.remove(rem);
    validationInputRef.classList.add(add);
}


// Task 7
const refs7 = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs7.input.addEventListener("input", changeFontSize);

function changeFontSize(e) {
  refs7.span.style.fontSize = e.target.value + "px";
};







