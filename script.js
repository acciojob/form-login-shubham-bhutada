function getFormvalue() {
    //Write your code here
	let first = document.QuerySelectorAll("form>input")[0];
	let second = document.QuerySelectorAll("form>input")[1];
	alert(first.innerText + second.innerText)
}
