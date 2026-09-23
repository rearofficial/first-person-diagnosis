// ========================================
// 一人称診断 β
// 20問 × 5択 / 8傾向 / 16タイプ
// ========================================


// ----------------------------------------
// 質問データ
// ----------------------------------------

const questions = [

  {
    text: "友人4人で食事をすることになった。みんなは同じ店に行こうとしているが、あなたは別の店が気になっている。",
    answers: [
      ["自分が行きたいなら、その店を提案する", { A: 2 }],
      ["その店の何が気になったのか、自分でも少し考える", { D: 2, G: 1 }],
      ["みんながその店を選んだ理由を聞く", { B: 2, E: 1, F: 1 }],
      ["全員が納得できそうな別の店も探してみる", { C: 2, E: 1, H: 1 }],
      ["なんとなく「こっちの方が面白そう」と感じた店を提案する", { G: 2, H: 1 }]
    ]
  },

  {
    text: "友人から「絶対好きだと思う」と映画を勧められた。でも、予告を見る限り、あなたはそこまで興味を持てなかった。",
    answers: [
      ["せっかくだし、とりあえず観てみる", { E: 1, G: 1 }],
      ["友人がどこを面白いと思ったのか聞く", { B: 2, E: 1 }],
      ["今の自分が本当に観たい作品なのか考える", { D: 2 }],
      ["今回はやめて、別の作品を提案する", { C: 2, E: 1, H: 1 }],
      ["予告にはない面白さがありそうなら観てみる", { G: 2, H: 1 }]
    ]
  },

  {
    text: "あなたがやってみたいことに対して、周囲から「やめた方がいい」と言われた。",
    answers: [
      ["自分がやりたいなら、それでもやる", { A: 2, G: 1 }],
      ["なぜ反対しているのか、理由を聞く", { B: 2, E: 1, F: 1 }],
      ["実際に経験した人の話や情報を調べる", { B: 2, F: 2 }],
      ["一度時間を置いて、自分の気持ちを整理する", { D: 2, G: 1 }],
      ["別の方法なら実現できないか考える", { H: 2, G: 1 }]
    ]
  },

  {
    text: "友人と会う予定だったが、当日に「別のことをしない？」と提案された。",
    answers: [
      ["面白そうなら、そのまま乗る", { G: 2, H: 1 }],
      ["どうして予定を変えたいのか聞く", { B: 2, F: 1 }],
      ["みんなが楽しめそうな別案を考える", { C: 2, E: 1, H: 1 }],
      ["予定を変えることで困ることがないか考える", { C: 1, F: 2 }],
      ["「そっちの方が楽しそう」と感じたら変更する", { G: 2 }]
    ]
  },

  {
    text: "初めてやる仕事を「やり方は自由にしていい」と任された。",
    answers: [
      ["まず自分なりの方法で始めてみる", { A: 2, G: 1 }],
      ["先に基本的なやり方を確認する", { B: 2, F: 1 }],
      ["経験者にコツや注意点を聞く", { B: 2, E: 1, F: 1 }],
      ["全体の流れを見てから取りかかる", { F: 2, C: 1 }],
      ["自分ならではのやり方ができないか考える", { H: 2, G: 1 }]
    ]
  },

  {
    text: "5人で何かを決めている。意見が2つに分かれ、どちらも譲らない。",
    answers: [
      ["自分がいいと思う案を推す", { A: 2 }],
      ["それぞれがなぜその案を選んだのか聞く", { B: 2, E: 1 }],
      ["両方の良いところを組み合わせられないか考える", { C: 1, E: 1, H: 2 }],
      ["全員が納得できる落としどころを探す", { C: 2, E: 1 }],
      ["そもそも別の案がないか考える", { H: 2 }]
    ]
  },

  {
    text: "知り合いが一人もいない集まりに参加した。",
    answers: [
      ["気になる人がいたら自分から話しかける", { A: 1, E: 1 }],
      ["近くの人と自然に話してみる", { E: 2 }],
      ["誰かが話しかけてくるまで待つ", { D: 1, F: 1 }],
      ["全体の雰囲気を見ながら過ごす", { F: 2 }],
      ["必要な会話だけして、自分の時間を過ごす", { D: 2, F: 1 }]
    ]
  },

  {
    text: "親しい友人がかなり悩んでいる様子で、あなたに相談してきた。",
    answers: [
      ["「こうしたら？」と自分の考えをすぐ伝える", { A: 2 }],
      ["まず相手の話を最後まで聞く", { E: 2 }],
      ["「自分ならどうするか」を一緒に考える", { E: 2, H: 1 }],
      ["相手が何を求めているのか確認する", { B: 1, E: 2 }],
      ["答えを急がず、相手が話し終わるまで聞く", { E: 2, D: 1 }]
    ]
  },

  {
    text: "初めて会った人から、「あなたの考え方って、面白いですね」と言われた。",
    answers: [
      ["「ありがとう」と普通に返す", { E: 1, G: 1 }],
      ["「どの辺がそう思いました？」と聞く", { B: 2, E: 1 }],
      ["少し照れながら、そのまま話を続ける", { E: 1, G: 1 }],
      ["軽く笑って、その話題を流す", { F: 1 }],
      ["その言葉がなぜかしばらく頭に残る", { D: 2, G: 1 }]
    ]
  },

  {
    text: "友人と、あることについて意見が合わなくなった。",
    answers: [
      ["自分の考えをはっきり伝える", { A: 2 }],
      ["相手がそう考える理由をもう少し聞く", { B: 2, E: 1 }],
      ["お互いの共通点を探してみる", { C: 2, E: 1 }],
      ["その場で無理に結論を出さない", { D: 2, F: 1 }],
      ["「別の見方もできるんじゃない？」と考える", { H: 2 }]
    ]
  },

  {
    text: "人前でちょっとした失敗をしてしまった。",
    answers: [
      ["「今の失敗したな」と笑いに変える", { G: 1, H: 1 }],
      ["何が原因だったのか考える", { B: 2, F: 1 }],
      ["周囲にどう見られたか少し気になる", { E: 1, F: 2 }],
      ["何事もなかったように、そのまま続ける", { A: 1, F: 1 }],
      ["後から一人になって、自分の中で振り返る", { D: 2 }]
    ]
  },

  {
    text: "初めて行った場所で、周囲とは少し違うやり方をしている人を見かけた。",
    answers: [
      ["面白そうなら自分も試してみる", { G: 1, H: 2 }],
      ["なぜそのやり方をしているのか聞く", { B: 2, F: 1 }],
      ["まず決まりやルールを確認する", { F: 2 }],
      ["特に理由がなければ周囲と同じやり方にする", { C: 1, F: 1 }],
      ["自分に合う方法なら取り入れてみる", { D: 1, G: 1, H: 2 }]
    ]
  },

  {
    text: "夜、友人から「今から遊ばない？」と連絡が来た。",
    answers: [
      ["面白そうなら、すぐ行く", { G: 1, H: 2 }],
      ["何をするのか聞いてから決める", { B: 2, E: 1 }],
      ["明日の予定や時間を確認して決める", { F: 2, D: 1 }],
      ["今日はやめておく", { D: 1, F: 1 }],
      ["そのときの気分で決める", { G: 2 }]
    ]
  },

  {
    text: "2つの選択肢があり、どちらにも良いところがある。どちらを選ぶか決めなければならない。",
    answers: [
      ["直感で「こっち」と決める", { G: 2 }],
      ["信頼できる人に話してみる", { E: 1, B: 1 }],
      ["メリットとデメリットを整理する", { B: 2, F: 1 }],
      ["一晩置いてから決める", { D: 2 }],
      ["選んだ後にどうなるか、いくつかの可能性を考える", { F: 1, H: 2 }]
    ]
  },

  {
    text: "親しい友人から、最近起きた出来事について相談された。友人自身も、どうすればいいのか迷っている。",
    answers: [
      ["「それは大変だったね」と、まず話を聞く", { E: 2 }],
      ["「自分ならこうする」と意見を伝える", { A: 2 }],
      ["「どうしたいと思ってる？」と相手に聞く", { E: 2 }],
      ["自分の経験に似た話があれば、それを話す", { E: 1, G: 1 }],
      ["すぐに答えを出さず、相手が話し終わるまで聞く", { E: 2, D: 1 }]
    ]
  },

  {
    text: "自分なりにやっていた方法を、誰かから厳しく指摘された。",
    answers: [
      ["納得できなければ、その場で反論する", { A: 2 }],
      ["まず何が問題なのか聞く", { B: 2, F: 1 }],
      ["一度持ち帰って、自分なりに考える", { D: 2 }],
      ["自分にも原因がなかったか振り返る", { D: 2, F: 1 }],
      ["今は判断せず、少し距離を置く", { F: 2, D: 1 }]
    ]
  },

  {
    text: "今日は一日、何の予定もない。",
    answers: [
      ["起きてから面白そうなことを探す", { G: 1, H: 2 }],
      ["誰かに連絡してみる", { E: 2 }],
      ["前から気になっていたことをやる", { D: 1, A: 1 }],
      ["家で好きなことをして過ごす", { D: 2 }],
      ["その日の気分で、やることを変える", { G: 2, H: 1 }]
    ]
  },

  {
    text: "グループで作業をしているが、誰も進行役をしようとしない。",
    answers: [
      ["自分が進める", { A: 2 }],
      ["まずみんなに意見を聞く", { E: 2 }],
      ["役割を決めることを提案する", { C: 2 }],
      ["誰かが始めるまで少し様子を見る", { F: 2 }],
      ["今のやり方以外に、もっと効率的な方法がないか考える", { H: 2 }]
    ]
  },

  {
    text: "何年も会っていない友人から突然、「久しぶり」と連絡が来た。",
    answers: [
      ["気づいたら、すぐ返信している", { E: 2 }],
      ["「最近どうしてる？」と近況を聞き返す", { E: 2, B: 1 }],
      ["なぜ今連絡してきたのか少し気になる", { F: 2 }],
      ["時間があるときに返信する", { D: 1, F: 1 }],
      ["返信する前に、少し考える", { D: 2 }]
    ]
  },

  {
    text: "ずっと迷っていたことを、今日中に決めなければならなくなった。",
    answers: [
      ["もう決めて、動き始める", { A: 2 }],
      ["誰かに話して、自分の考えを整理する", { E: 1, H: 1 }],
      ["最後に必要な情報を確認する", { B: 2, F: 2 }],
      ["自分が一番納得できる方を選ぶ", { D: 2 }],
      ["決めた後にどう動くかまで考えてから決める", { F: 1, H: 2 }]
    ]
  }

];


