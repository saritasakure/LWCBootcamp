import { LightningElement ,track } from 'lwc';

export default class QuickCreateAccount extends LightningElement {
    @track recordId;
    successHandler(event){
        this.recordId = event.detail.id;
  
}
}
