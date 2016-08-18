function getTable() {
	var number=document.getElementById('num').value;
	for(i=0;i<=10;i++)
		{
		var result=number*i;
		document.write(result);
		document.write(' ');
		}
var status=confirm('you want to enter the next number to generate table');
if(status=="true")
	{
	Redirect();
	}

}
function Redirect() {
	window.location="./04multiply.html"
	
}