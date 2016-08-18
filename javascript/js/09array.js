function arrayfunc()
{
var a=[23,44,34,22,26];
var len=a.length;
var sum=0;
var avg=0;
var min=a[0];
var max=a[0];
	
for(i=0;i<len;i++)
{
	sum=sum+a[i];

}
avg=sum/len;
document.write("\nsum of elements of arrya are:"+sum);
//document.write(" ")
document.write("\naverage of numbers is:"+avg);
//document.write(" ")
for(i=1;i<len;i++)
	{
	if(min>a[i])
		min=a[i];
	
	}
for(i=1;i<len;i++)
	{
	if(max<a[i])
		max=a[i];
	
	}
document.write("the minimum no. is:"+min);
document.write(" ");
document.write("the maximum element of array is:"+max);
}