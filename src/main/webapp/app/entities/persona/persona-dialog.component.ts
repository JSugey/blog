import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Persona } from './persona.model';
import { PersonaPopupService } from './persona-popup.service';
import { PersonaService } from './persona.service';

@Component({
    selector: 'jhi-persona-dialog',
    templateUrl: './persona-dialog.component.html'
})
export class PersonaDialogComponent implements OnInit {

    persona: Persona;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private personaService: PersonaService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.persona.id !== undefined) {
            this.subscribeToSaveResponse(
                this.personaService.update(this.persona));
        } else {
            this.subscribeToSaveResponse(
                this.personaService.create(this.persona));
        }
    }

    private subscribeToSaveResponse(result: Observable<Persona>) {
        result.subscribe((res: Persona) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Persona) {
        this.eventManager.broadcast({ name: 'personaListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-persona-popup',
    template: ''
})
export class PersonaPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private personaPopupService: PersonaPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.personaPopupService
                    .open(PersonaDialogComponent as Component, params['id']);
            } else {
                this.personaPopupService
                    .open(PersonaDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
