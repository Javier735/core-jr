
function loadInDiv(vdiv, vurl) {
    $.ajax(
        {
        type: "GET",
        url: vurl,
        async: false,
        success: function (result) {
            $(vdiv).html(result);
        },
     });
}

function ValidateByAttribute(formName, attributeName) {
	var form = document.getElementById(formName);
	let errors = [];

	for (var i = 0; i < form.elements.length; i++) {
		if ((form.elements[i].value === '' || form.elements[i].value.length == 0) && form.elements[i].hasAttribute(attributeName)) {
			form.elements[i].classList.add('border-red');
			errors.push(1);
		}
	}
	if (errors.length > 0) {
		return true;
	}
	else {
		return false;
	}
}

function RemoveByClass(element, className) {
	element.classList.remove(className);
}

 function AnimationButtonSent(divId, spanId) {		
	var div = document.getElementById(divId);
	var span = document.getElementById(spanId);
	span.style.display = 'none';
	div.style.display = '';
}
function AnimationButtonClose(divId, spanId) {
	var div = document.getElementById(divId);
	var span = document.getElementById(spanId);
	span.style.display = '';
	div.style.display = 'none';
}
