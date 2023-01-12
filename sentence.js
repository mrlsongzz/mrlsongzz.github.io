let addLayout = function () {

    //添加诗句容器载体
    let container = "<div class='container'>${content}</div>";
    let sentenceDiv = "<p class='sentence'><span class='sentence-content'>三十年众生牛马，六十年诸佛龙象</span></p>";
    container = container.replace("${content}",sentenceDiv);
    $("#blog_panel").append(container);

    //计算容器位置
    let targetContainer = $("#blog_panel");
    let selfContainer = $(".container");
    let y = $(targetContainer).height();
    let x = $(targetContainer).width();
    x = (x - selfContainer) / 2;
    $(selfContainer).left = x;
}
$(function(){
    addLayout();
})
