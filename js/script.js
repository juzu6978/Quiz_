let pre_num = 0;
//function change photo
function btnclick1(){
	let photo = ['url(images/DSC_0442.JPG)','url(images/line_35005196648937.jpg)', 'url(images/line_194678517197397.jpg)'];
	let num = Math.floor(Math.random() * 3);

	while(1){
		num = Math.floor(Math.random() * 3);
		if(num !== pre_num){
			break;
		}
	}
	console.log(num);
	console.log(pre_num);

	if(num === 0){
		$('#index').css('background-image', photo[0]);
	}
	else if(num === 1){
		$('#index').css('background-image', photo[1]);
	}
	else if(num === 2){
		$('#index').css('background-image', photo[2]);
	}
	else{
		alert('b');
	}
	pre_num = num;
}
