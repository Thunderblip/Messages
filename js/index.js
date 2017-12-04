var notification_count=0;

$(document).ready()
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage("I Ganon, will save us", 5000);
	});

    $('#messageButton2').on('click', function() {
		createMessage("Run away little girl, run away", 5000);
	});
    
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



function createMessage(message, durationof){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: message, duration: durationof}); 
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

 function Timer { setInterval(function(){alert("YOU ARE STILL A WEEB")},10000)
                }

 function Timer2 { setInterval(function(){alert("NANIIIIIIIIIIII?!?!")},10000)
                }

// function dialogDismissed(buttonIndex) {
	
// 	if(buttonIndex==1) createMessage("You're a weeb", 4000);
//   	else if(buttonIndex==2) createMessage("NANI?", 4000);

// }

function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) {
        createMessage("You're a weeb", 4000);
        Timer;
        
        else if(buttonIndex==2) createMessage("NANI?", 4000);

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
    
    cordova.plugins.notification.local.on("click", function (notification) {
        alert("Hello there");
});
    
}