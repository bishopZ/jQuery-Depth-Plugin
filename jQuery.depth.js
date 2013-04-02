(function($){
	$.fn.depth = function(){
		return parseInt(this.css('z-index'),10) || 0;
	};	
	$.fn.depths = function(){
		var elms = this.siblings();
		return elms.map(function(i,c){ return $(c).depth(); });
	};
	$.fn.nextDepth = function(){
		var depths = this.depths();
		return Math.max.apply( Math, depths );
	};
})(jQuery);