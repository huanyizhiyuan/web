var clickedNode = null; // 定义一个全局变量

Highcharts.chart('container', {
    credits:{
        enabled:false
    },
    //不要标题：
    title: {
        text: ''
    },
    series: [{
        keys: ['from', 'to', 'weight'],
        data: [
            ['刘徽','祖冲之',0.73],
            ['朱世杰','贾宪',0.78],
            ['李冶','杨辉',0.67],
            ['赵爽','刘徽',0.65],
            ['祖冲之','祖暅',0.85],
            ['贾宪','杨辉',0.72],
            ['张丘建','刘徽',0.73],
            ['郭守敬','王恂',0.69],
            ['李冶','朱世杰',0.75],
        ],
        colors:['#b47b7b', 'rgb(221,149,52)', '#FFD468','#6D8DAB', '#d6b0b0', '#9DAE9B', '#93dbca', '#B0B6E4', '#FCC800', '#C0ECE8', '#365740'],
        color:['#93dbca', '#9DAE9B', '#d6b0b0', '#B0B6E4'],
        color1:['#F2E7D1', '#C0ECE8', '#365740'],
        type: 'dependencywheel',
        name: 'Dependency wheel series',
        dataLabels: {
            color: '#333',
            textPath: {
                enabled: true,
                attributes: {
                    dy: 5
                }
            },
            distance: 10
        },
        size: '95%',
        point: {
            events: {
                click: function() {
                    var from = this.from;
                    var to = this.to;
                    var weight = this.weight;

                    //console.log(clickedNode);
                    // 将点击的节点信息存储到全局变量
                    clickedNode = {
                        from: from,
                        to: to
                    };
                    //console.log(clickedNode);
                    // 判断当前点击的是哪个关系,并更新内容栏的内容
                    // if (fromPeople === 'Angola' && toPeople === 'China') {
                    //     document.querySelector('.内容栏').textContent = '我是你爹!!!';
                    // } else {
                    //     document.querySelector('.内容栏').textContent = `从 ${fromCountry} 到 ${toCountry} 的关系强度为 ${weight}`;
                    // }
                    /*
                    // if (( from === '' && to === '' )||( from === '' && to === '')){
                    //     document.querySelector('.内容栏').textContent = ``;
                    // }
                     */
                    if (( from === '刘徽' && to === '祖冲之' )||( from === '祖冲之' && to === '刘徽')){
                        document.querySelector('.neirong').innerHTML = `圆周率计算：
<span class="作者1">刘徽</span>在《九章算术注》中，提出了“割圆术”这一方法，通过多边形逼近圆形来计算圆周率，这一方法极大地提高了<span class="内容变化">圆周率</span>的计算精度。<span class="作者2">祖冲之</span>则在此基础上进一步深入研究，不仅得出了更为精确的圆周率值，还给出了圆周率的上下限，其成果在当时世界数学史上都是领先的。
`;
                    }

                    if (( from === '朱世杰' && to === '贾宪' )||( from === '贾宪' && to === '朱世杰')){
                        document.querySelector('.neirong').innerHTML = `传承：
<span class="作者2">朱世杰</span>《四元玉鉴》不仅总结了<span class="作者1">贾宪</span>在代数方面的成果，还提出了“四元术”这一新的代数方法，用于<span class="内容变化">解决多元高次方程组</span>的问题。
`;
                    }

                    if (( from === '李冶' && to === '杨辉' )||( from === '杨辉' && to === '李冶')){
                        document.querySelector('.neirong').textContent = `方程求解：
李冶提出的“天元术”是一种用未知数表示方程各项系数的方法，这在当时是非常创新的。杨辉则是南宋末年至元初的数学家，他在组合数学方面有着深入的研究。他的著作《详解九章算法》和《杨辉算法》中包含了大量的组合数学问题及其解法，这些解法与李冶的方程求解方法有着密切的联系和传承。
`;
                    }

                    if (( from === '赵爽' && to === '刘徽' )||( from === '刘徽' && to === '赵爽')){
                        document.querySelector('.neirong').textContent = `赵爽是三国时期的数学家，他在《周髀算经》的注解中详细论述了勾股定理，并且利用数形结合的思想给出了勾股定理的证明。这一研究不仅为后世研究勾股定理提供了重要思路，还启发了后世的数学家进行更深入的研究。刘徽在赵爽的基础上，进一步探讨了勾股定理的应用，并将其推广到更一般的情形，为勾股定理在数学领域的应用做出了重要贡献。
`;
                    }

                    if (( from === '祖冲之' && to === '祖暅' )||( from === '祖暅' && to === '祖冲之')){
                        document.querySelector('.neirong').textContent = `祖暅原理：
祖冲之在研究几何体体积计算时，提出了著名的“祖暅原理”，即等高的两个立体，若在所有等高处的截面积相等，则这两个立体的体积相等。这一原理为计算不规则几何体的体积提供了重要方法。祖暅作为祖冲之之子，继承了父亲的研究，进一步发展和完善了这一原理，并将其应用于更广泛的领域，为几何体体积计算的研究做出了重要贡献。
`;
                    }

                    if (( from === '贾宪' && to === '杨辉' )||( from === '杨辉' && to === '贾宪')){
                        document.querySelector('.neirong').textContent = `二项式定理：
贾宪在研究二项式定理时，提出了著名的“贾宪三角”（即帕斯卡尔三角），这一成果为后世研究二项式定理提供了重要工具。杨辉则是南宋时期的数学家，他在贾宪的基础上，进一步发展和完善了二项式定理的研究，提出了更为精确的计算方法和公式。
`;
                    }

                    if (( from === '张丘建' && to === '刘徽' )||( from === '刘徽' && to === '张丘建')){
                        document.querySelector('.neirong').textContent = `线性方程组：
张丘建在《张丘建算经》中详细探讨了线性方程组的求解方法。这些方法在当时的数学界具有创新性，为后续数学家提供了宝贵的思路。刘徽作为魏晋时期的数学家，他在研究数学时受到了张丘建的影响，对线性方程组求解进行了更深入的研究，提出了更为系统和精确的解法。
`;
                    }

                    if (( from === '郭守敬' && to === '王恂' )||( from === '王恂' && to === '郭守敬')){
                        document.querySelector('.neirong').textContent = `天文数学：
郭守敬是元朝时期的数学家和天文学家，他在天文学方面有着卓越的贡献，如改进了历法，制造了天文仪器等。同时，他也对数学有着深入的研究，特别是在三角函数的计算和应用方面。王恂则是郭守敬的同事和合作者，他们在天文学和数学研究上互相启发、共同进步。王恂在数学研究上继承了郭守敬的思想和方法，并将其应用到更广泛的领域。`;
                    }

                    if (( from === '李冶' && to === '朱世杰' )||( from === '朱世杰' && to === '李冶')){
                        document.querySelector('.neirong').textContent = `代数方程解法：
李冶是金元之际的数学家，他在代数方程解法方面有着独到的见解，提出了许多创新的解法。朱世杰作为元朝时期的数学家，他在继承李冶研究的基础上，对代数方程解法进行了更为深入的研究和发展，提出了更为精确和高效的解法，为后世的代数学发展奠定了坚实的基础。`;
                    }
                }
            }
        }
    }]
});