const catData = JSON.parse(data);

const contentBlock = document.querySelector('.content');

console.log(catData);

catData.forEach(element => {
    contentBlock.insertAdjacentHTML('beforeend',`
    <div class="error_card">
       <img src="${element.imgSrc}" alt="${element.nameError}">
       <p class="error_num">${element.numError}</p>
       <p class="error_name">${element.nameError}</p>
    </div>`)
});