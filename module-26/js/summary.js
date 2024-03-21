document.getElementById("btn-post").addEventListener("click", function () {
  const commentBox = document.getElementById("new-comment");
  let newComment = commentBox.value;

  const commentContainer = document.getElementById("p-container");
  const p = document.createElement("p");

  p.innerText = newComment;
  commentContainer.appendChild(p);
  commentBox.value = "";
});
