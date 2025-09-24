'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <button
          onClick={() => changeLanguage('en')}
          className="p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          title="English"
        >
          🇺🇸
        </button>
        <button
          onClick={() => changeLanguage('zh')}
          className="p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          title="中文"
        >
          🇨🇳
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`p-2 rounded-md transition-colors ${
          i18n.language === 'en'
            ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        title="English"
      >
        🇺🇸
      </button>
      <button
        onClick={() => changeLanguage('zh')}
        className={`p-2 rounded-md transition-colors ${
          i18n.language === 'zh'
            ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        title="中文"
      >
        🇨🇳
      </button>
    </div>
  );
}
