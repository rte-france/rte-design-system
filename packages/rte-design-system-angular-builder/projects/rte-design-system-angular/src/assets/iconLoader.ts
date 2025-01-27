/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Component, Input, OnInit, ViewContainerRef, ComponentRef, Injector, ElementRef } from '@angular/core';
import { IconMapsService } from '../mappings/iconMap.service';

@Component({
    selector: 'app-icon-loader',
    standalone: true,
    template: '<ng-container #iconContainer></ng-container>',
})

export class IconLoaderComponent implements OnInit {
    @Input() iconId!: string;
    @Input() width: number = 24;
    @Input() height: number = 24;
    @Input() fill: string = 'currentColor';
    @Input() stroke: string = 'none';
    @Input() strokeWidth: number = 1;
    @Input() rotationOptions: any;
    @Input() rotate: any;
    @Input() className: string = '';
    @Input() description: string = '';
    @Input() alt: string = this.iconId;
    @Input() isExplicit: boolean = true;

    constructor(
        private iconMapsService: IconMapsService,
        private viewContainerRef: ViewContainerRef,
        private injector: Injector,
        private elementRef: ElementRef
    ) {}

    async ngOnInit() {
        const component = await this.iconMapsService.getIconComponent(this.iconId);
        this.viewContainerRef.clear();
        const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(component, { injector: this.injector });
        
        // Set inputs on the dynamically loaded component
        Object.assign(componentRef.instance, {
            iconId: this.iconId,
            width: this.width,
            height: this.height,
            fill: this.fill,
            stroke: this.stroke,
            strokeWidth: this.strokeWidth,
            rotationOptions: this.rotationOptions,
            rotate: this.rotate,
            className: this.className,
            description: this.description,
            alt: this.alt,
            isExplicit: this.isExplicit
        });

        // Access the element from the componentRef
        const iconElement = componentRef.location.nativeElement;
        console.log(iconElement);
    }
}