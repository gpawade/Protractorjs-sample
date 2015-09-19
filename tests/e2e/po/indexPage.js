var IndexPage = function(){
	this.txtNum1 =  element(by.css('#number1'));
	this.txtNum2 = element(by.css('#number2'));

	this.result = element(by.css('#result'));

	this.get = function() {
	    browser.get('http://127.0.0.1:8080/index.html');
	};

	this.getPageTitle = function(){
		return browser.getTitle();
	};

	this.addClick = function(){
		element(by.css('#btnAdd')).click();
	};
}
module.exports = IndexPage;