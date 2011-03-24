$(document).ready(function() {
	$("#fundo").append(contatos).fadeIn("slow");
	
	// Contact button
	$("#bcont").click(function(e) {
		e.preventDefault();
		
		$("#fundo").empty();
		$("#fundo").append(contatos).fadeIn("slow");
		
		_gaq.push(['_trackEvent', 'Botoes', 'Click', 'Contatos']);
	});
	
	// Professional button
	$("#bprof").click(function(e) {
		e.preventDefault();
		
		$("#fundo").empty();
		$("#fundo").append(profissional).fadeIn("slow");
		
		_gaq.push(['_trackEvent', 'Botoes', 'Click', 'Profissional']);
	});
	
	// Projects button
	$("#bproj").click(function(e) {
		e.preventDefault();
		
		$("#fundo").empty();
		$("#fundo").append(projetos).fadeIn("slow");
		
		_gaq.push(['_trackEvent', 'Botoes', 'Click', 'Projetos']);
	});
	
	// Track External links
	$(".external").click(function(e) {
		var dest = $(this).attr('href');
		
		_gaq.push(['_trackEvent', 'Externos', 'Click', dest]);
	});
	
	// Track contact links
	$(".contact").click(function(e) {
		var dest = $(this).attr('href');
		
		_gaq.push(['_trackEvent', 'Contatos', 'Click', dest]);
	});
});
