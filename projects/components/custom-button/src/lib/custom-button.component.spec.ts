import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { CustomButtonComponent } from './custom-button.component';

describe('ButtonComponent', () => {
  let spectator: Spectator<CustomButtonComponent>;
  const createComponent = createComponentFactory(CustomButtonComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should have a success class by default', () => {
    expect(spectator.query('button')).toHaveClass('lib-button');
  });
});
