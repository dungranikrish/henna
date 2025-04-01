


(function($) { "use strict";
	
	

		document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
			t.style.left = n.clientX + "px", 
			t.style.top = n.clientY + "px", 
			e.style.left = n.clientX + "px", 
			e.style.top = n.clientY + "px", 
			i.style.left = n.clientX + "px", 
			i.style.top = n.clientY + "px"
		});
		var t = document.getElementById("cursor"),
			e = document.getElementById("cursor2"),
			i = document.getElementById("cursor3");
		function n(t) {
			e.classList.add("hover"), i.classList.add("hover")
		}
		function s(t) {
			e.classList.remove("hover"), i.classList.remove("hover")
		}
		s();
		for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
			o(r[a])
		}
		function o(t) {
			t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
		}

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//Bride portfolio page
	
	$(".Bride").on('click', function () {
		$("body").addClass("Bride-on");
	});
	$(".Bride-close").on('click', function () {
		$("body").removeClass("Bride-on");
	});

	//Engagement Bride portfolio page
	
	$(".EngagementBride").on('click', function () {
		$("body").addClass("EngagementBride-on");
	});
	$(".EngagementBride-close").on('click', function () {
		$("body").removeClass("EngagementBride-on");
	});
	//babyshower portfolio page
	
	$(".babyshower").on('click', function () {
		$("body").addClass("babyshower-on");
	});
	$(".babyshower-close").on('click', function () {
		$("body").removeClass("babyshower-on");
	});
	
	//Siders portfolio page
	
	$(".Siders").on('click', function () {
		$("body").addClass("Siders-on");
	});
	$(".Siders-close").on('click', function () {
		$("body").removeClass("Siders-on");
	});

	
	//Minimal page
	
	$(".Minimal").on('click', function () {
		$("body").addClass("Minimal-on");
	});
	$(".Minimal-close").on('click', function () {
		$("body").removeClass("Minimal-on");
	});
	
})(jQuery);