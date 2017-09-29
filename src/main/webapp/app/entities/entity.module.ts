import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogPersonaModule } from './persona/persona.module';
import { BlogProductoModule } from './producto/producto.module';
import { BlogNuevaCompraModule } from './nueva-compra/nueva-compra.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BlogPersonaModule,
        BlogProductoModule,
        BlogNuevaCompraModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogEntityModule {}
