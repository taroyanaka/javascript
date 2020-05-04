// ({
// 	"plugins": ["jsdom-quokka-plugin"],
// })

const R = require(`ramda`);

const txt = `content="瀬戸あさひ">/watch?v=iTZfm9wlRGM" rel="nofollow">【ようこそ2020】特に予定ないので新年会勝手に開きます - 長さ: 5 時間 27 分。14,185 回視聴</li><li>3 か月前/watch?v=hqOIWTWtRWA" rel="nofollow">【M-1グランプリ2019】瀬戸あさひと同時視聴会 - 長さ: 3 時間 32 分。1,675 回視聴</li><li>4 か月前/watch?v=wfNepVLj6eo" rel="nofollow">相変わらずクソDMしか届きません……【ツッコミ】 - 長さ: 2 分 49 秒。1,346 回視聴</li><li>4 か月前/watch?v=bO_W8VScX7A" rel="nofollow">【バーチャル学園】1～5話 総集編【アニメ】 - 長さ: 6 分 33 秒。684 回視聴</li><li>4 か月前/watch?v=J5tF1FhmX3c" rel="nofollow">【バーチャル学園】第8話「モンペはある日突然に」【出演：竹花ノート・ふくやマスター】 - 長さ: 2 分 27 秒。1,688 回視聴</li><li>5 か月前/watch?v=t5DdX_m32E0" rel="nofollow">【 #キングオブコント2019 】同時視聴の会 - 長さ: 3 時間 14 分。16,051 回視聴</li><li>7 か月前/watch?v=aPNn91F1H7A" rel="nofollow">熱中症見舞いのDMがひどすぎる【ツッコミ】 - 長さ: 2 分 45 秒。2,258 回視聴</li><li>8 か月前/watch?v=Pgw3N6lYM5E" rel="nofollow">【バーチャル学園】第7話「生意気な熊にはご用心」【出演：日ノ隈らん】 - 長さ: 2 分 49 秒。2,702 回視聴</li><li>8 か月前/watch?v=77_okbqmIfI" rel="nofollow">【バーチャル学園】第6話「宗教と炭鉱夫」【出演：ベルモンド・バンデラス】 - 長さ: 2 分 38 秒。5,609 回視聴</li><li>8 か月前/watch?v=Vf9NFaBOtug" rel="nofollow">【 #ブイチェス 】こちとらホロさんじ8ぞ？【瀬戸あさひ視点】 - 長さ: 3 時間 6 分。2,009 回視聴</li><li>9 か月前/watch?v=FndxZVb6AKg" rel="nofollow">一見、悪徳に見えて、マジで何言ってるか分からないだけの男 - 長さ: 2 分 33 秒。7,205 回視聴</li><li>10 か月前/watch?v=1BaHNSYw3h4" rel="nofollow">IQ2の絵描き歌 - 長さ: 72 秒。2,144 回視聴</li><li>10 か月前/watch?v=Rj7TVgPahiY" rel="nofollow">【バーチャル学園】第5話「食堂でとんでもない女性と出会った話」【出演：歌衣メイカ】 - 長さ: 2 分 31 秒。3,865 回視聴</li><li>10 か月前/watch?v=6BvHTr47UHk" rel="nofollow">【バーチャル学園】第4話「本気でバズる方法教えます」【出演：さはな】 - 長さ: 2 分 5 秒。3,301 回視聴</li><li>11 か月前/watch?v=FQgbZHx-AVo" rel="nofollow">【バーチャル学園】第3話「俺の学校の保健委員があまりにもポンコツな件について」【出演：名取さな】 - 長さ: 2 分 17 秒。8,347 回視聴</li><li>11 か月前/watch?v=c0CY_sDQqJc" rel="nofollow">【バーチャル学園】第2話「平均的な昼休み」【出演：アベレージ】 - 長さ: 114 秒。3,433 回視聴</li><li>11 か月前/watch?v=sqXF2ciPyog" rel="nofollow">【バーチャル学園】第1話「新学期」【出演：パカエル】 - 長さ: 110 秒。5,339 回視聴</li><li>11 か月前/watch?v=FWMpcOdqzIE" rel="nofollow">優勝インタビュー【吹き替え】 - 長さ: 50 秒。1,685 回視聴</li><li>11 か月前/watch?v=nn5higduCIg" rel="nofollow">世界のファッション見てたらツッコまざるを得なかった - 長さ: 116 秒。1,375 回視聴</li><li>11 か月前/watch?v=M9WdKhBMpiI" rel="nofollow">暗殺が本業の男のMurderous Pursuits - 長さ: 1 時間 7 分。1,014 回視聴</li><li>11 か月前/watch?v=Qr3-0erg53s" rel="nofollow">【霜降り明星】ツッコミの時だけ粗品になったら…【ツッコミ】 - 長さ: 3 分 32 秒。6,248 回視聴</li><li>11 か月前/watch?v=Y62KsGwzt5g" rel="nofollow">現役大学院生が第3回学力テストの問題を全力で解いてみる【答え合わせ編】 - 長さ: 1 時間 13 分。1,368 回視聴</li><li>11 か月前/watch?v=VlcI2pSgOCI" rel="nofollow">現役大学院生が第3回学力テストの問題を全力で解いてみる - 長さ: 2 時間 21 分。2,379 回視聴</li><li>11 か月前/watch?v=Fy73OxHEjg4" rel="nofollow">【瀬戸あさひ】新モデルお披露目会 - 長さ: 34 分。2,799 回視聴</li><li>11 か月前/watch?v=2zAicslBuQk" rel="nofollow">人狼系FPS「Deceit」コラボ【瀬戸あさひ視点】 - 長さ: 1 時間 27 分。1,379 回視聴</li><li>11 か月前/watch?v=0ykoqnYAhA0" rel="nofollow">【第2回VTuber最協決定戦】チーム：†漆黒の渋谷ハチ公前†【瀬戸あさひ視点】 - 長さ: 2 時間 40 分。4,478 回視聴</li><li>1 年前/watch?v=XN3hxd_9x1M" rel="nofollow">【衝撃】大会で優勝に最も近いVTuber4選 - 長さ: 2 分 30 秒。5,134 回視聴</li><li>1 年前/watch?v=f1oAIH6WiaQ" rel="nofollow">実は女声出せるしゲームめっちゃ上手いんだよね【APEX Legends】 - 長さ: 1 時間 3 分。6,927 回視聴</li><li>1 年前/watch?v=20pXPyDkV0o" rel="nofollow">第二回VTuber男子校学力テストの問題を本気で解く！！【自己採点編！】 - 長さ: 57 分。2,766 回視聴</li><li>1 年前/watch?v=W7uHmoFl1-s" rel="nofollow">第二回VTuber男子校学力テストの問題を本気で解く！！ - 長さ: 2 時間 12 分。4,480 回視聴</li><li>1 年前content="あっくん大魔王">/watch?v=PsczGM_LvCc" rel="nofollow">【新作MMORPG】ブループロトコルに行くわよー^^ - 長さ: 2 時間 24 分。3,635 回視聴</li><li>5 日前/watch?v=GEAvA7Mx5lU" rel="nofollow">誕生日だし飲酒しながら壺男して凸待ちでもしない？ - 長さ: 3 時間 10 分。5,910 回視聴</li><li>6 日前/watch?v=TKAqcbBGM8g" rel="nofollow">【雀魂】ツモるぜ、ツモって何ですか？ - 長さ: 4 時間 16 分。4,275 回視聴</li><li>1 週間前/watch?v=YqbeUrPkcto" rel="nofollow">四人で剣を振り回すぜSWORDS of GARGANTUA - 長さ: 1 時間 30 分。2,118 回視聴</li><li>2 週間前/watch?v=Y4BKn_OReek" rel="nofollow">UNOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!! - 長さ: 1 時間 33 分。1,803 回視聴</li><li>2 週間前/watch?v=kBLEUKTq8-U" rel="nofollow">【Out of Space】ドーラ様と一緒に宇宙の掃除屋やります - 長さ: 1 時間 20 分。5,454 回視聴</li><li>1 か月前/watch?v=vh3J7DgXu98" rel="nofollow">【あつまれ どうぶつの森】動物たちと死闘を繰り広げます - 長さ: 42 分。1,646 回視聴</li><li>1 か月前/watch?v=bs37xw3fWIY" rel="nofollow">【あつまれ どうぶつの森】動物たちと死闘を繰り広げます - 長さ: 13 分 45 秒。1,040 回視聴</li><li>1 か月前/watch?v=KrCS4JyfZn4" rel="nofollow">【朝活】ゲリラ的に始まる初めてのランク戦【League of Legends】 - 長さ: 3 時間。1,274 回視聴</li><li>1 か月前/watch?v=pDdgqRddGPM" rel="nofollow">【雑談】C98受かったよ編 - 長さ: 54 分。1,157 回視聴</li><li>1 か月前/watch?v=irXoLBomfc8" rel="nofollow">【アマガミその１】完全初見で我輩の青春を取り戻せ！【あっくん大魔王】 - 長さ: 2 時間 44 分。3,775 回視聴</li><li>1 か月前/watch?v=EIPc7SMNtG8" rel="nofollow">【ホラゲー】我輩の悲鳴がうるSIREN2その7【初見プレイ】 - 長さ: 1 時間 55 分。1,247 回視聴</li><li>1 か月前/watch?v=JBLjpBNLvXI" rel="nofollow">【ホラゲー】我輩の悲鳴がうるSIREN2その6【初見プレイ】 - 長さ: 5 時間 16 分。1,742 回視聴</li><li>1 か月前/watch?v=5siXzA04gDo" rel="nofollow">【ホラゲー】我輩の悲鳴がうるSIREN2その5【初見プレイ】 - 長さ: 3 時間 40 分。1,537 回視聴</li><li>2 か月前/watch?v=rizQIJFtB1c" rel="nofollow">【ホラゲー】我輩の悲鳴がうるSIREN2その4【初見プレイ】 - 長さ: 1 時間 37 分。1,246 回視聴</li><li>2 か月前/watch?v=X3PB04dP2X0" rel="nofollow">【ホラゲー】我輩の悲鳴がうるSIREN2その3【初見プレイ】 - 長さ: 1 時間 20 分。1,425 回視聴</li><li>2 か月前/watch?v=aY5pERUHAVQ" rel="nofollow">【ホラゲー】我輩の悲鳴がうるSIREN2その２【初見プレイ】 - 長さ: 3 時間 44 分。2,185 回視聴</li><li>2 か月前/watch?v=5wZDa0hThxI" rel="nofollow">【ホラゲー】我輩の悲鳴がうるSIREN2【初見プレイ】 - 長さ: 2 時間 31 分。3,095 回視聴</li><li>2 か月前/watch?v=E06LoHT0e6E" rel="nofollow">【ARK】孤独のARKん大魔王、移住計画【その6】 - 長さ: 1 時間 40 分。1,454 回視聴</li><li>2 か月前/watch?v=PeQwM1K5RAw" rel="nofollow">【夜勤事件】ちょっとコンビニ行ってくる【ホラゲー】 - 長さ: 2 時間 15 分。8,217 回視聴</li><li>2 か月前/watch?v=b5S2YP7GitY" rel="nofollow">【ARK】孤独のARKん大魔王、銃を持て【その5】 - 長さ: 1 時間 23 分。1,063 回視聴</li><li>2 か月前/watch?v=RZUE3bB3tD0" rel="nofollow">【ARK】孤独のARKん大魔王、肉食恐竜が欲しい気もする【その4】 - 長さ: 2 時間 48 分。1,437 回視聴</li><li>2 か月前/watch?v=8fI21gZqD2Q" rel="nofollow">【ARK】孤独のARKん大魔王、畜生な鳥は嫌いだよ編【その3】 - 長さ: 3 時間 54 分。2,320 回視聴</li><li>2 か月前/watch?v=nW3TqOWdXsQ" rel="nofollow">【ARK】孤独のARKん大魔王、鎧とアンキロを求めて【その2】 - 長さ: 2 時間 55 分。2,595 回視聴</li><li>2 か月前/watch?v=fQM9eeCqaAo" rel="nofollow">【ARK】孤独のARKん大魔王、ドキドキ恐竜サバイバル【その1】 - 長さ: 4 時間 9 分。3,461 回視聴</li><li>2 か月前/watch?v=VZgmnrXNoNM" rel="nofollow">唐突に始まるあっくん大魔王のテトリス99 - 長さ: 52 分。1,090 回視聴</li><li>2 か月前/watch?v=KkwJ-UyIcJU" rel="nofollow">【Minecraft】スーパーフラットに小さな家建てながら喋る - 長さ: 1 時間 30 分。1,473 回視聴</li><li>2 か月前/watch?v=3CPv6LF6Yr8" rel="nofollow">【League of Legends】あっくん大魔王のLoLその1 - 長さ: 2 時間 59 分。2,323 回視聴</li><li>2 か月前/watch?v=viRyU3CVI3M" rel="nofollow">何も思いつかないからこのゲームする【APEX LEGENDS】 - 長さ: 1 時間 14 分。1,560 回視聴</li><li>3 か月前/watch?v=x2-BFV86bTQ" rel="nofollow">【完全初見】大魔王の実家帰り【超魔界村】 - 長さ: 4 時間 55 分。4,495 回視聴</li><li>3 か月前content="あいえるちゃんねる/株式会社インフィニットループ">/watch?v=_kqpp5wzYPw" rel="nofollow">【4/21(火)18:30～】バーチャル会社説明会（アーカイブ） - 長さ: 1 時間。1,592 回視聴</li><li>6 日前/watch?v=cE8IlWf7P0E" rel="nofollow">【4/1(水)20：30～】あいえるちゃんねる2【ゲスト：みゅみゅ】 - 長さ: 57 分。737 回視聴</li><li>3 週間前/watch?v=XUHHV2qWszs" rel="nofollow">あいえるちゃんねる！　あねえるの箱庭 - 長さ: 2 時間 28 分。2,083 回視聴</li><li>6 か月前/watch?v=ByoBmtRO8hc" rel="nofollow">あいえるちゃんねる！　バーチャルトークスタジオ - 長さ: 2 時間 29 分。1,732 回視聴</li><li>6 か月前/watch?v=KfjKv7bCfFc" rel="nofollow">帰ってきたあいえるちゃんねる！ - 長さ: 7 時間 5 分。2,790 回視聴</li><li>6 か月前/watch?v=I44xdRDuWzY" rel="nofollow">【先週のリベンジ！】コメント奪取ゲーム！？【のはずだったけども】 - 長さ: 1 時間。940 回視聴</li><li>9 か月前/watch?v=bSa3EllAja8" rel="nofollow">【みんなで協力！】星に願いを！お願い事はなんですか？？【するはずだった…】 - 長さ: 1 時間。933 回視聴</li><li>9 か月前/watch?v=dt5Kl2sueRc" rel="nofollow">【VR国際交流】画伯は誰だ…！？美少女の絵心に迫る！【ゲスト：フニー＆オリス】 - 長さ: 1 時間。602 回視聴</li><li>9 か月前/watch?v=TzscFQeK0H8" rel="nofollow">【VCIの進化が】VCIもギフトも面白くて時間がヤバイ【止まらない！！】 - 長さ: 59 分。732 回視聴</li><li>9 か月前/watch?v=Vm8TtioNPbY" rel="nofollow">【REALITY連携】REALITY企画王決定戦に応募しよう【あいえるらいぶ63】 - 長さ: 59 分。816 回視聴</li><li>10 か月前/watch?v=Yn7jM72ERHs" rel="nofollow">【九条林檎】吸血鬼の真実に迫る！【あいえるらいぶ62】 - 長さ: 59 分。1,206 回視聴</li><li>10 か月前/watch?v=Psk2S507j0s" rel="nofollow">【イトッポイド】バーチャル販売員とは何者なのか！？【あいえるらいぶ61】 - 長さ: 58 分。1,015 回視聴</li><li>11 か月前/watch?v=NvnsvKORFR0" rel="nofollow">【ゆなゆな＆にしかわ】帰ってきた自由な生き方ズ【あいえるらいぶ60】 - 長さ: 1 時間。755 回視聴</li><li>11 か月前/watch?v=ViUK371agwA" rel="nofollow">【VDRAW】みゅみゅさんの部下登場！？【あいえるらいぶ59】 - 長さ: 1 時間。1,144 回視聴</li><li>1 年前/watch?v=o2iL0i2MVKk" rel="nofollow">【犬江なぎさ】あねえるたんLINEスタンプ登場【あいえるらいぶ58】 - 長さ: 1 時間。614 回視聴</li><li>1 年前/watch?v=Lxb2ZKLyzU4" rel="nofollow">【連想ゲーム】めざせ全員ぴったり仲良し！【あいえるらいぶ57】 - 長さ: 1 時間。589 回視聴</li><li>1 年前/watch?v=0xJWVE-eys0" rel="nofollow">【MiNiSTUDIOポン出し】MiNiSTUDIOの便利な使い方紹介【あいえるらいぶ56】 - 長さ: 1 時間。666 回視聴</li><li>1 年前/watch?v=iJjuIQRED0s" rel="nofollow">【MoguraVR編集長】すんくぼさんのGDC2019レポート【あいえるらいぶ55】 - 長さ: 1 時間。673 回視聴</li><li>1 年前/watch?v=i9Ow7uF7q2U" rel="nofollow">【アメノセイ登場】過去にあんなことがあったとは（ねつ造）【あいえるらいぶ54】 - 長さ: 1 時間。1,167 回視聴</li><li>1 年前/watch?v=tjhcMq4aqhY" rel="nofollow">【占い師】カトリーヌ愛子登場【あいえるらいぶ53】 - 長さ: 1 時間。635 回視聴</li><li>1 年前/watch?v=ZJ0gSgt7Xb0" rel="nofollow">【恋愛相談】脇田唯さんと恋愛相談のってみた【あいえるらいぶ52】 - 長さ: 1 時間。882 回視聴</li><li>1 年前/watch?v=lszEnh5AsEc" rel="nofollow">【MoguraVR】すんくぼさんが遊びに来たよ【あいえるらいぶ51】 - 長さ: 53 分。939 回視聴</li><li>1 年前/watch?v=LkGanVFyTWU" rel="nofollow">【バレンタイン企画】あいえるたんVSあねえるたん、どっちのチョコが欲しい？【あいえるらいぶ50】 - 長さ: 1 時間。1,297 回視聴</li><li>1 年前/watch?v=pCcgVyRtBl0" rel="nofollow">インサイドちゃんズがあそびに来た【あいえるらいぶ49】 - 長さ: 59 分。1,836 回視聴</li><li>1 年前/watch?v=I6IOfT4WjNU" rel="nofollow">【バレンタインギフト登場】クソコラ大会とラジオ体操【あいえるらいぶ48】 - 長さ: 1 時間。821 回視聴</li><li>1 年前/watch?v=2TA0mU3Snn4" rel="nofollow">【どんどん亭さん】お好み焼きVTuber登場!?【あいえるらいぶ47】 - 長さ: 59 分。814 回視聴</li><li>1 年前/watch?v=Zfbc82MKpco" rel="nofollow">【セシルさん登場回】VRMキャラメイカーで変身【あいえるらいぶ46】 - 長さ: 55 分。1,067 回視聴</li><li>1 年前/watch?v=fypXKYfwKFc" rel="nofollow">【コンビ名を決めよう？】2019年初回放送【あいえるらいぶ45】 - 長さ: 59 分。1,056 回視聴</li><li>1 年前/watch?v=Y302eMiVzak" rel="nofollow">【2018振り返り】あいえるらいぶの一年【あいえるらいぶ44ダイジェスト】 - 長さ: 5 分 17 秒。813 回視聴</li><li>1 年前/watch?v=Zuhbd97mXyA" rel="nofollow">あいえるらいぶ44 - 長さ: 59 分。913 回視聴</li><li>1 年前content="りるちゃん">/watch?v=ByiQ0bnQ-UE" rel="nofollow">【今日発売】あつまれどうぶつの森/リルルンリゾー島♪【女性実況】 - 長さ: 1 時間 44 分。500 回視聴</li><li>1 か月前/watch?v=-KPbqgmOtGU" rel="nofollow">島の名前一緒に考えよう！【あつまれどうぶつの森】 - 長さ: 1 時間。739 回視聴</li><li>1 か月前/watch?v=ArD9jIBvaJo" rel="nofollow">あつ森が待ちきれなくてアフレコで遊んでみた♪【あつまれどうぶつの森 TVCM ゼロから作る篇】 - 長さ: 33 秒。333 回視聴</li><li>1 か月前/watch?v=6A_FTtKL65c" rel="nofollow">Have a nice day 明日はきっといい事あるよ！【オリジナルPV】 (Acoustic ver.) - 長さ: 3 分 55 秒。439 回視聴</li><li>1 か月前/watch?v=EJrGQQy6eAs" rel="nofollow">【PC版Ark】ラグナロクでギブルハウス作る！ジェネシス楽しみだね - 長さ: 1 時間 44 分。504 回視聴</li><li>2 か月前/watch?v=mJGaQdpu0iA" rel="nofollow">学猫叫 ~Say meow meow~ covered by 璃露 - 長さ: 3 分 33 秒。1,605 回視聴</li><li>3 か月前/watch?v=DGl_UAnFJ30" rel="nofollow">【日本語版】爱河/蒋雪儿  covered by 璃露 - 長さ: 3 分 40 秒。1,892 回視聴</li><li>4 か月前/watch?v=dGW1PEvIhiA" rel="nofollow">【英語版】I Really Like You 【璃露】 - 長さ: 3 分 25 秒。970 回視聴</li><li>5 か月前/watch?v=wOG_nDONE64" rel="nofollow">【日本語版】泣かないと約束したから/说好不哭 【璃露】 - 長さ: 3 分 41 秒。6,608 回視聴</li><li>7 か月前/watch?v=IvOvXkncdsA" rel="nofollow">【日本語版】芒种/赵方婧 covered by 璃露 - 長さ: 3 分 39 秒。39,243 回視聴</li><li>7 か月前/watch?v=LbCJsb45gNw" rel="nofollow">【3ヶ国語】勾指起誓-指切りげんまん/璃露 - 長さ: 3 分 4 秒。900 回視聴</li><li>7 か月前/watch?v=fLUjMfD8tSw" rel="nofollow">マリーゴールド/あいみょん　covered by 璃露 - 長さ: 5 分 5 秒。1,599 回視聴</li><li>9 か月前/watch?v=pTfQAjIX8_U" rel="nofollow">生僻字-四字熟语 /日本語版【璃露】 - 長さ: 3 分 38 秒。5,881 回視聴</li><li>1 年前/watch?v=GbeTO3iGCDo" rel="nofollow">あの娘シークレット/Ver.璃露【中日歌词】 - 長さ: 3 分 51 秒。2,071 回視聴</li><li>1 年前/watch?v=-kn7hru06VI" rel="nofollow">【オリジナルPV】lemon /米津玄師  Full covered by 璃露 - 長さ: 4 分 20 秒。3,548 回視聴</li><li>1 年前/watch?v=6FBlQYBCs_E" rel="nofollow">【妹力声面接】お兄ちゃん！をひたすら言ってみた【あやりる】 - 長さ: 88 秒。2,834 回視聴</li><li>1 年前/watch?v=8gJihkzzaKs" rel="nofollow">【Vtuber】3秒で嘘がバレる私が『じゃがりこ面接』をやってみた！【あやりる】 - 長さ: 95 秒。1,222 回視聴</li><li>1 年前/watch?v=6yEJNRH35yY" rel="nofollow">【弾き語り】貴方解剖純愛歌〜死ね〜 /あいみょん covered by 璃露 - 長さ: 95 秒。1,417 回視聴</li><li>1 年前/watch?v=Yopli1Grquw" rel="nofollow">【弾き語り】風になる♪/猫の恩返しcovered by 璃露 - 長さ: 102 秒。2,190 回視聴</li><li>1 年前/watch?v=FWIhIIhdJa8" rel="nofollow">【弾き語り』変わらないもの/時をかける少女covered by 璃露 - 長さ: 113 秒。4,151 回視聴</li><li>1 年前/watch?v=fBtelBlDMPc" rel="nofollow">明日への手紙/手嶌葵『いつかこの恋を思い出してきっと泣いてしまう』covered by 璃露 - 長さ: 2 分。1,349 回視聴</li><li>1 年前/watch?v=qHYC3t_3Sgo" rel="nofollow">【MHW発売記念】 トラベルナ/モンハン語を歌ってみた （アコースティックVer） - 長さ: 99 秒。1,502 回視聴</li><li>2 年前/watch?v=1Jx_MVODyqI" rel="nofollow">にんじゃりばんばん(Ninja Re Bang Bang) 歌ってみた/璃露 - 長さ: 4 分 25 秒。2,252 回視聴</li><li>2 年前/watch?v=STDU8Hl4DxU" rel="nofollow">【卒業ソング】ほころび　歌ってみた/璃露 - 長さ: 4 分 36 秒。2,614 回視聴</li><li>2 年前/watch?v=KAKyIb1BFeI" rel="nofollow">ラブチーノ歌ってみた/璃露 - 長さ: 3 分 49 秒。2,840 回視聴</li><li>2 年前content="ありさのげーむべや">/watch?v=6d0JdHk_b2I" rel="nofollow">【FF7 リメイク】FFを全く知らない！初見プレイ！チャプター１４ - 長さ: 1 時間 38 分。318 回視聴</li><li>9 時間前/watch?v=sQzzJOkqR4I" rel="nofollow">Vtuber！3Dモデルで凸待ち雑談配信！お悩み相談室 - 長さ: 2 時間 3 分。965 回視聴</li><li>1 日前/watch?v=lgvnlVgOHWU" rel="nofollow">【FF7 リメイク】まったり雑談しながらサブクエストやります！ - 長さ: 1 時間 41 分。275 回視聴</li><li>2 日前/watch?v=qkAt8Fupu04" rel="nofollow">【FF7 リメイク】まったり雑談しながらサブクエストやります！ - 長さ: 1 時間 33 分。230 回視聴</li><li>3 日前/watch?v=g8lOdSYKF2E" rel="nofollow">【あつまれどうぶつの森】園芸店、つねきちが追加された！！久々のにー島！ - 長さ: 1 時間 32 分。337 回視聴</li><li>4 日前/watch?v=eoL3o1LDT8I" rel="nofollow">【Dead by Daylight】コラボ配信！一緒に脱出できるか！！！ - 長さ: 1 時間 21 分。285 回視聴</li><li>5 日前/watch?v=AFr5tXoBP1k" rel="nofollow">【FF7リメイク】FFを全く知らない！初見プレイ！part10 - 長さ: 1 時間 26 分。324 回視聴</li><li>6 日前/watch?v=EhEji1wUDyI" rel="nofollow">【FF7リメイク】FFを全く知らない！初見プレイ！part9 - 長さ: 1 時間 40 分。343 回視聴</li><li>1 週間前/watch?v=6SLriqMSFx8" rel="nofollow">【FF7リメイク】FFを全く知らない！初見プレイ！part8 - 長さ: 2 時間 14 分。366 回視聴</li><li>1 週間前/watch?v=3vgpoJYVIu0" rel="nofollow">【FF7リメイク】FFを全く知らない！初見プレイ！part7 - 長さ: 1 時間 20 分。328 回視聴</li><li>1 週間前/watch?v=bcgWYenvwOA" rel="nofollow">【FF7リメイク】FFを全く知らない！初見プレイ！part6 - 長さ: 1 時間 30 分。439 回視聴</li><li>1 週間前/watch?v=hmVK6C-mLn4" rel="nofollow">【FF7リメイク】FFを全く知らない！初見プレイ！part5 - 長さ: 2 時間 2 分。394 回視聴</li><li>1 週間前/watch?v=6n6bfyJA3IU" rel="nofollow">【FF7リメイク】FFを全く知らない！初見プレイ！part4 - 長さ: 2 時間。442 回視聴</li><li>1 週間前/watch?v=GzfVBlK_bXc" rel="nofollow">【FF7リメイク】FFを全く知らない！チャプター７エアバスターから！part3 - 長さ: 1 時間 34 分。381 回視聴</li><li>2 週間前/watch?v=M7TO7f_QROg" rel="nofollow">【FF7リメイク】FFを全く知らない！初見プレイ！part2 - 長さ: 3 時間 47 分。531 回視聴</li><li>2 週間前/watch?v=127xLm1P5FM" rel="nofollow">【FF7リメイク】FFを全く知らない！初見プレイ！part2 - 長さ: 2 時間 16 分。592 回視聴</li><li>2 週間前/watch?v=awYl0QsEx_U" rel="nofollow">【ポケモン剣盾】仲間大会開催中！種族値350以下ルール！ - 長さ: 1 時間 24 分。382 回視聴</li><li>2 週間前/watch?v=0S2ZT-YTcNI" rel="nofollow">【FF7リメイク】FFを全く知らない！初見プレイ！ - 長さ: 2 時間 50 分。638 回視聴</li><li>2 週間前/watch?v=f6moutsLSAY" rel="nofollow">【ポケモン剣盾】4月11日の仲間大会に向けて！育成します！ - 長さ: 1 時間 31 分。463 回視聴</li><li>2 週間前/watch?v=aPRYjOsgdNU" rel="nofollow">【あつまれどうぶつの森】にー島！目指せ！島評価星５☆ - 長さ: 1 時間 31 分。348 回視聴</li><li>2 週間前/watch?v=aX8VLnsBx_A" rel="nofollow">【あつまれどうぶつの森】何もない空間を一緒に埋めませんか？part2 - 長さ: 1 時間 30 分。405 回視聴</li><li>3 週間前/watch?v=gPHNjYcyXaQ" rel="nofollow">【あつまれどうぶつの森】何もない空間を一緒に埋めませんか？ - 長さ: 1 時間 48 分。443 回視聴</li><li>3 週間前/watch?v=Xb5xKfRze78" rel="nofollow">【あつまれどうぶつの森】整地、離島ツアー、通信、色々します！ - 長さ: 1 時間 28 分。453 回視聴</li><li>3 週間前/watch?v=h_7FZq8wnZg" rel="nofollow">【あつまれどうぶつの森】整地、離島ツアー、通信、色々します！ - 長さ: 1 時間 38 分。536 回視聴</li><li>3 週間前/watch?v=9xeBlQCCafE" rel="nofollow">【あつまれどうぶつの森】イースターグッズコンプまでもう少し！！ - 長さ: 1 時間 28 分。455 回視聴</li><li>3 週間前/watch?v=Rlvv0A1n0HM" rel="nofollow">【あつまれどうぶつの森】4月12日まで！イースターイベント！ - 長さ: 2 時間。273 回視聴</li><li>3 週間前/watch?v=mB-_PjrSj64" rel="nofollow">【あつまれどうぶつの森】4月12日まで！イースターイベント！DIYレシピGET！？ - 長さ: 1 時間 38 分。234 回視聴</li><li>3 週間前/watch?v=J9IbindO2gg" rel="nofollow">【あつまれどうぶつの森】にー島の整地します！ - 長さ: 1 時間 57 分。375 回視聴</li><li>4 週間前/watch?v=YIX8m1c75KY" rel="nofollow">【あつまれどうぶつの森】にー島の整地します！皆の自慢島訪問します！！ - 長さ: 2 時間。335 回視聴</li><li>4 週間前/watch?v=509UcyvNkTs" rel="nofollow">【あつまれどうぶつの森】まったり雑談しながら島の整地します♪傘の池など作ってみたい！ - 長さ: 2 時間 2 分。238 回視聴</li><li>4 週間前content="ありしあちゃんねる">/watch?v=MlUedvZLST4" rel="nofollow">鼻声だけど人狼する - 長さ: 1 時間 45 分。1,930 回視聴</li><li>2 年前/watch?v=pUdtxADoPxs" rel="nofollow">ティーヴィーの生おしゃべりクソ雑談 - 長さ: 1 時間 7 分。1,392 回視聴</li><li>2 年前/watch?v=lir6PY0IV40" rel="nofollow">１日３０分壺枠【2日目】 - 長さ: 59 分。1,331 回視聴</li><li>2 年前/watch?v=nc_m394nrD0" rel="nofollow">PUBG２回だけやる - 長さ: 52 分。1,347 回視聴</li><li>2 年前/watch?v=w3zrnTzZ0ew" rel="nofollow">1日３０分壺枠【１日目】 - 長さ: 32 分。1,275 回視聴</li><li>2 年前/watch?v=fag_KzAGHuk" rel="nofollow">魔界からのビデオレター - 長さ: 38 秒。1,495 回視聴</li><li>2 年前/watch?v=w2nZAvk97_o" rel="nofollow">【PUBG】つんことありしあの「実質スクワッド」【バーチャルYoutuber】 - 長さ: 2 時間 19 分。2,433 回視聴</li><li>2 年前/watch?v=jv_-DCSzG0U" rel="nofollow">地獄の壺 - 長さ: 1 時間 28 分。1,816 回視聴</li><li>2 年前/watch?v=klwfvbWKu9E" rel="nofollow">ありしあのPUBG　時々つんこ - 長さ: 1 時間 38 分。2,234 回視聴</li><li>2 年前/watch?v=ehaXm1p4WdY" rel="nofollow">ありしあの getting over it 心が折れるまで…！ - 長さ: 2 時間 4 分。3,958 回視聴</li><li>2 年前/watch?v=2u6nHmIcy0g" rel="nofollow">バーチャルYoutuberの仁義なき戦い！？ - 長さ: 86 秒。4,787 回視聴</li><li>2 年前/watch?v=hKEbR0hkdoQ" rel="nofollow">ありしあちゃんねるに魔王降臨!? - 長さ: 3 分 41 秒。6,500 回視聴</li><li>2 年前/watch?v=aCOVboE6RXc" rel="nofollow">はじめまして！バーチャルYouTuberのありしあです！ - 長さ: 5 分 10 秒。65,413 回視聴</li><li>2 年前content="いるはーと">/watch?v=wUiBclJs6RI" rel="nofollow">【七十点以下で消滅！！】いるはーとクイズ/Below 70 points and you’re gone!! Ileheart Quizzzz - 長さ: 8 分 3 秒。5,461 回視聴</li><li>1 週間前/watch?v=x1iNVht4h9U" rel="nofollow">【電撃紹回】ありがとう、そして、ありがとう（終） - 長さ: 8 分 58 秒。3,232 回視聴</li><li>3 週間前/watch?v=3sk4rpUwOtI" rel="nofollow">【演技力向上回】イルハートダヨ　ミンナミテネ - 長さ: 6 分 31 秒。2,736 回視聴</li><li>1 か月前/watch?v=Jk1nHzaeSWM" rel="nofollow">【ラストまで残り1回！？】電撃PlayStationから大事なお知らせ - 長さ: 7 分 37 秒。2,538 回視聴</li><li>1 か月前/watch?v=z1EZ_P01srQ" rel="nofollow">【いまじなりーのターン】Death end re;Quest2実況プレイ！『ゲーム音付き』 - 長さ: 13 分 4 秒。2,108 回視聴</li><li>2 か月前/watch?v=CZ4nDYdlDfY" rel="nofollow">【いまじなりーのターン】Death end re;Quest2実況プレイ！【デスリク２】 - 長さ: 13 分 4 秒。1,619 回視聴</li><li>2 か月前/watch?v=FFGwOGr-K48" rel="nofollow">【発売前プレイ】Death end re;Quest2実況プレイ！【デスリク２】 - 長さ: 12 分 12 秒。3,976 回視聴</li><li>2 か月前/watch?v=lxkyIxz3jbU" rel="nofollow">いるはーと『バニラ日和』MV - 長さ: 2 分 45 秒。4,283 回視聴</li><li>2 か月前/watch?v=A-FF-GtuRlI" rel="nofollow">いるはーと最後の挑戦……～いるはーとが本気の○作り宣言～ - 長さ: 8 分 1 秒。3,260 回視聴</li><li>2 か月前/watch?v=2vp81pZflco" rel="nofollow">７色の艶声！？いるはーとアフレコに挑戦！ - 長さ: 7 分 38 秒。2,219 回視聴</li><li>2 か月前/watch?v=1HBNMq_Q2zY" rel="nofollow">【不吉】新しいVTuberが登場でおみくじじじじじじじじじあああああああ！！【大凶】 - 長さ: 11 分 56 秒。11,000 回視聴</li><li>3 か月前/watch?v=-a_HMvmdf1Y" rel="nofollow">秘密の特訓という名の休暇でした。 - 長さ: 111 秒。4,456 回視聴</li><li>4 か月前/watch?v=R-uoqVQ_XLE" rel="nofollow">VVVテューヌにいるはーとが一言物申す！！！！ - 長さ: 3 分 5 秒。10,458 回視聴</li><li>5 か月前/watch?v=fOZIIImIhu8" rel="nofollow">＃∞ いるはーと第一部完結 - 長さ: 7 分 30 秒。7,403 回視聴</li><li>5 か月前/watch?v=iBvdNqPim3M" rel="nofollow">#57　黙って仕事をしただけで闇営業扱いとかヒドイ！！ - 長さ: 5 分 42 秒。4,814 回視聴</li><li>5 か月前/watch?v=SBAR6yBn17A" rel="nofollow">G31　ここ最近のVTuber界で一番かわいい動画だと思う！！！【電撃PS紹回】 - 長さ: 5 分 38 秒。2,359 回視聴</li><li>5 か月前/watch?v=v7JGep6nm-A" rel="nofollow">#56　スタッフがあっためてた企画なんだって……【キズナアイ面接】 - 長さ: 5 分 23 秒。3,073 回視聴</li><li>6 か月前/watch?v=keOuqNk8Gfc" rel="nofollow">#55　本日ご紹介の商品はこちら【非公式ネットいるはーと】 - 長さ: 7 分 32 秒。2,296 回視聴</li><li>6 か月前/watch?v=x4fIWq6YgEw" rel="nofollow">G30　電撃PS”仮”ライターいるはーと【電撃PS紹回】 - 長さ: 5 分 23 秒。1,450 回視聴</li><li>6 か月前/watch?v=8VO_cGUJkII" rel="nofollow">腹筋大生放送！！ - 長さ: 33 分。2,835 回視聴</li><li>7 か月前/watch?v=X8CeQrvky_Q" rel="nofollow">G29　もう非公式とか言わせねぇから【アズールレーンクロスウェーブ】 - 長さ: 15 分。4,963 回視聴</li><li>7 か月前/watch?v=y44YTSAJAFQ" rel="nofollow">第2回　ウチくる？いるはーとのお部屋♡ in cluster - 長さ: 46 分。1,847 回視聴</li><li>7 か月前/watch?v=5z6-UP-x2JY" rel="nofollow">G28　びりびりびりりにびりびりびり【電撃PS紹回】 - 長さ: 5 分 34 秒。2,245 回視聴</li><li>7 か月前/watch?v=FGdRNjRbNfs" rel="nofollow">【歌ってみた】泡沫夢幻/いるはーと【朝ノ瑠璃】 - 長さ: 3 分 15 秒。11,003 回視聴</li><li>8 か月前/watch?v=LvTcjJW8ihw" rel="nofollow">#54　ＺＺＺｚｚｚｚｚｚ - 長さ: 11 時間 13 分。5,126 回視聴</li><li>8 か月前/watch?v=sSJOzA87tLU" rel="nofollow">G27　いるはーとも表紙に載りたい【電撃PS紹回】 - 長さ: 6 分 40 秒。2,101 回視聴</li><li>8 か月前/watch?v=GYnxO2ARVnU" rel="nofollow">ウチくる？いるはーとのお部屋♡ in cluster - 長さ: 15 分。2,221 回視聴</li><li>9 か月前/watch?v=Oxhbz8ptVIk" rel="nofollow">#53　隠し撮りとかホント無理だから！！ - 長さ: 4 分 30 秒。4,414 回視聴</li><li>9 か月前/watch?v=QxJD4nvQnXo" rel="nofollow">G26　【ADV風企画】第1部総集編、最初から最後まで通して見れるお得版！！ - 長さ: 18 分。1,723 回視聴</li><li>9 か月前/watch?v=JyqQILfMjEs" rel="nofollow">G25　【ADV風企画】まさかの第2部がスタート！！ - 長さ: 8 分 36 秒。2,541 回視聴</li><li>9 か月前content="いわながちゃん">/watch?v=Ca0L_cpG9ck" rel="nofollow">【MTGアリーナ】灯争大戦140パック開封するよー！ - 長さ: 1 時間 30 分。17,949 回視聴</li><li>1 年前/watch?v=zianUlsNg-k" rel="nofollow">【ポケカ】ダブルブレイズ2箱（ポケセン限定）開封！！！ - 長さ: 38 分。7,012 回視聴</li><li>1 年前/watch?v=CQ8vZhjmbhI" rel="nofollow">10年以上ぶりのメイプルストーリー助けて - 長さ: 3 時間 53 分。5,566 回視聴</li><li>1 年前/watch?v=DVD0OgRonVE" rel="nofollow">【MTGアリーナ】これ見たら新規でも始められるようになると思うよ！配信 - 長さ: 2 時間 40 分。5,957 回視聴</li><li>1 年前/watch?v=lWDHOaNBhAg" rel="nofollow">【ポケカ】ダークオーダー30袋開封！ - 長さ: 32 分。2,256 回視聴</li><li>1 年前/watch?v=7bwkYZ7c7hI" rel="nofollow">【ポケカ】ウルトラシャイニーを竹花ノートママと2箱開封！ - 長さ: 1 時間 9 分。8,144 回視聴</li><li>1 年前/watch?v=cS5edj2zs6E" rel="nofollow">いわいわ駆け込み寺 - 長さ: 2 時間 37 分。15,472 回視聴</li><li>1 年前/watch?v=hRVlEXFA7YY" rel="nofollow">【PUBG】通称JKM(Japanese Killer Machine) - 長さ: 2 時間 47 分。4,267 回視聴</li><li>1 年前/watch?v=fXVP_4lQK2E" rel="nofollow">【PUBG】1日3回行動いわながちゃん通称JKM(Japanese Killer Machine) - 長さ: 3 時間 39 分。6,954 回視聴</li><li>1 年前/watch?v=PjPf8FwItIY" rel="nofollow">【PUBG】さっきの配信で0キルの悲しみを背負ったためキルするまで終われません。 with にじさんじ一番槍ライトニングゲイボルグ叶 - 長さ: 1 時間 18 分。7,588 回視聴</li><li>1 年前/watch?v=D-08QppT7X4" rel="nofollow">【PUBG】新年初配信を初対面の人とやります。 - 長さ: 2 時間 11 分。9,408 回視聴</li><li>1 年前/watch?v=iQtQL9jU_JI" rel="nofollow">2018年をｻﾞｻﾞｻﾞｰｰｰっと振り返る - 長さ: 1 時間 25 分。8,954 回視聴</li><li>1 年前/watch?v=HV5Ci-Zrc3k" rel="nofollow">ポケモンピカチュウ、ぁやってんねぇ！！！！！！！！！！ - 長さ: 1 時間 38 分。5,424 回視聴</li><li>1 年前/watch?v=DmYZ5j5sLxQ" rel="nofollow">ポケモンピカチュウ、ぁやってんねぇ！！！！！！！！！！ - 長さ: 4 時間 46 分。9,793 回視聴</li><li>1 年前/watch?v=X1iE4GmTDQI" rel="nofollow">ポケモンピカチュウ、ぁやってんねぇ！！！！！！！！！！ - 長さ: 4 時間 22 分。11,677 回視聴</li><li>1 年前/watch?v=M5zCbs3rJQs" rel="nofollow">ポケモンピカチュウ、ぁやってんねぇ！！！！！！！！！！ - 長さ: 5 分 16 秒。4,092 回視聴</li><li>1 年前/watch?v=QOBjGaMnnNM" rel="nofollow">おはようPUBG　ソロ編 - 長さ: 1 時間 15 分。10,074 回視聴</li><li>1 年前/watch?v=jy8uklYNw-s" rel="nofollow">【PUBG】SSD１TB拡張した - 長さ: 2 時間 34 分。6,332 回視聴</li><li>1 年前/watch?v=MLhsbcgzPTQ" rel="nofollow">【PUBG】バーチャルクソカワおじさん革命 - 長さ: 5 時間 31 分。18,776 回視聴</li><li>1 年前/watch?v=wRCO8biYkFw" rel="nofollow">【PUBG】バーチャルクソカワおじさん革命 - 長さ: 54 分。26,870 回視聴</li><li>1 年前/watch?v=ftvFZld03qU" rel="nofollow">こんばんはPUBG - 長さ: 5 時間 9 分。7,761 回視聴</li><li>1 年前/watch?v=2C8J73eTE5g" rel="nofollow">こんばんはPUBG - 長さ: 6 時間 14 分。12,317 回視聴</li><li>1 年前/watch?v=-acB7BlB1Ks" rel="nofollow">こんばんはPUBG【危険な人たちとやります】 - 長さ: 4 時間 9 分。15,824 回視聴</li><li>1 年前/watch?v=ajo5wzEZewU" rel="nofollow">こんばんはPUBG - 長さ: 4 時間 12 分。6,222 回視聴</li><li>1 年前/watch?v=WAlvXhS-lcQ" rel="nofollow">おはようPUBG【これがワイドモニターの力だ】 - 長さ: 5 時間 54 分。25,082 回視聴</li><li>1 年前/watch?v=ygbUDS-7tUE" rel="nofollow">クソザコPUBG（今話題のゲリラ放送） - 長さ: 3 時間 2 分。18,744 回視聴</li><li>1 年前/watch?v=Zm4SY6OciWA" rel="nofollow">クソザコPUBG（今話題のゲリラ放送） - 長さ: 3 時間。8,472 回視聴</li><li>2 年前content="【VRアイドル】えのぐチャンネル">/watch?v=Y-QU416FFp0" rel="nofollow">Happy Birthday あんず！【#鈴木あんず18歳誕生祭生放送 】 - 長さ: 1 時間 7 分。3,063 回視聴</li><li>3 日前/watch?v=I14JkJakGZw" rel="nofollow">えのぐ - スタートライン [Official Music Video] - 長さ: 4 分 19 秒。94,308 回視聴</li><li>2 週間前/watch?v=o8oGxLa6c3Y" rel="nofollow">鈴木あんずのゆるふわバイオハザード4 - 長さ: 57 分。2,495 回視聴</li><li>1 か月前/watch?v=G407YHJSH_8" rel="nofollow">【夏目ハル】はるらじ♪vol.7 - 長さ: 53 分。944 回視聴</li><li>1 か月前/watch?v=ysgVYWfDZoo" rel="nofollow">【#えのぐ】祝！結成2周年記念生放送！ - 長さ: 52 分。2,049 回視聴</li><li>1 か月前/watch?v=QsZvmHgcPmQ" rel="nofollow">【あつ森 #3】たまき、釣り師になる - 長さ: 1 時間 54 分。1,263 回視聴</li><li>1 か月前/watch?v=CyY2lgMu42k" rel="nofollow">【あつ森 #2】　ハルを待つたまきちとしずお 〜かみつき亀のあんずを添えて〜 - 長さ: 1 時間 52 分。1,668 回視聴</li><li>1 か月前/watch?v=rvfNDwnPvQY" rel="nofollow">【あつ森】もしも無人島にたった一つだけ持っていくものが白藤環だったら - 長さ: 2 時間。3,248 回視聴</li><li>1 か月前/watch?v=0m_2sw0eEfo" rel="nofollow">鈴木あんずのほのぼのバイオハザード4 - 長さ: 1 時間。2,933 回視聴</li><li>1 か月前/watch?v=t3yHQOEX3z8" rel="nofollow">【夏目ハル】はるらじ♪vol.6 - 長さ: 1 時間 2 分。1,759 回視聴</li><li>1 か月前/watch?v=KbrqdVPW8bg" rel="nofollow">【ン“ン”ン“】ヒメとヒメとヒメとカメのなりきりマリオパーティ生配信【ン“ン”ン“ン”ン“】#えのぐ - 長さ: 3 時間 24 分。5,189 回視聴</li><li>1 か月前/watch?v=pneXH8lRA0w" rel="nofollow">【生放送】Radioフライハイト【シャッフル企画】 - 長さ: 1 時間 14 分。2,925 回視聴</li><li>1 か月前/watch?v=ixsvEXeJbck" rel="nofollow">【ラジオ】個人ファンクラブスタート！fanicon開設カウントダウン配信！【#えのぐ 】 - 長さ: 51 分。2,934 回視聴</li><li>2 か月前/watch?v=sZ-IyYEfhgc" rel="nofollow">【ライブ感想】enogu 2nd Anniversary Live -Colors- 応援ありがとうございます！【#えのぐ 】 - 長さ: 59 分。4,145 回視聴</li><li>2 か月前/watch?v=2VdBsB4c3oE" rel="nofollow">【#えのぐ2周年ライブ 】enogu 2nd Anniversary Live -Colors-【IN ヒューリックホール東京】 - 長さ: 1 時間 48 分。18,945 回視聴</li><li>2 か月前/watch?v=WVDcFds5TxE" rel="nofollow">【夏目ハル】はるらじ vol.5 - 長さ: 54 分。1,553 回視聴</li><li>3 か月前/watch?v=RJq9rEVrfAw" rel="nofollow">えのぐ - 栞 [Official Music Video] - 長さ: 4 分 6 秒。10,769 回視聴</li><li>3 か月前/watch?v=tMlnkXjIvz0" rel="nofollow">白藤環ののんびりブラック牧場ライフ - 長さ: 1 時間 18 分。2,298 回視聴</li><li>3 か月前/watch?v=1RhtuI1GjgY" rel="nofollow">【夏目ハル】はるらじ♪ vol.4 - 長さ: 59 分。1,482 回視聴</li><li>3 か月前/watch?v=749Li5htLbI" rel="nofollow">Re：トロとあんず - 長さ: 1 時間。2,032 回視聴</li><li>3 か月前/watch?v=5OZd9VpD15Y" rel="nofollow">はるらじ -ソロ曲公開記念回- - 長さ: 33 分。1,631 回視聴</li><li>3 か月前/watch?v=xonMYC964QU" rel="nofollow">Haru - City lights dancer【Full ver.】 - 長さ: 3 分 21 秒。9,207 回視聴</li><li>3 か月前/watch?v=i-wdLYHzDx4" rel="nofollow">【お絵描き】鈴木あんずはお絵描きしたい。 - 長さ: 1 時間 2 分。2,565 回視聴</li><li>3 か月前/watch?v=DaSXA1tHUJk" rel="nofollow">【雑談】白藤環はお話ししたい！！！！！！！！！！！！！！！！ - 長さ: 2 時間。3,353 回視聴</li><li>3 か月前/watch?v=l8EEXI8_tVE" rel="nofollow">【新年初配信】あけましておめでとうございます！！！【えのぐ】 - 長さ: 30 分。3,416 回視聴</li><li>3 か月前/watch?v=EwRgsqIfq-o" rel="nofollow">【年末特番】岩本町芸能社対抗2019年最強コンビ決定戦 - 長さ: 42 分。7,143 回視聴</li><li>3 か月前/watch?v=U40NFKDOFwc" rel="nofollow">【生放送】聖なるえのぐと過ごすクリスマス真っ昼間 - 長さ: 1 時間。5,568 回視聴</li><li>4 か月前/watch?v=YlpiFM5AmUc" rel="nofollow">【DbD】脱出じゃあああああああ！！！ - 長さ: 46 分。2,241 回視聴</li><li>4 か月前/watch?v=dU6jko6qJy0" rel="nofollow">目を覚ましたら知らん場所にいたえのぐの図。 - 長さ: 2 時間 3 分。3,607 回視聴</li><li>4 か月前/watch?v=_nqIo5FpVnk" rel="nofollow">伝われ！！ひなおとあんずのお絵かきしりとり - 長さ: 1 時間 3 分。2,225 回視聴</li><li>4 か月前`
// newrs2.js

