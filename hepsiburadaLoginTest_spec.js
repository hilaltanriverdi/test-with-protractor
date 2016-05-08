describe('test for hepsiburada login and logout test',function(){
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
	
		it('hepsiburada other tests', function(){
		
		});
	
		
		afterEach(function() {
		browser.pause();
		var merchantButton = browser.findElement(by.xpath('/html/body/div[1]/md-content/header/div/div/md-menu[3]/button/span'));
		merchantButton.click();
		
		//click the 'sign out' button to sign out
		var signoutButton=browser.findElement(by.xpath('//button[contains(., "Sign out")]'));
		signoutButton.click();
		
		});
	
	
})