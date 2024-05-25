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

const addCartButtons = document.querySelectorAll(".hide_add_but");
console.log(addCartButtons);
const cartItemsDiv = document.querySelector(".cart_items");

const arrayButtons = Array.from(addCartButtons);
let removeItemsButton = cartItemsDiv.querySelectorAll("button");

function ReloadRemoveItemsButton(){    
    removeItemsButton = cartItemsDiv.querySelectorAll("button");    
    
    removeItemsButton.forEach((elem)=>{
        let nums = removeItemsButton.length;
        elem.addEventListener('click', ()=>{
            console.log(elem.parentElement.remove());
            if (document.querySelectorAll('.cart_items_block_card').length == 0){
                cartItemsDiv.style.display = 'none';
            }
        }); 
    })    
}


arrayButtons.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        const indexElem = arrayButtons.indexOf(elem);
        const temp = data[indexElem];
        cartItemsDiv.style.display = 'flex';
        cartItemsDiv.insertAdjacentHTML('beforeend',
            `
            <div class="cart_items_block_card">
                <img class="cart_items_block_card_img" src="${temp.img}" alt="${temp.header}">
                <div class="cart_items_block_card_info">
                    <p class="cart_items_block_card_info_header">${temp.header}</p>
                    <p class="cart_items_block_card_info_p">Price: <span class="pink">${temp.price}</span></p>
                    <p class="cart_items_block_card_info_p">Color: <span>${temp.color}</span></p>
                    <p class="cart_items_block_card_info_p">Size: <span>${temp.size}</span></p>
                    <p class="cart_items_block_card_info_p">Quantity<input type="number" value="1" min="1"></p>
                </div>
                <button>
                    <svg width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">  
                        <path id="Vector" d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.82 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z" fill="#575757" fill-opacity="1.000000" fill-rule="nonzero"/>
                    </svg>
                </button>
            </div>
            `
        )
        ReloadRemoveItemsButton();                
    })
})






