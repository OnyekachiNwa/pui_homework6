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

function addToCart() {
	var count = document.getElementById("quantitydropdown").value;
	document.getElementById("cartTotal").innerHTML = count;
};

//Only thing is now adding multiple items and keeping cart up to up to update

//var productArray = []

//product class for buns to be purchased
//class Product {
	//constructor(price, name, glaze, quantity) {
		//this.price = price
		//this.name = name
		//this.glaze = glaze
		//this.quantity = quantity
	//};
//};

//var quantity = document.getElementById('quantitydropdown').value
//var quantityTotal = parseInt(quantity)
//for(var i = 0; i < quantCount; i++) {
	//var bun = new Product(flavor, quantity, glaze, price)
	//productArray.push(bun)
//};

//console.log(productArray);
