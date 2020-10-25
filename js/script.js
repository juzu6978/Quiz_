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

var open_button = [2, 3, 4, 2, 3];
var j = 0;
//ボタンがひとつづつ増えていく関数
let open_buttons = () => {
	var $buttons = document.getElementById("buttons").outerHTML;
	console.log($buttons);
	//ボタンを増やす
	document.getElementById("buttons").outerHTML = $buttons + $buttons;
	//現在のボタンの列数を取得する
	var $rows = document.getElementsByName("row");
	//最終行の情報を取得
	var $new_row = $rows[$rows.length-1];
	//最終行のボタンの情報を取得
	var $num_buttons = $new_row.getElementsByTagName("button");
	//無効化するボタンの選択
	var $old_row = $rows[$rows.length-2];
	var $num_buttons_old = $old_row.getElementsByTagName("button");
	//click属性の設定を行う
	var i = 0;
	while(i < $num_buttons.length){
		console.log($num_buttons[i]);
		//配列の番号とボタンの位置が一致しているならばopen_clickにする。
		if(open_button[j] === i + 1){
			$num_buttons[i].setAttribute("onclick","open_buttons()");
		}
		else{
			$num_buttons[i].setAttribute("onclick","close_buttons()");
		}
		$num_buttons_old[i].disabled = true;
		i++;
	}
	j++;
}

//ボタンが押されると一行のみになる関数
let close_buttons = () => {
	j = 0;
	var $table = document.getElementById("table");
	var $rows = document.getElementsByName("row");
	if($rows.length > 1){
		$table.innerHTML = $rows[0].outerHTML;
		var $num_buttons_old = $rows[0].getElementsByTagName("button");
		i = 0;
		while(i < $num_buttons_old.length){
			$num_buttons_old[i].disabled = false;
			i++;
		}

	}
}