let val0 = R.split('content')(txt);



val0 = R.remove(0, 1, val0);


const makeOneVideoDetail = (param) => {
	// let res0 = `'PsczGM_LvCc" rel="nofollow【新作MMORPG】ブループロトコルに行くわよー^^ - 長さ: 2 時間 24 分。3,635 回視聴</li><li>5 日前', `.split('rel="nofollow');
	// let res0 = 'GEAvA7Mx5lU" rel="nofollow誕生日だし飲酒しながら壺男して凸待ちでもしない？ - 長さ: 3 時間 10 分。5,910 回視聴</li><li>6 日前'
	let res0 = param.split('rel="nofollow');
	let res1 = res0[1].split(' - 長さ: ');
	let res2 = res1[1].split('。');
	let res3 = res2[1].split('</li><li>');
	let res4 = res3[1];
	const res = R.flatten([res0[0], res1[0], res2[0], res3[0], res4 ]);
	// console.log(res);
	return res;
}

const makeList = (ELM) => {
	let val1 = val0[1];
	// let val1 = ELM;
	val1 = val1.split('"\>');
	const name = val1[0]
	val1 = R.remove(0, 1, val1);
	let val2 = R.remove(0, 1, R.flatten(val1).join("").split("/watch?v="))
	return val2.map(V => makeOneVideoDetail(V));
	// return res;
	// console.log(val2)
}

