

var CalPage = require('./po/indexPage.js');
describe("protractor test with calculator", function(){
	var calPage = new CalPage();
	var pageLoadedStatus = false;
	beforeEach(function(){
		if(!pageLoadedStatus){
			calPage.get();
			pageLoadedStatus = false;
		}
	});

	it('should have a title', function(){
		//browser.get('http://127.0.0.1:8080/index.html');
		//expect(browser.getTitle()).toEqual('Hello world');

		//var calPage = new CalPage();

		//calPage.get();

		expect(calPage.getPageTitle()).toEqual('Hello world');

	});


	it('should add two number', function(){
		//browser.get('http://127.0.0.1:8080/index.html');

		//element(by.css('#number1')).sendKeys(12);
		//element(by.css('#number2')).sendKeys(12);

		//element(by.css('#btnAdd')).click();

		//var result = element(by.css('#result'));

		//expect(result.getText()).toEqual('24');

		//var calPage = new CalPage();
		//calPage.get();
		
		calPage.txtNum1.sendKeys(12);
		calPage.txtNum2.sendKeys(12);
		calPage.addClick();

		expect(calPage.result.getText()).toEqual('24');

		/*browser.driver.wait(function() {
            return calPage.result.getText().then(function(val) {
                return (/5/).test(val);
            });
        });*/

	});

});