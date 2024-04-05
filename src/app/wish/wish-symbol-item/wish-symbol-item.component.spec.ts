import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishSymbolItemComponent } from './wish-symbol-item.component';

describe('WishSymdolItemComponent', () => {
  let component: WishSymbolItemComponent;
  let fixture: ComponentFixture<WishSymbolItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishSymbolItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishSymbolItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
