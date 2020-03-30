import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVotesComponent } from './total-votes.component';

describe('TotalVotesComponent', () => {
  let component: TotalVotesComponent;
  let fixture: ComponentFixture<TotalVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
