//マウスの座標
var mX = 0;
var mY = 0;
window.addEventListener('DOMContentLoaded', function() {
    document.body.onmousemove = function (e) {
        mX = e.pageX;
        mY = e.pageY;
//マウス移動時のイベントをBODYタグに登録する
        document.getElementById('txtX').value = mX;
        document.getElementById('txtY').value = mY;
    };
})








//？？？？？？？？最終的にはクリックした位置に向かって、画像の向きを変えて動くアニメーションを作りたいんだけど、
//とりあえず前段階でクリックした後に、距離に応じて斜めに画像が動く様にしたい。

//クリックした位置にアバターの移動と画像切り替え
//アバターの座標
var aX = 0;
var aY = 0;
var aW = 20;
var aH = 50;
var moveX = 0;
var moveY =0;
const direction_src = new Array('img/upperRight.gif', 'img/lowerRight.gif', 'img/lowerLeft.gif','img/upperLeft.gif',
                                'img/upper.gif',  'img/right.gif','img/lower.gif',  'img/left.gif');



const avatarTimer = () =>{
//？？？？　　　↓のaXを数字に変えたら一応動くから、ここが問題だと思うんだけど、どう直すのが正解なのかよくわからない。
if(moveX < (mX-aX)){
console.log(mX-aX);
  moveX++;
  moveY++;

  avatar.style.left = `${moveX}px`;
  avatar.style.top = `${moveY}px`;

  aX = mX;
  aY = mY;
setTimeout("avatarTimer()",1);
 }
}

document.getElementById('graphic').onclick = () => {
  if (mX > aX+aW && mY < aY-aH) {
      avatar.src = direction_src[0];
  }
  else if(mX > aX+aW && mY > aY){
      avatar.src = direction_src[1];
  }
  else if(mX < aX-aW && mY > aY){
      avatar.src = direction_src[2];
  }
  else if(mX < aX-aW && mY < aY-aH){
      avatar.src = direction_src[3];
  }
  else if(mY < aY-aH){
      avatar.src = direction_src[4];
  }
  else if(mX > aX+aW){
      avatar.src = direction_src[5];
  }
  else if(mY > aY){
      avatar.src = direction_src[6];
  }
  else if(mX < aX-aW){
      avatar.src = direction_src[7];
  }
avatarTimer();
}
