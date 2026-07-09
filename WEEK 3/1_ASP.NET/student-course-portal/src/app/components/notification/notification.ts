import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';


@Component({

selector:'app-notification',

templateUrl:'./notification.html',

providers:[NotificationService]

})
export class NotificationComponent {


constructor(private notificationService: NotificationService){}


sendNotification(){

this.notificationService.show(
"Notification from component"
);

}

}
