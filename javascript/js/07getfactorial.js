function getFactorial() 
{
	var number=document.getElementById('number').value;
	var flag=1;
	for(i=1;i<=number;i++)
		{
		flag=flag*i;
		}
	document.write('factorial of the number is:'+flag);
	
}