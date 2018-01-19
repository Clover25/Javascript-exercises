// var weaponsArray = ['Broadsword', 'Crossbow',	'Magic staff'];
// for(var i = 0; i < weaponArrays.length; i++) {
// 	 weaponTag = "<option value= ' "+ i + " ' > " + weaponsArray[i] + "</option>"
// 	 document.forms [0] ["SelectWeapon"] += weaponTag;
// }

// <select id="weapons" onChange="SelectWeapon()"
// 	<option value="0"> Broadsword</option>
// 	<option value="0"> Crossbow</option>
// 	<option value="0"> Magic Staff</option>
// </select>

 function OnLoad()
 {

 }


 function SelectWeapon()
 {
 		 var weaponsArray = ['Broadsword', 'Crossbow',	'Magic staff'];
 		 	for(var i = 0; i < weaponsArray.length; i++) {
 		 		var weaponTag = "<option value ='" + i + "'>" + weaponsArray[i] + "</option>";
		 		document.forms[0]["weapons"] += weaponTag;
	}
