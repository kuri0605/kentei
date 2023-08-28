//出題数を設定
var num;
//今何問目
var now;
//選んだレベルは？
var l;
//級ごとの出題数
var q_num = new Array();
q_num=[5,10,20]

//問題カウンタ
var cnt=0;

//正解数を入れる変数
var pnt=0;

//クイズの問題を入れる配列
var quiz = new Array();
//初級問題、プログラムの問題で写真の選択肢が作れません...
quiz[0]=[
["「芋づる式」の意味は？","次々と関連するものが出ること","丁寧に手間暇かけて育てること","むやみやたらに物事に取り組むこと","あえて放任して育てること",1,"一つのつるを引いてたくさんの芋が取れる様子に由来します。ちなみに、さつまいもの植物体には完全に毒がないので、つるを佃煮などにして食べることができます。"],
["「甘藷先生」として知られる、救荒作物としてさつまいもの栽培を始めた人物は？","平賀源内","伊能忠敬","青木昆陽","杉下玄白",3,"あおきこんよう、大岡越前に推挙され、徳川吉宗に仕えた、江戸時代中期の儒学者、蘭学者です。九十九里と幕張でさつまいもの試作を行いました。"],//ちょっと問題文と解説を改変しました
["さつまいもは植物のどの部位？","根","茎","葉","花",1,"塊根と呼ばれる、根が養分を蓄えて肥大した構造です。じゃがいも、さといもの芋にあたる部位は塊茎という構造で、形態的に茎に分類されます。"],
["いもの漢字ではないものは？","薯","蔗","藷","芋",2,"いもと読む漢字は、芋・薯・藷・蕷と様々ありますが、特にさつまいもを表すのは「藷」です。「薯」はじゃがいも、「芋」はさといも、「蕷」はやまいもを表します。"], //加筆。蔗ってサトウキビだよね「蔗」はサトウキビ。「甘蔗」と書いて、「甘藷」＝サツマイモと同じ「かんしょ」と読みます。
["さつまいもに多く含まれ整腸作用のある食品成分といえば？","たんぱく質","食物繊維","脂質","炭水化物",2,"食物繊維は人の消化酵素では消化されずに、小腸を通過して大腸まで達します。便の体積を増やす、腸内細菌に影響を与えるなどして整腸作用を示します。"],
["さつまいもの別称は？","馬鈴薯","たろいも","甘藷","ごしょいも",3,"その名の通り、甘い芋です。英語でのスイートポテトという呼び方と同じですね。ちなみに馬鈴薯はじゃがいもで馬の鈴に似ていることからと言われています。"]
];
//中級問題
quiz[1]=[
["徳島県で多く栽培されているさつまいもといえば？","安納芋","べにはるか","ベニアズマ","なると金時",4,"高系14号の改良品種で、四国・徳島県の鳴門市で主に栽培されています。関西において人気で、「里むすめ」や「甘姫」など多くのブランドがあります。"],//foodslink参考に改変 鳴門海峡、旧吉野川、吉野川などの砂地で作られており、
["「芋食うて屁をこくようなこと」の意味は？","自然の摂理","抗えない欲求","簡単なこと","破滅的な現象",3,"誰にでもできる平凡なこと、珍しくもないことの例えです。さつまいもを食べるとおならが出やすくなる理由は諸説ありますが、デンプンが腸内細菌に分解されるからという説があります。"],
["さつまいもは何科の植物？","ヒルガオ科","サトイモ科","ナス科","バラ科",1,"花言葉は「乙女の純情」。アサガオのような花を咲かせます。品種によって差はありますが、日本の気候だと花は咲きにくいため、品種改良のための開花は接ぎ木を用いて生じさせます。"],
["ヨーロッパにさつまいもを伝えた人物は？","マゼラン","ヴァスコ・ダ・ガマ","アメリゴ・ヴェスプッチ","コロンブス",4,"イタリア出身の探検家で、キリスト教徒のヨーロッパ人としては初めてアメリカに到達しました。1492年に、南米北部地域でさつまいもに出会い、ヨーロッパに持ち帰ったと言われています。"],//コロンブスの情報増やしました
["さつまいもの原産地は？","ヨーロッパ","中央アメリカ","オーストラリア","アフリカ",2,"現在のメキシコやペルーがあるところで誕生しました。しかし、詳しい地域までは特定できておらず、メキシコとペルーのどちらが起源か議論が続いています。"],
["焼き芋加熱時にデンプンを糖に変え、甘くする酵素は？","キナーゼ","トリプシン","ペプシン","アミラーゼ",4,"さつまいもに含まれるデンプンは60~75℃以上で固体から糊状になります。そこにβアミラーゼが反応し、デンプンからマルトース(麦芽糖)を生成し、さつまいもを甘くします。"],//ちょっとわかりやすい書き方にしました
["さつまいもの生産量、日本で2番目の地域は？","北海道","茨城県","徳島県","宮崎県",2,"焼酎などの原料用が多い1位の鹿児島県とは対照的に、焼き芋に使用する青果用のいもの生産が多く、関東のさつまいも文化を支えています。"],//1文増やしました令和元年度のサツマイモ国内生産量は748,700トン、県別では鹿児島県(261,000トン)、茨城県(168,100トン)、千葉県(93,700トン)、宮崎県(80,600トン)と続いて、この4県で全体の8割を占めます。
["1987年に川越いも友の会が宣言した「さつまいもの日」は何月何日？","3月21日","10月13日","11月22日","12月3日",2,"江戸時代後半に「十三里」、「栗（九里）より（＋四里）うまい十三里」を売り出し文句にして焼き芋が売り出されていたことと、10月がさつまいもの旬にあたることに由来します。"],
//ちょっとだけ解説を加筆　江戸時代後半、江戸では焼き芋屋さんが繁盛していました。売り出し文句は「十三里」、「栗（九里）より（＋四里）うまい十三里」とさつまいものことを洒落て名付けました。このことから、サツマイモの旬にあたる10月の13日を「サツマイモの日」と定めました。
["長崎県五島列島の郷土料理である、さつまいもを混ぜ込んだ餅は？","たがね餅","五平餅","甘古呂餅","イノコ餅",3,"かんころ餅、と読みます。さつまいもを薄く輪切りにし、湯がいて天日で干し上げた「甘古呂」を、もち米と一緒に蒸して搗き合わせ、餅菓子に仕上げたものです。もともとは貴重なもち米の嵩増しを兼ねた保存食として作られましたが、現在は素朴な風味が愛されています。"],
//ちょっと加筆　かんころ餅、と読みます。サツマイモを薄く輪切りにし、湯がいて天日で干し上げた「甘古呂」を、もち米と一緒に蒸して搗き合わせ、餅菓子に仕上げたものです。もともとは貴重なもち米の嵩増しを兼ねた保存食として作られましたが、現在は素朴な風味が愛されています。
//["「芋の煮えたも御存じない」はどのような人に使う言葉？","世間知らずの人","幼い人","考えが浅い人","鈍感な人",1,"芋が煮えたかどうかという、日常生活の些細なことも判断できない世間知らずの無知を笑う言葉です。江戸いろはかるたの「ゐ」にあたる、江戸時代からある慣用句です。"],
["干し芋の白い粉は何？","コラーゲン","カビ","グルタミン酸","マルトース",4,"熟成の過程でさつまいもから出てくる糖分です。酵素によりデンプンから変化した糖分が、乾燥することで表面で粉をふきます。断じてカビではありません。"],
["芋焼酎に多く使用する品種は？","ベニアズマ","ハマコマチ","オキコガネ","コガネセンガン",4,"坂井健吉氏を中心に育成され、1966年に品種として登録されました。デンプン含有量が多く、収穫量も多いため焼酎の原料に向いています。芋けんぴの材料としても有名です。"],//ちょっと加筆　鹿児島県で主に育成される品種です。坂井健吉氏を中心に育成され、1966年に品種として登録されました。アルコールの原料となるデンプンの含有量が多く、収穫量も多いため焼酎の原料に向いています。芋けんぴの材料としても有名です。
["2010年に品種登録され、「ねっとり系」という焼き芋の新ジャンルを開拓した人気品種の正式名称は？","ベニアズマ","べにはるか","高系14号","ひめあやか",2,"食味や外観が他より「はるか」に優れることから。焼き芋ブームの火付け役で、「紅天使」、「甘太くん」、「紅優甘」など、日本各地に様々なブランドがあります。"],
["さつまいもの生産量が最も多い国は？","タンザニア","メキシコ","インド","中国",4,"世界全体の生産量の7~8割が中国で、大部分は加工用として使用されます。さつまいもは中国の食文化にも取り入れられ、春雨や飴煮などが有名です。"],//加筆
["数は少ないが大きい芋ができやすいと考えられている苗の植え方は？","垂直植え","水平植え","船底植え","斜め植え",1,"垂直植えは苗を地面に対して垂直に植えるのに対し、その他の植え方は地面に対して水平に植えます。地中に存在する節の数がさつまいもの数・重さに影響します。"],
["さつまいものつるばかり伸びる状況を何という？","つるボケ","つるマヌケ","つるアホ","つるバカ",1,"特に窒素肥料のあげすぎはつるボケの原因と言われています。そのため、さつまいもの肥料には、窒素の割合を減らした配合が使われます。"]
];
//上級問題
quiz[2]=[
["芋けんぴの名前の由来は？","発祥地域の名前","発明者の名前","形の似たお菓子","形の似た道具",3,"高知県に平安時代から伝わる郷土菓子に小麦粉を使った干菓子のけんぴ（ケンピ、堅干）があり、形状・質感が似ていることに由来します。"],
["韓国語でのさつまいも「고구마」（コグマ）の別の意味は？","もどかしい","たくさん","楽ちんだ","好ましい",1,"水なしでほくほくのさつまいもを食べすぎると、口の中がぱさぱさになるし、詰まって苦しい。だからすごくもどかしいときに「さつまいも100個食べた気分」と言うらしいです。"],
["生のさつまいもを切ったときに出る白い乳液の主成分は？","カロテン","ヤラピン","ソラニン","アントシアニン",2,"16世紀のヨーロッパでは生薬として便秘解消に活用されていました。皮の表面に付着していることのある黒い物体はヤラピンが皮のポリフェノールと反応して生じます。"],
//ちょっと加筆　食品としてはサツマイモだけに含まれる成分で整腸作用があり、16世紀のヨーロッパでは生薬として便秘解消に活用されていました。皮の表面に黒い物体が付着していることがありますが、これはヤラピンが空気に触れ、皮のポリフェノールと反応して黒ずんだものです。
["川越の甘藷先生とも呼ばれる、さつまいもに従来の数倍の増収をもたらした農業技術者は？","灰沢仁兵衛","黒沢仁兵衛","矢沢仁兵衛","赤沢仁兵衛",4,"あかざわにへい、赤沢式栽培法の開発で知られ、さつまいもに従来の数倍の増収をもたらした農業技術者です。高畝や堆肥の導入などが特徴である赤沢式栽培法は、現在も継承されています。"],//加筆・改変
["さつまいもの島としても知られ、「日本甘藷栽培初地之碑」がある島は？","対馬","奄美大島","種子島","壱岐島",3,"1698年、当時の島主であった種子島久基が琉球から取り寄せたのが始まりです。日本甘藷栽培初地之碑は、さつまいもの試作がなされた種子島西之表市下石寺地区に建っています。"],//加筆　1698年に、当時の島主であった種子島久基が救荒作物として琉球から取り寄せたのが始まりです。日本甘藷栽培初地之碑は、はじめてサツマイモの試作がなされた種子島西之表市下石寺地区に建っています。
["「芋蛸南京」の意味は？","女性の好むもの","子供の好むもの","老人の好むもの","南京の名物",1,"南京はカボチャの異称で女性に好まれるものをあげています。他にも芝居こんにゃく芋南京、芋蛸長電話などといった類似した表現があります。"],
["さつまいもの学名は？","Manihot esculenta","Solanum tuberosum","Colocasia esculenta","Ipomoea batatas",4,"「Ipomoea」は芋虫を意味する「ips」と似たという意味の「homoios」からなります。「batatas」自体もさつまいものことを指します。"],
["干し芋の発祥地は？","茨城県","千葉県","静岡県","山梨県",3,"遭難した薩摩の船を大澤権右衛門が助けたことをきっかけに、静岡県にさつまいもがもたらされ、栗林庄蔵という人が煮切り干し法という手法を発明したといわれています。その後、茨城にもたらされ普及します。"],
//加筆　食味や外観が既存品種よりも「はるか」に優れることから、2010年3月に品種登録されました。糖度がとても高い「ねっとり系」という焼き芋の新ジャンルを開拓し、焼き芋ブームを巻き起こしました。地域を選ばず栽培が可能であり、日本各地にブランドがあります。
["さつまいもを初めて中国から琉球に持ち帰った人物は?","羽地朝秀","野國總管","程順則","瀬長亀次郎 ",2,"のぐにそうかん、1605年に中国からさつまいもを持ち帰ったと言われています。貧困にあえぐ人民を救った業績から「芋大主」（ウムウフシュ）と呼ばれています。"],
["干しいもが干している途中に黒くなってしまう現象を何と呼ぶ？","アオタ","クロヌケ","クロタ","クロクマ",3,"クロタは土壌中の窒素過多によって起こり、味が落ちてしまいます。干し芋の障害としては、ほかにも、成長時の水分不足により白く粉っぽくなってしまうシロタがあります。"],
["さつまいもを接ぎ木できるのは？","ツルムラサキ","アサガオ","ウツボカズラ","クズ",2,"さつまいもとアサガオは同じヒルガオ科であり、接ぎ木が可能です。さつまいもは接ぎ木をすることで花が咲きやすくなるため、品種改良に利用されています。"],
["タンザニアで作られるさつまいもの保存食といえば？","マトボルワ","シュクメルリ","アスピック","バインセオ",1,"マトボルワは干し芋のような保存食で、タンザニアはさつまいも栽培に適した気候を持つため、さつまいも生産が盛んです。"],
["この中で、さつまいもの伝播がもっとも早かった地域は？","東アジア","ポリネシア","ヨーロッパ","アフリカ",2,"太平洋諸島にはコロンブス以前から原産地のさつまいもが伝播していました。ルートや時期は諸説ありますが、約1000年前にペルーからポリネシアに広がったという説があります。"],//太平洋諸島は、コロンブス以前からヨーロッパを経由しないルートでサツマイモが伝播していました。伝播のルートや時期は諸説ありますが、約1000年前にペルーのサツマイモがポリネシアに広がったという説があります。
["さつまいもの祖先種を発見した植物学者は？","牧野富太郎","高峰譲吉","中尾佐助","西山市三",4,"にしやまいちぞう、形態や遺伝的形質、染色体の数などから研究が行われ、1955年メキシコの野生種「トリフィーダ」が祖先種であると解明されました。"],
["「九州121号」に「春こがね」を交配させ育成された芋で2010年3月に品種登録された品種は？","べにはるか","ベニキララ","ベニアズマ","ふくむらさき",1,"九州沖縄農業研究センターで外観が優れる「九州121号」に皮色や食味が優れる「春こがね」を交配させ育成された芋で2010年3月に品種登録された品種です。"],
["2021年に品種登録された「九系255」と「パープルスイートロード」を交配させたしっとりとした肉質で食味の良い紫カンショ品種は？","ムラサキマサリ","あかねのみのり","ふくむらさき","花魁",3,"食味が優れる黄肉色さつまいも系統「九系255」を母、「パープルスイートロード」を父とし、交配してできた品種です。紫色が「パープルスイートロード」よりも強く、やや粘質の食感が特徴です。"],
["さらさらとした雪のような口どけで、上品な食感があり、冷涼地の雪国でも美しく育ち、広域に普及することを願って名付けられた新品種は？","あきたこまち","ゆきほまれ","ゆきこまち","ユキワラシ",3,"さらさらとした雪のような口どけで、上品な食感があり、日本各地に伝説を残す小野小町のイメージにあやかり、冷涼地の雪国でも美しく育ち、広域に普及することを願って名付けられました。"],
["「べにはるか」を母、「作系22」を父とする交配組合せから選抜した品種でカロテンを含有するため、いもの肉色が橙色を帯びる品種は？","ジェイレッド","あかねのみのり","はまこまち","たまあかね",2,"いもの外観が良く食味が優れる「べにはるか」を母、カロテンを含有し多収性の「作系22」を父とする交配組合せから選抜した品種でカロテンを含有するため、いもの肉色が橙色を帯び、サツマイモチップや蒸切干への加工に適する品種です。"],
["「からゆたか」を母、「谷05100‐172」を父として交配してできた低温糊化性でん粉を持つ2021年に品種登録出願された新品種は？","あまはづき","べにはるか","ふくむらさき","ひめあやか",1,"早期肥大性でごく多収の「からゆたか」を母、早掘り栽培でも多収の「谷05100‐172」を父とし、交配してできた低温糊化性でん粉を持つ品種です。糖度が高く、ねっとりして食味が良く、早掘りでもその特長が際立っています。"],
["カネコ種苗で開発されたさつまいもで、｢春こがね｣に｢べにまさり｣を交配させて生まれた実生を育成したとされた品種は？","クイックスイート","ハロウィンスイート","べにはるか","シルクスイート",4,"カネコ種苗で開発され、2012年から種苗の販売が開始されました。この品種は｢春こがね｣に｢べにまさり｣を交配させて生まれた実生を育成したとされた品種です。"],
["三好アグリテックにより開発された高系14号から派生した品種で、果肉が綺麗なオレンジ色をしている品種の正式名称は？","ハロウィンスウィート","ハロウィンスイート","ハロウィーンスイート","ハローウィーンスイート",1,"三好アグリテックにより開発された高系14号から派生した品種で、果肉が綺麗なオレンジ色をしている品種です。"],
["鹿系7-120とL-4-5を親に持つ、多収品種で、ベニアズマの交配親ともなった品種は？","高系14号","コガネセンガン","からゆたか","オキコガネ",2,"鹿系7-120とL-4-5を親に持つ、多収品種で、ベニアズマの交配親ともなっています。実は国内生産量一位であり、芋けんぴに代表されるお菓子や焼酎など様々な用途で活躍しています。"],
["「ベニワセ」を母、「サツマヒカリ」を父とする交配組合せから選抜した品種で2005年に品種登録された甘くない品種は？","コガネセンガン","しろほろり","オキコガネ","くりこがね",3,"調理用多収品種の育成を目的として、早掘に向く「ベニワセ」を母、低糖で外観が優れる「サツマヒカリ」を父とする交配組合せから選抜した品種です。甘さが少なく、コロッケなどの調理用に向くとされています。"],
["次のうち、茎葉利用を目的とする品種は？","べにはるか","コガネセンガン","すいおう","すずほっくり",3,"「すいおう」は葉や茎を利用する茎葉利用品種です。地上部は繰返し収穫が可能であり、多収です。"],
["次のうち、育成されたのが最も昔の品種は？","沖縄100号","高系14号","ベニアズマ","コガネセンガン",1,"「沖縄100号」は昭和9年にリリースされ、戦時中の日本の食糧事情を支えた品種で、選択肢の中では最も古い品種となります。"],
["「関東120号」を母、「クイックスイート」を父とする交配組合せから選抜した品種で2012年に品種登録出願された品種は？","泉13号","ほしこがね","たまゆたか","からゆたか",2,"やや多収でいもの外観が優れる「関東120号」を母、でん粉の糊化温度が低い「クイックスイート」を父とする交配組合せから選抜した品種です。シロタ障害の発生がほぼみられず、蒸切干の外観・食味が良好な蒸切干加工用品種です。"],
["アントシアニン色素を含有する「九州119号」を母本とし、複数品種の混合花粉による多交配から選抜した紫さつまいも系統は？","べにはるか","ムラサキマサリ","デストロイヤー","パープルスイートロード",4,"各種の機能性に富むアントシアニン色素を含有し、なおかつ外観品質や食味、病害虫抵抗性に優れた青果用かんしょ品種の育成を目的に、アントシアニン色素を含有する「九州119号」を母本とし、複数品種の混合花粉による多交配から選抜した系統です。"],
["じゃがいもやさつまいもなどの芋類を研究する国際研究機関である国際ポテトセンターのアルファベットの略称は？","IITA","CIP","WFP","IRRI",2,"国際ポテトセンター（Centro Internacional de la Papa、CIP）はじゃがいもやさつまいもなどの芋類を研究する国際研究機関です。"],
["平成30年に初めて発生が確認され、近年九州地方を中心に拡大し、さつまいも生産に大きな打撃を与えている植物病は？","サツマイモ基腐病","ネグサレセンチュウ","つる割病","サツマイモ斑紋モザイクウイルス強毒系統",1,"平成30年に初めて発生が確認されてから、九州地方を中心に拡大し、近年では関東地方などでも発生が確認されいる植物病であり、さつまいも生産に大きな打撃を与えています。"],
["次のうち、さつまいもを長期貯蔵するために施す処理は？","MCP1処理","キュアリング処理","ジベレリン処理","低温処理",2,"収穫作業などで表面についた傷を治して菌の侵入を防ぐ技術です。さつまいもを高温・高湿（温度：約35℃、湿度：90％以上）の部屋に3～4日間置くことで、イモの傷口にコルク層を作り、傷口からの腐敗菌の侵入を防いで、貯蔵中の腐敗を防止します。"],
["1816年に出版されたさつまいも料理をまとめた本の名前は？","甘藷全書","甘藷要術","甘藷百珍","甘藷之書",3,"珍古楼主人という人が書いた書物で123種ものさつまいも料理が「奇品」・「尋常品」・「妙品」・「絶品」の4つに分類され、収められています。"]
];

