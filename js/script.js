//送信を押した場合に条件分岐を行う
let send_message_click = () => {
	var $input_message = document.getElementById("input_message").value;
	if($input_message === "hello"){
		location.href = "https://www.google.co.jp/";
	}
	console.log("a");
}

//送信を押した場合に条件分岐を行う
let crossword_answer = () => {
	var $input_message = document.getElementById("input_message").value;
	if($input_message === "サンタクロース"){
		location.href = "https://www.google.co.jp/";
	}
	console.log("a");
}

//エンターキーを押した場合にアクション
let send_message_key = () => {
	console.log(event.keyCode);
	if(event.keyCode === 13){
		send_message_click();
		crossword_answer();
	}
}

var open_button = [8, 7, 1, 1, 2, 4];
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
	//配列の分オープンすると自動的にページを遷移
	if(j > open_button.length){
		location.href = "https://www.google.co.jp/";
	}
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


var k = 0;
var photos = ["aa.PNG", "CFFF767B86A748329EE50E73C5C9EAA6_LL.jpg", "cycle.PNG", "DSC_0442.JPG", "DSC_0489.JPG"];

let change_photo = () => {
	console.log("a");
	document.getElementById("index").style.backgroundImage = "url(../images/" + photos[k] +")";
	k++;
	if(k + 1 > photos.length){
		k = 0;
	}
}

/////--------change photo--------/////
var p1 = 0, p2 = 0, p3 = 0, p4 = 0;
let change_photo1 = () => {
	p1++;
	if(p1 + 1 > 4){
		p1 = 0;
	}
	document.getElementById("photo1").src = "images/photos1/photos1("+p1+").jpg";
}

let change_photo2 = () => {
	p2++;
	if(p2 + 1 > 4){
		p2 = 0;
	}
	document.getElementById("photo2").src = "images/photos2/photo("+p2+").jpg";
}

let change_photo3 = () => {
	p3++;
	if(p3 + 1 > 4){
		p3 = 0;
	}
	document.getElementById("photo3").src = "images/photos3/photo("+p3+").jpg";
}

let change_photo4 = () => {
	p4++;
	if(p4 + 1 > 4){
		p4 = 0;
	}
	document.getElementById("photo4").src = "images/photos4/photo("+p4+").jpg";
}

let answer_photo = () => {
	console.log(p1);
	console.log(p2);
	console.log(p3);
	console.log(p4);
	if(p1 === 3 && p2 === 2 && p3 === 0 && p4 === 2){
		alert("正解");
	}
	else{
		alert("不正解");
	}
}


/////--------     end     --------/////
