window.onload = function() {
    const container = document.getElementById('timeline');

    initInteraction(container);
    function initInteraction(container) {
        const tooltipContainer = document.getElementById('tooltip-container');
        const tooltipContent = document.getElementById('tooltip-content');
        const circles = Array.from(container.contentDocument.querySelectorAll('circle'));

        circles.sort((a, b) => {
            const aCx = parseFloat(a.getAttribute('cx'));
            const bCx = parseFloat(b.getAttribute('cx'));
            return aCx - bCx;
        });

        circles.forEach((circle,index) => {
            circle.addEventListener('mouseover', () => {
                // 设置浮窗内容
                tooltipContent.textContent = `Circle ${index}`;
                // 设置浮窗位置
                const rect = circle.getBoundingClientRect();
                //tooltipContainer.style.left = `${rect.left + rect.width / 2}px`;
                //tooltipContainer.style.top = `${rect.top - 30}px`;
                tooltipContainer.style.display = 'block';
            });
            circle.addEventListener('mouseout', () => {
                tooltipContainer.style.display = 'none';
            });
        });
    }
}