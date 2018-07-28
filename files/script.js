

$(document).ready(function() {
    //jquery
    
    
    //the following code is being used to highlight the active menu item by adding menu (css) class to appropriate menu item
    var pathname = window.location.pathname.split( '/' );
    // alert(pathname[pathname.length-1]);
    var pathend = pathname[pathname.length-1];
    
    switch (pathend) {
    	case "research.html":
    		$( "li.research" ).addClass( "active" );
      	break;
      case "facilities.html":
      	$( "li.facilities" ).addClass( "active" );
        	break;
    	case "students.html":
    	case "faculty.html":
    	case "staff.html":
         $( "li.people" ).addClass( "active" );
        	break;
      case "contact.html":
      	$( "li.contact" ).addClass( "active" );
        	break;  	
		default :
			$( "li.home" ).addClass( "active" );
		}
    
    
    //$("[data-toggle='popover']").popover();
    //$('.popover').popover();
    
    $('.popover-dismiss').popover({
  		trigger: 'focus',
  		html: true
		})
    
    
	
});




	  