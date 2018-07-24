// 4.2 行列積のための strassenのアルゴリズム

// θ(n^3)
function squareMatrixMultiply(A, B) {
  const len = A.length;

  // Cを新たなn*n行列とする
  let C = [];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      C[i] =C[i] || [];
      C[i][j] = 0;

      for (let k = 0; k < len; k++) {
        C[i][j] = C[i][j] + A[i][k] * B[k][j];
      }
    }
  }
  return C;
}


// 分割統治版 行列積計算
// squareMatrixMultiplyよりも漸近的に高速
// n * n行列を ４つの n / 2 * n / 2 二分割した上で計算する
// nは２のべき乗であると仮定する
// A Bは同じ n * n行列
// T(n) = θ(1) (n=1)
//      = 8T(n/2) + θ(n^2) (n > 1)
// 4.5で紹介する マスター法で計算すると T(n) = θ(n^3) となり
// squareMatrixMultiplyをしのげない
function squareMatrixMultiplyRecursive(A, B) {
  const n = A.length;

  let C = [];
  // Cを新しい n * n 型行列とする
  if (n === 1) {
    C[0] = C[0] || [];
    C[0][0] = A[0][0] * B[0][0];
  } else {
    // 全体で8回再帰的に呼び出す
    // 仮コード 2 * 2である場合
    // 各再帰呼び出しは 2個の n/2 * n/2型行列の積を計算するので T(n/2)時間かかる
    // よって 8回合わせて 8T(n / 2)かかる
    // 再帰するさいに T(n) = 2T(n/2) + θ(n)になり、 定数8を無視できない
    // T(n/2)のような再帰的な表記は定数係数を無視できない

    // 各行列の加算 行列はそれぞれ n/2 * n/2 = n^2/4個の要素を含むので
    // 4回の和それぞれにθ(n^2)
    // 定数回計算するので かかる時間はθ(n^2)
    C[0][0] = squareMatrixMultiplyRecursive(A[0][0], B[0][0])
            + squareMatrixMultiplyRecursive(A[0][1], B[1][0]);
    C[0][1] = squareMatrixMultiplyRecursive(A[0][0], B[0][1])
            + squareMatrixMultiplyRecursive(A[0][1], B[1][1]);     
    C[1][0] = squareMatrixMultiplyRecursive(A[1][0], B[0][0])
            + squareMatrixMultiplyRecursive(A[1][1], B[1][0]);
    C[1][1] = squareMatrixMultiplyRecursive(A[1][0], B[0][1])
            + squareMatrixMultiplyRecursive(A[1][1], B[1][1]);       
  }

  // T(n) = θ(1) + 8T(n/2) + θ(n^2) = 8T(n/2) + θ(n^2)
  return C;
}

// strassenのアルゴリズムにより o(n^3) 正確に言うと θ(n^(lg7))) つまり O(n^(2.81))となる

console.log(squareMatrixMultiply([[1, 2],[2, 3]], [[2, 5], [3, 10]]))