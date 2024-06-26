import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IMockActivityEntity } from '../mock-activity-entity.model';
import { MockActivityEntityService } from '../service/mock-activity-entity.service';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';

@Component({
  templateUrl: './mock-activity-entity-delete-dialog.component.html',
})
export class MockActivityEntityDeleteDialogComponent {
  mockActivityEntity?: IMockActivityEntity;

  constructor(protected mockActivityEntityService: MockActivityEntityService, protected activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.mockActivityEntityService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
