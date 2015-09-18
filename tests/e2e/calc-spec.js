var CalPage = function(){
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


describe("protractor test with calculator", function(){
	
	it('should have a title', function(){
		//browser.get('http://127.0.0.1:8080/index.html');
		//expect(browser.getTitle()).toEqual('Hello world');

		var calPage = new CalPage();

		calPage.get();

		expect(calPage.getPageTitle()).toEqual('Hello world');

	});


	it('should have addtion work', function(){
		//browser.get('http://127.0.0.1:8080/index.html');

		//element(by.css('#number1')).sendKeys(12);
		//element(by.css('#number2')).sendKeys(12);

		//element(by.css('#btnAdd')).click();

		//var result = element(by.css('#result'));

		//expect(result.getText()).toEqual('24');

		var calPage = new CalPage();
		calPage.get();
		
		calPage.txtNum1.sendKeys(12);
		calPage.txtNum2.sendKeys(12);
		calPage.addClick();

		expect(calPage.result.getText()).toEqual('24');

	});

});