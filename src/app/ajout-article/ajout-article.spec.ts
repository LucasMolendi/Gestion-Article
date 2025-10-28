import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutArticle } from './ajout-article';

describe('AjoutArticle', () => {
  let component: AjoutArticle;
  let fixture: ComponentFixture<AjoutArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
