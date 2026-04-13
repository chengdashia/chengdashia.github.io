// 代码块功能依赖

$(function () {
    $('figure.highlight').each(function () {
        var $figure = $(this);
        if (!$figure.parent().hasClass('code-area')) {
            $figure.wrap('<div class="code-area" style="position: relative"></div>');
        }
    });

    $('pre').not('figure.highlight pre').each(function () {
        var $pre = $(this);
        if (!$pre.parent().hasClass('code-area')) {
            $pre.wrap('<div class="code-area" style="position: relative"></div>');
        }
    });
});
