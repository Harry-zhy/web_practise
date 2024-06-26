import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { DecoSavedCompanyService } from '../service/deco-saved-company.service';

import { DecoSavedCompanyComponent } from './deco-saved-company.component';

describe('DecoSavedCompany Management Component', () => {
  let comp: DecoSavedCompanyComponent;
  let fixture: ComponentFixture<DecoSavedCompanyComponent>;
  let service: DecoSavedCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'deco-saved-company', component: DecoSavedCompanyComponent }]),
        HttpClientTestingModule,
      ],
      declarations: [DecoSavedCompanyComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              defaultSort: 'id,asc',
            }),
            queryParamMap: of(
              jest.requireActual('@angular/router').convertToParamMap({
                page: '1',
                size: '1',
                sort: 'id,desc',
              })
            ),
            snapshot: { queryParams: {} },
          },
        },
      ],
    })
      .overrideTemplate(DecoSavedCompanyComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(DecoSavedCompanyComponent);
    comp = fixture.componentInstance;
    service = TestBed.inject(DecoSavedCompanyService);

    const headers = new HttpHeaders();
    jest.spyOn(service, 'query').mockReturnValue(
      of(
        new HttpResponse({
          body: [{ id: 123 }],
          headers,
        })
      )
    );
  });

  it('Should call load all on init', () => {
    // WHEN
    comp.ngOnInit();

    // THEN
    expect(service.query).toHaveBeenCalled();
    expect(comp.decoSavedCompanies?.[0]).toEqual(expect.objectContaining({ id: 123 }));
  });

  describe('trackId', () => {
    it('Should forward to decoSavedCompanyService', () => {
      const entity = { id: 123 };
      jest.spyOn(service, 'getDecoSavedCompanyIdentifier');
      const id = comp.trackId(0, entity);
      expect(service.getDecoSavedCompanyIdentifier).toHaveBeenCalledWith(entity);
      expect(id).toBe(entity.id);
    });
  });
});