// ----------------------------------------
// 状態
// ----------------------------------------

let currentQuestion = 0;

const scores = {
  A: 0, // 自律
  B: 0, // 理解
  C: 0, // 調整
  D: 0, // 内省
  E: 0, // 関係
  F: 0, // 観察
  G: 0, // 感覚
  H: 0  // 発想
};

let externalScore = 0;


// ----------------------------------------
// 8種類の一人称
// ----------------------------------------

const pronouns = {
  A: "俺",
  B: "僕",
  C: "私",
  D: "自分",
  E: "うち",
  F: "わし",
  G: "あたい",
  H: "ぼくちん"
};


// ----------------------------------------
// 16タイプ
// ----------------------------------------

const typeData = {

  "俺-A": {
    number: "01",
    name: "突破型",
    catch: "自分で決めた。だから、まず動く。",
    description: "自分の意思を基準に判断し、迷ったときも自分で決めて前へ進むタイプ。周囲の意見を聞きながらも、最後の決断は自分で引き受ける。"
  },

  "俺-B": {
    number: "02",
    name: "単独突破型",
    catch: "誰かが決めるのを待つより、自分で道を作る。",
    description: "自分の中で方向を決める力が強く、周囲に流されず進めるタイプ。外に答えを求めるより、自分自身の判断を信じる傾向がある。"
  },

  "僕-A": {
    number: "03",
    name: "対話型",
    catch: "話してみる。そこから答えが見えてくる。",
    description: "人とのやり取りを通じて考えを深めるタイプ。相手の意見を聞きながら、自分の考えも整理していく。"
  },

  "僕-B": {
    number: "04",
    name: "熟考型",
    catch: "なぜそうなるのか。それを知ってから動きたい。",
    description: "物事の理由や仕組みを理解してから判断するタイプ。勢いだけで決めず、自分なりに情報を整理して納得することを大切にする。"
  },

  "私-A": {
    number: "05",
    name: "調整型",
    catch: "自分だけじゃなく、全体がうまくいく形へ。",
    description: "周囲の意見や状況を見ながら、全体がうまく収まる形を探すタイプ。対立を避けるというより、より良い着地点を作ろうとする。"
  },

  "私-B": {
    number: "06",
    name: "静観型",
    catch: "急いで決めるより、まず全体を見る。",
    description: "その場の流れにすぐ乗らず、一歩引いて状況を見られるタイプ。自分の中で整理しながら、無理のない答えを探していく。"
  },

  "自分-A": {
    number: "07",
    name: "探究型",
    catch: "自分なりの答えを、外の世界で確かめる。",
    description: "自分の基準を持ちながら、外の情報や人とのやり取りから答えを深めるタイプ。自分だけの方法を探すことにも抵抗がない。"
  },

  "自分-B": {
    number: "08",
    name: "内省型",
    catch: "答えは、自分の中で納得できるかどうか。",
    description: "周囲の評価より、自分自身が納得できるかを重視するタイプ。一人で考える時間を使いながら、自分なりの答えを作っていく。"
  },

  "うち-A": {
    number: "09",
    name: "共鳴型",
    catch: "一緒に考えるからこそ、見えてくるものがある。",
    description: "人とのつながりを大切にし、誰かと一緒に考えることで力を発揮するタイプ。相手の気持ちや関係性を自然に意識する。"
  },

  "うち-B": {
    number: "10",
    name: "感受型",
    catch: "言葉にならないものまで、ちゃんと感じている。",
    description: "人との関係やその場の空気を繊細に受け取るタイプ。すぐに答えを出すより、感じたことを自分の中で受け止める傾向がある。"
  },

  "わし-A": {
    number: "11",
    name: "指南型",
    catch: "見極めたものを、誰かと共有する。",
    description: "状況を観察しながら、人とのやり取りを通じて判断を深めるタイプ。経験や事実をもとに、周囲に道筋を示すこともある。"
  },

  "わし-B": {
    number: "12",
    name: "観察型",
    catch: "まだ決めない。まず、ちゃんと見る。",
    description: "すぐに判断せず、状況や情報をじっくり見るタイプ。感情に流されず、一歩引いた視点から物事を捉える。"
  },

  "あたい-A": {
    number: "13",
    name: "表現型",
    catch: "面白いと思ったなら、それが始める理由になる。",
    description: "自分の感覚や直感を行動に変えやすいタイプ。頭で考えすぎるより、感じたことを外の世界で試すことで答えを見つける。"
  },

  "あたい-B": {
    number: "14",
    name: "感覚探究型",
    catch: "説明できなくても、なんとなく分かる。",
    description: "自分の感覚を大切にしながら、内側でじっくり確かめるタイプ。理屈だけでは説明できない感覚を判断材料にする。"
  },

  "ぼくちん-A": {
    number: "15",
    name: "発想型",
    catch: "そのやり方じゃなくても、いいんじゃない？",
    description: "既存の方法にとらわれず、新しい可能性を探すタイプ。人との会話や行動の中から、思いがけないアイデアを生み出す。"
  },

  "ぼくちん-B": {
    number: "16",
    name: "自由思考型",
    catch: "答えはひとつじゃない。たぶん。",
    description: "一つの正解に決めつけず、別の可能性を考え続けるタイプ。自分の中で自由に発想を広げながら、独自の答えを探す。"
  }

};

