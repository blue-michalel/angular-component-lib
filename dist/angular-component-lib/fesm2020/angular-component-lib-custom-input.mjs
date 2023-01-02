import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

export { CustomInputComponent, CustomInputModule };
//# sourceMappingURL=angular-component-lib-custom-input.mjs.map
