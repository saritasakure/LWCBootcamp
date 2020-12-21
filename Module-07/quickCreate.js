import { LightningElement } from 'lwc';

export default class QuickCreate extends LightningElement {
    resetpage = false;
    handleSuccess(event) {
        this.resetpage = true;
        if (this.resetpage == true) {
            this.handleReset();
        }
    }

    handleReset() {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }
}