let result = val0.map(V => { return makeList(V) });
console.log(
	
)

var filesys = require('fs');
filesys.writeFile('test.txt', 
	result.toString()
, 'utf8', function (err) { });


// const makeAVTList = (VTArray) =>{
	// let val1 = R.split('\n')(val0[0]);

// val1 = R.remove(0, 1, val1);

	// let val2_0 = R.pipe(R.map(V => { return R.match(/.+rel="nofollow">/g, V) }), R.reject(V => R.isEmpty(V)), R.unnest )(val1);

	// let val2_1 = R.pipe(R.map(V => { return R.match(/rel="nofollow">.*- 長さ: /g, V) }), R.reject(V => R.isEmpty(V)), R.unnest)(val1);
	// let val2_2 = R.pipe(R.map(V => { return R.match(/- 長さ: .*$/g, V) }), R.reject(V => R.isEmpty(V)), R.unnest)(val1);;
	// let val2_3 = R.pipe(R.map(V => { return R.match(/^.*\<\/li\>/g, V) }), R.reject(V => R.isEmpty(V)), R.unnest)(val1);;
	// let val2_4 = R.pipe(R.map(V => { return R.match(/\<li\>.*$/g, V) }), R.reject(V => R.isEmpty(V)), R.unnest)(val1);;
	// let sample = R.pipe(R.zip(val2_0), R.zip(val2_2), R.zip(val2_3), R.zip(val2_4), R.flatten, R.aperture(5))(val2_1);
	// let sample = R.pipe(R.flatten, R.aperture(5) )(   val2_0.concat(val2_1, val2_2, val2_3, val2_4)   )
	// return sample;
