

const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
const priceTag = document.querySelector("h1")
const spanTag = document.querySelector("span")
let currency = "USD"

// create a function
const checkPrice = function () {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      priceTag.innerHTML = data.bpi[currency].rate_float.toFixed(1)
    })
}

// run this on load
checkPrice()


//loop over every nav link and add a click event

const navLinks = document.querySelectorAll("nav a")

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    currency = this.getAttribute("data-currency")
    checkPrice()

    //update actice state
    navLinks.forEach(link => link.classList.remove("selected"))
    this.classList.add("selected")

    //update spanTag accordingly
    spanTag.innerHTML = currency
  })
})


// check the price every 60 seconds
// create a loop

setInterval(function () {
  checkPrice()
}, 60000)
