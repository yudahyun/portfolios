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

//해더 메뉴 펼쳐지기 
document.querySelectorAll(".sub-menu").forEach((v, i) => {
  // console.log(v.firstChild);

  v.addEventListener("mouseover", (e) => {
    const sub = e.currentTarget.children[1];
   
    sub.style.height = "auto";
   
  });
  v.addEventListener("mouseout", (e) => {
    const sub = e.currentTarget.children[1];
    sub.style.height = "0";
   
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


//애니메이션 클래스 추가 함수
function addFadein(element) {
  element.classList.add("animate__animated");
  element.style.display = "block";
  return element;
}

//최상단 애니매이션 바로 실행 
document.querySelectorAll(".show-main *").forEach((v, i) => {
  setTimeout(() => { addFadein(v);}, i * 700);
});



//스크롤 위치 감지하여 애니매이션 시작
window.addEventListener("scroll", (e) => {
  //스크롤바의 Y 좌표
  let scrollTop = window.scrollY;
  //section-4
  if (scrollTop >= 500) {
    document.querySelectorAll(".fadein_1").forEach((v, i) => {
      // console.log(scrollTop);
      v.style.display = "block";
    });
    //section-5
    if (scrollTop >= 1000) {
      document
        .querySelector(".indonesia-wrap")
        .classList.add("animate__fadeIn");
      //section-6
      if (scrollTop >= 1400) {
        // document.querySelector(".pick-txt-wrap").classList.add("animate__fadeIn");
        document.querySelectorAll(".pick-txt-wrap img").forEach((v, i) => {
          setTimeout(() => {
            v.classList.add("animate__fadeInLeft");
          }, i * 200);
        });
        setTimeout(() => {
          document
            .querySelector(".pick-txt-wrap a")
            .classList.add("animate__fadeIn");
        }, 800);
        //section-7
        if (scrollTop >= 2000) {
          document
            .querySelector(".reserve-wrap-img")
            .classList.add("animate__fadeIn");
            //section-8
          if (scrollTop >= 2400) {

            document.querySelectorAll(".store-wrap img").forEach((v, i) => {
              v.classList.add("animate__fadeIn");
            });
            document.querySelectorAll(".store-wrap *").forEach((v, i) => {
              setTimeout(() => {
                v.classList.add("animate__fadeInRight");
              }, i * 300);
            });

          }
        }
      }
    }
  }
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

// $('.center').slick();