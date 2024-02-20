const userName = document.getElementById("form_name");
const imgLink = document.getElementById("form_img_link");
const comment = document.getElementById("form_comment");
const button = document.getElementById("form_send");
const chatParent = document.getElementById("chat_parent");
const radioButtons = document.querySelectorAll('input[name="username_answer"]');
const nameWrapper = document.querySelector(".form_name_wrapper");

function hideUserName() {
  nameWrapper.classList.toggle("hide");
  if (radioButtons[1].checked === true) {
    userName.value = "";
  }
}

let imageArray = [
  "./avatars/ava_bird1.jpg",
  "./avatars/ava_bird2.jpg",
  "./avatars/ava_bird3.jpg",
  "./avatars/ava_bird4.jpg",
  "./avatars/ava_bird5.jpg",
  "./avatars/ava_bird6.jpg",
  "./avatars/ava_bird7.jpg",
  "./avatars/ava_bird8.jpg",
];

function addMessage() {
  const chatChild = document.createElement("div");
  chatChild.classList.add("chat_child");
  chatParent.append(chatChild);

  const childProfile = document.createElement("div");
  childProfile.classList.add("child_profile");
  chatChild.prepend(childProfile);

  const profileAvatar = document.createElement("img");
  profileAvatar.classList.add("profile_avatar");

  let num = Math.floor(Math.random() * 8);
  if (imgLink.value == "") {
    profileAvatar.src = imageArray[num];
  } else {
    profileAvatar.src = imgLink.value;
  }

  childProfile.prepend(profileAvatar);
  imgLink.value = "";

  const editName = userName.value.toLowerCase().trim();
  const checkedName = editName.charAt(0).toUpperCase() + editName.slice(1);

  const profileName = document.createElement("p");
  profileName.classList.add("profile_name");
  if (checkedName == "") {
    profileName.textContent = "Гость";
  } else {
    profileName.textContent = checkedName;
  }
  childProfile.append(profileName);
  userName.value = "";

  let currentTiming = new Date();
  const commentTiming = document.createElement("p");
  commentTiming.classList.add("child_comment_timing");
  commentTiming.textContent = currentTiming.toLocaleString("ru");
  childProfile.append(commentTiming);

  const commentEdit = comment.value.toLowerCase();
  const commentEd1 = commentEdit.replace(/viagra/g, "***");
  const commentEd2 = commentEd1.replace(/виагра/g, "***");
  const commentEd3 = commentEd2.replace(/xxx/g, "***");

  const childComment = document.createElement("p");
  childComment.classList.add("child_comment");
  childComment.textContent = commentEd3;
  chatChild.append(childComment);
  comment.value = "";
}

button.addEventListener("click", addMessage);

// Чтобы сообщение в чат публиковалось ещё по нажатию на enter:
comment.addEventListener("keyup", (event) => {
  if (event.code === "Enter") addMessage();
});