//出題問題を入れる配列
var ques=new Array();

//称号を入れる配列
var posi=new Array();
posi[0]=["ジュニア愛好家","ビギナー愛好家","エリート愛好家","ベテラン愛好家"];
posi[1]=["ライトマニア","ノーマルマニア","ヘビーマニア","レジェンドマニア"];
posi[2]=["さつまいも研究員","さつまいも准教授","さつまいも教授","さつまいも名誉教授"];
//初級["さつまいも素人","さつまいも入門者","さつまいも愛好家","さつまいも玄人"];["さつまいも社員","さつまいも部長","さつまいも専務","さつまいも代表取締役"];
//中級["信者","修道士","司祭","教皇"]["薩摩芋門天","薩摩芋明王","薩摩芋菩薩","薩摩芋如来"];
//さつまいもから見た立ち位置ver.
//posi[0]=["の知人","の友人","の恋人","の家族"];
//posi[1]=["の身代わり","の代理人","の化身","そのもの"];
//posi[2]=["の妖怪","の妖精","の天使","の神様"];
//そのた雑多な候補[さつまいもマスター、さつまいもチャンプ、さつまいもルーキー、さつまいもファン、さつまいもセミプロ、さつまいもプロ、さつまいもアマ、イモフェッショナル、さつまいもエンペラー、さつまいも将軍、さつまいも仙人]
//後は、軍隊とかの階級でしょうか

