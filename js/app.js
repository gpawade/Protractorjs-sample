
function add(){
	console.log('calculating...')
	var txtNum1 = $("#number1");
	var txtNum2 = $("#number2");

	var num1 = parseInt(txtNum1.val());
	var num2 = parseInt(txtNum2.val());


	$("#result").text(num1 + num2);


}