$(document).ready(function() {

	$(".btn-backtotops").hide()
	$(window).scroll(function() {
		let scrollTop = $(this).scrollTop()
		if(scrollTop >= 370) {
			$(".btn-backtotops").fadeIn(1000)
		} else {
			$(".btn-backtotops").fadeOut(1000)
		}
	})

	//header
	$(window).scroll(function() {
	var getscrolltop =	$(window).scrollTop();
	//console.log(getscrolltop);
	if(getscrolltop >= 500) {
		$(".navbar").css({
			"background-color" : "white",
			"border-bottom": "1px solid rgba(127,127,127,0.4)"
		});

		$(".nav-link").css("color", "black");

		$(".navbar img").attr("src", "C:/Users/TOPZEROGAMING/Desktop/BCJ1/bemax/assets/img/logo-dark.png");
	}
	});


	//portfolio
	$(".portlists").click(function() {
		$(this).addClass("active").siblings().removeClass("active");

		var getattvalue = $(this).attr("data-filter");
		console.log(getattvalue);

		if(getattvalue === "all") {
			$(".filters").show("explode", 500);
		} else {
			$(".filters").hide();
			$(".filters").not("." +getattvalue).hide();
			$(".filters").filter("." +getattvalue).show("explode", 500);
		}
	});


	//service
	$(".servicecards").click(function() {
		$(this).addClass("bg-light");
		$(this).children('p').css("color", "black");

		$(this).siblings().removeClass("bg-light");
		// $(this).children('p').css("color", "white")
	});

	//footer
	let getyear = $("#year");
	let thisyear = new Date().getUTCFullYear();
	getyear.text(thisyear);

});

// let incnum = document.getElementById("inc").innerHTML;
// function increasenumbers() {
//     incnum++;
// 	console.log(incnum, typeof incnum);
// }
// const myinterval = setInterval(increasenumbers, 100)
// function mystop () {
// 	clearInterval(myinterval)
// }

// if(incnum === 100) {
// 	mystop()
// }
