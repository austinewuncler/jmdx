import { observable } from '@legendapp/state';
import { persistObservable } from '@legendapp/state/persist';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';

export const $isDarkMode = observable(
  window.matchMedia('(prefers-color-scheme: dark)').matches,
);

persistObservable($isDarkMode, {
  local: 'dark-mode',
  pluginLocal: ObservablePersistLocalStorage,
});
