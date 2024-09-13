import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTacheComponent } from './resource-tache.component';

describe('ResourceTacheComponent', () => {
  let component: ResourceTacheComponent;
  let fixture: ComponentFixture<ResourceTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceTacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourceTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
