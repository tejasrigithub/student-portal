function valid(){
if (document.form.Id.value == ""){
	
alert ( "Please enter Id." );
return false;
}
if (document.form.firstname.value == ""){
alert ( "Please enter first name." );
return false;
}
if (document.form.lastname.value == ""){
	alert ( "Please enter last name." );
	return false;
	}

if (document.form.day.value == "" || document.form.day.value>31 || document.form.day.value<1){
	alert ( "Please enter valid day." );
	return false;
	}
if (document.form.month.value == "" || document.form.month.value>12 || document.form.month.value<1){

	alert ( "Please enter valid month." );
	return false;
	}
if (document.form.year.value == "" || document.form.year.value>2015 || document.form.year.value<1900){
	alert ( "Please enter valid year." );
	return false;
	}
if (document.form.address.value == ""){
	alert ( "Please enter Address" );
	return false;
	}
return true;
}
$ (document).ready(function()
		{
	$("p").hide();
	$ ("h4").click(function()
			{
		$(this).next().slideToggle(300);
			});
		});



