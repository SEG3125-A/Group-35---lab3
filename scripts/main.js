
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

	let spans = document.getElementsByTagName("span");
	if (tabName != "presentation" && tabName != "ProductsSale"){
		for (i = 0;i<spans.length;i++){
			spans[i].style.display = "inline";
		}
	}

	if (tabName == "ProductsSale" ){
		buildSlider();
	}


}


const buildSlider = ()=>{
	onSaleProducts = [];
	for (i = 0;i<products.length;i++){
		if (products[i].sale == true){
			onSaleProducts.push(products[i]);
		}
	}

	let slider = document.getElementById('slider');

	// Now I have the products that are on sale

	for (i = 0;i<onSaleProducts.length;i++) {
        let product = onSaleProducts[i]
        // create a div for each item
        var div = document.createElement("div");
        div.className = "item";
        // console.log("beh here",products[0])
        slider.appendChild(div);

        var divImage = document.createElement("div");
        divImage.className = "imageDiv";
        div.appendChild(divImage);

        var image = document.createElement("img");
        image.src = product.src;
        divImage.appendChild(image);

        var divInfo = document.createElement("div");
        divInfo.className = "infoDiv";
        div.appendChild(divInfo);

        var heading = document.createElement("h3");
        heading.className = "name";
        heading.innerHTML = product.name;
        divInfo.appendChild(heading);

        var heading = document.createElement("h3");
        heading.className = "price";
        heading.innerHTML = `${product.price} $`;
        divInfo.appendChild(heading);
    }


	// slider with different inner divs constructed

	
}

	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    var s3 = document.getElementById(slct3);
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value, s3.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName.name;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(" " + productName.name + ": " + productName.price + " $"));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	var notCheckedItems = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	let add_text = document.getElementById("addCart");
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		} else {
			notCheckedItems.push(ele[i]);
		}
	}

	if (notCheckedItems.length == ele.length) {
		add_text.innerHTML = "You haven't added any products to your cart"
	} else {
		add_text.innerHTML = "Items were added successfully!"
	}
		
	// add paragraph and total price
	c.appendChild(para);
	para.appendChild(document.createElement("br"));
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));


		
}


const populateList = (slct1,slct2,slct3) => {
	populateListProductChoices(slct1,slct2,slct3);
	let btnText = document.getElementById('submit');
	btnText.value = 'Preferances saved!';
}