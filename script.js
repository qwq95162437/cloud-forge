//选择所有需要做滚动出现动画的元素
const animatedItem = document.querySelectorAll(
    ".mini-card, .skil-card, .step, .section-title, .hero-text, .hero-visual"
);

//先给他们加上初始动画类
animatedItem.forEach(item => {
    item.classList.add("fade-in-up");
});

//创建一个交叉观察器，元素进入屏幕时触发动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

//让每个元素都被观察
animatedItem.forEach(item => {
    observer.observe(item);
});

//平滑滚动增强（点击导航时更顺滑）
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if(targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});