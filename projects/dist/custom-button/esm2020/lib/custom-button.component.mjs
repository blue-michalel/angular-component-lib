import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CustomButtonComponent {
    constructor() {
        /**
         * Is this the principal call to action on the page?
         */
        this.primary = false;
        /**
         * How large should the button be?
         */
        this.size = 'medium';
        /**
         * Button contents
         *
         * @required
         */
        this.label = 'Button';
        /**
         * Optional click handler
         */
        this.onClick = new EventEmitter();
    }
    get classes() {
        const mode = this.primary ? 'lib-button--primary' : 'lib-button--secondary';
        return ['lib-button', `lib-button--${this.size}`, mode];
    }
}
CustomButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CustomButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: CustomButtonComponent, selector: "lib-custom-button", inputs: { primary: "primary", backgroundColor: "backgroundColor", size: "size", label: "label" }, outputs: { onClick: "onClick" }, ngImport: i0, template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`, isInline: true, styles: [".lib-button{font-weight:700;border:0;border-radius:3em;cursor:pointer;display:inline-block;line-height:1}.lib-button--primary{color:#fff;background-color:#1ea7fd}.lib-button--secondary{color:#333;background-color:transparent;box-shadow:#00000026 0 0 0 1px inset}.lib-button--small{font-size:12px;padding:10px 16px}.lib-button--medium{font-size:14px;padding:11px 20px}.lib-button--large{font-size:16px;padding:12px 24px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-custom-button', template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`, styles: [".lib-button{font-weight:700;border:0;border-radius:3em;cursor:pointer;display:inline-block;line-height:1}.lib-button--primary{color:#fff;background-color:#1ea7fd}.lib-button--secondary{color:#333;background-color:transparent;box-shadow:#00000026 0 0 0 1px inset}.lib-button--small{font-size:12px;padding:10px 16px}.lib-button--medium{font-size:14px;padding:11px 20px}.lib-button--large{font-size:16px;padding:12px 24px}\n"] }]
        }], propDecorators: { primary: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], size: [{
                type: Input
            }], label: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2N1c3RvbS1idXR0b24vc3JjL2xpYi9jdXN0b20tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFjdkUsTUFBTSxPQUFPLHFCQUFxQjtJQVpsQztRQWFFOztXQUVHO1FBRUgsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVFoQjs7V0FFRztRQUVILFNBQUksR0FBaUMsUUFBUSxDQUFDO1FBRTlDOzs7O1dBSUc7UUFFSCxVQUFLLEdBQUcsUUFBUSxDQUFDO1FBRWpCOztXQUVHO1FBRUgsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7S0FPckM7SUFMQyxJQUFXLE9BQU87UUFDaEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO1FBRTVFLE9BQU8sQ0FBQyxZQUFZLEVBQUUsZUFBZSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7bUhBckNVLHFCQUFxQjt1R0FBckIscUJBQXFCLDRMQVZ0Qjs7Ozs7OztZQU9BOzRGQUdDLHFCQUFxQjtrQkFaakMsU0FBUzsrQkFDRSxtQkFBbUIsWUFDbkI7Ozs7Ozs7WUFPQTs4QkFRVixPQUFPO3NCQUROLEtBQUs7Z0JBT04sZUFBZTtzQkFEZCxLQUFLO2dCQU9OLElBQUk7c0JBREgsS0FBSztnQkFTTixLQUFLO3NCQURKLEtBQUs7Z0JBT04sT0FBTztzQkFETixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWN1c3RvbS1idXR0b24nLFxuICB0ZW1wbGF0ZTogYCA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICBbbmdDbGFzc109XCJjbGFzc2VzXCJcbiAgICBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogYmFja2dyb3VuZENvbG9yIH1cIlxuICA+XG4gICAge3sgbGFiZWwgfX1cbiAgPC9idXR0b24+YCxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21CdXR0b25Db21wb25lbnQge1xuICAvKipcbiAgICogSXMgdGhpcyB0aGUgcHJpbmNpcGFsIGNhbGwgdG8gYWN0aW9uIG9uIHRoZSBwYWdlP1xuICAgKi9cbiAgQElucHV0KClcbiAgcHJpbWFyeSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGF0IGJhY2tncm91bmQgY29sb3IgdG8gdXNlXG4gICAqL1xuICBASW5wdXQoKVxuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhvdyBsYXJnZSBzaG91bGQgdGhlIGJ1dHRvbiBiZT9cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNpemU6ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZScgPSAnbWVkaXVtJztcblxuICAvKipcbiAgICogQnV0dG9uIGNvbnRlbnRzXG4gICAqXG4gICAqIEByZXF1aXJlZFxuICAgKi9cbiAgQElucHV0KClcbiAgbGFiZWwgPSAnQnV0dG9uJztcblxuICAvKipcbiAgICogT3B0aW9uYWwgY2xpY2sgaGFuZGxlclxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG4gIHB1YmxpYyBnZXQgY2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgbW9kZSA9IHRoaXMucHJpbWFyeSA/ICdsaWItYnV0dG9uLS1wcmltYXJ5JyA6ICdsaWItYnV0dG9uLS1zZWNvbmRhcnknO1xuXG4gICAgcmV0dXJuIFsnbGliLWJ1dHRvbicsIGBsaWItYnV0dG9uLS0ke3RoaXMuc2l6ZX1gLCBtb2RlXTtcbiAgfVxufVxuIl19