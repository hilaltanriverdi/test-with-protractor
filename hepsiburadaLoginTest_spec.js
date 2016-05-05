decribe('test for hepsiburada login',function(){
	var hepsiburadaUrl="http://192.168.1.100:8080/#";
	
	it('hepsiburada login test', function(){
		browser.get(hepsiburadaUrl+'/account/login');
		
        var usernameField = element(by.model('vm.username'));
        usernameField.sendKeys('merchant');
		
        var passWordField = element(by.model('vm.password'));
        passWordField.sendKeys('merchant');
		
		//click the 'sign in' button to log in
        var accessButton = element(by.css('button.md-raised'));
        accessButton.click();
		
	});
})