# Protractor JS - end to end test framework for angular js. It's build on top up of WebDriverJS


### Setup
$ npm install -g protractor
$ webdriver-manager update

### Start new web driver session 
$ webdriver-manager start


### Write  test

```
// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://127.0.0.1:8080/index.html');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});

```

``` javascript

// conf.js
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']
}

```

### Run test

$ protractor conf.js


### Debuging

$ protractor conf.js --elementExplorer

### Locators 
[https://angular.github.io/protractor/#/locators(https://angular.github.io/protractor/#/locators)]
Locator tell protractor how to find certain DOM Element

``` javascript

// find an element using a css selector
by.css('.myclass') 

// find an element with the given id
by.id('myid')

// find an element with a certain ng-model
by.model('name')

// find an element bound to the given variable
by.binding('bindingname')

```

The locator are passed to the **element** function, as below.
``` javascript
	element(by.css('some-css'));

```

When using CSS Selectors as a locator, you can use the shortcut $() notation:
```
$('my-css');

// Is the same as

element(by.css('my-css'));


```

### Actions

The element() function returns an ElementFinder object. The ElementFinder knows how to locate the DOM element using the locator you passed in as a parameter.

```
var el = element(locator);

// Click on the element
el.click();

// Send keys to the element (usually an input)
el.sendKeys('my text');

// Clear the text in an element (usually an input)
el.clear();

// Get the value of an attribute, for example, get the value of an input
el.getAttribute('value');

```



##### we can also write the e2e test for non- angular application as well.

##### For non - angular app, we need to set below line before executing any test case.

``` Javascript
	
	browser.ignoreSynchronization = true;

```
