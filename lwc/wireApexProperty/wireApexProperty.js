import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
export default class CallApexImperative extends LightningElement {
    @api recordId;
    handleButtonClick() {
        getContacts({ //imperative Apex call
            accountId: '$recordId'
        })
            .then(contacts => {
                //code to execute if related contacts are returned successfully
            })
            .catch(error => {
                //code to execute if related contacts are not returned successfully
            });
    }
}