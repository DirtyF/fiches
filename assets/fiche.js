function togglePropositionsDisplay() {
	var propositions = document.getElementsByClassName("proposition");
	for (index = 0; index < propositions.length; ++index) {
		propositions[index].style.display = (propositions[index].style.display === 'none' || propositions[index].style.display === '') ? 'block' : 'none';
	}
}

document.addEventListener('DOMContentLoaded', function(){
	var toggleLink = document.getElementById("togglePropositionsDisplay");
	toggleLink.addEventListener('click', togglePropositionsDisplay);
});

