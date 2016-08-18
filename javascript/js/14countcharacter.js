function countChar() 
{
	var str="Good Morning everyone! How are you?"
		var countc=0;
	var i=0;
	//while(str[i]>=65 && str[i]<=90 || str[i]>=97 && str[i]<=122)
	while (str[i]!=null) 
	{
		countc++;
		i++;
		
		}
	document.write("No. of Characters in the sentence="+countc);
	
}