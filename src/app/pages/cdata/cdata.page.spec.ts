import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CdataPage } from './cdata.page';

describe('CdataPage', () => {
  let component: CdataPage;
  let fixture: ComponentFixture<CdataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
