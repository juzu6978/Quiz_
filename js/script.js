//送信を押した場合に条件分岐を行う
let send_message_click = () => {
	var $input_message = document.getElementById("input_message").value;
	if($input_message === "hello"){
		location.href = "https://www.google.co.jp/";
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


var fs = require('fs');

var text = "hoge foo bar";
fs.writeFile('hoge.txt', text);

 //after you have created sendData object
fs.readFile('./user/userData.json', 'utf8', function (err, data) {
  if (err) throw err;
  output = JSON.parse(data);
  output.push(sendData[0]);
  const sendJSON = JSON.stringify(output, null, 2);
  fs.writeFile('./user/userData.json', sendJSON, function(err){
    if (err) throw err;
    res.send(sendJSON)
  });
});


/*
//JSON書き出し
// originalDataに，種々のデータが格納されているとする。次は一例。
originalData = {
  id: 123,
  name: "mochi",
  favoriteFoods: [
    "くさもち",
    "くるみもち",
    "道明寺"
  ],
};

// 保存するJSONファイルの名前
const fileName = "mochi.json";

// データをJSON形式の文字列に変換する。
const data = JSON.stringify(originalData);

// HTMLのリンク要素を生成する。
const link = document.createElement("a");

// リンク先にJSON形式の文字列データを置いておく。
link.href = "data:text/plain," + encodeURIComponent(data);

// 保存するJSONファイルの名前をリンクに設定する。
link.download = fileName;

// ファイルを保存する。
link.click();
*/

//JSONファイルの読み込み
(() => {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', "json/test.json");

	xhr.onload = () => {
		let responseJson = JSON.parse(xhr.response);
		console.log(responseJson.name);
	}

	xhr.send();
})();
