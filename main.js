var phoneNumber = prompt("Enter Phone Number: XXX-XXX-XXXX"); 

if (phoneNumber.charAt(3) === '-' && phoneNumber.charAt(7) === '-') {
	alert(true);
}
else {
	alert(false);
}

var birthDate = prompt("Enter Birth Date: XX/XX/XX")

if (birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/') {
	alert(true);
}
else {
	alert(false);
}

var postalCode = prompt("Enter Postal Code: XXXXX or XXXXX-XXXX");
if (postalCode.charAt(5) === '-' || postalCode.length === 5) {
	alert(true);
}

else {
	alert(false);
}

var stateAbbr = prompt("Enter State Abbreviation in Caps: ");

if (stateAbbr < 3 && stateAbbr === stateAbbr.toUpperCase()) {
	alert(true);
}
else {
	alert(false);
}
