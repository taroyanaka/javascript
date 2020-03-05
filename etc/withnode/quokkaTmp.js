const R = require('ramda');

    const shuffleArray = array => {
    	for (let i = array.length - 1; i > 0; i--) {
    		let r = Math.floor(Math.random() * (i + 1));
    		let tmp = array[i];
    		array[i] = array[r];
    		array[r] = tmp;
    	}
    	return array
    }

const testText = `I confess that when`;

const englishText = `私
告白する
それ
いつ`;

let foo;
let bar;
const insertTestData = () => {
	// foo = R.flatten(testText.split("\n").map(V=>{return V.split(" ")})).join("\n");
	foo = R.pipe(R.replace(/\n/g, ' '), R.split(" "), R.join("\n"))(testText);
	bar = englishText;
};
const makeQApair = () => R.transpose([foo.split(`\n`), bar.split(`\n`)]);

const getQAAAAarray = (QApair) => {
	const makeQAAAAarray = (x) => R.insertAll(-1, R.take(3, shuffleArray(R.without(x[1], R.pluck(1, QApair)))), x);
	// const fourLengthArrayCheck = (array) => R.uniq(array).length === 4;
	// return R.reject(fourLengthArrayCheck, R.map(makeQAAAAarray, QApair));
	return R.map(makeQAAAAarray, QApair);
};

const makeQAHTML = (QAAAAarray) => {
	const makeQASet = (QAAAA, KEY) => {
		const shuffledAAAA = shuffleArray(R.without([QAAAA[0]], QAAAA));
		return `<div class="QA" data-id="${KEY}">
					<span>${QAAAA[0]}</span>
					<input type="button" value="${shuffledAAAA[0]}" data-answer="${QAAAA[1]}" data-id="${KEY}" onclick="checkQA(event)"></input>
					<input type="button" value="${shuffledAAAA[1]}" data-answer="${QAAAA[1]}" data-id="${KEY}" onclick="checkQA(event)"></input>
					<input type="button" value="${shuffledAAAA[2]}" data-answer="${QAAAA[1]}" data-id="${KEY}" onclick="checkQA(event)"></input>
					<input type="button" value="${shuffledAAAA[3]}" data-answer="${QAAAA[1]}" data-id="${KEY}" onclick="checkQA(event)"></input>
			   </div>`;
	}
	// document.querySelector(`#QASet`).insertAdjacentHTML(`afterBegin`, QAAAAarray.map(makeQASet));
	return QAAAAarray.map(makeQASet);
};
let wrongQApair = [];
const checkQA = (event) => {
	if (event.target.value === event.target.dataset.answer) {
		document.querySelector(`div.QA[data-id="${event.target.dataset.id}"`).parentNode.removeChild(document.querySelector(`div.QA[data-id="${event.target.dataset.id}"`))
	} else {
		wrongQApair.push([QAAAAarray[event.target.dataset.id][0], QAAAAarray[event.target.dataset.id][1]])
	}
};

insertTestData();
// makeQAHTML(getQAAAAarray(makeQApair()));
// getQAAAAarray(makeQApair());
console.log(
	// makeQAHTML(getQAAAAarray(makeQApair()))
	getQAAAAarray(makeQApair())
	// makeQApair()
);

console.log(
	R.pluck(1,[ [1,2],[3,4],[5,6] ])
);


