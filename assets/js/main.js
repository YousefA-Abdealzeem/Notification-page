$(document).ready(() => {
    function counter() {
        $(".counter").text($(".unread").length);
    }
    counter();
    let notification = $(".notification");
    notification.click((e) => {
        let unread = $(e.currentTarget);
        if (unread.hasClass("unread")) {
            unread.removeClass("unread");
            unread.find(".unread-span").addClass("d-none");
            counter();
        }
    });
    let markAll = $("button");
    markAll.click(() => {
        notification.each(function () {
            if ($(this).hasClass("unread")) {
                $(this).removeClass("unread");
                $(this).find(".unread-span").addClass("d-none");
            }
        });
        counter();
    });
    let notify_pannel = $(".container-fluid");
    let icon = $(".openIcon i");
    $(".openIcon").click(() => {
        notify_pannel.toggleClass("open");
        if (notify_pannel.hasClass("open")) {
            notify_pannel.css("height", `${notify_pannel.prop('scrollHeight')}px`);
            icon.css("transform", "rotate(180deg)");
        } else {
            notify_pannel.css("height", "0px");
            icon.css("transform", "rotate(0deg)");
        }
    });
});