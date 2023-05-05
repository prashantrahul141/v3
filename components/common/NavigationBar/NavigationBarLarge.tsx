import { navigationOptions } from '@/utils/constantTSX';
import type { FC } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { TNavigationOptionsID } from '@/utils/types';
import Logo from '../logo';

const NavigationBarLarge: FC<{ defaultValue: TNavigationOptionsID }> = ({
  defaultValue,
}) => {
  const [activeTab, setActiveTab] =
    useState<TNavigationOptionsID>(defaultValue);

  return (
    <nav className='flex h-fit w-full items-center text-white'>
      <div className='ml-16 aspect-square h-11'>
        <Logo variant='page'></Logo>
      </div>
      <div className='flex flex-grow items-center justify-end gap-7 py-7 pr-16'>
        {navigationOptions.map((option) => (
          <Link
            onClick={() => setActiveTab(option.id)}
            key={option.id}
            href={option.link}>
            <button
              className={`${
                activeTab === option.id
                  ? 'text-primary-theme-cyan-100/100 hover:text-primary-theme-cyan-100/100'
                  : 'text-primary-theme-white-50/70 hover:text-primary-theme-white-100'
              } relative px-3 py-1 font-inconsolata text-base tracking-wide  transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}>
              {activeTab === option.id && (
                <motion.span
                  layoutId='bubble'
                  className='absolute inset-0 z-10 rounded-sm border-b-2 border-b-primary-theme-cyan-100/90 bg-transparent'
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.35 }}
                />
              )}
              {option.text}
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBarLarge;
