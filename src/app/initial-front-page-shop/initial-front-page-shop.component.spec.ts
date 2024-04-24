import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialFrontPageShopComponent } from './initial-front-page-shop.component';

describe('InitialFrontPageShopComponent', () => {
  let component: InitialFrontPageShopComponent;
  let fixture: ComponentFixture<InitialFrontPageShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialFrontPageShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitialFrontPageShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
