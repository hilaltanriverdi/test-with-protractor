describe(
    'account', function () {
        browser.driver.manage().window().maximize();

        var username = element(by.xpath('//input[@name="username"]'));
        var password = element(by.xpath('//input[@name="password"]'));
        var login = element(by.xpath('/html/body/div/md-content/header/div/div/button'));
        
		beforeAll(
            function () {
                browser.get('/');
                browser.driver.wait(protractor.until.elementIsVisible(element(by.css('h1'))));
            }
        );

        it(
            'should login with username and password', function () {
               
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

        it('test 1 switch between merchant', function(){
        console.log('switch between merchant');  
        browser.ignoreSynchronization = true;
        var merchantButton = element(by.xpath('//button[contains(., "M")]'));
        merchantButton.click();
        
        var merchantInputField = element(by.model('vm.merchantQuery'));
        merchantInputField.sendKeys('merchant');
        browser.sleep(2000);
        
        var form= $('form[name="searchMerchantForm"]');
        var list=form.$$(("md-list-item")[0]);
        var button=$('._md-no-style', list);
        button.click();
        browser.ignoreSynchronization = false;
        });
});