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
            const element = debugElement.query(By.css('app-title')).nativeElement;
            expect(element).toBeTruthy();
        });
    });
});
