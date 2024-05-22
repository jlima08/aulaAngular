import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkforaComponent } from './linkfora.component';

describe('LinkforaComponent', () => {
  let component: LinkforaComponent;
  let fixture: ComponentFixture<LinkforaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkforaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkforaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