// ----------------------------------------
// 相性判定
// ----------------------------------------

function getTypeKeyFromScores() {

  const pronoun = getPronoun();
  const processType = getProcessType();

  return `${pronoun}-${processType}`;

}


// ----------------------------------------
// 16タイプの相性計算
// ----------------------------------------

function calculateCompatibility(myTypeKey) {

  const myPronoun = myTypeKey.split("-")[0];
  const myProcess = myTypeKey.split("-")[1];

  const myAxis = {
    A: scores.A,
    B: scores.B,
    C: scores.C,
    D: scores.D,
    E: scores.E,
    F: scores.F,
    G: scores.G,
    H: scores.H
  };

  const results = [];

  Object.keys(typeData).forEach(typeKey => {

    if (typeKey === myTypeKey) return;

    const [otherPronoun, otherProcess] =
      typeKey.split("-");

    const otherAxis = getTypeAxis(otherPronoun);

    let similarity = 0;
    let difference = 0;

    Object.keys(myAxis).forEach(key => {

      const myValue = myAxis[key];
      const otherValue = otherAxis[key];

      similarity +=
        Math.min(Math.abs(myValue), Math.abs(otherValue));

      difference +=
        Math.abs(myValue - otherValue);

    });

    // A/Bの組み合わせ
    const processBonus =
      myProcess === otherProcess ? 8 : 4;

    const score =
      similarity * 1.5 +
      processBonus -
      difference * 0.3;

    results.push({
      key: typeKey,
      score: score
    });

  });

  results.sort((a, b) => b.score - a.score);

  return results;

}


