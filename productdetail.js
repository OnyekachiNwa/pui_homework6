/*
2. What inputs in the HTML would correpsond to these attributes (i.e. frosting or no frosting, that might be a dropdown with true/false or a radio button with yes/no)
3. Create an add-to-cart button and tie an JavaScript event to it via a function
4. In the function we created about in #3, When add-to-cart is pressed, we need to grab the values from these corresponding HTML elements
5. With these values as local variables, use them to create our product object in a class we are about to make
6. Now we need to make our product class, just like the Item class below this text!
7. add the created object to a list we have
8. In the function we made in step 3, call another function we'll create to update our cart number
9. in this cart number update function, we take the length of our productArr and make the cart icon display that
*/

/*

JSON takes an object or list of objects
Make them into a string, including all the attributes
You then pass this string to another page (Via several methods)
Then that reciving page decodes the string and makes it back into an object(s)

*/

var productArray = []

//This is a product class for the type of bun purchased
class OgBun {
	constructor(quantity, glaze, price) {
		this.quantity = quantity
		this.glaze = glaze
		this.price = price
	}

	//Returns the total cost of the item (price x quantity)
	getTotal() {
		return this.price * this.quantity
	}
}

function addToCart() {
	var quantity = document.getElementById('quantitydropdown').value;
	alert('selected bun quantity: ' + quantity)

	var glaze = document.getElementById('glazedropdown').value;
	alert('chosen glaze: ' + glaze)
	}

	console.log(productArr)
	var bun = new OgBun(quantity, glaze, price)

//I AM HERE @ 1:15:51 FOR THE VIDEO
	productArray.push(bun)

	updateCartNumber(productArr.length)
}

function updateCartNumber(num) {
	var cartCount = document.getElementById('cartCount')
	cartCount.innerHTML = num
}

//page unload or page navigation event in vanilla javascript
//vanilla javascript alert button events
function goToCheckoutPage() {
	//Set the product order in local storage
	localStorage.setItem('order', JSON.stringify(productArr))

	var loadedProductArr = localStorage.getItem('order')
	var productArr2 = JSON.parse(loadedProductArr)

	//At this point, productArr2 is the same as productArr

	//load that new HTML page
	//do stuff with productArr
}

/*

productArr = []

class Item {
	constructor(name, price, quantity) {
		this.name = name
		this.price = price
		this.quantity = quantity
	}

	getTotal() {
		return this.price * this.quantity
	}

	display() {
		return this.name + ' x ' + this.quantity + ' = ' + (this.price * this.quantity)
	}
}

class Receipt {
	constructor() {
		this.items = []

	}

	addItem(item) {
		var itemInItems = false
		for(var i = 0; i < this.items.length; i++) {
			if (this.items[i].name == item.name && this.items[i].price == item.price) {
				itemInItems = true
				this.items[i].quantity = parseFloat(this.items[i].quantity) + parseFloat(item.quantity)

			}
		}

		if (!itemInItems) {
			this.items.push(item)
		}
	}

	display() {
		var d = ''
		for(var i = 0; i < this.items.length; i++) {
			d = d + this.items[i].display() + '<br />'; //console.log(items[i].display())
		}
		return d
	}
}

var receipt = new Receipt()

function purchaseItem() {
	itemName = document.getElementById('flowerType').value
	itemPrice = document.getElementById('itemPrice').value
	quantity = document.getElementById('quantity').value


	item = new Item(itemName, itemPrice, quantity)
	receipt.addItem(item)

	itemTotal = document.getElementById('itemTotal')
	itemTotal.innerText = item.getTotal().toFixed(2)
}

function updateReceipt() {
	ele = document.getElementById('receipt')
	ele.innerHTML = receipt.display()

	var sum = 0
	for(var i = 0; i < receipt.items.length; i++) {
		sum = sum + parseFloat(receipt.items[i].getTotal())
	}

	receiptTotal = document.getElementById('receiptTotal')
	receiptTotal.innerText = sum.toFixed(2)
}

function startOver() {
	receipt = new Receipt()

	document.getElementById('itemName').value = ''
	document.getElementById('itemPrice').value = ''
	document.getElementById('quantity').value = ''

	document.getElementById('itemTotal').innerText = '0.00'

	document.getElementById('receipt').innerHTML = ''
	document.getElementById('receiptTotal').innerText = '0.00'

}
*/
