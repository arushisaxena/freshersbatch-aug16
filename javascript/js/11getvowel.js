function calc(){
	var string1="hello arushi! what are you doing?";
	var len=string1.length;
	var counta=0,counte=0,counti=0,counto=0,countu=0;
	
	for(i=0;i<len;i++)
		{
		if(string1[i]=='a')
		 counta++;
		}
	
	for(i=0;i<len;i++)
	{
	if(string1[i]=='e')
	 counte++;
	}
	for(i=0;i<len;i++)
	{
	if(string1[i]=='a')
	 counti++;
	}
	for(i=0;i<len;i++)
	{
	if(string1[i]=='a')
	 counto++;
	}
	for(i=0;i<len;i++)
	{
	if(string1[i]=='a')
	 countu++;
	}
	document.write("\ncounta="+counta);
	document.write("\ncounte="+counte);
	document.write("\ncounti="+counti);
	document.write("\ncounto="+counto);
	document.write("\ncountu="+countu);
	
}