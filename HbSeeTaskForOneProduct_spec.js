describe(
    'account', function () {
        browser.driver.manage().window().maximize();

        var username = element(by.xpath('//input[@name="username"]'));
        var password = element(by.xpath('//input[@name="pass// var accountMenu = element(by.id('account-menu'));
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


        it('see task window for one product', function(){
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
		
        browser.sleep(2000);
        console.log('edit product block'); 
        var productButton = element.all(by.xpath('//span[contains(text(), "Product")]')).first();
        productButton.click();
        browser.sleep(5000);

        var selectoneproduct=element(by.xpath('//tbody/tr[1]/td[1]/md-checkbox/div[1]'));

        selectoneproduct.click();
        browser.sleep(5000);

        var taskButton=element(by.xpath('/html/body/div/md-content/md-card/md-card-content/div/div/product-table/div/md-custom-table/div/ng-transclude/ng-transclude/md-toolbar/div/button[2]/span'));
        taskButton.click();
        browser.sleep(4000);
        

        browser.ignoreSynchronization = false;
        });