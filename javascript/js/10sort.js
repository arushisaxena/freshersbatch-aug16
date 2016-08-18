function getSort()
{

	var a=[23,44,34,22,26];
	var len=a.length;
	
	for(i=0;i<len;i++)
		{
		for(j=0;j<len;j++)
			{
			if(a[j]>a[j+1])
			{
			var c=a[j];
			a[j]=a[j+1];
			a[j+1]=c;
			}
			}
		}
	for(i=0;i<len;i++)
	{
		document.write("\n"+a[i]);
	}
	
}