// 代码块收缩

$(function () {
  $('.code-expand').on('click', function () {
    // Rebind below after adding icons for existing pages loaded from cache.
  });

  $('.code-area').each(function () {
    var $area = $(this);
    if (!$area.children('.code-expand').length) {
      $area.prepend('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');
    }
  });

  $('.code-area .code-expand').off('click').on('click', function () {
    var $area = $(this).parent();
    var $content = $area.children('figure.highlight, pre');
    if ($(this).parent().hasClass('code-closed')) {
      $content.show();
      $area.removeClass('code-closed');
    } else {
      $content.hide();
      $area.addClass('code-closed');
    }
  });
});