// ----------------------------------------
// 一人称ごとの傾向軸
// ----------------------------------------

function getTypeAxis(pronoun) {

  const axisMap = {

    "俺": {
      A: 5, B: 1, C: 1, D: 1,
      E: 1, F: 1, G: 3, H: 2
    },

    "僕": {
      A: 1, B: 5, C: 1, D: 2,
      E: 3, F: 2, G: 1, H: 2
    },

    "私": {
      A: 1, B: 2, C: 5, D: 2,
      E: 3, F: 3, G: 1, H: 1
    },

    "自分": {
      A: 2, B: 2, C: 1, D: 5,
      E: 1, F: 2, G: 2, H: 2
    },

    "うち": {
      A: 1, B: 1, C: 2, D: 1,
      E: 5, F: 1, G: 2, H: 1
    },

    "わし": {
      A: 1, B: 3, C: 2, D: 1,
      E: 1, F: 5, G: 1, H: 1
    },

    "あたい": {
      A: 2, B: 1, C: 1, D: 1,
      E: 1, F: 1, G: 5, H: 3
    },

    "ぼくちん": {
      A: 1, B: 2, C: 1, D: 2,
      E: 1, F: 1, G: 3, H: 5
    }

  };

  return axisMap[pronoun];

}


// ----------------------------------------
// 相性表示
// ----------------------------------------

