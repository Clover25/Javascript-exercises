function CreatePlayer()
{
  var a = document.getElementById("playername").value;
  document.getElementById("name").innerHTML = a;

  var b = document.getElementById("playercolour").value;
  document.getElementById("colour").style.backgroundColor = b;

  var c = document.getElementById("playerhealth").value;
  document.getElementById("health").innerHTML = c;

  var d = document.getElementById("playerweapon");
   if(d == "1"){
    document.getElementById("weapon").innerHTML = playerweapon.options[playerweapon.selectedIndex].text;
   }

   else if(d == "2"){
     document.getElementById("weapon").innerHTML = playerweapon.options[playerweapon.selectedIndex].text;
   }

   else{
     document.getElementById("weapon").innerHTML = playerweapon.options[playerweapon.selectedIndex].text;
   }
}
