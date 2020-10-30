//function to make selection from product page appear on details page (after clicking show more button)
function linkingPages() {
	var link = window.location.href;
	console.log(link);
	var linkparts = link.split("?");
	if (linkparts.length == 2) {
		var info = linkparts[1];
		var more = JSON.parse(localStorage.getItem(info));

		console.log(more);

		document.getElementById("productname").innerHTML = more.name;
		document.getElementById("productprice").innerHTML = "$" + more.price;
	};
};

//list for objects/bun items to enter
var productList =[];

//product class for buns to be purchased
class Product {
	constructor(price, glaze, quantity) {
		this.price = price
		this.glaze = glaze
		this.quantity = quantity
	}
};

//add the dropdown value to the cartList
function addToCart() {
	//objects for 6b
	var price = document.getElementById("productprice").value;
	var glaze = document.getElementById("glazedropdown").value;
	var quantity = document.getElementById("quantitydropdown").value;
	//create object instance 6b
	var purchase = new Product(price, glaze, quantity)
	//add this to a list
	productList.push(purchase)
	//update the list by adding each order of items
	updateCart(productList.length)
	//console.log(productList)
};

//the cartTotal is the amount of orders (seen next to shopping cart)
function updateCart(purchase) {
	var cartTotal = document.getElementById("cartTotal")
	cartTotal.innerHTML = purchase
};
