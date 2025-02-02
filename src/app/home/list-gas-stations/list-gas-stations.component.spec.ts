import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGasStationsComponent } from './list-gas-stations.component';

describe('ListGasStationsComponent', () => {
  let component: ListGasStationsComponent;
  let fixture: ComponentFixture<ListGasStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGasStationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGasStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
