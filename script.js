function firstChar(text) {
  // your code here
	if (text.trim().length === 0) {
	    return '';
	}

	const trimmedText = text.trim();

	return trimmedText.charAt(0);
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
