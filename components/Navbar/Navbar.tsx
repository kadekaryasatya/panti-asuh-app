// components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import DarkModeSwitcher from "../Header/DarkModeSwitcher";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-background lg:px-10 py-2 p-4 text-background2">
      <div className="container flex justify-between items-center">
        <div className=" font-bold text-xl">
          <Link href="/" className=" items-center justify-center flex flex-col">
            <Image
              width={50}
              height={50}
              src={"/images/logo/panti-logo.png"}
              alt="Logo"
            />
            <h1 className="text-sm font-bold tracking-widest">SIMPATI</h1>
          </Link>
        </div>
        <div></div>
        <div className="hidden lg:flex space-x-10 font-bold uppercase">
          <NavItem href="/">Beranda</NavItem>
          <NavItem href="/anak-asuh">Anak Asuh</NavItem>
          <NavItem href="/pengurus">Pengurus</NavItem>
          <NavItem href="/program">Program</NavItem>
          <NavItem href="/artikel">Artikel</NavItem>
          <NavItem href="/tentang-kami">Tentang Kami</NavItem>
        </div>
        <div className="flex gap-3">
          <Link
            href="/donasi"
            className="bg-background2 text-background rounded-md py-2 px-4 font-bold uppercase tracking-widest text-xs"
          >
            Donasi
          </Link>
        </div>
        {/* Add responsive menu button for smaller screens */}
        {/* You can customize the icon as needed */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              className=" h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 bg-white w-full mt-20">
            <div className="flex flex-col items-center space-y-4 py-4 uppercase">
              <MobileNavItem href="/">Beranda</MobileNavItem>
              <MobileNavItem href="/anak-asuh">Anak Asuh</MobileNavItem>
              <MobileNavItem href="/pengurus">Pengurus</MobileNavItem>
              <MobileNavItem href="/program">Program</MobileNavItem>
              <MobileNavItem href="/artikel">Artikel</MobileNavItem>
              <MobileNavItem href="/tentang-kami">Tentang Kami</MobileNavItem>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ href: string; children: any }> = ({
  href,
  children,
}) => {
  return (
    <Link href={href}>
      <div className=" hover:underline tracking-widest text-xs">{children}</div>
    </Link>
  );
};

const MobileNavItem: React.FC<{ href: string; children: any }> = ({
  href,
  children,
}) => {
  return (
    <Link href={href}>
      <div className=" hover:underline tracking-widest">{children}</div>
    </Link>
  );
};

export default Navbar;
