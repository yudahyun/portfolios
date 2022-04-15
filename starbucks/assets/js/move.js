//mouseover add class on
document.querySelectorAll(".sub-menu").forEach((v, i) => {
  v.addEventListener("mouseover", (e) => {
    const current = e.currentTarget;
    current.children[0].classList.add("on");
  });
  v.addEventListener("mouseleave", (e) => {
    const current = e.currentTarget;
    current.children[0].classList.remove("on");
  });
});

document.querySelectorAll(".sub-menu").forEach((v, i) => {
  // console.log(v.firstChild);

  v.addEventListener("mouseover", (e) => {
    const sub = e.currentTarget.children[1];
    // sub.style.display="block";
    sub.style.height = "auto";
    // sub.style.transition = "all 5s";
  });
  v.addEventListener("mouseout", (e) => {
    const sub = e.currentTarget.children[1];
    sub.style.height = "0";
    // sub.style.transition = "all 5s";
    // sub.style.display="none";
    // sub.style.height="0";
  });
});

//검색 버튼 누르면 검색 필드 나타남
document.querySelector(".search-btn").addEventListener(
  "click",
  (e) => {
    const searchField = document.querySelector("#searchField");
    searchField.style.width = "173px";

    document.querySelector(".search-btn").addEventListener("click", (e) => {
      if (searchField.style.width == "173px") {
        if (searchField.value == "") {
          alert("검색어를 입력하세요");
        }
      }
    });
  },
  { once: true }
);

//스크롤 위치 감지하여 애니매이션 시작
window.addEventListener("scroll", (e) => {
  // const documentHeight = document.scrollHeight;
  // const scrollTop = window.scrollY;
  // scro
});
//애니메이션 클래스 추가 함수
function addFadein(element){
  element.classList.add("animate__fadeIn");
  element.style.display=("block");
  return element;
}

document.querySelectorAll(".show-main *").forEach((v,i)=>{
  // console.log(v);
   const fadeOrder = v.dataset.fade ;
   console.log(fadeOrder);
  setTimeout(()=>{addFadein(v)}, fadeOrder * 700);
});

//버튼 배경 색 바꾸기
document.querySelectorAll(".border_btn").forEach((v, i) => {
  v.addEventListener("mouseover", (e) => {
    const current = e.currentTarget;
    // console.log(current);
    const bgColor = current.dataset.color;
    // console.log(bgColor);
    current.style.backgroundColor = bgColor;
    current.style.color = "#fff";
    current.style.textDecoration = "underline";
    //혼자 검정색으로 변함
    if (current.classList.contains("black-btn")) {
      // console.log("넌 검정");
      current.style.color = "#000";
    }
  });
  v.addEventListener("mouseout", (e) => {
    const current = e.currentTarget;
    const bgColor = current.dataset.color;
    current.style.background = "none";
    current.style.color = current.dataset.color;
    current.style.textDecoration = "none";
  });
});

//
