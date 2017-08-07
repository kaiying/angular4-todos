import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;
  let target: TitleComponent;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    });
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new TitleComponent();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  describe(`Day 05 : <h1>todos</h1>`, () => {
    it(`component中的title屬性為todos`, () => {
      expect(target.title).toBe('todos');
    });

    it(`HTML裡面應該使用title屬性`, () => {
      component.title = 'fake';
      fixture.detectChanges();

      const element = fixture.debugElement.query(By.css('h1')).nativeElement;
      expect(element.textContent).toBe('fake');
    });
  });
});
