'use client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './page.module.css'
import { start } from 'repl';
import Link from 'next/link';
import AboutMe from './aboutMe/aboutMe';
import Intro from './intro/intro';
import Project from './project/project';
import Contact from './contact/contact';
import { useEffect, useRef, useState } from 'react';
import Navbar from './navbar/navbar';

export default function Home() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [pages, setPages] = useState(calculatePages(window.innerHeight,615));



  function calculatePages(height:any,base:any) {
    const baseHeight = base; 
    if (height < baseHeight) {
      return 5 * (baseHeight / height);
    }
    return 5; 
  }

  const calculateOffset = (baseOffset:any,base:any) => {
    const baseHeight = base;
    if (viewportHeight < baseHeight) {
      return baseOffset * (baseHeight / viewportHeight);
    }
    return baseOffset;
  };
  if (window.innerWidth < 400) {

    return (
      <>

        <Parallax pages={pages}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />

          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.34,615)} speed={0.8} style={{ zIndex: 3 }} >

            <img src="/classPhoto.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.68,615)} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.99,615)} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/team15.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.4,615)} speed={1.1} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(1,615)} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(1.3,615)} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  } if (window.innerWidth < 500) {

    return (
      <>

        <Parallax pages={pages}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />

          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.34,615)} speed={0.8} style={{ zIndex: 3 }} >

            <img src="/classPhoto.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.72,615)} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.99,615)} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/team15.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.5,615)} speed={1.1} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(1,615)} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(1.3,615)} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  }else if (window.innerWidth < 600) {

    return (
      <>

        <Parallax pages={pages}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />

          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.4,615)} speed={0.8} style={{ zIndex: 3 }} >

            <img src="/classPhoto.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.8,615)} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.99,615)} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/team15.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.6,615)} speed={1.1} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(1,615)} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(1.3,615)} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
    }else if (window.innerWidth < 700) {

    return (
      <>

        <Parallax pages={pages}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />

          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.6,615)} speed={0.8} style={{ zIndex: 3 }} >

            <img src="/classPhoto.jpg" className={styles.secondPage} />
          </ParallaxLayer>

          <ParallaxLayer offset={calculateOffset(0.6,615)} speed={1.1} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(1,615)} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(1.4,615)} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  }else if (window.innerWidth < 800) {
    let off=0.65;
    if (window.innerHeight < 700) {
      off=0.65
    }else if(window.innerHeight < 950) {
      off=0.5
    }else if(window.innerHeight < 1050) {
      off=0.4
    }else{  
      off=0.4
    }
    return (
      <>

        <Parallax pages={5}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(0.65,615)} speed={0.7} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(off,615)} speed={0.5} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(1,615)} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={calculateOffset(1.6,615)} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  }
  else if (window.innerWidth < 1000) {
    return (
      <>

        <Parallax pages={6}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={1.1} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={2.9} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  }
  else if (window.innerWidth < 1300) {
    return (
      <>

        <Parallax pages={5}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={0.999} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.999} speed={1.1} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={1.999} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={2.9} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  } else {

    return (
      <>

        <Parallax pages={4}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={0.999} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.999} speed={0.3} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={1.999} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={2.9} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  }
}
