function check()
{
	var string1="abcba";
	var len=string1.length;
	var flag=0;
	for(i=0;i < len ;i++)
	{
        if(string1[i] != string1[len-i-1])
        {
            flag = 1;
            break;
	   }
	}
	if(flag==0)
		{
		document.write("given string is a pallindrome");
		}
	else
		{
		document.write("not pallindrome");
		}
		
}