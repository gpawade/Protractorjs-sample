exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
 

 // set the browser
  capabilities: {
	  'browserName': 'firefox'
   },

   // test spec which should be run
   specs: ['calc-spec.js'],


   // for global setting
   onPrepare : function(){

   		// for non-angular application
   		browser.ignoreSynchronization = true;
   		
   }
};