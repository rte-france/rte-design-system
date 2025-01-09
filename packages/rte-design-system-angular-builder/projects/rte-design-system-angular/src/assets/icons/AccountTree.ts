import { NgModule, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */


@Component({
    selector: 'app-account-tree',
    template: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            [attr.aria-hidden]="isExplicit"
            aria-labelledby="svgTitle svgDesc"
            viewBox="0 -960 960 960"
            [ngClass]="iconClasses"
            [attr.width]="width"
            [attr.height]="height"
        >
            <title id="svgTitle">{{ alt }}</title>
            <desc id="svgDesc">{{ description }}</desc>
            <path
                [attr.fill]="fill"
                [attr.stroke]="stroke"
                [attr.stroke-width]="strokeWidth"
                d="M600-200v-40h-80q-33 0-56.5-23.5T440-320v-320h-80v40q0 33-23.5 56.5T280-520H160q-33 0-56.5-23.5T80-600v-160q0-33 23.5-56.5T160-840h120q33 0 56.5 23.5T360-760v40h240v-40q0-33 23.5-56.5T680-840h120q33 0 56.5 23.5T880-760v160q0 33-23.5 56.5T800-520H680q-33 0-56.5-23.5T600-600v-40h-80v320h80v-40q0-33 23.5-56.5T680-440h120q33 0 56.5 23.5T880-360v160q0 33-23.5 56.5T800-120H680q-33 0-56.5-23.5T600-200ZM160-760v160-160Zm520 400v160-160Zm0-400v160-160Zm0 160h120v-160H680v160Zm0 400h120v-160H680v160ZM160-600h120v-160H160v160Z"
            />
        </svg>
    `,
    styles: [`
        :host {
            display: inline-block;
        }
    `]
})

export class AccountTreeComponent {
    @Input() width: number = 24;
    @Input() height: number = 24;
    @Input() fill: string = 'currentColor';
    @Input() stroke: string = 'none';
    @Input() strokeWidth: number = 1;
    @Input() rotationOptions: any;
    @Input() rotate: any;
    @Input() className: string = '';
    @Input() description: string = '';
    @Input() alt: string = 'AccountTree';
    @Input() isExplicit: boolean = true;

    get iconClasses(): string {
        return this.iconClassBuilder(this.fill, this.rotationOptions, this.rotate, this.className);
    }

    iconClassBuilder(fill: string, rotationOptions: any, rotate: any, className: string): string {
        // Implement the logic for building the icon classes
        return className;
    }
}

@NgModule({
    declarations: [AccountTreeComponent],
    imports: [CommonModule],
    exports: [AccountTreeComponent]
})

export class AccountTreeModule {}