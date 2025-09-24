'use client';

import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const { t } = useTranslation();
  return (
    <nav className="p-4 border-b">
      <div className="container mx-auto flex gap-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          {t('home')}
        </Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">
          {t('about')}
        </Link>
        <Link href="/blog" className="hover:text-blue-600 transition-colors">
          {t('blog')}
        </Link>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  )
}