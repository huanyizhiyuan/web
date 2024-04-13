// booknbody.js
const imageBody = [
    '著作形式主要是以细草的方式对《九章算术》进行深入的解读和注释，同时补充了一些新的问题和解法。',//0
    '经典注释与数学融合的典范。',//1
    '的著作形式是一部综合性的数学教材，它主要以介绍西方数学知识为主，并结合中国传统数学的内容进行编纂。采用了分卷分章的结构，全书共分为十卷，每卷又分为若干章节。',//2
    '是在尊重原著的基础上，结合翻译者的理解和表达方式，用清晰易懂的语言对原著进行翻译和解释，',//3

    '可能采用了古代算经的典型著作形式。它可能包含了祖冲之在数学领域的各种发现、定理和证明，以及对这些问题的详细解释和讨论。',//4
    '以算术为主题，详细论述了如何计算球的体积等问题。',//5
    '采用了系统性和逻辑性的结构，全书内容围绕圆和球体的几何特性展开，逐步深入探讨了与圆和球体相关的各种数学问题，在表述上注重文字和图形的结合，通过插入大量的图示和图解，直观地展示了各种几何概念和定理的证明过程，使得复杂的数学问题变得易于理解和接受。',//6
    '以笔记体的形式记录，分为多个门类和卷目，涵盖了广泛的内容',//7
    '以历法为核心，结合了多学科的知识和方法，形成了系统完整、精确性高的历法著作。',//8

    '以数学问题为纲，通过设立和解决具体问题来展示数学原理和方法。',//9
    '以“五曹”即五个官府部门为背景，通过解决实际行政工作中遇到的各种算术问题来展示数学方法和应用。',//10
    '以数学问题集的形式呈现，全书共分为九章，涵盖了九个不同领域的数学问题',//11
    '主要是以数学问题为主线，围绕“圆城图式”展开，通过设立各种与圆有关的问题，展示了解决这些问题所需的数学知识和方法。',//12
    '是一部深入研究和探讨垛积问题的数学专著，由清代数学家李善兰所撰写。该书在形式上采用了分卷分章的结构，全书共分为四卷，各自成章，通过详细的表、图、法来展示和解释各种垛积问题。',//13
    '数学领域的著作形式是以工艺实践为载体，将数学知识融入其中，通过具体的计算和描述来展示数学的应用价值。',//14
    '是以数学问题和算法为主线，通过分卷、分类的方式，系统地阐述了杨辉在数学领域的创新成果和方法。',//15
    '以数学问题为主线，通过分卷、分门别类的方式系统地阐述了朱世杰在多元高次方程组的解法等方面的研究成果。',//16
    '以数学问题为引导，通过分卷、分门别类的方式，系统地介绍了数学的基础知识和应用方法',//17
    '主要是以数学问题为研究对象，通过深入探讨和解析这些问题，来展示作者在数学领域的独到见解和创新成果。',//18

    '主要是以问答式为主，通过一系列的问题和解答来展示数学知识和方法。',//19
    '是以对话的形式，通过周朝时期的两位学者商高和周公的对话，来阐述当时的数学和天文学知识。',//20

    '主要是图文结合，既有图形的直观展示，又有文字的详细解释',//21
    '是一部深入研究和探讨垛积问题的数学专著，由清代数学家李善兰所撰写。该书在形式上采用了分卷分章的结构，全书共分为四卷，各自成章，通过详细的表、图、法来展示和解释各种垛积问题。',//22
    '采用了分册分篇的结构，每册都围绕特定的数学主题展开，内容相对独立但又相互联系。对每个数学问题都进行了详细的推导和证明。他采用了文字和图形相结合的方式，通过插入图表和图示来直观地解释数学概念和解题过程。',//23
    '是一部集大成的数学百科全书，它采用了分卷分篇的结构，采用了文字和图形相结合的形式，通过插入大量的图表、图示和图解，直观地展示了数学概念和解题过程。',//24
    '是一部集大成的历法丛书，它采用了分篇分卷的结构，在内容编排上，《崇祯历书》按照天文、历法、数学等领域进行了系统的分类和整理。并采用了图文并茂的形式。',//25
    '采用了系统性和逻辑性的结构，全书内容围绕圆和球体的几何特性展开，逐步深入探讨了与圆和球体相关的各种数学问题，在表述上注重文字和图形的结合，通过插入大量的图示和图解，直观地展示了各种几何概念和定理的证明过程，使得复杂的数学问题变得易于理解和接受。',//26
    '采用了分卷分章的结构，每卷都围绕特定的数学主题展开，内容涵盖了数学的多个领域，在表述上注重图文并茂，通过文字和图形的结合，直观地展示了数学概念、原理和解题方法。',//27
    '既注重理论知识的系统阐述，又强调实用性和应用性，采用了图文并茂的方式，通过大量的插图和示例，直观地展示了各种测量方法和计算过程。',//28
    '注重实用性和便捷性，旨在为读者提供一个快速查阅和引用三角函数值的工具。同时，通过图表和文字的结合，使得复杂的三角函数知识得以更加直观和易于理解的方式呈现给读者。',//29
    '作为中国第一部三角学著作，具有很高的学术价值和历史地位。其具有清晰的结构、图文并茂的表述方式、简练的语言风格以及实用性强的特点',//30
    '主要是以数学问题为主线，结合图解法进行阐述和解析。',//31

    '是一部集合性的丛书，主要以梅文鼎及其孙子梅珏成的天文、数学著作为主体，经过整理和编纂而成。采用了分卷分篇的结构。',//32
    '以数学问题为主线，通过分门别类地编排数学问题和解题方法，形成了一部系统完整的数学著作。',//33
    '涉及数学领域的著作形式并不是直接呈现数学理论或算法，而是通过历史事件的叙述，间接地反映出当时数学的应用和重要性。',//34
    '以分卷、分类的方式系统地介绍了天文历法领域的知识和方法'//35
];

export default imageBody;