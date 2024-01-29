// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "Organic Brocoli",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		price: 2.99
	},{
		name: "Celery",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		price: 2.20
	},
	{
		name: "Organic Celery",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		price: 2.20
	},
	{
		name: "Carrot",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		price: 1.25
	},
	{
		name: "Organic Carrot",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		price: 2.25
	},
	{
		name: "Banana",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		price: 0.75
	},
	{
		name: "Organic Banana",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		price: 2.25
	},
	{
		name: "Tofu",
		vegan: true,
		vegetarian: true,
		glutenFree: false,
		lactosefree: true,
		organic: false,
		price: 2.99
	},
	{
		name: "White Bread",
		vegan: true,
		vegetarian: true,
		glutenFree: false,
		lactosefree: true,
		organic: false,
		price: 2.35
	},
	{
		name: "Milk Bread",
		vegan: false,
		vegetarian: true,
		glutenFree: false,
		lactosefree: false,
		organic: false,
		price: 3.50
	},
	{
		name: "Milk",
		vegan: false,
		vegetarian: true,
		glutenFree: true,
		lactosefree: false,
		organic: false,
		price: 3.10
	},
	{
		name: "Greek Yogurt",
		vegan: false,
		vegetarian: true,
		glutenFree: true,
		lactosefree: false,
		organic: false,
		price: 3.50
	},
	{
		name: "Ground Beef",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		price: 5.99
	},
	{
		name: "Organic Ground Beef",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		price: 6.99
	},
	{
		name: "Pork Chops",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		price: 4.99
	},
	{
		name: "Organic Pork Chops",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		price: 5.99
	},
	{
		name: "Chicken Breasts",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		price: 6.50
	},
	{
		name: "Organic Chicken Breasts",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		price: 7.50
	},
	{
		name: "Salmon",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Organic Salmon",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		price: 11.00
	},
	{
		name: "Potato chips",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		price: 2.40
	},
	{
		name: "Key lime pie",
		vegan: false,
		vegetarian: true,
		glutenFree: false,
		lactosefree: false,
		organic: false,
		price: 7.75
	},
	{
		name: "Chocolate cake",
		vegan: false,
		vegetarian: true,
		glutenFree: false,
		lactosefree: false,
		organic: false,
		price: 8.00
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
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	totalPrice = round(totalPrice, 2)
	return totalPrice;
}