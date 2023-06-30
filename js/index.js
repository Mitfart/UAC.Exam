let openPopUpBtn = document.querySelector("#comments_open_popup")
let modalElem = document.querySelector("#comments_modal")

let modalDarkerElem = modalElem.querySelector(".modal__darker")
let sendButton = document.querySelector("#send__comment")

let commentsBlock = document.querySelector("#comments__container")


console.log(openPopUpBtn)
console.log(modalElem)
console.log(modalDarkerElem)
console.log(sendButton)
console.log(commentsBlock)

openPopUpBtn.onclick = () => modalElem.classList.remove("modal__close");
modalDarkerElem.onclick = () => modalElem.classList.add("modal__close");


let comments = []

if (localStorage.comments) {
    comments = JSON.parse(localStorage.comments)
    comments.forEach(el => {
        drawComment(el)
    });
}

sendButton.onclick = function () {
    let username = document.querySelector("#input__name")
    let comment = document.querySelector("#input__comment")

    if (comment.value && username.value) {
        let timestamp = new Date().toLocaleString()
        let dataComment = {"username": username.value, "text": comment.value, "timestamp": timestamp};

        drawComment(dataComment)
        comments.push(dataComment)
        username.value = ""
        comment.value = ""
        localStorage.setItem("comments", JSON.stringify(comments))
        modalElem.classList.add("modal__close")
    } else if (comment.value === "" && username.value === "") {
        alert("Заполните поля!")
    } else if (comment.value === "") {
        alert("Напишите комментарий!")
    } else if (username.value === "") {
        alert("Напишите имя!")
    }
}

function drawComment(comment) {
    let newComment = `
    <div class="comment">
        <p class="user__nickname">${comment.username}</p>
        <p class="comment__text">${comment.text}</p>
        <p class="comment__timestamp">${comment.timestamp}</p>
    </div>
    `
    commentsBlock.innerHTML += newComment
}
