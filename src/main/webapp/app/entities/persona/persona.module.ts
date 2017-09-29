import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogSharedModule } from '../../shared';
import {
    PersonaService,
    PersonaPopupService,
    PersonaComponent,
    PersonaDetailComponent,
    PersonaDialogComponent,
    PersonaPopupComponent,
    PersonaDeletePopupComponent,
    PersonaDeleteDialogComponent,
    personaRoute,
    personaPopupRoute,
} from './';

const ENTITY_STATES = [
    ...personaRoute,
    ...personaPopupRoute,
];

@NgModule({
    imports: [
        BlogSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        PersonaComponent,
        PersonaDetailComponent,
        PersonaDialogComponent,
        PersonaDeleteDialogComponent,
        PersonaPopupComponent,
        PersonaDeletePopupComponent,
    ],
    entryComponents: [
        PersonaComponent,
        PersonaDialogComponent,
        PersonaPopupComponent,
        PersonaDeleteDialogComponent,
        PersonaDeletePopupComponent,
    ],
    providers: [
        PersonaService,
        PersonaPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogPersonaModule {}
