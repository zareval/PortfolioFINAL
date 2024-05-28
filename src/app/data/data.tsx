
import React from "react";
import { BiListCheck } from "react-icons/bi";
import { BiIdCard } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { BiBriefcaseAlt } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";

type NavItemType = {
  id: number;
  icon: JSX.Element;
  to: string;
};

type NavbarType = {
  logo: {
    icon: JSX.Element | string; 
  };
  nav: NavItemType[];
};

type LanguageType = {
  label: string;
  code: string;
};

export const dataNavbar = (navItem: number): NavbarType => ({
    logo: {
    icon: <BiBriefcaseAlt/>,
  },
  nav: [
    {
      id: 1,
      icon: (
        <BiHomeAlt
          className={navItem === 1 ? 'text-black' : 'text-black-shade-5'}
        />
      ),
      to: '/',
    },
    {
      id: 2,
      icon: (
        <BiBriefcaseAlt
          className={navItem === 2 ? 'text-black' : 'text-black-shade-5'}
        />
      ),
      to: '/Mis_trabajos',
    },
    {
      id: 3,
      icon: (
        <BiIdCard
          className={navItem === 3 ? 'text-black' : 'text-black-shade-5'}
        />
      ),
      to: '/Sobre_mi',
    },
    {
      id: 4,
      icon: (
        <BiListCheck
          className={navItem === 4 ? 'text-black' : 'text-black-shade-2'}
        />
      ),
      to: '/Habilidades',
    },
    {
      id: 5,
      icon: (
        <BiPhoneCall
          className={navItem === 5 ? 'text-black' : 'text-black-shade-5'}
        />
      ),
      to: '/Contactame',
    },
  ],
});

export const languageData = (): LanguageType[] => [
  { label: 'Español', code: 'es' },
  { label: 'Ingles', code: 'en' },
];
