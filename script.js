function highlight() {
    //Write your code here
 let boldWords = document.querySelectorAll('strong');
	boldWords.forEach(strong => {
		strong.style.color = "rgb(0, 128, 0)";
	});
}


function return_normal() {
    //Write your code here
let boldWords = document.querySelectorAll('strong');
	boldWords.forEach(strong => {
		strong.style.color = "rgb(0, 0, 0)";
	})
    
}
