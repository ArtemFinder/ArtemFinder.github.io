jQuery.iFormValidate = {
	build : function(options)
	{
		var defaults = {
			phpFile:"send.php",
			ajax: true
		};
		var options = $.extend(defaults, options); 
		return $(this).each(
			function() {
			$inputs = $(this).find(":input").filter(":not(:submit)");
			$(this).submit(function(){
				var isValid = jQuery.iFormValidate.validateForm($inputs);
				if(!isValid){
					return false;
				};
				if(options.ajax){
					var data = {};
					$inputs.each(function(){
						data[this.name] = this.value
					});
					$inputs.each(function(){
						data[this.name] = this.value
					});
					$(this).parent('div').fadeOut("slow");
					$(this).parent('div').load(options.phpFile, data, function(){
						$(this).fadeIn("slow");
					});
					return false;
				}else{
					return true;
				}
			});
			
			$inputs.bind("keyup", jQuery.iFormValidate.validate);
			$inputs.filter("select").bind("change", jQuery.iFormValidate.validate);
		});
	},
	validateForm : function($inputs)
	{
		var isValid = true; //benifit of the doubt?
		$inputs.filter(".is_required").each(jQuery.iFormValidate.validate);
		if($inputs.filter(".is_required").hasClass("invalid")){isValid=false;}
		return isValid;
	},
		
	validate : function(){
		var $val = $(this).val();
		var isValid = true;
		//Regex for DATE
		if($(this).hasClass('vdate')){
			var Regex = /^([\d]|1[0,1,2]|0[1-9])(\-|\/|\.)([0-9]|[0,1,2][0-9]|3[0,1])(\-|\/|\.)\d{4}$/;
			isValid = Regex.test($val);
		//Regex for Email
		}else if($(this).hasClass('vemail')){
			var Regex =/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(!Regex.test($val)){isValid = false;};
		
		//Regex for Phone
		}else if($(this).hasClass('vphone')){
			var Regex =/^([0-9a-zA-Z]+([_+.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/;
			//var Regex = /^\(?[2-9]\d{2}[ \-\)] ?\d{3}[\- ]?\d{4}$/;
			if(!Regex.test($val)){isValid = false;}
		//Check for empty
		}else if($val.length == 0){
			isValid = false;
		}
		
		if(isValid){
			$(this).removeClass("invalid");
			$(this).addClass("valid");
		}else{
			$(this).removeClass("valid");
			$(this).addClass("invalid");
		}
		return isValid;
	}	
}
jQuery.fn.FormValidate = jQuery.iFormValidate.build;

$(document).ready(function ()
{
	$('#myform').FormValidate({
		//This path is relative to the page using it.
		phpFile:"js/send.php",
		ajax:true
	});
});