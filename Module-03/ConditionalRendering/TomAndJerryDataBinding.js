    import { LightningElement } from 'lwc';
    import TomImage from '@salesforce/resourceUrl/TomImage';
    import JeryImage from '@salesforce/resourceUrl/JeryImage';
    
    export default class TomAndJerryDataBinding extends LightningElement {
        showTemplateOne = true;
    
        firstImage = TomImage;
        secondImage = JeryImage;
        switchImages() {
            this.showTemplateOne = !this.showTemplateOne;
        }
    }
