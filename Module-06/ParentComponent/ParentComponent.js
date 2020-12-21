import { LightningElement, api} from 'lwc';

export default class ParentComponent extends LightningElement {
    @api select1='Deselected';
    @api select2='Deselected';
    @api select3='Deselected';
    reset=false;

    @api resetAll(){
        this.select1='Deselected';
        this.select2='Deselected';
        this.select3='Deselected';
        this.template.querySelector("c-child-component-component").resetChild();
    }

    handleClick1(event){
        if(event.target.label ==='Select'){
            this.select1='Deselected';
        }else{
            this.select1='Selected';
        }
     }
     handleClick2(event){
         if(event.target.label==='Select'){
             this.select2='Deselected';
         }else{
             this.select2='Selected';
         }       
     }
     handleClick3(event){
         if(event.target.label==='Select'){
             this.select3='Deselected';
         }else{
             this.select3='Selected';
         }     
     }
}
