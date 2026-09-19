const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const startButton = document.getElementById("startButton");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
let answerButtons = document.querySelectorAll(".answerButton");

let currentQuestion = 0;
let scores = {
  self: 0,
  action: 0,
  distance: 0,
  expression: 0
};
// =====================
// 一人称判定
// =====================

function getPronoun() {

  const self = scores.self > 0 ? "A" : "B";
  const action = scores.action > 0 ? "A" : "B";
  const distance = scores.distance > 0 ? "A" : "B";

  const pattern = self + action + distance;

  const pronouns = {
    "AAA": "俺",
    "ABA": "僕",
    "BBA": "私",
    "ABB": "自分",
    "BAA": "うち",
    "BBB": "わし",
    "AAB": "あたい",
    "BAB": "ぼくちん"
  };

  return pronouns[pattern];

}


// =====================
// A / Bタイプ判定
// =====================

function getType() {

  if (scores.expression > 0) {
    return "A";
  } else {
    return "B";
  }

}


// =====================
// タイプ名
// =====================

function getTypeName(pronoun, type) {

  const typeNames = {

    "俺": {
      A: "突破型",
      B: "信念型"
    },

    "僕": {
      A: "共感型",
      B: "探究型"
    },

    "私": {
      A: "分析型",
      B: "調和型"
    },

    "自分": {
      A: "探索型",
      B: "内省型"
    },

    "うち": {
      A: "親和型",
      B: "独立型"
    },

    "わし": {
      A: "経験型",
      B: "達観型"
    },

    "あたい": {
      A: "直感型",
      B: "反骨型"
    },

    "ぼくちん": {
      A: "愛嬌型",
      B: "観察型"
    }

  };

  return typeNames[pronoun][type];

}
// =====================
// TYPE番号
// =====================

function getTypeNumber(pronoun, type) {

  const typeNumbers = {

    "俺_A": "TYPE 01",
    "俺_B": "TYPE 02",

    "僕_A": "TYPE 03",
    "僕_B": "TYPE 04",

    "私_A": "TYPE 05",
    "私_B": "TYPE 06",

    "自分_A": "TYPE 07",
    "自分_B": "TYPE 08",

    "うち_A": "TYPE 09",
    "うち_B": "TYPE 10",

    "わし_A": "TYPE 11",
    "わし_B": "TYPE 12",

    "あたい_A": "TYPE 13",
    "あたい_B": "TYPE 14",

    "ぼくちん_A": "TYPE 15",
    "ぼくちん_B": "TYPE 16"

  };

  return typeNumbers[`${pronoun}_${type}`];

}
// =====================
// タイプ説明
// =====================

function getTypeCatchphrase(pronoun, type) {

  const catchphrases = {

    "俺_A": "迷うより、まず動く。",
    "俺_B": "自分の信じた道を進む。",
    
    "僕_A": "人の気持ちを、自分のことのように感じる。",
    "僕_B": "気になったら、とことん知りたくなる。",

    "私_A": "感情に流されず、静かに答えを探す。",
    "私_B": "自分も相手も、大切にしたい。",

    "自分_A": "知らない世界ほど、覗いてみたくなる。",
    "自分_B": "答えは、自分の中で見つけたい。",

    "うち_A": "人といると、自分らしくなれる。",
    "うち_B": "誰かといても、自分は自分。",

    "わし_A": "経験したことは、全部自分の糧になる。",
    "わし_B": "少し離れて見るから、見えるものがある。",

    "あたい_A": "理由はなくても、感覚が答えを知っている。",
    "あたい_B": "みんなと同じじゃ、つまらない。",

    "ぼくちん_A": "笑わせるのも、ひとつの才能。",
    "ぼくちん_B": "何も考えてなさそうで、実は見ている。"

  };

  return catchphrases[`${pronoun}_${type}`];

}

