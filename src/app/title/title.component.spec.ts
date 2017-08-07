import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { By } from '@angular/platform-browser';


describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  describe(`Day 05 : <h1>todos</h1>`, () => {
    it(`component中的title屬性為todos`, () => {
      expect(component.title).toBe('todos');
    });

    it(`HTML裡面應該使用title屬性`, () => {
      component.title = 'fake';
      fixture.detectChanges();

      const element = fixture.debugElement.query(By.css('h1')).nativeElement;
      expect(element.textContent).toBe('fake');
    });
  });
});
