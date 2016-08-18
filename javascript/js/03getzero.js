function getResult(){
	var one=document.getElementById('numone').value;
	var second=document.getElementById('numsecond').value;
	if(second==0)
		{
		alert('second value of division cannot be zero!!!!');
		}
	else
		{
		var result=one/second;
		document.write('division result is:'+result);
		}
}