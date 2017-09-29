import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogSharedModule } from '../../shared';
import {
    ProductoService,
    ProductoPopupService,
    ProductoComponent,
    ProductoDetailComponent,
    ProductoDialogComponent,
    ProductoPopupComponent,
    ProductoDeletePopupComponent,
    ProductoDeleteDialogComponent,
    productoRoute,
    productoPopupRoute,
} from './';

const ENTITY_STATES = [
    ...productoRoute,
    ...productoPopupRoute,
];

@NgModule({
    imports: [
        BlogSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ProductoComponent,
        ProductoDetailComponent,
        ProductoDialogComponent,
        ProductoDeleteDialogComponent,
        ProductoPopupComponent,
        ProductoDeletePopupComponent,
    ],
    entryComponents: [
        ProductoComponent,
        ProductoDialogComponent,
        ProductoPopupComponent,
        ProductoDeleteDialogComponent,
        ProductoDeletePopupComponent,
    ],
    providers: [
        ProductoService,
        ProductoPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogProductoModule {}
