// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		src: "img/brocoli.jpeg",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "produce",
		price: 1.99,
		sale: true,
		quantity: 0
	},
	{
		name: "Organic Brocoli",
		src: "img/brocoli.jpeg",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "produce",
		price: 2.99,
		quantity: 0,
		sale: false
	},{
		name: "Celery",
		src: "img/celery.jpg",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "produce",
		price: 2.20,
		quantity: 0,
		sale: true
	},
	{
		name: "Organic Celery",
		src: "img/celery.jpg",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "produce",
		price: 2.20,
		quantity: 0,
		sale: true
	},
	{
		name: "Carrot",
		src: "img/carrot.jpg",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "produce",
		price: 1.25,
		quantity: 0,
		sale: false
	},
	{
		name: "Organic Carrot",
		src: "img/carrot.jpg",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "produce",
		price: 2.25,
		quantity: 0,
		sale: true
	},
	{
		name: "Banana",
		src: "img/banana.jpg",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "produce",
		price: 0.75,
		quantity: 0,
		sale: false
	},
	{
		name: "Organic Banana",
		src: "img/banana.jpg",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "produce",
		price: 2.25,
		quantity: 0,
		sale: false
	},
	{
		name: "Tofu",
		src: "img/tofu.jpg",
		vegan: true,
		vegetarian: true,
		glutenFree: false,
		lactosefree: true,
		organic: false,
		type: "protein",
		price: 2.99,
		quantity: 0,
		sale: false
	},
	{
		name: "White Bread",
		src: "img/whiteBread.jpg",
		vegan: true,
		vegetarian: true,
		glutenFree: false,
		lactosefree: true,
		organic: false,
		type: "grain",
		price: 2.35,
		quantity: 0,
		sale: false
	},
	{
		name: "Milk Bread",
		src: "img/milkBread.jpg",
		vegan: false,
		vegetarian: true,
		glutenFree: false,
		lactosefree: false,
		organic: false,
		type: "grain",
		price: 3.50,
		quantity: 0,
		sale: true
	},
	{
		name: "Milk",
		src: "img/milk.jpg",
		vegan: false,
		vegetarian: true,
		glutenFree: true,
		lactosefree: false,
		organic: false,
		type: "dairy",
		price: 3.10,
		quantity: 0,
		sale: false
	},
	{
		name: "Greek Yogurt",
		src: "img/greekYogurt.png",
		vegan: false,
		vegetarian: true,
		glutenFree: true,
		lactosefree: false,
		organic: false,
		type: "dairy",
		price: 3.50,
		quantity: 0,
		sale: false
	},
	{
		name: "Ground Beef",
		src: "img/groundBeef.jpeg",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "protein",
		price: 5.99,
		quantity: 0,
		sale: false
	},
	{
		name: "Organic Ground Beef",
		src: "img/groundBeef.jpeg",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "protein",
		price: 6.99,
		quantity: 0,
		sale: false
	},
	{
		name: "Pork Chops",
		src: "img/porkChops.jpeg",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "protein",
		price: 4.99,
		quantity: 0,
		sale: true
	},
	{
		name: "Organic Pork Chops",
		src: "img/porkChops.jpeg",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "protein",
		price: 5.99,
		quantity: 0,
		sale: false
	},
	{
		name: "Chicken Breasts",
		src: "img/chickenBreast.jpeg",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "protein",
		price: 6.50,
		quantity: 0,
		sale: false
	},
	{
		name: "Organic Chicken Breasts",
		src: "img/chickenBreast.jpeg",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "protein",
		price: 7.50,
		quantity: 0,
		sale: false
		
	},
	{
		name: "Salmon",
		src: "img/salmon.jpg",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "protein",
		price: 10.00,
		quantity: 0,
		sale: false
	},
	{
		name: "Organic Salmon",
		src: "img/salmon.jpg",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "protein",
		price: 11.00,
		quantity: 0,
		sale: false
	},
	{
		name: "Potato chips",
		src: "img/potatoChips.png",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "other",
		price: 2.40,
		quantity: 0,
		sale: false
	},
	{
		name: "Key lime pie",
		src: "img/keyLimePie.jpg",
		vegan: false,
		vegetarian: true,
		glutenFree: false,
		lactosefree: false,
		organic: false,
		type: "other",
		price: 7.75,
		quantity: 0,
		sale: false
	},
	{
		name: "Chocolate cake",
		src: "img/chocolatePie.jpg",
		vegan: false,
		vegetarian: true,
		glutenFree: false,
		lactosefree: false,
		organic: false,
		type: "other",
		price: 8.00,
		quantity: 0,
		sale: false
	}
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, restriction2) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction2 == "organic") && (prods[i].organic == true)){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product_names.push(prods[i]);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product_names.push(prods[i]);
			}
			else if ((restriction == "LactoseFree") && (prods[i].lactosefree == true)){
				product_names.push(prods[i]);
			}
			else if ((restriction == "Vegan") && (prods[i].vegan == true)){
				product_names.push(prods[i]);
			}
			else if (restriction == "None"){
				product_names.push(prods[i]);
			}
		}
		else if ((restriction2 == "non-organic") && (prods[i].organic == false)){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product_names.push(prods[i]);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product_names.push(prods[i]);
			}
			else if ((restriction == "LactoseFree") && (prods[i].lactosefree == true)){
				product_names.push(prods[i]);
			}
			else if ((restriction == "Vegan") && (prods[i].vegan == true)){
				product_names.push(prods[i]);
			}	
			else if (restriction == "None"){
				product_names.push(prods[i]);
			}
			}
		else if (restriction2 == "no preferences"){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product_names.push(prods[i]);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product_names.push(prods[i]);
			}
			else if ((restriction == "LactoseFree") && (prods[i].lactosefree == true)){
				product_names.push(prods[i]);
			}
			else if ((restriction == "Vegan") && (prods[i].vegan == true)){
				product_names.push(prods[i]);
			}
			else if (restriction == "None"){
				product_names.push(prods[i]);
			}
		}
		
	}

	// sorting the products by price
	product_names.sort((p1,p2) =>{
		return p1.price - p2.price;
	});
	return product_names;
}



//rounds sometimes bugged values to the hundredth 
function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i < chosenProducts.length; i+=1) {
		
		totalPrice += chosenProducts[i].price * chosenProducts[i].quantity;
		
	}
	totalPrice = round(totalPrice, 2)
	return totalPrice;
}