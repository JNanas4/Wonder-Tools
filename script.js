const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })

    }

    if (close){
        close.addEventListener('click', () =>{
            nav.classList.remove('active');
        })
    
        }    
/*login/signup*/ 
document.querySelector('.signup-link').addEventListener('click', () => {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.signup').style.display = 'block';
});

document.querySelector('.login-link').addEventListener('click', () => {
    document.querySelector('.signup').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
});

document.querySelector('.login-form').style.display = 'block';
document.querySelector('.signup').style.display = 'none';

function getProductDetails() {
  const productName = 'Marking Gauge';
  const productPrice = 1999; // in cents
  const productQuantity = parseInt(document.querySelector('#prodetails input[type="number"]').value);

  return { productName, productPrice, productQuantity };
}

function addToCart() {
  const productDetails = getProductDetails();
  addProductToCart(productDetails);
}

function addProductToCart(productDetails) {
  const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

  const productIndex = cartProducts.findIndex(product => product.productName === productDetails.productName);
  if (productIndex !== -1) {
    // If the product already exists in the cart, increase the quantity
    cartProducts[productIndex].productQuantity += productDetails.productQuantity;
  } else {
    // If the product doesn't exist in the cart, add it as a new item
    cartProducts.push(productDetails);
  }

  localStorage.setItem('cart', JSON.stringify(cartProducts));

  // Navigate to the cart page
  window.location.href = 'cart.html';
}

document.querySelector('#prodetails button.normal').addEventListener('click', addToCart);