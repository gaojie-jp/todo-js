import "./styles.css";

const onClickAdd = () => {
  //テキスト値の取得と初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(Finish)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "Finish";
  completeButton.addEventListener("click", () => {
    //押されたFinishボタンの親(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストの取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //li生成
    const li = document.createElement("li");
    li.innerText = text;

    //returnボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "Return";
    backButton.addEventListener("click", () => {
      //押されたReturnボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //text取得
      const text = deleteTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divにliとReturnボタンを追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了のリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(Delete)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    //押されたDeleteボタンの親タブ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
