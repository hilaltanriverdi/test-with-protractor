describe('test dfraud site for tabs',function(){
	it('to test dfraud tabs running correcty',function(){
		browser.ignoreSynchronization = true;
		browser.get('http://127.0.0.1:9696/#/auth/login');
		
       // browser.driver.sleep(2000);

        //type credentials
        var usernameField = element(by.model('vm.username'));
        usernameField.sendKeys('system');
		
        var passWordField = element(by.model('vm.password'));
        passWordField.sendKeys('system');
		
		//click the 'access' button to log in
        var accessButton = element(by.css('button.md-raised'));
        accessButton.click();
		browser.driver.sleep(2000);
		
		var applicationButton = element.all(by.css('button.md-hue-2')).get(0);
        applicationButton.click();
		browser.driver.sleep(2000);
		
		
		var adminButton = element.all(by.css('button.md-hue-2')).get(1);
        adminButton.click();
		browser.driver.sleep(2000);
		
		var authenticationButton = element.all(by.css('button.md-hue-2')).get(2);
        authenticationButton.click();
		browser.driver.sleep(2000);
		
		
	});
	
});