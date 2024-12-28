
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}

let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}

function validateForm() {

    //validate email
    let email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        alert("Please enter your email.");
        return false;
    } else if (!email.match(emailPattern)) {
        alert("Invalid email address. ");
        return false;
    }

     // Check phone number
   let phone = document.getElementById("phone").value;
   const phonePattern = /^\+94[0-9]{9}$/;
   let msg = document.getElementById('msg');
   
   if (!phone.match(phonePattern)) {
       msg.innerHTML = "Invalid Phone Number.";
       msg.style.color = 'red';
       document.getElementById('phone').focus();
       document.getElementById('phone').select();
       return false;
   } else {
       msg.innerHTML = "Valid Phone Number.";
       msg.style.color = 'green';
   }
   
   // Check NIC
   let nic = document.getElementById("nic").value;
   const nicPattern1 = /^[0-9]{9}[vVxX]$/;
   const nicPattern2 = /^[0-9]{12}$/;

   if (nic === "") {
       alert("Please enter your NIC.");
       return false;
   } else if (!(nic.match(nicPattern1) ||nic.match(nicPattern2 ))) {
       alert("Invalid NIC.");
       return false;
   }

   alert("message send successfully ");
   return true;
}

// Sample product data
const products = [
    {
        name: 'Apple iPhone 16 Pro Max',
        description: 'Latest model with advanced features.',
        price: 'රු 300,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },
    {
        name: 'Apple iPhone 15 Pro Max',
        description: 'Latest model with advanced features.',
        price: 'රු 300,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },{
        name: 'Apple iPhone 14 Pro Max',
        description: 'Latest model with advanced features.',
        price: 'රු 300,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },{
        name: 'Apple iPhone 13 Pro Max',
        description: 'Latest model with advanced features.',
        price: 'රු 300,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },
    {
        name: 'Apple iPhone 12 Pro Max',
        description: 'Latest model with advanced features.',
        price: 'රු 300,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },
    {
        name: 'Samsung Galaxy S24',
        description: 'High-performance smartphone with stunning display.',
        price: 'රු 250,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },
    {
        name: 'Samsung Galaxy S23',
        description: 'High-performance smartphone with stunning display.',
        price: 'රු 250,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },{
        name: 'Samsung Galaxy S22',
        description: 'High-performance smartphone with stunning display.',
        price: 'රු 250,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },{
        name: 'Samsung Galaxy S21',
        description: 'High-performance smartphone with stunning display.',
        price: 'රු 250,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },{
        name: 'Samsung Galaxy S20',
        description: 'High-performance smartphone with stunning display.',
        price: 'රු 250,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },
    {
        name: 'Huawei Mate 60 Pro',
        description: 'Innovative design with powerful camera system.',
        price: 'රු 220,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },
    {
        name: 'Huawei Mate 50 Pro',
        description: 'Innovative design with powerful camera system.',
        price: 'රු 220,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },{
        name: 'Huawei Mate 40 Pro',
        description: 'Innovative design with powerful camera system.',
        price: 'රු 220,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },{
        name: 'Huawei Mate 30 Pro',
        description: 'Innovative design with powerful camera system.',
        price: 'රු 220,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },{
        name: 'Huawei Mate 20 Pro',
        description: 'Innovative design with powerful camera system.',
        price: 'රු 220,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },
    {
        name: 'Sony WH-1',
        description: 'Noise-canceling headphones with superior sound quality.',
        price: 'රු 75,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },
    {
        name: 'Sony WH-2',
        description: 'Noise-canceling headphones with superior sound quality.',
        price: 'රු 75,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },{
        name: 'Sony WH-3',
        description: 'Noise-canceling headphones with superior sound quality.',
        price: 'රු 75,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },{
        name: 'Sony WH-4',
        description: 'Noise-canceling headphones with superior sound quality.',
        price: 'රු 75,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },{
        name: 'Sony WH-5',
        description: 'Noise-canceling headphones with superior sound quality.',
        price: 'රු 75,000.00',
        image: 'image/p3.jpg',
        link: '#'
    },
    
    
];

// Function to display products
function displayProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.setAttribute('data-aos', 'fade-up');

        productItem.innerHTML = `
            <a href="product-details.html?name=${encodeURIComponent(product.name)}&description=${encodeURIComponent(product.description)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </a>
        `;

        productList.appendChild(productItem);
    });
}

// Initialize the page
displayProducts();



