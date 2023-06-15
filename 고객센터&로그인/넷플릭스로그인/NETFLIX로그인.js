let eMail = document.querySelector("input[type=text]");
let passWord = document.querySelector("input[type=password]");
let textBox = document.getElementById("text_box");
let passwordBox = document.getElementById("password-box");
let textBoxVal = textBox.value;
eMail.addEventListener("click", firstEvent);
passWord.addEventListener("click", secondEvent);

function firstEvent() {
  textBox.style.fontSize = "12px";
  textBox.style.color = "#e87c03";
  textBox.style.textAlign = "left";
  textBox.style.marginTop = "8px";
  eMail.style.borderBottom = "2px solid #e87c03";
  textBox.textContent = "정확한 이메일 주소나 전화번호를 입력하세요.";
}

function secondEvent() {
  passwordBox.textContent = "비밀번호는 4~60자 사이여야 합니다.";
  passwordBox.style.fontSize = "12px";
  passwordBox.style.color = "#e87c03";
  passwordBox.style.textAlign = "left";
  passwordBox.style.marginTop = "8px";
  passWord.style.borderBottom = "2px solid #e87c03";
}
