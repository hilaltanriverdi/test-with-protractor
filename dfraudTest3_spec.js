describe('test for dfraud',function(){
	var dfraudBaseUrl = "http://127.0.0.1:9696/#";
	it('dfraud login test', function(){
		browser.get(dfraudBaseUrl + '/auth/login');
		
        //type credentials
        var usernameField = element(by.model('vm.username'));
        usernameField.sendKeys('system');
		
        var passWordField = element(by.model('vm.password'));
        passWordField.sendKeys('system');
		
		//click the 'access' button to log in
        var accessButton = element(by.css('button.md-raised'));
        accessButton.click();
		
		browser.waitForAngular();
	});
		
	it('change language to Turkish test', function(){
		var authenticationButton = browser.findElement(by.xpath('//span[contains(text(),"Authentication")]'));
        authenticationButton.click();
		
		var settingsButton = browser.findElement(by.xpath('//span[contains(text(),"Settings")]'));
        settingsButton.click();
	
		browser.waitForAngular();
		
		var languageButton = element(by.id('langKey'));
        languageButton.click();
		var turkish = browser.findElement(by.xpath('//div[contains(text(), "English")]'));
		turkish.click();
		browser.sleep();
		
		expect(languageButton.getText()).toEqual("English");
		
		browser.findElement(by.xpath('//form/button')).click();
		browser.waitForAngular();
		
		browser.get(dfraudBaseUrl + '/');
	
	});
	
	it('test for menus existing', function(){
		var menus = ["Uygulama", "Yönetici", "Kimlik Kanıtlama"];
		for(var i=0; i<menus.size; i++){
			var authenticationButton = browser.findElement(by.xpath('//span[contains(text(),"' + menus[i] + '")]'));
		}
	});
	
	
	it('change language to English test', function(){
		var authenticationButton = browser.findElement(by.xpath('//span[contains(text(),"Authentication")]'));
        authenticationButton.click();
		
		var authenticationButton = browser.findElement(by.xpath('//span[contains(text(),"Settings")]'));
        authenticationButton.click();
	
		var languageButton = element(by.id('langKey'));
        languageButton.click();	
		
		browser.waitForAngular();
		
		var turkish = browser.findElement(by.xpath('//div[contains(text(), "Türkçe")]'));
		turkish.click();
		
		browser.findElement(by.xpath('//form/button')).click();
		browser.waitForAngular();
		
		browser.get(dfraudBaseUrl + '/');
	});
	
	
	it('test for menus existing', function(){
		var menus = ["Application", "Admin", "Authentication"];
		for(var i=0; i<menus.size; i++){
			var authenticationButton = browser.findElement(by.xpath('//span[contains(text(),"' + menus[i] + '")]'));
		}
	});

	
});