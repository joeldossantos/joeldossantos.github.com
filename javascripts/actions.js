$(document).ready(function() {
	hideAll();
	$("#contato").fadeIn("slow");
	
	// Contact button
	$("#bcont").click(function(e) {
		e.preventDefault();
		
		hideAll();
		
		$("#contato").fadeIn("slow");
	});
	
	// Posts button
	$("#bpost").click(function(e) {
		e.preventDefault();
		
		hideAll();
		
		$("#posts").fadeIn("slow");
	});
	
	// Professional button
	$("#bprof").click(function(e) {
		e.preventDefault();
		
		hideAll();
		
		$("#profissional").fadeIn("slow");
	});
	
	// Peta5 posts subpage
	$("#postsPeta").click(function(e) {
		e.preventDefault();
		
		hideAll();
		
		$("#blog_peta").fadeIn("slow");
	});
	
	// Rafael Carvalho posts subpage
	$("#postsRC").click(function(e) {
		e.preventDefault();
		
		hideAll();
		
		$("#blog_rafael").fadeIn("slow");
	});
	
	// Projects button
	$("#bproj").click(function(e) {
		e.preventDefault();
		
		hideAll();
		
		$("#projetos").fadeIn("slow");
	});
	
	function hideAll() {
		$("#info").hide();
		$("#contato").hide();
		$("#posts").hide();
		$("#profissional").hide();
		$("#projetos").hide();
		$(".listas").hide();
	}
});
