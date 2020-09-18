// Get reference variables ro the input and label elements
const calculateButton = document.querySelector('label')
const shippingWeight = document.querySelector('input')

//create ref var to logo
//add click event to the logo and log text to the console
const navLogo = document.querySelector('img')
navLogo.addEventListener('click', function(){
    console.log('Nav Logo Clicked')
})

//create a ref var to the login button
//add click event to the login button, log you want lo login
const loginButton = document.querySelector('button')
loginButton.addEventListener('click', function(){
    console.log('Login attempt')
})


// Event

calculateButton.addEventListener('click', function(){
    let rate = parseFloat(shippingWeight.value) / 12
    console.log(rate)
})

