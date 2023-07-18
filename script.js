
function generate_list(text) {
	var result_area = document.querySelector(".translate-area");
	var original_text = "";
	for (let i = 0; i < text.length; i++) {
		original_text = text[i].substring(text[i].indexOf("--") + 17);

		result_area.innerHTML += ("<span class='text' original=\"" + original_text + "\">" + original_text + "</span>");
		//console.log(original_text);
	}
}

function clear(text) {
	//final_text = text.replaceAll("<font face=\"Swis721 BT\" size=\"48\"><b>", "").replaceAll("</b></font>", "");
	final_text = text.replaceAll(/<font[^>]*>/gm, "").replaceAll("</font>", "").replaceAll("\"", "'");
	document.getElementById("origin").value = final_text;
	final_list = final_text.split("\n\n");
	generate_list(final_list);
}

function build() {
	var text_list = document.querySelectorAll("span.text");
	var text = document.getElementById("origin").value;
	var original_text, translated_text;
	for (let i = 0; i < text_list.length; i++) {
		original_text = text_list[i].getAttribute("original");
		translated_text = text_list[i].innerText;
		text = text.replace(original_text, translated_text);
	}
	document.getElementById("origin").value = text;

}
document.getElementById("translate-button").onclick = function () {
	var text = document.getElementById("origin").value;
	clear(text);
};
document.getElementById("build-button").onclick = function () {
	build();
};
