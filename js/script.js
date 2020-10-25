//送信を押した場合に条件分岐を行う
let send_message_click = () => {
	var $input_message = document.getElementById("input_message").value;
	if($input_message === "hello"){
		location.href = "https://www.sejuku.net/blog/64379";
	}
	console.log("a");
}

//エンターキーを押した場合にアクション
let send_message_key = () => {
	console.log(event.keyCode);
	if(event.keyCode === 13){
		send_message_click();
	}
}

