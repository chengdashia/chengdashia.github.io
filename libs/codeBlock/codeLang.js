// 代码块语言识别

$(function () {
  $('.code-area').each(function () {
    var $area = $(this);
    if ($area.children('.code_lang').length) {
      return true;
    }

    var lang_name = '';
    var $figure = $area.children('figure.highlight').first();
    if ($figure.length) {
      lang_name = ($figure.attr('class') || '')
        .replace(/\bhighlight\b/g, '')
        .trim()
        .split(/\s+/)[0] || '';
    } else {
      var $pre = $area.children('pre').first();
      lang_name = ($pre.attr('class') || '')
        .replace('line-numbers', '')
        .replace('language-', '')
        .trim();
    }

    $area.prepend($('<div class="code_lang" title="代码语言"></div>').text(lang_name));
  });
});
