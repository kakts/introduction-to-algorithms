// 4.2 Strassen方法による行列積計算
// Strassen方法んキーは 再帰木の変数を少し減らすこと
// つまり 8回あったn/2*n/2型行列に対する再帰的な行列計算を7回ですませる
// 1回の行列乗算は定数会の新しい n/2 * n/2型行列に対する加算によって置き換える

// Strassen方法は決して自明的でない
// 以下の4ステップから成り立つ

/**
 * 1: 入力行列A,Bと出力行列Cを n/2 * n/2型部分行列二分割するp
 * squareMatrixMultiplyRecursiveで行ったように、添字計算を用いると第1ステップをθ(1)で実行できる
 * 
 * 2: 10個の n/2 * n/2型行列 S1 ... S10を生成する
 * これらは 1でA,Bｋら制裁された8個の部分行列の中の２個の和または差
 * ？
 * これら１０個の行列すべてをθ(n^2)で生成できる
 * 
 * 3: 1,2で生成された行列を用いて、7個の行列積P1...P7を再帰的に計算する
 * Pi は n/2*n/2型行列
 * 
 * 4: Piの加減演算を用いて、結果となるCの部分行列 C11 C12 C21 C22を計算する
 * これら４つの部分行列すべてをθ(n^2) で計算できる
 * 
 * 
 * Strassenのアルゴリズムの実行時間T(n)を記述する漸化式
 * 
 * T(n) = θ(1) (n=1), 7T(n/2) + θ(n^2) (n>1)
 * 
 * 1回分の行列乗算を 定数回の行列加減算におきかえた これにより、漸近的実行時間が改良される
 */

 // Strassenアルゴリズムによる 2*2行列同士の積を求めるもの
function multipleMatrixByStrassen(A, B) {
  const a11 = A[0][0];
  const a12 = A[0][1];
  const a21 = A[1][0];
  const a22 = A[1][1];

  const b11 = B[0][0];
  const b12 = B[0][1];
  const b21 = B[1][0];
  const b22 = B[1][1];

  const s1 = b12 - b22;
  const s2 = a11 + a12;
  const s3 = a21 + a22;
  const s4 = b21 - b11;
  const s5 = a11 + a22;
  const s6 = b11 + b22;
  const s7 = a12 - a22;
  const s8 = b21 + b22;
  const s9 = a11 - a21;
  const s10 = b11 + b12;

  const p1 = a11 * s1;
  const p2 = s2 * b22;
  const p3 = s3 * b11;
  const p4 = a22 * s4;
  const p5 = s5 * s6;
  const p6 = s7 * s8;
  const p7 = s9 * s10;

  const result = [[],[]];
  result[0][0] = p5 + p4 - p2 + p6;
  result[0][1] = p1 + p2;
  result[1][0] = p3 + p4;
  result[1][1] = p5 + p1 - p3 - p7;

  return result;
}

const A = [
  [1, 3],
  [7, 5]
];
const B = [
  [6, 8],
  [4, 2]
];
console.log(multipleMatrixByStrassen(A, B))