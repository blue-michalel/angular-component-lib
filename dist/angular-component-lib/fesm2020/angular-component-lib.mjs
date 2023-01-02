import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class CustomButtonComponent {
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

class CustomButtonModule {
}
CustomButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CustomButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: CustomButtonModule, declarations: [CustomButtonComponent], imports: [CommonModule], exports: [CustomButtonComponent] });
CustomButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomButtonModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CustomButtonComponent],
                    imports: [CommonModule],
                    exports: [CustomButtonComponent],
                }]
        }] });

/*
 * Public API Surface of custom-button
 */

class CustomInputComponent {
}
CustomInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CustomInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: CustomInputComponent, selector: "lib-custom-input", ngImport: i0, template: `<input />`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-custom-input',
                    template: `<input />`,
                }]
        }] });

class CustomInputModule {
}
CustomInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CustomInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: CustomInputModule, declarations: [CustomInputComponent], imports: [CommonModule], exports: [CustomInputComponent] });
CustomInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomInputModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CustomInputComponent],
                    imports: [CommonModule],
                    exports: [CustomInputComponent],
                }]
        }] });

/*
 * Public API Surface of custom-input
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CustomButtonComponent, CustomButtonModule, CustomInputComponent, CustomInputModule };
//# sourceMappingURL=angular-component-lib.mjs.map