function createCompatibility(results, category) {

  const item = results[0];

  const type = typeData[item.key];

  return `

    <div class="compatibilityItem">

      <div class="compatibilityCategory">
        ${category}
      </div>

      <div class="compatibilityType">
        TYPE ${type.number}
        ${type.name}
      </div>

      <div class="compatibilityPronoun">
        ${item.key.split("-")[0]}
      </div>

      <div class="compatibilityCatch">
        ${type.catch}
      </div>

    </div>

  `;

}


// ----------------------------------------
// 画面取得
// ----------------------------------------

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");

const startButton = document.getElementById("startButton");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");


// ----------------------------------------
// 診断開始
// ----------------------------------------

startButton.addEventListener("click", () => {

  currentQuestion = 0;

  Object.keys(scores).forEach(key => {
    scores[key] = 0;
  });

  externalScore = 0;

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();

});


// ----------------------------------------
// 質問表示
// ----------------------------------------

function showQuestion() {

  const question = questions[currentQuestion];

  questionNumber.textContent =
    `Q${currentQuestion + 1} / ${questions.length}`;

  questionText.textContent = question.text;

  answersContainer.innerHTML = "";

  question.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.className = "answerButton";

    button.textContent = answer[0];

    button.dataset.number =
      String(index + 1).padStart(2, "0");

    button.addEventListener("click", () => {

      selectAnswer(answer[1]);

    });

    answersContainer.appendChild(button);

  });

}


