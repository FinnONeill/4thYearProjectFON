describe('HttpSuite', function(){

	var responses = {
		success: {
		  status: 200,
		  responseText: "Oh yeah!",
		},
		failure404: {
		  status: 404,
		  responseText: "Oh no",
		},
		failure400: {
		  status: 400,
		  responseText: "Oh no",
		}
	};

	var request;

	beforeEach(function(){
		jasmine.Ajax.install();

		httpGetAsync('http://localhost/test', function(urlThingy){
			return urlThingy;
		});

		request = jasmine.Ajax.requests.mostRecent();
		
	});

	afterEach(function() {
	  jasmine.Ajax.uninstall();
	});

	describe('onSuccess', function(){
		beforeEach(function(){
			request.respondWith(responses.success);
		});

		it("sends request to correct url", function() {
			expect(request.url).toBe('http://localhost/test');
		});

		it("sends request method - GET", function() {
			expect(request.method).toBe('GET');
		});
	});

});