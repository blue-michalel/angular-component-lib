import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomButtonComponent {
    /**
     * Is this the principal call to action on the page?
     */
    primary: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size: 'small' | 'medium' | 'large';
    /**
     * Button contents
     *
     * @required
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick: EventEmitter<Event>;
    get classes(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomButtonComponent, "lib-custom-button", never, { "primary": "primary"; "backgroundColor": "backgroundColor"; "size": "size"; "label": "label"; }, { "onClick": "onClick"; }, never, never, false>;
}
