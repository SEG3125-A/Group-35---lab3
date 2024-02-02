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
		type: "produce",
		price: 1.99,
		sale: true,
		src:"./style/wallpaper1.jpg"
	},
	{
		name: "Organic Brocoli",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "produce",
		price: 2.99,
		sale: true,
		src:"./style/wallpaper1.jpg"
	},{
		name: "Celery",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "produce",
		price: 2.20,
		sale: true,
		src:"./style/wallpaper1.jpg"
	},
	{
		name: "Organic Celery",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "produce",
		price: 2.20,
		sale: true,
		src:"./style/wallpaper1.jpg"
	},
	{
		name: "Carrot",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "produce",
		price: 1.25,
		sale:true,
		src:"./style/wallpaper1.jpg"
	},
	{
		name: "Organic Carrot",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "produce",
		price: 2.25,
		sale:true,
		src:"./style/wallpaper1.jpg"
	},
	{
		name: "Banana",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "produce",
		price: 0.75,
		sale:false,
		src:"./style/wallpaper1.jpg"
	},
	{
		name: "Organic Banana",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "produce",
		price: 2.25,
		sale:false,
		src:"./style/wallpaper1.jpg"
	},
	{
		name: "Tofu",
		vegan: true,
		vegetarian: true,
		glutenFree: false,
		lactosefree: true,
		organic: false,
		type: "protein",
		price: 2.99,
		sale:false,
		src:"./wallpaper1.jpg"
	},
	{
		name: "White Bread",
		vegan: true,
		vegetarian: true,
		glutenFree: false,
		lactosefree: true,
		organic: false,
		type: "grain",
		price: 2.35,
		sale:false,
		src:"./wallpaper1.jpg"
	},
	{
		name: "Milk Bread",
		vegan: false,
		vegetarian: true,
		glutenFree: false,
		lactosefree: false,
		organic: false,
		type: "grain",
		price: 3.50,
		sale:false,
		src:"./wallpaper1.jpg"
	},
	{
		name: "Milk",
		vegan: false,
		vegetarian: true,
		glutenFree: true,
		lactosefree: false,
		organic: false,
		type: "dairy",
		price: 3.10,
		sale:false,
		src:"./wallpaper1.jpg"
	},
	{
		name: "Greek Yogurt",
		vegan: false,
		vegetarian: true,
		glutenFree: true,
		lactosefree: false,
		organic: false,
		type: "dairy",
		price: 3.50,
		sale:false,
		scr:"./wallpaper1.jpg"
	},
	{
		name: "Ground Beef",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "protein",
		price: 5.99,
		sale:false,
		scr:"./wallpaper1.jpg"
	},
	{
		name: "Organic Ground Beef",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "protein",
		price: 6.99,
		sale:false,
		scr:"./wallpaper1.jpg"
	},
	{
		name: "Pork Chops",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "protein",
		price: 4.99,
		sale:false,
		scr:"./wallpaper1.jpg"
	},
	{
		name: "Organic Pork Chops",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "protein",
		price: 5.99,
		sale:false,
		scr:"./wallpaper1.jpg"
	},
	{
		name: "Chicken Breasts",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "protein",
		price: 6.50,
		sale:false,
		scr:"./wallpaper1.jpg"
	},
	{
		name: "Organic Chicken Breasts",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "protein",
		price: 7.50,
		sale:false,
		scr:"./wallpaper1.jpg"
		
	},
	{
		name: "Salmon",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "protein",
		price: 10.00,
		sale:false,
		scr:"./wallpaper1.jpg"
	},
	{
		name: "Organic Salmon",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		organic: true,
		type: "protein",
		price: 11.00,
		sale:false,
		scr:"./wallpaper1.jpg"
	},
	{
		name: "Potato chips",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		organic: false,
		type: "other",
		price: 2.40,
		sale:false,
		scr:"./wallpaper1.jpg"
	},
	{
		name: "Key lime pie",
		vegan: false,
		vegetarian: true,
		glutenFree: false,
		lactosefree: false,
		organic: false,
		type: "other",
		price: 7.75,
		sale:false,
		scr:"./wallpaper1.jpg"
	},
	{
		name: "Chocolate cake",
		vegan: false,
		vegetarian: true,
		glutenFree: false,
		lactosefree: false,
		organic: false,
		type: "other",
		price: 8.00,
		sale:false,
		scr:"./wallpaper1.jpg"
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