window.onload = function () {
  //마우스 호버 시 인스타 텍스트 나타남
  document.querySelectorAll(".hover-txt").forEach((v, i) => {
    v.addEventListener("mouseover", (e) => {
      const target = e.currentTarget;
      // console.log(target);
      target.classList.add("opacity-1");
    });
    v.addEventListener("mouseout", (e) => {
      const target = e.currentTarget;
      // console.log(target);
      target.classList.remove("opacity-1");
    });
  });
  console.log(document.querySelector(".hover-txt"));
};

// 언어 선택
document.querySelector("#langSelect").addEventListener("click", (e) => {
  const target = e.currentTarget;
  target.classList.toggle("active");
  document.querySelector(".arrow").classList.toggle("arrow-down");
  document.querySelector(".lang-select").classList.toggle("display-block");
});

//클로즈 버튼 애니메이션
document.querySelectorAll(".spin-btn").forEach((v, i) => {
  v.addEventListener("mouseover", (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("spin");
    e.currentTarget.classList.remove("spin-2");
  });
  v.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("spin-2");
    e.currentTarget.classList.remove("spin");
  });
});

const wrapper = document.querySelector(".bussiness-wrapper");

// 회사 소개 리스트
document.querySelectorAll(".navigate-list  li").forEach((v, i) => {
  v.addEventListener("mouseover", (e) => {
    if (e.currentTarget == document.querySelector(".bussiness-li")) {
      wrapper.style.height = "65px";
      wrapper.style.display = "block";
    } else {
      wrapper.style.height = "0";
      wrapper.style.display = "none";
    }
  });
});

// 회사 소개 리스트
document.querySelector(".bussiness-info").addEventListener("mouseover", (e) => {
  wrapper.style.height = "65px";
  wrapper.style.display = "block";
});
document.querySelector(".close-bussiness").addEventListener("click", (e) => {
  wrapper.style.height = "0";
  wrapper.style.display = "none";
});

document.querySelector(".search-window-btn").addEventListener("click", (e) => {
  document.querySelector(".search-window").style.display = "block";
  document.querySelector(".gray-bg").style.display = "block";
});
document.querySelector(".close-search").addEventListener("click", (e) => {
  document.querySelector(".search-window").style.display = "none";
  document.querySelector(".gray-bg").style.display = "none";
});
