"use strict";
let pros = [
    {
        id: 0,
        name: 'sp',
        cost: 999999,
        img: 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id: 1,
        name: 'sp1',
        cost: 999999,
        img: 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id: 2,
        name: 'sp2',
        cost: 999999,
        img: 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id: 3,
        name: 'sp3',
        cost: 999999,
        img: 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id: 4,
        name: 'sp4',
        cost: 999999,
        img: 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id: 5,
        name: 'sp5',
        cost: 999999,
        img: 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
];
const box = document.querySelector('main');
function loadPdCard(product, box) {
    const div = document.createElement('div');
    const name = document.createElement('h3');
    const cost = document.createElement('p');
    const img = document.createElement('img');
    div.dataset.id_product = String(product.id);
    div.classList.add('product_card');
    img.src = product.img;
    name.innerText = product.name;
    cost.innerText = String(product.cost);
    div.append(img, name, cost);
    box.append(div);
}
pros.forEach(e => {
    loadPdCard(e, box);
});
