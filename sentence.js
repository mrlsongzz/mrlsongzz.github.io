let addLayout = function () {
    let contianer = "<div class='contianer'>${content}</div>";
    let sentenceDiv = "<p class='sentence'><span class='sentence-content'>三十年众生牛马，六十年诸佛龙象</span></p>";
    contianer = contianer.replace("${content}",sentenceDiv);
    $("#blog_head_bar").append("<div>11111111111</div>");
}
$(function(){
    addLayout();
})
