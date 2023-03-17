import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from '../investments/components/list/list.component';


import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent, ListComponent],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) getPoupanca(): poupanca deve ser 10`, () => {
      expect(component.getPoupanca).toEqual(10);
  });

  it(`(U) getCarteira(): carteira deve ser 50`, () => {
      expect(component.getCarteira).toEqual(50);
  });

  it(`(U) setSacar(): deve transferir da poupanca para a carteira`, () => {
      component.setSacar('10')
      expect(component.getPoupanca).toEqual(0);
      expect(component.getCarteira).toEqual(60);
  });

  it(`(U) setSacar(): poupanca não pode ser menor que valor de sacar e deve ser numerico`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it(`(I) setSacar(): teste de interface`, () => {
    let elemento = fixture.debugElement.nativeElement;

    elemento.querySelector('#input-sacar').value = '10';
    elemento.querySelector('#sacar').click();

    fixture.detectChanges();

    expect(elemento.querySelector('#get-carteira').textContent).toEqual('60');
    expect(component.getPoupanca).toEqual(0);
  });

  it(`(U) setDepositar(): deve transferir da carteira para a poupanca`, () => {
    component.setDepositar('50')
    expect(component.getPoupanca).toEqual(60);
    expect(component.getCarteira).toEqual(0);
  });

  it(`(U) setSacar(): valor de depositar nao pode ser maior que valor da carteira e deve ser numerico`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it(`(I) setDepositar(): teste de interface`, () => {
    let elemento = fixture.debugElement.nativeElement;

    elemento.querySelector('#input-depositar').value = "10";
    elemento.querySelector('#depositar').click();

    fixture.detectChanges();

    expect(elemento.querySelector('#get-poupanca').textContent).toEqual('20');
    expect(component.getCarteira).toEqual(40);
  });

});
