function getFormvalue() {
    //Write your code here
	// let first = document.QuerySelectorAll("form>input")[0];
	// let second = document.QuerySelectorAll("form>input")[1];
	let first = document.getElementsByTagName("input")[0];
	let second = document.getElementsByTagName("input")[1];
	let firstName = first.value;
	let secondName = second.value;
	alert(`${firstName} ${secondName}`);
}
