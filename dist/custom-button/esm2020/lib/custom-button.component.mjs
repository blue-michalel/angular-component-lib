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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jdXN0b20tYnV0dG9uL3NyYy9saWIvY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBY3ZFLE1BQU0sT0FBTyxxQkFBcUI7SUFabEM7UUFhRTs7V0FFRztRQUVILFlBQU8sR0FBRyxLQUFLLENBQUM7UUFRaEI7O1dBRUc7UUFFSCxTQUFJLEdBQWlDLFFBQVEsQ0FBQztRQUU5Qzs7OztXQUlHO1FBRUgsVUFBSyxHQUFHLFFBQVEsQ0FBQztRQUVqQjs7V0FFRztRQUVILFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0tBT3JDO0lBTEMsSUFBVyxPQUFPO1FBQ2hCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztRQUU1RSxPQUFPLENBQUMsWUFBWSxFQUFFLGVBQWUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7O21IQXJDVSxxQkFBcUI7dUdBQXJCLHFCQUFxQiw0TEFWdEI7Ozs7Ozs7WUFPQTs0RkFHQyxxQkFBcUI7a0JBWmpDLFNBQVM7K0JBQ0UsbUJBQW1CLFlBQ25COzs7Ozs7O1lBT0E7OEJBUVYsT0FBTztzQkFETixLQUFLO2dCQU9OLGVBQWU7c0JBRGQsS0FBSztnQkFPTixJQUFJO3NCQURILEtBQUs7Z0JBU04sS0FBSztzQkFESixLQUFLO2dCQU9OLE9BQU87c0JBRE4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jdXN0b20tYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGAgPGJ1dHRvblxuICAgIHR5cGU9XCJidXR0b25cIlxuICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgW25nQ2xhc3NdPVwiY2xhc3Nlc1wiXG4gICAgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGJhY2tncm91bmRDb2xvciB9XCJcbiAgPlxuICAgIHt7IGxhYmVsIH19XG4gIDwvYnV0dG9uPmAsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbS1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tQnV0dG9uQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIElzIHRoaXMgdGhlIHByaW5jaXBhbCBjYWxsIHRvIGFjdGlvbiBvbiB0aGUgcGFnZT9cbiAgICovXG4gIEBJbnB1dCgpXG4gIHByaW1hcnkgPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hhdCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHVzZVxuICAgKi9cbiAgQElucHV0KClcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIb3cgbGFyZ2Ugc2hvdWxkIHRoZSBidXR0b24gYmU/XG4gICAqL1xuICBASW5wdXQoKVxuICBzaXplOiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnID0gJ21lZGl1bSc7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb250ZW50c1xuICAgKlxuICAgKiBAcmVxdWlyZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxhYmVsID0gJ0J1dHRvbic7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGNsaWNrIGhhbmRsZXJcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblxuICBwdWJsaWMgZ2V0IGNsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLnByaW1hcnkgPyAnbGliLWJ1dHRvbi0tcHJpbWFyeScgOiAnbGliLWJ1dHRvbi0tc2Vjb25kYXJ5JztcblxuICAgIHJldHVybiBbJ2xpYi1idXR0b24nLCBgbGliLWJ1dHRvbi0tJHt0aGlzLnNpemV9YCwgbW9kZV07XG4gIH1cbn1cbiJdfQ==