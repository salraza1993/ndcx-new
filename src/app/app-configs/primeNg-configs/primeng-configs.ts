import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { Preset } from '@primeuix/themes/types';

const MyPreset: Preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fff485',
      300: '#ffe846',
      400: '#ffd71b',
      500: '#ffb700',
      600: '#e28c00',
      700: '#bb6302',
      800: '#984c08',
      900: '#7c3e0b',
      950: '#481f00'
    }
  },
  extend: {
    secondary: {
      50: '#eef8ff',
      100: '#dcf1ff',
      200: '#b2e4ff',
      300: '#6dcfff',
      400: '#20b7ff',
      500: '#009eff',
      600: '#007ddf',
      700: '#0063b4',
      800: '#005495',
      900: '#00457a',
      950: '#002f58'
    }
  }
});
export const PRIME_NG_CONFIGS = {
  // unstyled: true,
  theme: {
    preset: MyPreset,
    options: {
      // darkModeSelector: '.p-dark',
      prefix: 'x',
      cssLayer: {
        name: 'primeng',
        order: 'base, global, primeng, primeng-overrides, theme, components, utilities'
      }
    }
  }
};
