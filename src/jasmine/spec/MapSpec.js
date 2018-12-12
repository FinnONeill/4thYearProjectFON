describe('MapSuite', function(){
	it('uses pan()', function(){
		spyOn(window, 'marker');
		pan(-6.123, 56.123, 15);
		expect(pan).toHaveBeenCalledWith(-6.123, 56.123, 15);
	})
});