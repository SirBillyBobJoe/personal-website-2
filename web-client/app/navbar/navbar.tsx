'use client'
import { RefObject } from 'react';
import styles from './navbar.module.css'

interface NavbarProps {
  home: RefObject<HTMLHeadingElement>;
  about: RefObject<HTMLElement>;
  proj: RefObject<HTMLElement>;
  contact: RefObject<HTMLElement>;
}

export default function Navbar({ home, about, proj, contact }: NavbarProps) {

  const onClick = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className={styles.container}>
      <p onClick={() => onClick(home)} className={styles.home}>Tong-Ho<span>.</span></p>
      <div className={styles.buttons}>
        <p onClick={() => onClick(about)}>About Me</p>
        <p onClick={() => onClick(proj)}>Projects</p>
        <p onClick={() => onClick(contact)}>Contact Me</p>
      </div>
    </div>
  );
}
