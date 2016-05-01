describe('test dfraud site for login',function(){
	it('to test dfraud login running correcty',function(){
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
		
		var applicationButton = element(by.css('button.md-hue-2'));
        applicationButton.click();
		browser.driver.sleep(2000);
		
		element(by.css('button.md-hue-2')).element(by.css('tag-within-css'));
		
	});
	
});