casper.test.begin('index.html contains stuff', 3, function (test) {
    casper.start('./Views/index.html', function () {
        test.assertTitle('Test Page');
        test.assertSelectorHasText('h1', 'Test!');
    });
    
    casper.then(function () {
        this.click('button');
        test.assertSelectorHasText('h1', 'New title');
    });
    
    casper.run(function () {
        test.done();
    });
});

//casper.start('http://casperjs.org/', function () {
//    this.echo(this.getTitle());
//});

//casper.thenOpen('http://phantomjs.org', function () {
//    this.echo(this.getTitle());
//});

//casper.run();