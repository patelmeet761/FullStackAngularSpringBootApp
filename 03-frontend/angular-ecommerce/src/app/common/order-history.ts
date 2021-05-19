import { DatepickerViewModel } from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model";

export class OrderHistory {

    id: string;
    orderTrackingNumber: string;
    totalPrice: number;
    totalQuantity: number;
    dateCreated: Date;
}
