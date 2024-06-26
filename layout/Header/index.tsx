import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Theme from './Theme';
import NavbarMobile from './NavbarMobile';
import Search from '@/components/Search';

function Header() {
  return (
    <header className="flex-between background-light900_dark200 light-border fixed z-50 w-full gap-5 border-b p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src="./assets/site-logo.svg" width={23} height={23} alt="DevFlow" />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev
          <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      <Search />
      <div className="flex gap-6">
        <div className="flex-between gap-5">
          <Theme />
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: 'h-10 w-10',
                },
                variables: {
                  colorPrimary: '#ff7000',
                },
              }}
            />
          </SignedIn>
        </div>
        <NavbarMobile />
      </div>
    </header>
  );
}

export default Header;
