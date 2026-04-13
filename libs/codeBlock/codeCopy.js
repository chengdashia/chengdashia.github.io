// 代码块一键复制

$(function () {
    $('.code-area').each(function () {
        var $area = $(this)
        if (!$area.children('.code_copy').length) {
            $area.prepend('<i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i>')
        }
        if (!$area.children('.codecopy_notice').length) {
            $area.prepend('<div class="codecopy_notice"></div>')
        }
    })

    function getCodeText($area) {
        var $figure = $area.children('figure.highlight').first()
        if ($figure.length) {
            return $figure.find('td.code .line').map(function () {
                return $(this).text()
            }).get().join('\n')
        }

        var $code = $area.children('pre').find('code').first()
        if ($code.length) {
            return $code.text()
        }

        return $area.children('pre').first().text()
    }

    // “复制成功”字出现
    function copy(text, ctx) {
        if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
            try {
                var textarea = document.createElement('textarea')
                textarea.value = text
                textarea.setAttribute('readonly', '')
                textarea.style.position = 'fixed'
                textarea.style.left = '-9999px'
                document.body.appendChild(textarea)
                textarea.select()
                document.execCommand('copy') // Security exception may be thrown by some browsers.
                document.body.removeChild(textarea)
                $(ctx).prev('.codecopy_notice')
                    .text("复制成功")
                    .animate({
                        opacity: 1,
                        top: 30
                    }, 450, function () {
                        setTimeout(function () {
                            $(ctx).prev('.codecopy_notice').animate({
                                opacity: 0,
                                top: 0
                            }, 650)
                        }, 400)
                    })
            } catch (ex) {
                $(ctx).prev('.codecopy_notice')
                    .text("复制失败")
                    .animate({
                        opacity: 1,
                        top: 30
                    }, 650, function () {
                        setTimeout(function () {
                            $(ctx).prev('.codecopy_notice').animate({
                                opacity: 0,
                                top: 0
                            }, 650)
                        }, 400)
                    })
                return false
            }
        } else {
            $(ctx).prev('.codecopy_notice').text("浏览器不支持复制")
        }
    }
    // 复制
    $('.code-area .fa-copy').on('click', function (event) {
        event.preventDefault()
        var text = getCodeText($(this).parent('.code-area'))
        copy(text, this)
    })
});