//関数 startQuiz の定義
function startQuiz(n){
    l = n;
    //レベルごとの出題数
    num=q_num[n];
    //出題問題を作成、出題順をランダムに
    for(var i=0; i<num; i++){
        var r=Math.floor(Math.random()*quiz[n].length);
        ques[i]=quiz[n].splice(r,1)[0];
    }
    now=cnt+1;
    //ques = quiz[n]
    //問題を表示
    document.getElementById("sentaku").style.display="none";
    document.getElementById("mondai").style.display="block";
    document.getElementById("toi").innerHTML=now+"問目:"+ques[cnt][0];
    document.getElementById('quiz1').nextSibling.nodeValue=ques[cnt][1];
    document.getElementById('quiz2').nextSibling.nodeValue=ques[cnt][2];
    document.getElementById('quiz3').nextSibling.nodeValue=ques[cnt][3];
    document.getElementById('quiz4').nextSibling.nodeValue=ques[cnt][4];
}

//関数 judgeQuiz の定義
function judgeQuiz(){
    var s;
    var a;
    //正解はこちら
    a=ques[cnt][5];
    //答えを取得
    quiz = document.getElementById('quiz');
    if(quiz.answer.value.length==0){
        alert('回答を入力してください');
    }else{
        //解答・解説を表示
        document.getElementById("mondai").style.display="none";
        document.getElementById("kaitou").style.display="block";
        if(quiz.answer.value==a){
            s="正解<br>"+ques[cnt][a];
            pnt++;
        }else{
            s="不正解<br> 正解→" +ques[cnt][a];
        }
        document.getElementById("kotae").innerHTML=s;
        s=ques[cnt][6];
        document.getElementById("kaisetu").innerHTML=s;
    }
}

