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
    sub.style.transition = "all 5s";
  });
  v.addEventListener("mouseout", (e) => {
    const sub = e.currentTarget.children[1];
    sub.style.height = "0";
    sub.style.transition = "all 5s";
    // sub.style.display="none";
    // sub.style.height="0";
  });
});

window.addEventListener("scroll",e=>{

  // const documentHeight = document.scrollHeight;
  const scrollTop = window.scrollY;
  scro

});