// ----------------------------------------
// 回答処理
// ----------------------------------------

function selectAnswer(answerScore) {

  Object.keys(answerScore).forEach(key => {

    scores[key] += answerScore[key];

  });


  // ------------------------------------
  // A/B判定用
  // A = 外に出しながら整理する傾向
  // B = 内側で整理してから動く傾向
  // ------------------------------------

  const externalChoices = ["A", "E", "G", "H"];
  const internalChoices = ["D", "F"];

  let external = 0;
  let internal = 0;

  externalChoices.forEach(key => {
    if (answerScore[key]) {
      external += answerScore[key];
    }
  });

  internalChoices.forEach(key => {
    if (answerScore[key]) {
      internal += answerScore[key];
    }
  });

  externalScore += external - internal;


  currentQuestion++;

  if (currentQuestion < questions.length) {

    showQuestion();

  } else {

    showResult();

  }

}


// ----------------------------------------
// 一人称決定
// ----------------------------------------

function getPronoun() {

  const axisScores = {
    A: scores.A,
    B: scores.B,
    C: scores.C,
    D: scores.D,
    E: scores.E,
    F: scores.F,
    G: scores.G,
    H: scores.H
  };

  const sorted = Object.entries(axisScores)
    .sort((a, b) => b[1] - a[1]);

  return pronouns[sorted[0][0]];

}


// ----------------------------------------
// A/B決定
// ----------------------------------------

function getProcessType() {

  if (externalScore >= 0) {
    return "A";
  }

  return "B";

}


// ----------------------------------------
// 結果表示
// ----------------------------------------

function showResult() {

  const pronoun = getPronoun();

  const processType = getProcessType();

  const type = typeData[`${pronoun}-${processType}`];

  // ------------------------------------
  // 相性計算
  // ------------------------------------

  const myTypeKey = `${pronoun}-${processType}`;

  const compatibilityResults =
    calculateCompatibility(myTypeKey);

  const closeType = compatibilityResults[0];

  const stimulatingType = compatibilityResults[1];

  const complementaryType = compatibilityResults
    .slice()
    .sort((a, b) => {

      const aProcess =
        a.key.split("-")[1];

      const bProcess =
        b.key.split("-")[1];

      const aDifferent =
        aProcess !== processType ? 1 : 0;

      const bDifferent =
        bProcess !== processType ? 1 : 0;

      return bDifferent - aDifferent;

    })[0];


  quizScreen.innerHTML = `

    <div class="resultScreen">

      <p class="analysisComplete" id="analysisComplete">
        ANALYSIS COMPLETE
      </p>

      <p class="smallTitle">RESULT</p>

      <h2 class="resultQuestion">
        あなたの一人称は
      </h2>

      <div class="resultPronoun">
        ${pronoun}
      </div>

      <img
  class="resultEmblem"
  src="emblem/${type.number}.png"
  alt=""
>

      <p class="typeNumber">
        TYPE ${type.number}
      </p>

      <div class="resultType">
        ${type.name}
      </div>

      <p class="catchphrase">
        ${type.catch}
      </p>

      <div class="resultPercent">

        ${createMeter("自己決定", scores.A)}

        ${createMeter("理解", scores.B)}

        ${createMeter("調整", scores.C)}

        ${createMeter("内省", scores.D)}

      </div>

      <div class="resultDescription">
        ${type.description}
      </div>


      <!-- ============================== -->
      <!-- 相性 -->
      <!-- ============================== -->

      <div class="compatibilitySection">

        <p class="smallTitle">
          COMPATIBILITY
        </p>

        ${createCompatibility(
          [closeType],
          "近いタイプ"
        )}

        ${createCompatibility(
          [complementaryType],
          "補完し合うタイプ"
        )}

        ${createCompatibility(
          [stimulatingType],
          "刺激を受けやすいタイプ"
        )}

      </div>


      <button class="shareButton" id="shareButton">
        結果をシェア
      </button>

      <button class="retryButton" id="retryButton">
        もう一度診断する
      </button>

    </div>

  `;


  animateResult();


  // ------------------------------------
  // シェア
  // ------------------------------------

  document
    .getElementById("shareButton")
    .addEventListener("click", async () => {

      const shareText =
        `一人称診断の結果は「${pronoun}」でした。\n` +
        `TYPE ${type.number} ${type.name}\n` +
        `${type.catch}\n\n` +
        `#一人称診断`;

      if (navigator.share) {

        try {

          await navigator.share({
            title: "一人称診断",
            text: shareText,
            url: window.location.href
          });

        } catch (error) {

          console.log("共有をキャンセルしました");

        }

      } else {

        alert(
          "この端末では共有機能に対応していません。"
        );

      }

    });


  // ------------------------------------
  // リトライ
  // ------------------------------------

  document
    .getElementById("retryButton")
    .addEventListener("click", () => {

      location.reload();

    });

}
// ----------------------------------------
// メーター生成
// ----------------------------------------

