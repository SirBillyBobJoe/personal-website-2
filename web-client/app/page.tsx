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

function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
}

export default function Home() {

  const { width, height } = useWindowDimensions();
  const [pages, setPages] = useState(calculatePages(height, 615));

  function calculatePages(height: any, base: any) {
    const baseHeight = base;
    if (height < baseHeight) {
      return 5 * (baseHeight / height);
    }
    return 5;
  }

  const calculateOffset = (baseOffset: any, base: any) => {
    const baseHeight = base;
    if (height < baseHeight) {
      return baseOffset * (baseHeight / height);
    }
    return baseOffset;
  };
  if (width < 400) {
    let hiking = 0.24;
    let classPhoto = 0.7
    let aboutme = 0.07;
    let project = 0.8;
    let contact = 0.65;
    let pages = 3;
    if (height < 500) {
      hiking = 0.5;
      classPhoto = 0.99999
      aboutme = 0.75;
      project = 1;
      contact = 0.999;
      pages = 6;
    } else if (height < 600) {
      hiking = 0.42;
      classPhoto = 0.999
      aboutme = 0.6;
      project = 1;
      contact = 0.999;
      pages = 5;
    } else if (height < 700) {
      hiking = 0.35;
      classPhoto = 0.999
      aboutme = 0.5;
      project = 1;
      contact = 0.999;
      pages = 4;
    } else if (height < 800) {
      hiking = 0.3;
      classPhoto = 0.9
      aboutme = 0.3;
      project = 0.999;
      contact = 0.65;
      pages = 4;
    }
    return (
      <>

        <Parallax pages={pages}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />

          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={classPhoto} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/classPhoto.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={hiking} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={aboutme} speed={1.1} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={project} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={contact} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  } if (width < 500) {
    let hiking = 0.3;
    let aboutme = 0.13;
    let project = 0.8;
    let contact = 0.9;
    let pages = 3;
    if (height < 500) {
      hiking = 0.6;
      aboutme = 0.9;
      project = 1
      contact = 1.3
      pages = 6
    } else if (height < 600) {
      hiking = 0.5;
      aboutme = 0.6;
      project = 0.999
      contact = 1
      pages = 5
    } else if (height < 700) {
      hiking = 0.5;
      aboutme = 0.5;
      project = 0.999
      contact = 1
      pages = 5
    } else if (height < 800) {
      hiking = 0.4;
      aboutme = 0.35;
      project = 0.999
      contact = 1
      pages = 4
    }
    return (
      <>

        <Parallax pages={pages}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />

          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={hiking} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={aboutme} speed={1.1} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={project} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={contact} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  } else if (width < 600) {
    let hiking = 0.3;
    let aboutme = 0.15;
    let project = 0.8;
    let contact = 0.9;
    let pages = 4;
    if (height < 500) {
      hiking = 0.65;
      aboutme = 0.95;
      project = 1
      contact = 1.3
      pages = 6
    } else if (height < 600) {
      hiking = 0.55;
      aboutme = 0.7;
      project = 1
      contact = 1.3
      pages = 5
    } else if (height < 700) {
      hiking = 0.45;
      aboutme = 0.45;
      project = 1
      contact = 1.3
      pages = 5
    } else if (height < 800) {
      hiking = 0.4;
      aboutme = 0.4;
      project = 0.999
      contact = 1
      pages = 4
    }
    return (
      <>

        <Parallax pages={pages}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />

          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={hiking} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={aboutme} speed={1.1} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={project} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={contact} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  } else if (width < 700) {
    let hiking = 0.7;
    let aboutme = 0.7;
    let project = 1;
    let contact = 1.3;
    let pages = 4;
    if (height < 500) {
      hiking = 1;
      aboutme = 1.2;
      project = 2;
      contact = 2.5;
      pages = 7
    } else if (height < 600) {
      hiking = 0.8;
      aboutme = 0.999;
      project = 1.6;
      contact = 1.8;
      pages = 6
    } else if (height < 700) {
      hiking = 0.8;
      aboutme = 0.999;
      project = 1.6;
      contact = 2;
      pages = 6
    } else if (height < 800) {
      hiking = 0.6;
      aboutme = 0.8;
      project = 1.3
      contact = 1.8
      pages = 5
    }
    return (
      <>

        <Parallax pages={pages}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />

          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={hiking} speed={0.8} style={{ zIndex: 3 }} >

            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>

          <ParallaxLayer offset={aboutme} speed={1.1} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={project} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={contact} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  } else if (width < 800) {
    let hiking = 0.5;
    let aboutme = 0.5;
    let project = 1;
    let contact = 1.5;
    let pages = 4;
    if (height < 500) {
      hiking = 1;
      aboutme = 1.4;
      project = 2.5;
      contact = 3;
      pages = 8
    } else if (height < 600) {
      hiking = 1;
      aboutme = 1.4;
      project = 2.3;
      contact = 2.999;
      pages = 7
    } else if (height < 700) {
      hiking = 0.8;
      aboutme = 0.999;
      project = 1.6;
      contact = 2;
      pages = 7
    } else if (height < 800) {
      hiking = 0.6;
      aboutme = 0.8;
      project = 1.3
      contact = 1.8
      pages = 5
    }
    return (
      <>

        <Parallax pages={pages}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={hiking} speed={0.7} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={aboutme} speed={0.5} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={project} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={contact} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  }
  else if (width < 1000) {
    let hiking = 0.5;
    let aboutme = 0.5;
    let project = 1;
    let contact = 1.5;
    let pages = 4;
    if (height < 500) {
      hiking = 1;
      aboutme = 1.4;
      project = 2.5;
      contact = 3;
      pages = 8
    } else if (height < 600) {
      hiking = 1;
      aboutme = 1.4;
      project = 2.3;
      contact = 2.999;
      pages = 7
    } else if (height < 700) {
      hiking = 0.8;
      aboutme = 0.999;
      project = 1.6;
      contact = 2;
      pages = 6
    } else if (height < 800) {
      hiking = 0.6;
      aboutme = 0.8;
      project = 1.3
      contact = 1.8
      pages = 5
    }
    return (
      <>

        <Parallax pages={pages}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={hiking} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={aboutme} speed={1.1} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={project} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={contact} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  }
  else if (width < 1300) {
    let hiking = 0.75;
    let aboutme = 0.75;
    let project = 1.4;
    let contact = 2;
    let pages = 5;
    if (height < 500) {
      hiking = 1;
      aboutme = 1.9;
      project = 3;
      contact = 4.5
      pages = 9
    } else if (height < 600) {
      hiking = 1;
      aboutme = 1.9;
      project = 2.9;
      contact = 3.999
      pages = 8
    } else if (height < 700) {
      hiking = 1;
      aboutme = 1.5;
      project = 2.5
      contact = 3.5
      pages = 7
    } else if (height < 800) {
      hiking = 0.999;
      aboutme = 1;
      project = 2
      contact = 3
      pages = 6
    }
    return (
      <>

        <Parallax pages={pages}>

          <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 3 }} >
            <img src="/firstPage.png" className={styles.firstPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 4 }} >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={hiking} speed={0.9} className={styles.secondPage} style={{ zIndex: 5 }}>
            <img src="/hiking.jpg" className={styles.secondPage} />
          </ParallaxLayer>
          <ParallaxLayer offset={aboutme} speed={1.1} style={{ zIndex: 5 }} className={styles.aboutMe}>
            <AboutMe />
          </ParallaxLayer>
          <ParallaxLayer offset={project} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={contact} speed={0.3} style={{ zIndex: 6 }} >
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
          <ParallaxLayer offset={2} speed={0.5} style={{ zIndex: 6 }} >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={2.999} speed={0.3} style={{ zIndex: 6 }} >
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </>
    )
  }
}