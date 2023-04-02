const product = [
    {
        id: 1,
        image: 'imgs/aa-1.jpg',
        title: 'Headphone',
        price: $20,
    },
    {
        id: 2,
        image: 'imgs/bb-1.jpg',
        title: 'IPhone 14',
        price: $989,
    },
    {
        id: 3, 
        image: 'imgs/cc-1.jpg',
        title: 'Canon camera',
        price: $1489,
    },
    {
        id: 4,
        image: 'imgs/dd-1.jpg',
        title: 'Apple Watch',
        price: $760,
    },
    {
        id: 5,
        image: 'imgs/ee-1.jpg',
        title: 'Drones',
        price: $289,
    },
    {
        id: 6,
        image: 'imgs/ff-1.jpg',
        title: 'Red Shirt',
        price: $25,
    },
    {
        id: 7,
        image: 'imgs/gg-1.jpg',
        title: 'Cargo-pants',
        price: $10,
    },
    {
        id: 8,
        image: 'imgs/hh-1.jpg',
        title: 'Sneakers',
        price: $205,
    }
]
const categories = [...new Set(product.map((item)=>
    {return item}))]

let cart = document.getElementById('root')
cart.innerHTML = categories.map((item)=> 
{
    var { image, title, price } = item;
    return (
            `<div class="box">
               <div class="img-box" >
                  <img src=${image}></img>
               </div>
                <div class="left">
                <p>${title}</p>
                <h2>${price}</h2>
                <button>Add to Cart</button>
                </div>
             </div>`
        )
}).join('')
