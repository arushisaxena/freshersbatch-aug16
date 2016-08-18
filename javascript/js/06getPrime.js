function getPrime() 
{
var one=document.getElementById('numone').value;
var second=document.getElementById('numsecond').value;

document.write('prime numbers between'+one+'and'+second+'are');
while(second>one)
	{
	var flag=0;
	for(i=2;i<=one/2;++i)
		{
		if(one%i==0)
			{
			flag=1;
			break;
			}
		
		}
	if(flag==0)
		{
		document.write(one+'<br>');
		}
	++one;
	}
	
}