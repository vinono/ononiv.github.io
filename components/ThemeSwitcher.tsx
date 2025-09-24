'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setTheme('light')}
          className="p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          title="Light mode"
        >
          ☀️
        </button>
        <button
          onClick={() => setTheme('dark')}
          className="p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          title="Dark mode"
        >
          🌙
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'light'
            ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        title="Light mode"
      >
        ☀️
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'dark'
            ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        title="Dark mode"
      >
        🌙
      </button>
    </div>
  );
}
