//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var prices = [];
var inputMsgforPrice = "Please enter item price: ";
var messageforValidation = "Please enter valid Number";
var outputMsgforList = "Item Prices: ";
var outputMsgforShipping = "Your shipping for this order will be free!";
var total = 0;
var userPriceInput;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while(total < 35) {
	//GET ITEM COST FROM USER
	userPriceInput = parseInt(prompt(inputMsgforPrice));

	//CONVERT USER INPUT TO A NUMBER
	if (userPriceInput === "NaN") {
		alert(messageforValidation);
	} else {
		var price = parseInt(userPriceInput);
		//ADD ITEM COST TO RUNNING TOTAL VARIABLE
		total += price;
	
		//PUSH ITEM COST TO CART ARRAY
		prices.push(price);
	}
}	

//SEND POPUP MESSAGE TO USER
alert(outputMsgforShipping);
alert("Total price for your order is " + total)
//SEND OUTPUT TO CONSOLE
prices.forEach((price, index) => {
	outputMsgforList += price.toString() + (index === (prices.length - 1) ? '.' : '|')
});
console.log(outputMsgforList);
