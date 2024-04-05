import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishSymbolComponent } from './wish-symbol.component';

describe('WishSymbolComponent', () => {
  let component: WishSymbolComponent;
  let fixture: ComponentFixture<WishSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishSymbolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
