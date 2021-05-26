
const ulRef = document.querySelector('#categories');
console.log(`V spiske ${ulRef.children.length} kategorii`);
[...ulRef.children].forEach((el) => {
    console.log('Kategoria:', el.children[0].textContent);
    console.log('Kolichestvo elementov:', el.children[1].children.length);
});
