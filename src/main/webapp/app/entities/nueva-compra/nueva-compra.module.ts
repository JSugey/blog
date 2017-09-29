import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogSharedModule } from '../../shared';
import {
    NuevaCompraService,
    NuevaCompraPopupService,
    NuevaCompraComponent,
    NuevaCompraDetailComponent,
    NuevaCompraDialogComponent,
    NuevaCompraPopupComponent,
    NuevaCompraDeletePopupComponent,
    NuevaCompraDeleteDialogComponent,
    nuevaCompraRoute,
    nuevaCompraPopupRoute,
} from './';

const ENTITY_STATES = [
    ...nuevaCompraRoute,
    ...nuevaCompraPopupRoute,
];

@NgModule({
    imports: [
        BlogSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        NuevaCompraComponent,
        NuevaCompraDetailComponent,
        NuevaCompraDialogComponent,
        NuevaCompraDeleteDialogComponent,
        NuevaCompraPopupComponent,
        NuevaCompraDeletePopupComponent,
    ],
    entryComponents: [
        NuevaCompraComponent,
        NuevaCompraDialogComponent,
        NuevaCompraPopupComponent,
        NuevaCompraDeleteDialogComponent,
        NuevaCompraDeletePopupComponent,
    ],
    providers: [
        NuevaCompraService,
        NuevaCompraPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogNuevaCompraModule {}
