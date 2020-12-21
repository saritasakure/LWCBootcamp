import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api selectButton = 'Select';
    @api btnType = 'success';
    @api num = 'Child One'

@api childReset(){
    this.selectButton = "Select";
    this.btnType = "success";
}
handleOnClick(){
    if(this.selectButton === 'Select'){
        this.selectButton = 'Deselect';
        this.btnType='destructive';
    }else{
        this.selectButton='Select';
        this.btnType='success';
    }
    const childevent = new CustomEvent('customclick',
        {
            bubbles : true,
            composed : true,
            detail: {selAll:this.selectButton}
        
        });

        this.dispatchEvent(childevent);
}
}
