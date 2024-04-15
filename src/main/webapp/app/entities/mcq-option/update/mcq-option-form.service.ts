import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IMCQOption, NewMCQOption } from '../mcq-option.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IMCQOption for edit and NewMCQOptionFormGroupInput for create.
 */
type MCQOptionFormGroupInput = IMCQOption | PartialWithRequiredKeyOf<NewMCQOption>;

type MCQOptionFormDefaults = Pick<NewMCQOption, 'id'>;

type MCQOptionFormGroupContent = {
  id: FormControl<IMCQOption['id'] | NewMCQOption['id']>;
  value: FormControl<IMCQOption['value']>;
  question: FormControl<IMCQOption['question']>;
};

export type MCQOptionFormGroup = FormGroup<MCQOptionFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class MCQOptionFormService {
  createMCQOptionFormGroup(mCQOption: MCQOptionFormGroupInput = { id: null }): MCQOptionFormGroup {
    const mCQOptionRawValue = {
      ...this.getFormDefaults(),
      ...mCQOption,
    };
    return new FormGroup<MCQOptionFormGroupContent>({
      id: new FormControl(
        { value: mCQOptionRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      value: new FormControl(mCQOptionRawValue.value, {
        validators: [Validators.required],
      }),
      question: new FormControl(mCQOptionRawValue.question),
    });
  }

  getMCQOption(form: MCQOptionFormGroup): IMCQOption | NewMCQOption {
    return form.getRawValue() as IMCQOption | NewMCQOption;
  }

  resetForm(form: MCQOptionFormGroup, mCQOption: MCQOptionFormGroupInput): void {
    const mCQOptionRawValue = { ...this.getFormDefaults(), ...mCQOption };
    form.reset(
      {
        ...mCQOptionRawValue,
        id: { value: mCQOptionRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): MCQOptionFormDefaults {
    return {
      id: null,
    };
  }
}
