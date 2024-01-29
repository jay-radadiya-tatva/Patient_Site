document.getElementById('dark-mode-button').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
    }
})


$(function () {
    var isXS = false,
        $accordionXSCollapse = $('.accordion-xs-collapse');

    var timer;
    $(window).resize(function () {
        if (timer) { clearTimeout(timer); }
        timer = setTimeout(function () {
            isXS = window.innerWidth <= 767;

            if (isXS) {
                $accordionXSCollapse.addClass('collapse');
            } else {
                $accordionXSCollapse.removeClass('collapse');
            }
        }, 0);
    }).trigger('resize');


    $(document).on('click', '.accordion-xs-toggle', function (e) {
        e.preventDefault();

        var $thisToggle = $(this),
            $targetRow = $thisToggle.parent('.tr'),
            $targetCollapse = $targetRow.find('.accordion-xs-collapse');

        if (isXS && $targetCollapse.length) {
            var $siblingRow = $targetRow.siblings('.tr'),
                $siblingToggle = $siblingRow.find('.accordion-xs-toggle'),
                $siblingCollapse = $siblingRow.find('.accordion-xs-collapse');

            $targetCollapse.collapse('toggle'); // Toggle this collapse
            $siblingCollapse.collapse('hide'); // Close siblings

            
        }
    });
});
