function getValidate() 
{
	var uname=document.getElementById("uname").value;
	var pass=document.getElementById("pass").value;
var attempt=3;	

if(uname=="arushi" && pass=="saxena")
	{
	alert("login sucessfully");
	window.location="sucess.html";
	return false;
	}

else
	
	{
	attempt--;
	alert("you have only"+attempt+"attempts");
	
		if( attempt == 0)
		{
			alert("you are not allowed to login");
			return false;
		}
	}
		
	
	
}
	
	
	
