let containerTop = 0;
let containerBottom = 0;
let blank1Top = 0;
let blank1Bottom = 0;
let scrollTop = 0;
let isHorizontalScroll = false;
let scrollLeftxxx = 0;
let maxScrollLeft = 0;

export function handleScrollxxx(blank1Ref, containerRef, bgRef) {
    const container = containerRef.value;
    const bger = bgRef.value;
    const blank1er = blank1Ref.value;

    if(bger && blank1er){
        // console.log("两者启动了！！");

        blank1Top = blank1er.offsetTop;
        blank1Bottom = blank1Top + blank1er.offsetHeight;

        // console.log('$');
        // console.log('scrollTop=' + scrollTop);
        // console.log('blank1Top=' + blank1Top);
        // console.log('blank1Bottom=' + blank1Bottom);
        // console.log('$\n');

        blank1er.addEventListener('wheel', (event) => {
            scrollTop = bger.scrollTop;
            if(scrollTop >= blank1Top + 300){
                console.log("传送启动!!!");
                smoothScrollToContainer();
            }
        })
    }
    if (container && bger && blank1er) {
        console.log("三者启动了！！");

        containerTop = container.offsetTop;
        containerBottom = containerTop + container.offsetHeight;
        // scrollLeft = container.scrollLeft;
        // maxScrollLeft = container.scrollWidth - container.clientWidth;
        isHorizontalScroll = false;

        container.addEventListener('wheel', (event) => {
            event.preventDefault();

            scrollLeftxxx = container.scrollLeft;
            maxScrollLeft = container.scrollWidth - container.clientWidth;

            // console.log('scrollLeft='+scrollLeftxxx);
            // console.log('maxScrollLeft='+maxScrollLeft);
            // console.log('event.deltaY='+event.deltaY);
            if (scrollLeftxxx === 0 && event.deltaY < 0) {
                isHorizontalScroll = false;
            }
            else if (scrollLeftxxx >= 0 && scrollLeftxxx < maxScrollLeft - 10) {
                //详细写清楚每一部分动画应该写什么交互。
                isHorizontalScroll = true;
                // if(scrollLeft <= maxScrollLeft - 1) {}
            }
            else isHorizontalScroll = !(scrollLeftxxx >= maxScrollLeft - 10 && event.deltaY > 0);
            // else if(scrollLeftxxx >= 2654  && event.deltaY > 0) {
            //     isHorizontalScroll = false;
            // }
            // console.log(isHorizontalScroll);
            // console.log("bger.scrollTop = " + bger.scrollTop)
            if (isHorizontalScroll) {
                container.scrollLeft += event.deltaY;
            }
            else {
                bger.scrollTop += event.deltaY;
            }
        });
    }
    const smoothScrollToContainer = () => {
        // console.log("开始传送。");
        bger.scrollTo({ top: containerTop, behavior: 'smooth' });
    };
}