import { Icon } from '@iconify/react/dist/iconify.js';
import { observer } from '@legendapp/state/react';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

import { Button } from '~/common/components';
import { $isDarkMode } from '~/theme/state';

const toggleDarkMode = () => {
  $isDarkMode.toggle();
};

const ToggleDarkModeButton = observer(() => {
  const isDarkMode = $isDarkMode.get();

  useEffect(() => {
    document.querySelector('html')?.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <Button
      className="bg-background-light dark:bg-background-dark relative rounded p-0.5 transition-colors"
      onClick={toggleDarkMode}
      title="toggle dark mode"
    >
      <div
        className={`flex h-6 w-12 ${
          isDarkMode ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.div
          className="aspect-square h-full rounded bg-white transition-colors dark:bg-black"
          layout
          transition={{ type: 'tween' }}
        />
      </div>
      <div className="absolute inset-0 flex p-0.5">
        {['day', 'night'].map((icon) => (
          <Icon icon={`meteocons:clear-${icon}-fill`} key={icon} width="24" />
        ))}
      </div>
    </Button>
  );
});

export default ToggleDarkModeButton;
