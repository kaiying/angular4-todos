import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { TitleComponent } from './title/title.component';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let debugElement: DebugElement;
    let target: AppComponent;
    let htmlElement: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, TitleComponent]
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        target = new AppComponent();
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
    describe('Day 04 課堂：建立component整合測試', () => {
        it(`HTML中必須要有<app-title>節點。`, () => {
            htmlElement = debugElement.query(By.css('app-title')).nativeElement;
            expect(htmlElement).toBeTruthy();
        });
    });
    describe(`placeholder`, () => {
        it(`.new-todo必須使用inputHint field`, () => {
           component.inputHint = 'fake';
           fixture.detectChanges();
           htmlElement = debugElement.query(By.css('.new-todo')).nativeElement;
           expect(htmlElement.getAttribute('placeholder')).toBe('fake');
        });
        it(`class裡面的inputHint值必須為'What needs to be done?'`, () => {
            expect(target.inputHint).toBe('What needs to be done?');
        });
    });

    describe(`Day 08`, () => {
        it(`should use 'addTodo()' on 'keyup.enter' event in HTML`, () => {
            spyOn(component, 'addTodo');
            debugElement.query(By.css('.new-todo')).triggerEventHandler('keyup.enter', null);

            expect(component.addTodo).toHaveBeenCalled();
        });

        it(`should have 'addTodo()' to push todo to array and clear todo`, () => {
            const todoStub = <HTMLInputElement>{
                'value': 'fake'
            };
            target.addTodo(todoStub);

            expect(target.todos.length).toBe(1);
            expect(todoStub.value).toBe('');
        });
    });


});