function getTypeDescription(pronoun, type) {

  const descriptions = {

    "俺_A":
      "考えるより先に動ける人。周囲に合わせるより、自分が納得できる道を選ぶ。失敗しても「やってみたかった」と思えるなら、それも経験に変えていく。",

    "俺_B":
      "静かに強い自分の軸を持つ人。簡単には意見を変えないけれど、納得できる理由があれば柔軟に考えられる。自分の選択に責任を持とうとする。",

    "僕_A":
      "人の気持ちを自然に想像できる人。自分のことだけでなく、相手がどう感じるかまで考えて行動する。優しいぶん、知らないうちに人の感情を背負うこともある。",

    "僕_B":
      "「なんで？」をそのままにできない人。答えを急がず、自分なりに考えて納得したい。興味を持ったことには意外なほど深く入り込む。",

    "私_A":
      "感情だけで決めず、一度立ち止まって考える人。物事を整理するのが得意で、周囲が見落としている部分にも気づきやすい。自分の内側ではかなり考えている。",

    "私_B":
      "人との関係や場の空気を大切にする人。自分だけが正しければいいとは考えず、みんなが納得できるところを探そうとする。争いは苦手でも、芯は意外と強い。",

    "自分_A":
      "「とりあえずやってみる」が似合う人。知らないものに対する好奇心が強く、経験しながら答えを見つけていく。予定通りにいかないことさえ楽しめる。",

    "自分_B":
      "自分の中でじっくり考える人。すぐに答えを出すより、納得するまで考えたい。静かに見えて、頭の中ではかなり多くのことを考えている。",

    "うち_A":
      "人との距離を縮めるのが自然にできる人。一緒に笑ったり、話したりする時間を大切にする。誰かといることで、自分らしさが出やすいタイプ。",

    "うち_B":
      "人と一緒にいることも好きだけど、自分の時間も同じくらい大切にする人。誰かに依存するより、自分で考えて自分で決めたい。",

    "わし_A":
      "経験から学ぶことを大切にする人。失敗も成功も「次に活かせばいい」と考えられる。時間が経つほど、判断に深みが出てくるタイプ。",

    "わし_B":
      "少し離れたところから物事を見るのが得意な人。簡単には動じず、感情に流されずに状況を見る。実は周囲が思っている以上に、いろいろなことを見ている。",

    "あたい_A":
      "「なんとなくこっち」が意外と当たる人。理屈より感覚を信じて動くことが多く、自分でも説明できないところで答えを見つける。",

    "あたい_B":
      "「みんながそうしてるから」では納得できない人。自分なりの考えを持ち、違うと思ったことにはちゃんと違うと言える。少し不器用でも、自分らしさは曲げない。",

    "ぼくちん_A":
      "自然体で人との距離を縮められる人。ちょっとふざけたり、場を和ませたりするのも得意。軽く見られることがあっても、実は周囲をよく見ている。",

    "ぼくちん_B":
      "一見ふわっとしているようで、実はかなり周囲を見ている人。人の言葉や態度の変化にも気づきやすい。あえて一歩引いて見ていることも多い。"

  };

  return descriptions[`${pronoun}_${type}`];

}
// =====================
// 20問の診断データ
// =====================

