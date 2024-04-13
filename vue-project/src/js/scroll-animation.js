// scroll-animation.js
let deerElement = null;
let deerBorderElement = null;

export function initScrollAnimation() {
    //获取了 #鹿 元素的引用,并添加了滚动事件监听器。
    deerElement = document.querySelector('#鹿');
    deerBorderElement = document.querySelector('#鹿金边');
    window.addEventListener('scroll', scrollHandler);
}
/*
scrollHandler 函数根据当前的滚动位置来设置鹿的位置。
如果滚动位置大于或等于视口高度的 75%,则计算鹿的上升进度 progress。
根据 progress 的值,设置鹿的 translateY transform,实现上升动画效果。
如果滚动位置小于视口高度的 75%,则将鹿的位置重置为初始位置。

这里的 progress 值会随着滚动位置的变化而增加,当滚动位置达到视口高度的 100% 时,progress 值会等于 1。
Math.min((scrollPosition - 0.75 * viewportHeight) / (0.25 * viewportHeight), 1) 这个表达式确保了 progress 值永远不会超过 1。
当 progress 等于 1 时,鹿的 translateY 值就是 -25vh,也就是说,鹿会上升到视口高度的 75% 处。
因此,当你继续滚动页面,滚动位置超过视口高度的 100% 时,progress 值仍然是 1,鹿的位置就不会再变化了,它会保持在视口高度 75% 的位置。

如果你希望鹿在滚动到视口高度的 100% 时完全离开视口,你可以将 translateY 的值改为 -100vh。修改后的代码如下:
 */
const scrollHandler = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;

    if (scrollPosition >= 0.3 * viewportHeight) {
        const progress = Math.min((scrollPosition - 0.75 * viewportHeight) / (0.25 * viewportHeight), 1);
        deerElement.style.transform = `translateY(${-progress * 58}vh)`;
        // 鹿金边的水平移动效果
        const borderProgress = Math.min(scrollPosition / (viewportHeight * 2), 1);
        deerBorderElement.style.transform = `translateX(${borderProgress * 50}vw)`;
    } else {
        deerElement.style.transform = 'translateY(0)';
        deerBorderElement.style.transform = 'translateX(-50%)';
    }
};
/*
destroyScrollAnimation 函数用于移除滚动事件监听器。
使用这段代码,当你滚动页面时,鹿的位置会随着滚动位置的变化而上升,并且在滚动到视口高度的 100% 时停止移动,保持最终位置不变。
 */
export function destroyScrollAnimation() {
    console.log("开始消除！")
    window.removeEventListener('scroll', scrollHandler);
}