$(".menu-btn").click(function () {
	$("ul").toggleClass("active");
	$(".nav-cover").toggleClass("active");
	if ($("ul").hasClass("active")) {
		$(this).attr("src", "./assets/images/icon-menu-close.svg");
	} else {
		$(this).attr("src", "./assets/images/icon-menu.svg");
	}
});
