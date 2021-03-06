$(function(){
    var section = $('#contents > .parallax > div');
	var sectionInfo = [];  
	var objectInfo = [];
	var totalSize = section.size();
	
	section.each(function(i){
		var tg = $(this);
		sectionInfo.push(tg.offset().top);
		
		objectInfo.push([]);
		var child = tg.children();
		
		child.each(function(j){
			var t = $(this);
			objectInfo[i][j] = t.position().top
		});
		
		var upBtn = tg.find('>.tit>.arrow>a:eq(0)');
		var downBtn = tg.find('>.tit>.arrow>a:eq(1)');
		
		upBtn.click(function(e){
			e.preventDefault();
			if(i==0) return;
			move(i-1);
		});
		downBtn.click(function(e){
			e.preventDefault();
			if(i==totalSize -1) return;
			move(i+1);
		});
	});
	
	function move(sectionIndex){
		var tt = sectionInfo[sectionIndex];
		$('html, body')
		.stop()
		.animate({scrollTop:tt},{duration:600,ease:'easeOutCubic'});
	}
	// console.log(objectInfo);  
	
	
	section.css('position','fixed'); // 
	
	$(window).scroll(function(){
		var sct = $(window).scrollTop();  // 
		
		section.each(function(i){
			var tg = $(this);
			var tt = -1 * sct + sectionInfo[i];
			//
			if(sct > sectionInfo[i]) tt *= 0.5;
			// 
			tg.css('top',tt);
			
			var child = tg.children();
			child.each(function(j){
				var t = $(this);
				var start = sectionInfo[i];
				var end = sectionInfo[i+1];
				if(!end) end = $(document).height();
				
				var min = objectInfo[i][j];
				var max = objectInfo[i][j] + j * 200 + 100;
				var objT = (sct-start) * (max-min) / (end-start) + min;
				t.css({top:objT});
				// start : min = max : end
				// (end-start) : (scrollTop - start) = (max - min) : (objectTop - min)
				// (objectTop - min)*(end-start)=(scrollTop - start)*(max - min)
				// (objectTop - min) = (scrollTop - start)*(max - min) / (end-start) + min
			});
		});
	});
	$("div#mSection01").on("mousemove",function(e){ //.
		var posX = e.pageX;
		var posY= e.pageY;
		
		$(".obj01").css({"right":0-(posX/30) , "bottom": 0-(posY/30) }); 
		$(".obj01").css({"right":130+(posX/20) , "bottom": -40+(posY/20) });
	});
	var ht = $(window).height();
	$("section").height(ht); 
	
	$(window).on("resize",function(){
		var ht = $(window).height(); 
		$("section").height(ht);		
	});
});