// }



// let res = val0.map(V => { 
// 	return makeAVTList(V)
// })


	
// console.log(
// 	res[0]
// 	// res[0][0]
// )

// let foo = R.filter(V => V % 50 === 0, R.range(0, 500));  //=> [50, 51, 52]
// // console.table(foo )
// data = [
// 	[0, 1],
// 	[3, 4, "gray"],
// 	[8, 8, "pink"]
// ];

// console.table(data);

// R.prop('x', {x: 100}); //=> 100
// R.prop('x', {}); //=> undefined
// R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
// R.compose(R.inc, R.prop(0))([0,1])

// const double = x => [x[0]+1 ,x[1] ,x[2]];

// R.map(double, [ [0,1],[10,20] ] );
// R.map(double, data );
// R.reject(R.isNil)([1, 1, undefined]);


// // const double = x => [x[0] + 1, x[1], x[2]];
// const res = R.pipe(
// 	R.map(double),
// 	R.map(R.reject(R.isNil))
// )(data)

// res

// let allZeroToNine = R.xprod(R.range(0, 10), R.range(0, 10));
// let allZeroToNineAndWhite = R.map(R.insert(-1, 'white'))(allZeroToNine);
// R.insert(-1, 'white', [1,2,3,4]); //=> [1,2,'x',3,4]


// R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]


// R.reject(R.isNil)([1, 1, undefined]);


// console.log(res);

// const res1 = [...Array(10000000).keys()].map(function (value) {
// 	return String.fromCharCode(value)
// }).filter(function (value) {
// 	return /\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu.test(value);
// })
// res1


// // （1）ワーカーの実装チェック
// if (window.Worker) {
// 	// Web Workersに関する処理を記述
// 	document.getElementById("button").addEventListener("click", send, false);
// 	var worker = new Worker("multiple.js");
// } else {
// 	window.alert("このブラウザではWeb Workersは利用できません");
// }

// function send() {
// 	var total = document.getElementById("inputtotalnum").value;
// 	var num = document.getElementById("num").value;
// 	// （2）ワーカーに入力値を送る
// 	worker.postMessage({ "total": total, "num": num });
// }

// // （3）ワーカーからのメッセージ取得時の処理
// worker.onmessage = function (event) {
// 	document.getElementById("disp").innerHTML = event.data;
// }
