//sign up script
function validateSignUp() {
    var valid = true
    // bch kl ma yalqa ghalta ma ykmlch


    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var usernameError = document.getElementById('username-error');
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');
    var confirmError = document.getElementById('confirm-error');

    // bch yfasakh ay msg erreur tktb
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmError.textContent = '';

    // bch ychouf kol input feragh wlee
    if (username.value.trim() === '') {
        usernameError.textContent = 'Username required';
        valid = false;
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Email required';
        valid = false;
    }

    if (password.value.trim() === '') {
        passwordError.textContent = 'Password required';
        valid = false;
    }

    if (confirmPassword.value.trim() === '') {
        confirmError.textContent = 'Confirm password';
        valid = false;
    } else if (confirmPassword.value !== password.value) {
        confirmError.textContent = 'Passwords do not match';
        valid = false;
    }

    // amalt aleha recherche bch k yokhrj kl chy shyh tmchy l shop
    if (valid) {
        window.location.href = 'Shop.html'
    }
}

function validateProduct() {
    var valid = true;

    var name = document.getElementById('productName');
    var price = document.getElementById('productPrice');
    var img = document.getElementById('productImg');
    var desc = document.getElementById('productDesc');

    var nameError = document.getElementById('productName-error');
    var priceError = document.getElementById('productPrice-error');
    var imgError = document.getElementById('productImg-error');
    var descError = document.getElementById('productDesc-error');

    // tfasakh lmsgt erreur ken mwjoudyn
    nameError.textContent = '';
    priceError.textContent = '';
    imgError.textContent = '';
    descError.textContent = '';

    // taaml verification ll camps
    if (name.value.trim() === '') {
        nameError.textContent = 'Product Name required';
        valid = false;
    }

    if (price.value.trim() === '') {
        priceError.textContent = 'Price required';
        valid = false;
    } else if (isNaN(price.value)) {
        priceError.textContent = 'Price must be a number';
        valid = false;
    }

    if (img.value.trim() === '') {
        imgError.textContent = 'Image required';
        valid = false;
    }

    if (desc.value.trim() === '') {
        descError.textContent = 'Description required';
        valid = false;
    }

    // ken test shyh taadyh
    if(valid){
        // taaml load
         var products = JSON.parse(localStorage.getItem('products')) || [];

    // taamlu push
    products.push({
        name: name.value.trim(),
        price: price.value.trim(),
        img: img.value.trim(),
        desc: desc.value.trim()
    });

    localStorage.setItem('products', JSON.stringify(products));

 

    // tfskh champs
    name.value = '';
    price.value = '';
    img.value = '';
    desc.value = '';
}}
//shop script
function loadProducts(){
    var shopGrid = document.getElementById('shopGrid');
    var products = JSON.parse(localStorage.getItem('products'));//yekhou products saved fl localstorage

    shopGrid.innerHTML = '';

    products.forEach(p => {
        var card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p class="price">$${p.price}</p>
            <p class="desc">${p.desc}</p>
            <button class="shop-btn">Add to Cart</button>
        `;

        shopGrid.appendChild(card);
    });
}

// taaml load ll produit k ytzedu
window.onload = loadProducts;