//関数　nextQuiz の定義
function nextQuiz(){
    if(cnt<num-1){
        cnt++;
        now=cnt+1
        //問題を表示
        document.getElementById("kaitou").style.display="none";
        document.getElementById("mondai").style.display="block";
        document.getElementById("toi").innerHTML=now+"問目:"+ques[cnt][0];
        document.getElementById('quiz1').nextSibling.nodeValue=ques[cnt][1];
        document.getElementById('quiz2').nextSibling.nodeValue=ques[cnt][2];
        document.getElementById('quiz3').nextSibling.nodeValue=ques[cnt][3];
        document.getElementById('quiz4').nextSibling.nodeValue=ques[cnt][4];
    }else{
        var s1;
        var s2;
        var s3;
        var s4;
        var p;
        p = Math.round(100*pnt/num);
        //="得点は " +Math.round(100*pnt/num)+ " 点です。";
        document.getElementById("kaitou").style.display="none";
        document.getElementById("owari").style.display="block";
        if(p<30){
            s1="あなたは<br>「"+posi[l][0]+"」<br>です！";
            s2="もう一度ご挑戦ください！";
            s3="残念！"+p+" 点！";
            s4="【不合格】"
        }else if(p>=30 && p<60){
            s1="あなたは<br>「"+posi[l][1]+"」<br>です！";
            s2="もう一度ご挑戦ください！";
            s3="がんばって！"+p+" 点！";
            s4="【不合格】"
        }else if(p>=60 && p<90){
            s1="あなたは<br>「"+posi[l][2]+"」<br>です！";
            s2="もう一度ご挑戦ください！";
            s3="あと一歩！"+p+" 点！";
            s4="【不合格】"
        }else{
            s1="あなたは<br>「"+posi[l][3]+"」<br>です！";
            s2="おめでとうございます！この画面を写真にとってIMOPROJECTのテントへ行くと特典があります！";
            s3="すばらしい！"+p+" 点！";
            s4="【合格】"
        }
        document.getElementById("stat").innerHTML=s1;
        document.getElementById("gouhi").innerHTML=s2;
        document.getElementById("ten").innerHTML=s3;
        document.getElementById("kekka").innerHTML=s4;
    }
}
