var url = window.location.href.split("/")[3];
url = url.replace("#", ""), $("#sidebar li a").map(function () {
	$(this).attr("href") === url && ($(this).addClass("active").closest(".sidebar-submenu").collapse("show"), $(this).closest(".sidebar-dropdown").find(".sidebar-link").addClass("active"))
});
var sidebarLinks = $("#sidebar a.sidebar-link, #sidebar .sidebar-submenu-link")
	, sidebarLinksClass = $("#sidebar .sidebar-link, #sidebar .sidebar-submenu-link");
sidebarLinks.click(function () {
	sidebarLinksClass.removeClass("active"), $(this).addClass("active").closest(".sidebar-submenu").collapse("show"), $(this).closest(".sidebar-dropdown").find(".sidebar-link").addClass("active")
}), $(document).ready(function () {
	$(".sidebar-overlay").click(function () {
		$(".sidebar-overlay").fadeOut(), $("#sidebar").removeClass("active"), $(".navbar-toggle").removeClass("active"), $("body").removeClass("sidebar-collapse-active")
	}), $(".btn-sidebar-collapse").click(function (s) {
		s.preventDefault(), $(this).toggleClass("active"), $("body").toggleClass("sidebar-collapse-active"), $("#sidebar").toggleClass("active"), $(".sidebar-overlay").fadeToggle()
	}), $("#sidebar").mouseover(function () {
		$(this).hasClass("active") ? $(this).addClass("sidebar-collapse-hover") : $(this).removeClass("sidebar-collapse-hover")
	}).mouseout(function () {
		$(this).removeClass("sidebar-collapse-hover")
	})
});