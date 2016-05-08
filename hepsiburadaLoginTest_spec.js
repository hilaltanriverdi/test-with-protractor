describe('test for hepsiburada login',function(){
	var hepsiburadaUrl="http://213.14.180.233/#";
	
		beforeEach(function() {
		browser.driver.manage().window().maximize();
		browser.get(hepsiburadaUrl+'/account/login');
		
		var usernameField = element(by.model('vm.username'));
        usernameField.sendKeys('merchant');
		
		var passWordField = element(by.model('vm.password'));
        passWordField.sendKeys('merchant');
		
		//click the 'sign in' button to log in
        var accessButton = element(by.css('button.md-raised'));
        accessButton.click();
		
		browser.ignoreSynchronization = true;
		
		
	});
	
	it('hepsiburada login test2', function(){
		browser.pause();
		var merchantButton = browser.findElement(by.xpath('//span[contains(text(), "Merchant")]'));
		logoutButton.click();
		browser.waitForAngular();
		
	});
	
	
	
})