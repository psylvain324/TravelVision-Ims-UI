import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemsModalComponent } from './inventory-items-modal.component';

describe('InventoryItemsModalComponent', () => {
  let component: InventoryItemsModalComponent;
  let fixture: ComponentFixture<InventoryItemsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryItemsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryItemsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
