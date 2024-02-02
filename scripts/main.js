
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

}

// function to decrease products's quantity and update the quantity span
function decrease(el){
	var n = el.getAttribute("id").split("_")[1];
	for (let i = 0; i<products.length; i++){
		if (products[i].name == n){
			var p = products [i];
			if (p.quantity <= 0){
				return;
			}
		
			else{
				p.quantity --;
				var sp = document.getElementById("qty_card_"+ p.name)
				sp.textContent = p.quantity;
			}
			break;
		}
		else{
			continue;
		}
	}


	

}

// function to increase products's quantity and update the quantity span
function increase(el){
	var n = el.getAttribute("id").split("_")[1];
	

	for (let i = 0; i<products.length; i++){
		if (products[i].name == n){
			var p = products [i];
			p.quantity ++;
			var sp = document.getElementById("qty_card_"+ p.name)
			sp.textContent = p.quantity;
			break;
		}
		else{
			continue;
		}
	}
	

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

	// for each item in the array, create a product card and append it to the parent element, each containing information such as:
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];

		//creation of elements to form a product card
		
		var productCard = document.createElement("div");
		var card_img = document.createElement("img");
		var card_name = document.createElement("p");
		var card_price = document.createElement("p");
		var card_adder = document.createElement("div");
		var card_minus = document.createElement("button");
		var card_qty = document.createElement("span");
		var card_add = document.createElement("button");
		
		// applying styling to the product card
		productCard.className = "p_card";
		productCard.style.width = "25%";
		productCard.style.marginTop = "3%";
		productCard.style.marginBottom = "3%";
		productCard.style.display = "inline-block";
		
		
		

		card_img.style.height = "55%";
		card_img.style.width = "45%";
		card_img.style.margin = "0% 25%";

		card_name.style.textAlign = "center";
		card_price.style.textAlign = "center";

		card_adder.style.padding= "0px 20px";
		card_minus.style.borderRadius="20%";
		card_minus.style.marginLeft= "10%";
		card_minus.style.width= "19px";
		card_minus.style.display = "inline-block";
		card_add.style.borderRadius="25%";
		card_add.style.width= "20px";
		card_add.style.marginRight= "10%"
		card_add.style.display = "inline-block";
		card_qty.style.margin = "0% 2%";
		card_qty.style.display = "inline-block";
		productCard.value = productName;
		

		// applying text/image sources to the elements
		card_img.src = productName.src;
		card_name.appendChild(document.createTextNode(productName.name));
		card_price.appendChild(document.createTextNode(productName.price + "$/unit"));
		card_qty.appendChild(document.createTextNode(productName.quantity));
		card_minus.appendChild(document.createTextNode(" - "));
		card_add.appendChild(document.createTextNode(" + "));
		
		

		//adding child a element to the add-remove quantity section
		card_adder.appendChild(card_minus).setAttribute("id", "minus_"+ productName.name);
		card_adder.appendChild(card_qty).setAttribute("id", "qty_card_"+ productName.name);
		card_adder.appendChild(card_add).setAttribute("id", "add_"+ productName.name);


		//adding child elements to the product card
		productCard.appendChild(card_img);
		productCard.appendChild(card_name);
		productCard.appendChild(card_price);
		productCard.appendChild(card_adder);

		
		card_minus.addEventListener("click", function() {decrease(this);});
		card_add.addEventListener("click", function() {increase(this);});

		s2.appendChild(productCard);
		
		  
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be display divs of the product card selected
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByClassName("p_card");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("div");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));

	para.style.display = "inline-block";
	para.style.width = "70%"
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].value.quantity > 0) {
			var cart_qty = document.createElement("p");
			var new_quantity =  ele[i].value.quantity;
			cart_qty.appendChild(document.createTextNode("Qty: " + new_quantity));
			cart_qty.style.padding = "0% 20%";

			var buffer = ele[i].cloneNode(true);
			buffer.removeChild(buffer.lastElementChild);
			buffer.appendChild(cart_qty);
			para.appendChild(buffer);
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	para.appendChild(document.createElement("br"));
	var total = document.createElement("div");
	total.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)))
	total.style.display= "inline-block";
	total.style.textAlign= "center";
	c.appendChild(total);
		
}