function createMeter(label, value) {

  const maxValue = 20;

  let percent =
    Math.round(((value + maxValue) / (maxValue * 2)) * 100);

  percent = Math.max(0, Math.min(100, percent));

  return `

    <div class="percentItem">

      <div class="percentLabel">
        <span>${label}</span>
        <span>${percent}%</span>
      </div>

      <div class="percentBar">

        <div
          class="percentFill"
          style="--meter-width:${percent}%">
        </div>

      </div>

    </div>

  `;

}


// ----------------------------------------
// 結果演出
// ----------------------------------------

function animateResult() {

  const complete = document.getElementById("analysisComplete");
  const pronoun = document.querySelector(".resultPronoun");

  const typeNumber = document.querySelector(".typeNumber");
  const resultType = document.querySelector(".resultType");
  const catchphrase = document.querySelector(".catchphrase");
const emblem = document.querySelector(".resultEmblem");
 
// ANALYSIS COMPLETE
  setTimeout(() => {
    if (complete) {
      complete.classList.add("show");
    }
  }, 900);

  // 一人称
  setTimeout(() => {
    if (pronoun) {
      pronoun.classList.add("reveal");
    }
  }, 1800);

  // エンブレム
setTimeout(() => {
  if (emblem) {
    emblem.classList.add("emblemReveal");
  }
}, 2300);

  // TYPE番号
  setTimeout(() => {
    if (typeNumber) {
      typeNumber.classList.add("resultVisible");
    }
  }, 2800);

  // タイプ名
  setTimeout(() => {
    if (resultType) {
      resultType.classList.add("resultVisible");
    }
  }, 3000);

  // キャッチコピー
  setTimeout(() => {
    if (catchphrase) {
      catchphrase.classList.add("resultVisible");
    }
  }, 3200);
}

// ----------------------------------------
// 診断について・利用規約 モーダル
// ----------------------------------------

const aboutButton = document.getElementById("aboutButton");
const termsButton = document.getElementById("termsButton");

const aboutModal = document.getElementById("aboutModal");
const termsModal = document.getElementById("termsModal");

const closeButtons = document.querySelectorAll(".closeModal");

// 診断について
if (aboutButton) {
  aboutButton.addEventListener("click", () => {
    aboutModal.classList.add("active");
  });
}

// 利用規約
if (termsButton) {
  termsButton.addEventListener("click", () => {
    termsModal.classList.add("active");
  });
}

// ×ボタン
closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    aboutModal.classList.remove("active");
    termsModal.classList.remove("active");
  });
});

// モーダル外側をクリックして閉じる
[aboutModal, termsModal].forEach(modal => {
  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("active");
      }
    });
  }
});
