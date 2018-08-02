// 乱択アルゴリズム版 hire assistant

function randomizedHireAssistant(list) {
  // sample

  // 候補者リストをランダムに置換
  // TODO

  // 0は最低評価のダミー候補者
  let best = 0;
  for (i = 0; i < list.length; i++) {
    // iと面談
    let data = list[i];
    if (data > best) {
      best = data;

      //TODO
      // 雇用する
    }
  }
}