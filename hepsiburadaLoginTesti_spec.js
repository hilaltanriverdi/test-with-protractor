decribe('test for hepsiburada login',function(){
	var hepsiburadaBaseUrl="";
	
	it('hepsiburada login test', function(){
		browser.get(hepsiburadaBaseUrl+'/account/login');
		
        var usernameField = element(by.model('vm.username'));
        usernameField.sendKeys('username');
		
        var passWordField = element(by.model('vm.password'));
        passWordField.sendKeys('password');
		
		//click the 'sign in' button to log in
        var accessButton = element(by.css('button.md-raised'));
        accessButton.click();
		
	});
})