let furugiData = [
	"ANAME　(アネーム)\n【住所】高円寺南4-44-3\n【TEL】03-3311-6995\n【OPEN】平日14:00-21:00 土日祝13:00-21:00\n【定休日】無休\n【取扱い】セレクト古着/メンズ/ヴィンテージ/雑貨/\n",
	"",
	"",
	"ａ.ｍ.ｍ.ｓ　(アムズ)\n【住所】高円寺南2-48-6\n【TEL】03-6909-2344\n【OPEN】12:00-20:00\n【定休日】木曜日\n【取扱い】古着/メンズ/雑貨/\n",
	"",
	"",
	"encore　(アンコール)\n【住所】高円寺南3-56-1-110\n【TEL】03-5913-9446\n【OPEN】12:00-20:00\n【定休日】\n【取扱い】ヨーロッパ古着/メンズ/雑貨/\n",
	"",
	"",
	"ｕｎｓｔｉｔｃｈ　(アンスティッチ)\n【住所】高円寺南3-45-13\n【TEL】03-3317-2188\n【OPEN】11:00-21:00\n【定休日】無休\n【取扱い】古着/メンズ/レディース/雑貨/\n",
	"",
	"",
	"under700駅前店　(アンダーナナヒャクエキマエテン)\n【住所】高円寺南4-28-10\n【TEL】03-5932-1088\n【OPEN】12:00-21:00\n【定休日】無休\n【取扱い】古着/メンズ/レディース/雑貨/\n",
	"",
	"",
	"under700ルック店　(アンダーナナヒャクルックテン)\n【住所】高円寺南3-37-23\n【TEL】03-5305-1760\n【OPEN】12:00-21:00\n【定休日】無休\n【取扱い】古着/メンズ/レディース/雑貨/\n",
	"",
	"",
	"ＷＨＩＳＴＬＥＲ　(ウィスラー)\n【住所】高円寺南4-30-8 ミサトビル101\n【TEL】03-5377-1911\n【OPEN】12:00-21:00\n【定休日】無休\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＷＥＳＴ　ＬＡＮＥ　(ウェストレーン)\n【住所】高円寺南3-46-5\n【TEL】03-5306-3731\n【OPEN】12:00-20:00\n【定休日】無休\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"OCTAGON CLOTHING　(オクタゴンクロージング)\n【住所】高円寺南4-29-8\n【TEL】03-6383-2996\n【OPEN】13:00-20:00\n【定休日】水曜日\n【取扱い】古着/メンズ/雑貨/\n",
	"",
	"",
	"ＯＴＳＵ　(オツ)\n【住所】高円寺南3-57-5\n【TEL】03-3315-7633\n【OPEN】12:30-20:30\n【定休日】無休\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"温古着新　(オンコキシン)\n【住所】高円寺南3-23-16\n【TEL】03-6316-9783\n【OPEN】13:00-22:00\n【定休日】無休\n【取扱い】古着/メンズ/雑貨/\nhttp://on-ko-ki-shin.com",
	"",
	"",
	"GARTER　(ガーター)\n【住所】高円寺北3-4-13 キタコレビル104\n【TEL】03-5356-9296\n【OPEN】15:00-22:00\n【定休日】不定休\n【取扱い】古着/メンズ/レディース/雑貨/\n",
	"",
	"",
	"Kind　(カインド)\n【住所】高円寺南4-24-2 春口ビル3F\n【TEL】03-3314-5589\n【OPEN】11:00-20:00\n【定休日】水曜日\n【取扱い】ブランド古着/メンズ/雑貨/買い取り/\n",
	"",
	"",
	"ＧＡＳＯＬＩＮＥ　(ガソリン)\n【住所】高円寺南4-29-12KAWABE272ビル 101号室\n【TEL】03-6454-6310\n【OPEN】13:00-21:00\n【定休日】不定休\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＣＡＳＫＥＴ　(カスケット)\n【住所】高円寺南3-56-7 101\n【TEL】03-5306-1885\n【OPEN】12:00-21:00\n【定休日】不定休\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"Kissmet　(キスメット)\n【住所】高円寺南3-56-1 藤和高円寺コープ101\n【TEL】03-6383-2029\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/レディース/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＣＵＢＡ　(キューバ)\n【住所】高円寺南3-45-10\n【TEL】03-5378-6822\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＧＲＡＮＤＢＥＲＲＹ ＪＡＭ　(グランベリージャム)\n【住所】高円寺南4-7-1\n【TEL】03-3315-9557\n【OPEN】13:00-22:00\n【定休日】\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"Green Onions　(グリーンオニオンズ)\n【住所】高円寺南4-20-4 サンライズビル1F\n【TEL】03-5929-9539\n【OPEN】12:00-21:00\n【定休日】\n【取扱い】古着/メンズ/レディース/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＧＲＥＥＮ ＬＩＧＨＴ　(グリーンライト)\n【住所】高円寺南4-28-11\n【TEL】03-3314-0407\n【OPEN】12:00-21:00\n【定休日】\n【取扱い】古着/メンズ/レディース/雑貨/スニーカー/\n",
	"",
	"",
	"Crooklyn’　(クルックリン)\n【住所】高円寺南4-25-2\n【TEL】03-6383-2487\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/雑貨/ストリート・90sHIPHOP/\n",
	"",
	"",
	"ＣＬＯＴＨＩＮＧ　ＴＩＭＥ　(クロージングタイム)\n【住所】高円寺南4-29-9\n【TEL】03-3312-1423\n【OPEN】13:00-20:00\n【定休日】無休\n【取扱い】古着/メンズ/レディース/雑貨/\n",
	"",
	"",
	"黒ＢＥＮＺ　(クロベンツ)\n【住所】高円寺南4-24-12\n【TEL】03-5306-2033\n【OPEN】12:00-20:00\n【定休日】無休\n【取扱い】古着/メンズ/雑貨/\n",
	"",
	"",
	"ＣＯＲＤ　(コード)\n【住所】高円寺南4-24-9\n【TEL】\n【OPEN】\n【定休日】無休\n【取扱い】古着/メンズ/雑貨/\n",
	"",
	"",
	"GORILLA　(ゴリラ)\n【住所】高円寺南3-49-3 北一ビル1F\n【TEL】03-3316-1214\n【OPEN】13:00-19:00\n【定休日】火曜日\n【取扱い】古着/メンズ/雑貨/\n",
	"",
	"",
	"ＴＨＥ ＧＡＴＥ　(ザ ゲート)\n【住所】高円寺北2-22-5\n【TEL】03-3336-9345\n【OPEN】[平日]12:30-21:30[土日祝]11:30～21:30\n【定休日】不定休\n【取扱い】古着/新品/メンズ/雑貨/\n",
	"",
	"",
	"ＳＡＦＡＲＩ １　(サファリ１号店)\n【住所】高円寺南3-57-4ベルシャトウ高円寺1F\n【TEL】03-5378-9230\n【OPEN】13:00-20:00\n【定休日】第２木曜日\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＳＡＦＡＲＩ ２　(サファリ２号店)\n【住所】高円寺南3-47-8高円寺ニューナショナルコート1F\n【TEL】\n【OPEN】13:00-20:00\n【定休日】第２木曜日\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＳＡＦＡＲＩ ３　(サファリ３号店)\n【住所】高円寺南4-7-3サンシャイン高円寺1Ｆ\n【TEL】03-6808-9787\n【OPEN】13:00-20:00\n【定休日】第２木曜日\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＳＡＦＡＲＩ ４　(サファリ４号店)\n【住所】東京都杉並区高円寺南3-45-12\n【TEL】03-5929-9225\n【OPEN】13:00-20:00\n【定休日】第２木曜日\n【取扱い】古着/メンズ/雑貨/アウトドア/\n",
	"",
	"",
	"SAMAKI\n【住所】高円寺南3-49-5\n【TEL】03-6454-6839\n【OPEN】12:00-20:00\n【定休日】\n【取扱い】古着/メンズ/レディース/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＳＵＮＴＲＡＰ　(サントラップ)\n【住所】高円寺南4-23-5ACPビル1F\n【TEL】03-5378-3260\n【OPEN】11:30-20:30\n【定休日】無休\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＣＡ.　(シーエー)\n【住所】高円寺南4-24-9高円寺南中央ビル103\n【TEL】03-3313-1710\n【OPEN】12:00-21:00\n【定休日】\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"Ｊａｃｏｂ’ｓ Ｌａｄｄｅｒ＋　(ジェイコブスラダープリュス)\n【住所】\n【TEL】\n【OPEN】13:00-20:30\n【定休日】不定休\n【取扱い】古着/メンズ/レディース/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＪＩＮＪＥＲ　(ジンジャー)\n【住所】高円寺南4-44-3\n【TEL】\n【OPEN】12:00-21:00\n【定休日】\n【取扱い】古着/メンズ/雑貨/\n",
	"",
	"",
	"ＳＵＰＥＲ ＯＬＤ　(スーパーオールド)\n【住所】高円寺南4-22-1\n【TEL】03-3317-8336\n【OPEN】12:30-20:00\n【定休日】無休\n【取扱い】古着/メンズ/レディース/雑貨/\n",
	"",
	"",
	"ＺＯＯＬ　(ズール)\n【住所】高円寺南4-6-11\n【TEL】03-5305-5868\n【OPEN】[平日]12:00-20:00[日、祝日]11:00-20:00\n【定休日】無休\n【取扱い】古着/新品/メンズ/雑貨/\n",
	"",
	"",
	"ＺＯＯＬ ＯＵＴＬＥＴ　(ズールアウトレット)\n【住所】高円寺南4-4-8\n【TEL】03-5305-1296\n【OPEN】[平日]12:00-20:00[日、祝日]11:00-20:00\n【定休日】無休\n【取扱い】古着/新品/メンズ/レディース/雑貨/\n",
	"",
	"",
	"Small Change　(スモールチェンジ)\n【住所】東京都杉並区高円寺南3-45-16 1・2F\n【TEL】050-3803-2224\n【OPEN】12:00-22:00\n【定休日】無し\n【取扱い】古着/メンズ/レディース/オリジナル/インポート/雑貨/\n",
	"",
	"",
	"Ｓ.Ｏ　(ソウ)\n【住所】高円寺南4-30-5 B1\n【TEL】03-3311-2753\n【OPEN】12:00-21:00\n【定休日】\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"Ｓｌｕｔ　(スラット)\n【住所】高円寺南3-45-12\n【TEL】03-3314-5670\n【OPEN】12:30-21:00\n【定休日】\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"即興　(ソッキョウ)\n【住所】高円寺南3-59-14 中西アパート102\n【TEL】03-6304-9421\n【OPEN】13:00-21:00\n【定休日】不定休\n【取扱い】古着/メンズ/レディース/ヴィンテージ/雑貨/\n",
	"",
	"",
	"Tatouage by ZOOL GREEN　(ﾀﾄｩｰ ﾊﾞｲ ｽﾞｰﾙ ｸﾞﾘｰﾝ)\n【住所】高円寺南2-48-9\n【TEL】03-5305-5498\n【OPEN】[平日]12:00-20:00[日、祝日]11:00-20:00\n【定休日】無休\n【取扱い】古着/新品/メンズ/雑貨/\n",
	"",
	"",
	"Ｃｈｉｃａｐｐ　(チカップ)\n【住所】高円寺南2-22-5 2F\n【TEL】03-3317-2520\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/雑貨/\n",
	"",
	"",
	"ＣＨＡＲＴ　(チャート)\n【住所】高円寺南4-30-8 ミサトビル103\n【TEL】03-5378-9128\n【OPEN】12:00-21:00\n【定休日】無休\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"Ｄ－ＣＬＯＴＨＩＮＧ　(ディークロージング)\n【住所】高円寺南4-22-2フジビル1F\n【TEL】03-5306-6887\n【OPEN】12:00-20:00\n【定休日】無休\n【取扱い】古着/新品/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＤＥＣＡＤＡＮＣＥ　(デカダンス)\n【住所】高円寺南4-27-7 102\n【TEL】03-3311-3772\n【OPEN】13:00-20:30\n【定休日】無休\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"TOIY-MAGI　(トイマギー)\n【住所】高円寺南4-7-10 2F\n【TEL】03-3315-9433\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＴＲＵＮＫ　(トランク)\n【住所】高円寺南3-57-4\n【TEL】03-3315-0388\n【OPEN】13:00-20:00\n【定休日】\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＮＯＷ ＯＲ ＮＥＶＥＲ　(ナウオアネバー)\n【住所】高円寺南4-24-2 2F\n【TEL】03-3317-7707\n【OPEN】12:00-20:30\n【定休日】無休\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"NoTE　(ノート)\n【住所】高円寺南3-56-7\n【TEL】03-3312-1220\n【OPEN】12:30-20:30\n【定休日】無休\n【取扱い】古着/メンズ/\n",
	"",
	"",
	"のりき　(ノリキ)\n【住所】高円寺南3-45-13\n【TEL】03-3312-1220\n【OPEN】12:30-20:30\n【定休日】無休\n【取扱い】古着/メンズ/\n",
	"",
	"",
	"はやとちり (ハヤトチリ)\n【住所】高円寺北3-4-11 ｷﾀｺﾚﾋﾞﾙ1F\n【TEL】03-3316-4680\n【OPEN】[平日]15:00-23:00[休日]13:00-23:00\n【定休日】不定休\n【取扱い】古着/メンズ/レディース/雑貨/\n",
	"",
	"",
	"ＨＵＲＲＹ　ＵＰ　(ハリーアップ)\n【住所】高円寺南4-21-4\n【TEL】03-5378-8525\n【OPEN】[平日]13:00-20:30[土日祝]12:00-20:30\n【定休日】不定休\n【取扱い】古着/メンズ/雑貨/\n",
	"",
	"",
	"ｂｃｂｇ\n【住所】高円寺南4-24-11\n【TEL】\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/雑貨/\n",
	"",
	"",
	"Ｂｅａｃｈ　(ビーチ)\n【住所】高円寺南3-55-2\n【TEL】\n【OPEN】13:00-20:30\n【定休日】\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＰＩＣＫ ＵＰ　(ピックアップ)\n【住所】高円寺南3-45-12\n【TEL】\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/雑貨/スニーカー/\n",
	"",
	"",
	"BIG TIME　(ビッグタイム)\n【住所】高円寺南4-5-7 1F\n【TEL】050-3803-2236\n【OPEN】12:00-21:30\n【定休日】無し\n【取扱い】古着/メンズ/レディース/オリジナル/インポート/雑貨/\n",
	"",
	"",
	"villains　(ビランズ)\n【住所】高円寺南3-46-5 コリンズビル103\n【TEL】03-5929- 7669\n【OPEN】13:00-20:00\n【定休日】無休\n【取扱い】メンズ/レディース/ヴィンテージ/デザイナーズブランド古着/\n",
	"",
	"",
	"ＦＩＶＥ　(ファイブ)\n【住所】高円寺南3-45-12\n【TEL】03-5377-3957\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/新品/雑貨/\n",
	"",
	"",
	"FIFTY-FIFTY　(フィフティフィフティ)\n【住所】高円寺南4-29-14 1F\n【TEL】03-3316-5566\n【OPEN】12:30-20:30\n【定休日】不定休\n【取扱い】古着/メンズ/レディース/雑貨/\n",
	"",
	"",
	"ＦＩＮＫＳ　(フィンクス)\n【住所】高円寺南4-24-3\n【TEL】03-3317-4116\n【OPEN】13:00-18:00\n【定休日】不定休\n【取扱い】古着/新品/メンズ/雑貨/\n",
	"",
	"",
	"ＦＵＵＤＯＢＲＡＩＮ　(フウドブレイン)\n【住所】高円寺南4-29-12\n【TEL】03-3318-9171\n【OPEN】\n【定休日】\n【取扱い】古着/新品/メンズ/雑貨/\n",
	"",
	"",
	"深緑　(フカミドリ)\n【住所】高円寺南4-24-4 2F\n【TEL】03-5378-8889\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/雑貨/\n",
	"",
	"",
	"ｂｒｅｓｓｏｎ.ｒ　(ブレッソンアール)\n【住所】高円寺南2-20-13\n【TEL】03-3317-3525\n【OPEN】12:00-21:00\n【定休日】\n【取扱い】古着/新品/メンズ/レディース/雑貨/\n",
	"",
	"",
	"BACHIC　(ベーシック)\n【住所】東京都杉並区高円寺南4-24-4\n【TEL】03-3317-7797\n【OPEN】13:00-20:00\n【定休日】\n【取扱い】ヨーロッパ古着/メンズ/雑貨/\n",
	"",
	"",
	"ＰＡＰＥＲ Ｍｏｏｎ　(ペーパームーン)\n【住所】高円寺南3-46-5後藤ビル3F\n【TEL】\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/レディース/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＭＯＵＳＥ　(マウス)\n【住所】高円寺南4-28-11 B1F\n【TEL】03-3317-4055\n【OPEN】12:00-21:00\n【定休日】無休\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＭＡＤ ＳＥＣＴＩＯＮ　(マッドセクション)\n【住所】高円寺南4-24-11\n【TEL】03-6914-3043\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/雑貨/\n",
	"",
	"",
	"MAD TEA PARTY　(マッドティーパーティー)\n【住所】高円寺南3-45-9\n【TEL】050-3586-5326\n【OPEN】11:00-22:30\n【定休日】不定休\n【取扱い】古着/メンズ/レディース/雑貨/\n",
	"",
	"",
	"みなみ\n【住所】高円寺南3-45-12 202\n【TEL】03-3317-8170\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/レディース/雑貨/\n",
	"",
	"",
	"MECHA　(メチャ)\n【住所】高円寺南4-23-7大国屋ビル202\n【TEL】\n【OPEN】平日13:00-22:00 土日祝12:00-22:00\n【定休日】\n【取扱い】古着/メンズ/レディース/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＭＯＬＥ’Ｓ　(モールズ)\n【住所】高円寺南3-44-14KNﾊｲｽ1F\n【TEL】03-3316-1828\n【OPEN】12:00-21:00\n【定休日】\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ｙａｋｕｓｏｋｕ　(ヤクソク)\n【住所】高円寺南4-29-8-1F\n【TEL】03-5913-7104\n【OPEN】12:00-20:00\n【定休日】無休\n【取扱い】古着/レディース/メンズ/雑貨/\nhttp://s.ameblo.jp/yakusoku-kouenji/",
	"",
	"",
	"ＵＫ ｅｘｔｒａ　(ユーケーエクストラ)\n【住所】高円寺南3-59-13\n【TEL】03-3311-1992\n【OPEN】12:00-20:00\n【定休日】\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＹＵＲＩ　(ユーリ)\n【住所】高円寺南4-7-15 2F-B\n【TEL】\n【OPEN】13:00-21:00\n【定休日】水曜日\n【取扱い】古着/メンズ/レディース/雑貨/\n",
	"",
	"",
	"RUGGED　(ラギッド)\n【住所】高円寺南4-24-5\n【TEL】\n【OPEN】平日13:00-21:00土日祝12:00-21:00\n【定休日】\n【取扱い】古着/新品/メンズ/雑貨/\n",
	"",
	"",
	"LAUGH　(ラフ)\n【住所】高円寺南4-29-8-1F\n【TEL】03-5929-7837\n【OPEN】平日13:00-20:00\n【定休日】\n【取扱い】古着/新品/メンズ/雑貨/\n",
	"",
	"",
	"Re’all　(リオール)\n【住所】高円寺南4-29-13大雅堂マンション1F\n【TEL】03-6454-6802\n【OPEN】12:00-21:00\n【定休日】無休\n【取扱い】古着/メンズ/レディース/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＲＥＰＬＡＹ　(リプレイ)\n【住所】高円寺南3-56-1籐和高円寺コープ109\n【TEL】03-3314-0236\n【OPEN】12:00-20:00\n【定休日】無休\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"liberal　(リベラル)\n【住所】高円寺南3-48-4\n【TEL】03-5913-8216\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"libert　(リベルテ)\n【住所】高円寺南4-24-3川上ビル2F\n【TEL】\n【OPEN】\n【定休日】\n【取扱い】古着/メンズ/雑貨/\n",
	"",
	"",
	"ＲＯＩＲ　(ロアール)\n【住所】高円寺南3-46-5 203\n【TEL】03-3314-2750\n【OPEN】13:00-21:00\n【定休日】\n【取扱い】古着/メンズ/雑貨/ヴィンテージ/\n",
	"",
	"",
	"ＬＯＮＧＡＢＵ　(ロンガブ)\n【住所】高円寺南4-34-10 グランコート三上102\n【TEL】03-5377-0558\n【OPEN】13:00-20:00\n【定休日】無休\n【取扱い】古着/メンズ/レディース/雑貨/ヴィンテージ/\n",
	"",
	"",
	"Outdoor Assist (アウトドアアシスト)\n【住所】高円寺南3-37-25\n【TEL】03-6310-1372\n【OPEN】12:00-21:00\n【定休日】不定休\n【取扱い】新品アウトドアー/メンズ/レディース/雑貨/\n",
	"",
	"",
	"UP START (アップスタート)\n【住所】高円寺南3-58-26\n【TEL】03-6383-2715\n【OPEN】\n【定休日】\n【取扱い】新品/メンズ/セレクト/雑貨/\n",
	"",
	"",
	"ADOLUVLE (アドラーブル)\n【住所】高円寺南2-45-18\n【TEL】03-3318-2012\n【OPEN】11:30-20:30\n【定休日】月曜日\n【取扱い】新品/メンズ/雑貨/\n",
	"",
	"",
	"＆Co (アンドコー)\n【住所】高円寺南3-35-14\n【TEL】03-3315-0582\n【OPEN】12:00-20:00\n【定休日】木曜日\n【取扱い】新品/メンズ/雑貨/\n",
	"",
	"",
	"and Pheb (アンドフェブ)\n【住所】高円寺南4-24-11-103\n【TEL】03-5929-9757\n【OPEN】13:00-20:00\n【定休日】不定休\n【取扱い】新品/メンズ/雑貨/\n",
	"",
	"",
	"and Meat (アンドミート)\n【住所】高円寺南4-24-7\n【TEL】03-3317-1297\n【OPEN】12:00-21:00\n【定休日】不定休\n【取扱い】新品/メンズ/雑貨/皮革/\n",
	"",
	"",
	"effectone　(エフェクト)\n【住所】高円寺南4-27-2 高円寺ﾊﾟﾚｽﾊｲﾂ106\n【TEL】03-5306-1812\n【OPEN】12:00-21:00\n【定休日】無休\n【取扱い】新品/メンズ/レディース/雑貨/\n",
	"",
	"",
	"ＧＡＮＧ ＫＯＮＧ　(ギャングコング)　\n【住所】高円寺南4-21-6\n【TEL】03-5305-2375\n【OPEN】\n【定休日】\n【取扱い】新品/メンズ/雑貨/\n",
	"",
	"",
	"ＧＬＯＶＥＥＥＫ　(グルーブイーク)\n【住所】高円寺南3ｰ35ｰ14\n【TEL】03-3314-3386\n【OPEN】12:00-21:00\n【定休日】無休\n【取扱い】新品/メンズ/レディース/雑貨/\n",
	"",
	"",
	"grn by酔　(ジーアールエヌ)\n【住所】高円寺南2-50-10\n【TEL】\n【OPEN】12:00-21:00\n【定休日】年中無休\n【取扱い】新品/メンズ/雑貨/\n",
	"",
	"",
	"ＢＡＺＯＯ　(バズー)\n【住所】高円寺北2-4-8 市川ビル 1F\n【TEL】03-3310-5626\n【OPEN】11:00-21:00\n【定休日】第３木曜\n【取扱い】新品/メンズ/雑貨/\n",
	"",
	"",
	"Ｂｉｔｃｈｅｓ Ｂｒｅｗ　(ビッチェズブリュー)\n【住所】高円寺南4-24-9\n【TEL】\n【OPEN】13:00-21:00\n【定休日】無休\n【取扱い】新品/メンズ/雑貨/\n",
	"",
	"",
	"Ｂｏｏｂｙ ＴＲＡＰ　(ブービートラップ)\n【住所】高円寺南3-37-23\n【TEL】\n【OPEN】12:00-21:00\n【定休日】無休\n【取扱い】新品/メンズ/雑貨/※(同じ店舗内に古着屋under700併設)\n",
	"",
	"",
	"ＢＵＬＥ ＣＯＲＮ　(ブルーコーン)\n【住所】高円寺南4-24-8\n【TEL】03-3317-0852\n【OPEN】12:00-21:00\n【定休日】不定休\n【取扱い】新品/メンズ/レディース/雑貨/シルバー/\n",
	"",
	"",
	"MARGIN　(マージン)\n【住所】高円寺南4-23-2\n【TEL】03-3313-9190\n【OPEN】13:00-20:00\n【定休日】水曜日\n【取扱い】新品/メンズ/雑貨/\n",
	"",
	"",
	"桃太郎ジーンズ　(モモタロウジーンズ)\n【住所】高円寺南3-49-1\n【TEL】03-6427-5441\n【OPEN】11:00-20:00\n【定休日】火曜日\n【取扱い】新品/メンズ/雑貨/\n",
	"",
	"",
	"Lampa　(ランパ)\n【住所】高円寺南4-8-1\n【TEL】03-3316-4030\n【OPEN】11:00-20:00\n【定休日】無休\n【取扱い】新品/メンズ/雑貨/\n",
	"",
	"",
	"littleworld&flatjeans　(ﾘﾄﾙﾜｰﾙﾄﾞ&ﾌﾗｯﾄｼﾞｰﾝｽﾞ)\n【住所】高円寺南4-21-2\n【TEL】03-5913-9698\n【OPEN】12:00-20:00\n【定休日】無休\n【取扱い】オリジナルデニム/ヴィンテージトイ/\n",
	"",
	"",
	"rokuromi　(ロクロミ)\n【住所】高円寺南2-22-6\n【TEL】03-5913-9698\n【OPEN】14:00-22:00\n【定休日】\n【取扱い】新品/メンズ/雑貨/\n",
	"",
	""
]


	// R.without([1, 2], [1, 2, 3, 4])
furugiData = R.without([""], furugiData)

const replaceText = x => R.pipe(R.replace(/\n【住所】/g, '","'), R.replace(/\n【TEL】/g, '","'), R.replace(/\n【OPEN】/g, '","'), R.replace(/\n【定休日】/g, '","'), R.replace(/\n【取扱い】/g, '","'), R.replace(/\n/g, '"'))(x);
furugiData = R.map(replaceText, furugiData);

const replaceText2 = x => R.replace(/^/g, '"', x);
furugiData = R.map(replaceText2, furugiData);

furugiData = R.join("\n", furugiData);

console.log(
	furugiData
);

