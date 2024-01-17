import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMylibraryComponent } from './ngx-mylibrary.component';

describe('NgxMylibraryComponent', () => {
  let component: NgxMylibraryComponent;
  let fixture: ComponentFixture<NgxMylibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMylibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxMylibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
