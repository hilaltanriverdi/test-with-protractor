describe(
    'account', function () {
        browser.driver.manage().window().maximize();

        var username = element(by.xpath('//input[@name="username"]'));
        var password = element(by.xpath('//input[@name="password"]'));
        var login = element(by.xpath('/html/body/div/md-content/header/div/div/button'));
        

        beforeAll(
            function () {
                browser.get('/');
                //browser.driver.wait(protractor.until.elementIsVisible(element(by.css('h1'))));
            }
        );

        it('should login with username and password', function () {
                
                login.click();

                username.sendKeys('cta');
                password.sendKeys('cta');
                element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/div/md-card/md-card-content/form/button')).click();

                browser.ignoreSynchronization = true;
                browser.sleep(2000);
                expect(element(by.css('.alert-success')).getText()).toMatch(/You are logged in.*/);
                browser.ignoreSynchronization = false;
            }
        );
		
		
	    it('as a catalog agent edit product and see revision', function(){
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        console.log('edit product block'); 
        var productButton = element.all(by.xpath('//span[contains(text(), "Product")]')).first();
        productButton.click();
        browser.sleep(5000);

        var product=element(by.xpath('//tbody/tr[1]/td[2]/div/div/a'));
        product.click();
        browser.sleep(5000);

      
        var inputField=element.all(by.model('vm.model.fields[key]')).first();
        inputField.sendKeys('yeni');
        browser.sleep(3000);
        
        var saveButton=element(by.xpath('//button[contains(., "Save")]'));
        saveButton.click();
        browser.sleep(6000);
        
        product.click();
        browser.sleep(5000);

        expect(element.all(by.model('vm.model.fields[key]')).first().getAttribute('value')).toEqual("yeni");

        browser.ignoreSynchronization = false;
});

   });