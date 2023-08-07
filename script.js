const notify = document.querySelector(".notify_icon");
const count = document.querySelector(".message-count");



notify.addEventListener( "click", () => {
    count.style.display = "flex";
    let c;
    c = Number(count.innerHTML);
    c = c+1;
    count.innerHTML = c;
    
});