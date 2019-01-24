//I'm using jQuery here.

$('#column-one button').on('click', function() {
	$('h2').css('opacity', 0);
	$('p').css('opacity', 0);
	$('li').css('opacity', 0);
});

$('#column-two button').on('click', function() {
	var myHeading = document.querySelector('h1');
	myHeading.textContent = 'Hufflepuff';

    $('section').css('background-image', 'url("img/pexels-photo-1328891.jpeg")');
	$('header').css('background', '#C74319');
	$('.columns').css('background', 'white');
	$('.columns').css('border', '5px #C74319 dashed');
	$('button').css('background', 'peachpuff');
	$('button').css('border', '5px #C74319 solid');
	$('footer').css('background', 'linear-gradient(-45deg, #4E275E, #C74319, #8C275C)');
});

$('button#return-text').on('click', function() {
	alert('Ouch! Stop poking me! 😄');
	$('h2').css('opacity', 1);
	$('p').css('opacity', 1);
	$('li').css('opacity', 1);
});
