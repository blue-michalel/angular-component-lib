import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { CustomInputComponent } from './custom-input.component';

describe('ButtonComponent', () => {
  let spectator: Spectator<CustomInputComponent>;
  const createComponent = createComponentFactory(CustomInputComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.query('input')).toBeTruthy();
  });
});
