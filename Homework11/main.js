const url = "./data.json";

async function fetchData(url){
    try{
        const response = await fetch(url);
        const data = response.json();
        return data 
    }
    catch (error)
    {
        console.log(`ошибка - ${error}`);
    }
}

const data = await fetchData(url);
console.log(data);
const gridProducts = document.querySelector(".products_grid2");

data.forEach((element) => {
    gridProducts.insertAdjacentHTML("beforeend",
    `
    <div class="card5">
    <div class="card5_img">
        <div class="hide_add_cart">                        
            <button class="hide_add_but">
                <img class="hide_add_img" src="./img/add_cart_img.svg" alt="add-cart">
                <p>Add to Cart</p>
            </button>
        </div>
        <img class="grid2_img" src="${element.img}" alt="${element.header}">
    </div>
    <div class="card5_text">
        <p class="grid2_p1">${element.header}</p>
        <p class="grid2_p2">${element.text}</p>
        <p class="grid2_p3">${element.price}</p>
    </div>
    </div>`
    )
});