const questions = [

  // ① 自分軸
  {
    question: "自分の意見と周囲の意見が違ったら？",
    answers: [
      "自分の意見をそのまま伝える",
      "自分の意見を少し調整して伝える",
      "相手の意見を聞いて考え直す",
      "場の意見を優先する"
    ]
  },

  {
    question: "何かを決めるとき、一番頼りにするのは？",
    answers: [
      "自分の直感",
      "自分の経験",
      "周囲の意見",
      "周囲がどう思うか"
    ]
  },

  {
    question: "本当はやりたいけど、周りが反対していることがあったら？",
    answers: [
      "それでもやる",
      "理由を聞いてから決める",
      "かなり迷う",
      "周りが反対するならやめる"
    ]
  },

  {
    question: "人から「こうした方がいい」と言われたとき？",
    answers: [
      "自分が納得しなければ変えない",
      "参考にはする",
      "相手の意見をかなり重視する",
      "基本的に相手に合わせる"
    ]
  },

  {
    question: "後悔するとしたら、どちらが多そう？",
    answers: [
      "自分のやりたいことをやらなかった",
      "もう少し自分を優先すればよかった",
      "誰かを傷つけてしまった",
      "周囲との関係を壊してしまった"
    ]
  },

  // ② 行動軸
  {
    question: "新しいことを始めるとき？",
    answers: [
      "とりあえずやってみる",
      "少し調べてからやる",
      "かなり調べてから始める",
      "失敗しない確信が持てるまで動かない"
    ]
  },

  {
    question: "旅行の計画は？",
    answers: [
      "ほぼノープラン",
      "大まかに決める",
      "ある程度細かく決める",
      "時間までしっかり決める"
    ]
  },

  {
    question: "突然チャンスがやってきたら？",
    answers: [
      "面白そうなら即乗る",
      "条件を確認して乗る",
      "一晩考える",
      "リスクを全部確認してから決める"
    ]
  },

  {
    question: "問題が起きたとき？",
    answers: [
      "まず動いて解決する",
      "動きながら考える",
      "一度整理してから動く",
      "原因を把握してから動く"
    ]
  },

  {
    question: "予定のない休日は？",
    answers: [
      "起きてから決める",
      "その日の気分で決める",
      "前日くらいには決めたい",
      "あらかじめ予定を作っておきたい"
    ]
  },

  // ③ 距離軸
  {
    question: "初対面の人が集まる場所で？",
    answers: [
      "気になる人には自分から話しかける",
      "話しかけられたら自然に話す",
      "少し様子を見てから話す",
      "必要なこと以外はあまり話さない"
    ]
  },

  {
    question: "友達と喧嘩したら？",
    answers: [
      "すぐ話して解決したい",
      "少し時間を置いて話したい",
      "相手から来るまで待つ",
      "しばらく距離を置く"
    ]
  },

  {
    question: "誰かと仲良くなるスピードは？",
    answers: [
      "すぐ仲良くなる",
      "比較的早い",
      "時間をかける",
      "なかなか心を開かない"
    ]
  },

  {
    question: "悩みを相談されたら？",
    answers: [
      "一緒に悩む",
      "まず話をじっくり聞く",
      "必要ならアドバイスする",
      "相手から求められない限り踏み込まない"
    ]
  },

  {
    question: "初めて会った人に、自分のことを話すなら？",
    answers: [
      "結構いろいろ話す",
      "聞かれたことなら話す",
      "必要最低限にする",
      "できるだけ自分のことは話さない"
    ]
  },

  // ④ 表現軸
  {
    question: "嫌なことがあったとき？",
    answers: [
      "誰かに話す",
      "信頼できる人には話す",
      "まず自分の中で整理する",
      "ほとんど誰にも話さない"
    ]
  },

  {
    question: "嬉しいことがあったら？",
    answers: [
      "誰かにすぐ伝えたい",
      "仲のいい人には伝える",
      "自分の中で噛みしめる",
      "わざわざ人には言わない"
    ]
  },

  {
    question: "腹が立ったとき？",
    answers: [
      "その場で言う",
      "落ち着いてから伝える",
      "なるべく飲み込む",
      "何も言わず自分の中で処理する"
    ]
  },

  {
    question: "「好き」「嫌い」を人に伝えるのは？",
    answers: [
      "かなりハッキリ伝える",
      "相手によっては伝える",
      "あまり言葉にはしない",
      "言わなくても分かると思う"
    ]
  },

  {
    question: "自分の弱いところを人に見せるのは？",
    answers: [
      "あまり抵抗がない",
      "信頼できる人なら見せられる",
      "できれば見せたくない",
      "絶対に見せたくない"
    ]
  }

];


// =====================
// 質問を表示
// =====================

function showQuestion() {

  const question = questions[currentQuestion];

  questionNumber.textContent =
    `Q${currentQuestion + 1} / ${questions.length}`;

  questionText.textContent = question.question;

  answerButtons.forEach(function(button, index) {
    button.textContent = question.answers[index];
  });

}


// =====================
// スタート
// =====================

startButton.addEventListener("click", function() {

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  currentQuestion = 0;

  showQuestion();

});


// =====================
// 回答・結果・リトライ
// =====================

