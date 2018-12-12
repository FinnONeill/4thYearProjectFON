describe('RouteSuite', function(){
	it('vehicleType should be car', function(){
		expect(setVehicleType("car")).toBe("car");
	})

	it('vehicleType should be walking', function(){
		expect(setVehicleType("walking")).toBe("walking");
	})
/*
	it('Div should be empty', function(){
		var divParent = document.createElement('div');
		divParent.setAttribute('id', 'parent');

		var div1 = document.createElement('div');
		var div2 = document.createElement('div');
		var div3 = document.createElement('div');

		divParent.appendChild(div1);
		divParent.appendChild(div2);
		divParent.appendChild(div3);
		document.getElementById('testDiv').appendChild(divParent);

		expect(clearDiv("parent")).toBe(0);
	})
*/

	
});