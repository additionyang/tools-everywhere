// JavaScript Document
$(function () {
  $("#input_20160628-1 button.draw").click(function () {
    var _lines = $.trim($("#input_20160628-1 textarea").val()).split("\n");
    var _repeatable = ($('#input_20160628-1 [name="repeatable"]').length === 1);
    var _number = parseInt($('#input_20160628-1 [name="number"]').val());
    var _result = $("#result_20160628-1").empty();
    if (isNaN(_number)) {
        //alert("抽出數量必須為數字");
        _result.html("抽出數量必須為數字");
        return;
    }
    if (_lines.length === 1 && _lines[0] === "") {
        //alert("抽出數量必須為數字");
        _result.html("(請輸入工具清單)");
        return;
    }

    var _list = [];
    for (var _i = 0; _i < _lines.length; _i++) {
        var _line = $.trim(_lines[_i]);
        if (_repeatable === true) {
            _list.push(_line);
        }
        else if ($.inArray(_line, _list) === -1) {
            _list.push(_line);
        }
    }
    
    if (_number > _list.length) {
      _number = _list.length;
    }

    // 抽出n位
    var _getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var _result_index = [];
    _result.append();
    for (var _r = 0; _r < _number; _r++) {
        var _random_int = _getRandomInt(0, _list.length-1);
        if ($.inArray(_random_int, _result_index) === -1) {
            _result_index.push(_random_int);
			_result.append('<div>' + '讓'+'' +  _list[_random_int]+'</div>'+'</div>'+ '不那麼'+  _list[_random_int] +'</div>');
        }
        else {
            _r--;
        }
    }
  });
  
  $("#input_20160628-1 button.default").click(function () {
    $("#input_20160628-1 textarea").val('水壺\n容器\n瓶蓋\n門把\n門\n鍋子\n鍋蓋\n檯燈\n路燈\n照明\n杯子\n馬克杯\n玻璃杯\n風扇\n耳機\n電線\n滑鼠\n電腦\n鍵盤\n鏡頭\n相機\n手機\n口罩\n錢包\n皮夾\n鑰匙\n桌子\n書\n收納櫃\n切割墊\n椅子\n椅墊\n毛巾\n資料夾\n離子夾\n噴霧瓶\n削鉛筆機\n鉛筆\n麥克筆\n釘書機\n尺\n螢光筆\n原子筆\n簽字筆\n橡皮擦\n藥膏\n溫度計\n泡麵\n硬碟\n垃圾袋\n瑜珈墊\n衛生紙\n帽子\n紙\n棉花棒\n抽屜\n泡泡紙\n延長線\n開關\n吹風機\n便利貼\n床墊\n鏡子\n袋子\n牙線\n床\n枕頭\n棉被\n酒精\n眉筆\n粉底\n唇蜜\n唇筆\n眉粉\n剪刀\n鑷子\n線香\n行動電源\n垃圾\n盆栽\n肥料\n土\n紙箱\n包裝紙\n膠帶\n衣架\n掛勾\n背包\n耳環\n圓規\n肥皂\n洗面乳\n卸妝油\n起泡網\n牙刷\n牙膏\n除臭噴霧\n清潔劑\n洗衣精\n洗碗精\n精油\n悠遊卡\n床單\n枕頭套\n鞋子\n內褲\n內衣\n褲子\n衣服\n長裙\n連身裙\n臉盆\n行李箱\n地板\n掃把\n吸塵器\n窗戶\n窗簾\n眼鏡\n隱形眼鏡\n垃圾桶\n衛生棉\n糖果\n塑膠袋\n棉花棒\n巧克力\n餅乾\n水果\n筆記本\n洗衣籃\n硬幣\n外套\n圍巾\n書擋\n插座\n髮夾\n鬧鐘\n夜燈\n除濕機\n襪子\n水龍頭\n洗手台\n沐浴乳\n洗髮乳\n護髮乳\n馬桶\n冷氣\n捲尺\n電梯\n按鈕\n保護套\n螢幕\n顯示器\n條碼\n粉彩\n色鉛筆\n鎖孔\n電磁爐\n插頭\n美工刀\n肉鬆\n鋁罐\n乳液\n吸管\n湯匙\n叉子\n筷子\n番茄醬\n醬油\n保鮮膜\n旋轉椅\n遙控器\n碗\n膠台\n書籤\n手錶\n會員卡\n信用卡\n提款卡\n身分證\n證件照\n皮革\n護身符\n螺絲\n健保卡\n藥\n駕照\n防曬粉\n防曬乳\n妝前乳\n眼影\n腮紅\n修容\n拉鍊\n繩子\n口袋\n連帽衣\n連帽外套\n膠水\n口紅膠\n雙面膠\n快乾\n針\n線\n布\n鈕扣\n報紙\n盤\n砧板\n刀\n樂扣\n鐵絲條\n底座\n提袋\n牛皮紙袋\n茶包\n拖鞋\n熱水壺\n飲水機\n感應器\n蘇打餅\n標籤\n衣櫃\n刷子\n軸\n束帶\n夾鏈袋\n真空包裝\n皮帶\n項鍊\n手鍊\n熨斗\n掛燙\n螢光標籤\n免洗筷\n削皮刀\n試用包\n滾筒\n輪子\n鏡片\n髮油\n地毯\n海綿\n菜瓜布\n地刷\n馬桶刷\n把手\n水箱\n音響\n麥克風\n戒指\n音樂播放器\n雨傘\n折疊傘\n腳踏車\n踏板\n剎車\n輪胎\n電鍋\n微波爐\n冰箱\n冷凍庫\n鞋帶\n除塵紙布\n抹布\n浴簾\n排水口\n調整背帶長度的扣\n地磚\n畚箕\n手套\n籃子\n置物籃\n彈簧\n水柱\n水珠\n泡沫\n凝膠\n出水孔\n霧氣\n熱風\n放肥皂的平台\n睫毛膏\n刷具\n遮瑕刷\n眼影刷\n粉底刷\n粉撲\n除濕機\n玻璃吸管\n充電器\nHDMI線\n轉接頭\n隨身碟\n螺紋\n補充包\n髮箍\n打火機\n蠟燭\n火柴\n隨身面紙\n餐巾紙\n吸油面紙\n鋁箔紙\n勺子\n菜刀\n網布\n無名零件\n五金\n烙鐵\n提款機\n指甲剪\n膠台\n暖暖包\n鬆緊帶\n迴紋針\n酒精筆\n油土\n刮板\n展示模型\n展示旋轉平台\n門禁刷卡機\n垃圾桶\n菸灰缸\n春聯\n中空木板樓梯\n雜誌\n展覽背板\n不太好坐的椅子\n鋁合金木躺椅\n會議室\n玻璃桌\n廁所門\n簽到表\n麥克筆\n辦公隔間\n微波爐\n電鍋\n洗手台\n水果\n咖啡機\n零食\n印表機\n電腦\n繪圖板\n繪圖筆\n弧形尺\n色鉛筆\n橡皮蛋\n水柱小玩具\n玻璃隔間\n地母旗\n白板\n製圖板\n鐵欄杆\n網狀布幕\n吊線\n小模型車\n雕塑\n電動車充電器\n鐵捲門\n保全系統\n從內部開門前要按一下的鈕\n塑膠地毯\n用餐區\n掛畫\nTabasco辣椒醬\n瓦斯爐\n烤肉架\n餐桌\n長條落地窗\n發財樹\n銀杏\n盆栽\n水龍頭\n水龍頭鑰匙\n水管\n石頭長椅\n玻璃圓桌\n藤蔓椅\n屏風\n摺疊椅\n礦泉水\n板擦\n紅色白板筆\n藍色白板筆\n黑色白板筆\n綠色白板筆\n磁鐵\n長條磁鐵\n影印紙\n大腿撞到會很大聲的摺疊桌\n可調溫烙鐵\n電流檢測機\n斜口鉗\n尖嘴鉗\n砂紙\n水砂紙\n手套\n吸錫器\nABS板\nPU\n代木\n平台\n測量儀\n車床\n洗床\n砂磨機\n小烏龜\n螺絲\n收納櫃\n寶特瓶\n鋸輪\n抹布\n噴漆\n補土\n調和劑\n研磨劑\n噴槍\n刮板\n軟體\n便利貼\n咖啡\n咖啡壺\n磨豆機\n紙杯\n馬克杯\n洗碗精\n飲水機\n分類垃圾桶\n廚餘桶\n爬藤植物\n籤筒\n手\n腳\n身體\n手指\n膝蓋\n頭\n眼睛\n嘴巴\n鼻子\n耳朵\n頭髮\n眼淚\n水\n牙齒\n痣\n體毛\n指甲\n手肘\n手掌\n眉毛\n臉頰\n額頭\n鼻孔\n睫毛\n笑容\n肚子\n腰\n穴道\n樹\n貨車\n頭燈\n方向燈\n石階\n工讀生\n貨櫃\n紙鈔\n硬幣\n一元硬幣\n五元硬幣\n十元硬幣\n五十元硬幣\n橡皮筋\n橡皮擦屑\n利樂包\n罐頭\n風\n多肉植物\n紗窗\n橋\n樓梯\n階梯\n水塔\n升降梯\n圍欄\n籤\n招牌\n背心\n冰淇淋\n三角錐\n標語\n樹枝\n竹子\n天空\n草\n廁所\n門板\n飲料杯\n飲料杯蓋\n封膜\n露營椅\n煤油燈\n粽葉\n鋼索\n麥片\n帳篷\n瓦斯\n石頭\n釘子\n鉤子\n支架\n蝴蝶\n影子\n人工淚液\nPhotoshop\nIllustrator\nIndesign\nAftereffect\nPremiere\nDimension\nDreamweaver\nPDF\nPPT\nSVG\nPNG\nJPG\nSolidworks\nKeyshot\nblender\nWord\nPowerPoint\nExcel\n相片檢視器\n前置鏡頭\n貼紙\nChrome\n小畫家\nLINE\nArduino\nProcessing\nYouTube\nGoogle\nFacebook\nInstagram\n信\n信箱\n電話\nSafari\nVimeo\n示波器\nSoundHound\nUbereats\n蝦皮\n淘寶\n網路銀行\n計算機\nNotion\nGoogle Maps\nKindle\n電子書\nPTT\n雲端硬碟\nPinterest\nPodcast\n水平儀\n翻譯器\n掃描器\n錄音筆\n錄音機\nVPN\n指南針\n指北針\nMessenger\n視訊\nGarage Band\n日曆\n月曆\n農民曆\n備忘錄\n天氣預報\nApp Store\n無痕模式\n計時器\n電台\nAudacity\n設定\ngithub\n充電盒\n觸控筆\n觸控螢幕\n筆電觸控板\n觸控開關\n破壞袋\n快篩\n氣泡紙\n手機支架\n髮圈\n髮帶\n髮油\n幕斯\n髮蠟\n定型噴霧\n面膜\n發票\n香蕉\n眼鏡盒\nPE密實袋\n電話圈\n遮陽帽\n毛帽\n堆堆帽\n大衣\n運動\n運動鞋\n鞋舌\n靴子\n話筒\n畫筒\n南非國寶茶\n紅茶\n綠茶\n煎茶\n玄米煎茶\n黑豆茶\n普洱茶\n菊花茶\n牛蒡茶\n湯\n湯包\n果醬\n巧克力醬\n奶酥\n蔥抓餅\n蔥油餅\n飯糰\n飯匙\n白飯\n紫米飯\n五穀飯\n糙米飯\n粥\n地瓜粥\n清粥小菜\n豆棗\n豆皮\n豆包\n麵筋\n豆干\n豆腐\n寸棗\n餅乾包裝袋\n醬油\n橄欖油\n沙拉油\n豬油\n機油\n雞油\n大豆油\n酪梨油\n酪梨\n種子\n果皮\n書衣\n精裝書\n繪本\n贈品\n黃虎眼石\n用來束麵包袋的金黃色小鐵絲\n描圖紙\n玻璃紙\n紙板\n紙錢\n廢紙\n摺紙\n色紙\n價格標籤\n吊牌\n布標\n隨身硬碟\n磁碟機\n網路線\n環保袋\n檔案轉換器\n閘門\n心理測驗\n機器\n精神性\n主體性\n隨機\n工具\n作品\n草稿\n擴充功能\n插件\n交換日記\n東西\n別人\n自己\n日記\n交換\nDelete\nenter\n夢\n破掉的風衣\n300張用過的吸油面紙\n調眼鏡鼻墊的工具\n螢幕雜訊\n油脂\n皮屑\n黏滾筒\n跑步機\n食物\n陰影\n黑眼圈\n臥蠶\n近視眼\n巷子\n會車\n地形\n屏障\n線性\n排版\n跑版\n以圖搜尋\n指令\n建築\n物\n差異\n裡面\n風景\n？\n截圖\n駕駛\n掃描\n鉛筆跡\n擴音\n氣息\n防疫隔板\n食物功效\n網站\nctrl+f');
  });
});