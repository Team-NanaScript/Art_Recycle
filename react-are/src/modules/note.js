const script = document.createElement("script");
script.innerHTML = ` 
	$(document).ready(function(){
    	$('#summernote').summernote({
    		lang: 'ko-KR',
    		height: 300,                 // 에디터 높이
    		minHeight: null,             // 최소 높이
    		maxHeight: null,
    	});
    })
		  `;
script.type = "text/javascript";
script.async = "async";
document.head.appendChild(script);