function showResult() {

  const pronoun = getPronoun();
  const type = getType();
  const typeName = getTypeName(pronoun, type);
  const typeNumber = getTypeNumber(pronoun, type);
  const description = getTypeDescription(pronoun, type);
const catchphrase = getTypeCatchphrase(pronoun, type);

  const selfPercent =
    Math.round((scores.self + 10) / 20 * 100);

  const actionPercent =
    Math.round((scores.action + 10) / 20 * 100);

  const distancePercent =
    Math.round((scores.distance + 10) / 20 * 100);

  const expressionPercent =
    Math.round((scores.expression + 10) / 20 * 100);

questionNumber.innerHTML = "RESULT<br><span class=\"resultLabel\">診断結果</span>";
    questionText.innerHTML =
  `あなたの一人称は<br><span class="resultPronoun">「${pronoun}」</span>`;

questionText.classList.add("resultQuestion");
  document.getElementById("answers").innerHTML =
`<p class="analysisComplete">ANALYSIS COMPLETE</p>
 <p class="typeNumber">${typeNumber}</p><p class="resultType">${typeName}</p>
 <p class="catchphrase">${catchphrase}</p>

     <div class="resultPercent">

       <div class="percentItem">
         <div class="percentLabel">
           <span>自分軸</span>
           <span class="percentNumber" data-value="${selfPercent}">0%</span>
           </div>
         <div class="percentBar">
           <div class="percentFill" style="--meter-width: ${selfPercent}%"></div>
         </div>
       </div>

       <div class="percentItem">
         <div class="percentLabel">
           <span>行動力</span>
<span class="percentNumber" data-value="${actionPercent}">0%</span>         </div>
         <div class="percentBar">
           <div class="percentFill" style="--meter-width: ${actionPercent}%"></div>
         </div>
       </div>

       <div class="percentItem">
         <div class="percentLabel">
           <span>距離感</span>
<span class="percentNumber" data-value="${distancePercent}">0%</span>         </div>
         <div class="percentBar">
           <div class="percentFill" style="--meter-width: ${distancePercent}%"></div>
         </div>
       </div>

       <div class="percentItem">
         <div class="percentLabel">
           <span>表現力</span>
<span class="percentNumber" data-value="${expressionPercent}">0%</span>         </div>
         <div class="percentBar">
           <div class="percentFill" style="--meter-width: ${expressionPercent}%"></div>
         </div>
       </div>

     </div>

     <p class="resultDescription">${description}</p>

     <button id="retryButton" class="retryButton">
       もう一度診断する
     </button>`;
       animatePercentNumbers();
}


function resetQuiz() {

  currentQuestion = 0;

  scores = {
    self: 0,
    action: 0,
    distance: 0,
    expression: 0
  };

  document.getElementById("answers").innerHTML =
    `<button class="answerButton"></button>
     <button class="answerButton"></button>
     <button class="answerButton"></button>
     <button class="answerButton"></button>`;

  answerButtons =
    document.querySelectorAll(".answerButton");

  showQuestion();
}


// =====================
// 回答ボタン
// =====================

document.getElementById("answers").addEventListener("click", function(event) {

  // もう一度診断する
  if (event.target.id === "retryButton") {

    resetQuiz();

    return;
  }


  // 回答ボタン
  if (event.target.classList.contains("answerButton")) {

    const index =
      Array.from(answerButtons).indexOf(event.target);

    const answerScores = [2, 1, -1, -2];

    const point = answerScores[index];


    if (currentQuestion < 5) {

      scores.self += point;

    } else if (currentQuestion < 10) {

      scores.action += point;

    } else if (currentQuestion < 15) {

      scores.distance += point;

    } else {

      scores.expression += point;

    }


    console.log(
      `Q${currentQuestion + 1}`,
      `回答${index + 1}`,
      `点数: ${point}`,
      scores
    );


    currentQuestion++;


    if (currentQuestion < questions.length) {

      showQuestion();

    } else {

      console.log("最終スコア:", scores);

      showResult();

    }

  }

});

function animatePercentNumbers() {

  const numbers = document.querySelectorAll(".percentNumber");

  numbers.forEach((number, index) => {

    const target = Number(number.dataset.value);
    let current = 0;

    const timer = setInterval(() => {

      current++;

      number.textContent = current + "%";

      if (current >= target) {
        clearInterval(timer);

        if (index === numbers.length - 1) {
          const complete = document.querySelector(".analysisComplete");

          if (complete) {
            complete.classList.add("show");
          }
        }
      }

    }, 20);

  });
}