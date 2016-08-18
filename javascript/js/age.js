
function getage()
{
var age=document.getElementById('age').value;
var date=new Date();
var today=date.getFullYear();
var dob=today-age;
document.write('your birth year is:'+dob);
}