$(document).ready(function() {
	$("#conteudo").append(contatos).fadeIn("slow");
	
	// Contact button
	$("#bcont").click(function(e) {
		e.preventDefault();
		
		$("#conteudo").empty();
		$("#conteudo").append(contatos).fadeIn("slow");
		
		_gaq.push(['_trackEvent', 'Botoes', 'Click', 'Contatos']);
	});
	
	// Professional button
	$("#bprof").click(function(e) {
		e.preventDefault();
		
		$("#conteudo").empty();
		$("#conteudo").append(profissional).fadeIn("slow");
		
		_gaq.push(['_trackEvent', 'Botoes', 'Click', 'Profissional']);
	});
	
	// Projects button
	$("#bproj").click(function(e) {
		e.preventDefault();
		
		$("#conteudo").empty();
		$("#conteudo").append(projetos).fadeIn("slow");
		
		_gaq.push(['_trackEvent', 'Botoes', 'Click', 'Projetos']);
	});

	// Tutorials button
	$("#btuto").click(function(e) {
		e.preventDefault();
		
		$("#conteudo").empty();
		$("#conteudo").append(tutoriais).fadeIn("slow");
		
		_gaq.push(['_trackEvent', 'Botoes', 'Click', 'Tutoriais']);
	});
	
	// Publications button
	$("#bpub").click(function(e) {
		e.preventDefault();
		
		$("#conteudo").empty();
		$("#conteudo").append(publicacoes).fadeIn("slow");
		
		_gaq.push(['_trackEvent', 'Botoes', 'Click', 'Publicacoes']);
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
	
	// Track Tutorial links
	$(".tutorial").click(function(e) {
		var dest = $(this).attr('href');
		
		_gaq.push(['_trackEvent', 'Tutoriais', 'Click', dest]);
	});
	
	// Track Download links
	$(".download").click(function(e) {
		var dest = $(this).attr('href');
		
		_gaq.push(['_trackEvent', 'Downloads', 'Click', dest]);
	});
});
