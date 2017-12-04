var notification_count=0;

$(document).ready()
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
    
    $('#messageButton2').on('click', function() {
		createMessage2();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: "You're a fuckin' Weeb", duration: 4000}); 
}

function createMessage2(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'NANI?', duration: 4000}); 
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Do you love anime?!',  // message
        dialogDismissed,         // callback
        'An example dialog!',            // title
        ['Hell yeah!', 'Um no']                  // buttons
    );

}
        	
  
// THIS IS ORIGINAL CODE       	
// function dialogDismissed(buttonIndex) {
	
	// if(buttonIndex==1) new Toast({content: "You're easily pleased", duration: 3000});
   	// else if(buttonIndex==2) new Toast({content: 'It is rather boring.', duration: 3000});

//  }

function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast(createmessage());
   	else if(buttonIndex==2) new Toast(createmessage2());

 }

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 1000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
    
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"This is an example notification",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}