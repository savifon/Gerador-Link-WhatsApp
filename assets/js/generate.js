window.onload = function() {
    generateMask();

	document.getElementById("form").onsubmit = function(e) {
		e.preventDefault();

        alert(unMkaskTel(this.tel.value));
	}
}