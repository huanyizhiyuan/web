//加上export就是导出。
export const animateElement = (element, animation, prefix = 'animate__') => {
    const animationName = `${prefix}${animation}`;
    element.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
        event.stopPropagation();
        element.classList.remove(`${prefix}animated`, animationName);
    }

    element.addEventListener('animationend', handleAnimationEnd, { once: true });
};