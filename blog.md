## Protractor JS - e2e testing framework

This week I started exploring the Protractor JS. Protractor is an end-to-end test framework for AngularJS applications. But we can use it for non-angular application too.

I've created calculator page for which we write the e2e test in Protractor.
```html 
//index.html
<html>
<head>
	<title>Hello world</title>
	<link rel="stylesheet" href="css/site.css">
	<script type="text/javascript" src="js/jquery.min.js"></script>
</head>
<body>
	<h1>Welcom...Protractor hello test spec</h1>	
	<div>
		Number 1 : <input type="text" id="number1" />
		<br/>
		Number 2 : <input type="text" id="number2" />
	</div>	<br/>	
	<input id="btnAdd" type="button" 
				value="Add" onclick="add();" />	<br/>
	<span id="result"></span>	<br/>
    
	<script type="text/javascript">
		function add(){
			var num1 = parseInt($("#number1").val());
			var num2 = parseInt($("#number2").val());

			$("#result").text(num1 + num2);
		}
	</script>
</body>
</html>
```
**Protractor** is wrapper around **WebDriverJS** to automate e2e testing for Angular JS.

### Installation

You need node npm package manager to install it.

```
$ npm install -g protractor
```

This willl install two commandline tools, `protractor` and `webdriver-manager`.

The `webdriver-manager` is a tool to get the instance of Selenium server running locally.

```
$ webdriver-manager update
```

### Start Selenium Server
Now, we can start the server with

```
$ webdriver-manager start
```

This will start the selenium server at [http://localhost:4444/wd/hub](http://localhost:4444/wd/hub).

### Test Setup
Protractor need two files to run, a spec file and a configuration file.
Before we start writing spec, we follow below directory structure for tests.

```
Project Folder/
	|-- css/
    |-- js/
    |-- index.html
    |-- tests/
    	|-- unit/
    	|-- e2e/
    		|-- po/   //page object
    			|- indexPage.js
        	|-- cal-spec.js
            |-- config.js        	
```

#### Setup config.js file
The config file tells the protractor where your spec file are, and what will be the selenium server address. Also we can set the browser details here. Chrome is the default browser.

Here's the sample file -

```javascript
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'firefox'
  },

   // for global setting
   onPrepare : function(){
   		// for non-angular application
   		browser.ignoreSynchronization = true;   		
   }

  specs: ['cal-spec.js']  
};
```
_onPrepare_  : here we can set the global setting before test execution start. Protractor is build for Angular js. If we need to use it for non-angular application, we need set `browser.ignoreSynchronization = true;` before spec execution started. So I declared it in _onPrepare_ function.


#### Write Test

Copy the following into _calc-spec.js_

```javascript
describe("calculator spec", function(){
	
	beforeEach(function(){
		browser.get('http://127.0.0.1:8080/index.html');
	});

	it("should add two number", function(){

		element(by.css('#number1')).sendKeys(12);
		element(by.css('#number2')).sendKeys(12);

		element(by.css('#btnAdd')).click();

		var result = element(by.css('#result')).getText();

		expect(result).toEqual('24');
	});
}
```
The **_describe_** , **_it_** and **_beforeEach_** syntax is from the Jasmine framework. **_browser_** is a global created by Protractor, which is used for browser-level commands such as navigation with _browser.get_.

#### Run the test

Now run the test with:
```
$ protractor tests/e2e/config.js  // this is relative path to config.js file.
```

### Advance functionality - 

##### Debugging 
```
$ protractor --elementExplorer  --browser firfox 
// --browser is optional, chrome is default browser
```

#### Page Object
These are the js files where you map the elements and write the functions to perform actions; we should write the seperate page object for maintanable tests.

Here's the example. How we can rewrite above example.

**Your index page object file**
```javascript
//indexPage.js 

var IndexPage = function(){
	this.txtNum1 =  element(by.css('#number1'));
	this.txtNum2 = element(by.css('#number2'));
	this.result = element(by.css('#result'));

	this.addClick = function(){
		element(by.css('#btnAdd')).click();
	};

	this.get = function(){
		browser.get('http://127.0.0.1:8080/index.html');
	}
	
}
module.exports = IndexPage;

```
**Your test file**
```
var IndexPage = require('./po/indexPage.js');
describe("calculator spec", function(){
	var indexPage = new IndexPage();	
	beforeEach(function(){
		indexPage.get();
	});

	it("should add two number", function(){

		indexPage.txtNum1.sendKeys(12);
		indexPage.txtNum1.sendKeys(12);

		indexPage.addClick()

		var result = indexPage.result.getText();

		expect(result).toEqual('24');
	});
}

```