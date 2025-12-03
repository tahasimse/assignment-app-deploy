import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesDevoirs } from './liste-des-devoirs';

describe('ListeDesDevoirs', () => {
  let component: ListeDesDevoirs;
  let fixture: ComponentFixture<ListeDesDevoirs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDesDevoirs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesDevoirs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
