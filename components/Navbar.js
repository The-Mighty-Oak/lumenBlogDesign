import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import navStyles from '../styles/navigation.module.css'
import { useEffect, useState, useRef } from 'react';


const searchVariants = {
    hover: {
        x: 50, 
        opacity: 0,
        transition: { type: 'spring', stiffness: 100, duration: 0.4 }
    }
}

const searchVariants2 = {
    initial:{
        opacity: 0,
        x: 0,
    },
    hover: {
        x: 50,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100, duration: 0.4 }
    }
}

const linkHoverVariant ={
    hover:{
        fontSize: '24px',
        // y: -10,
        transition: { type: 'spring', stiffness: 100, duration: 0.1 }
    }
}


function Navbar() {
    
    const [darkTheme, setDarkTheme] = useState(undefined);

    const handleToggle = (event) => {
        setDarkTheme(event.target.checked);
    };

    useEffect(() => {
        if (darkTheme !== undefined) {
            if (darkTheme) {
                document.documentElement.setAttribute('data-theme', 'dark');
                window.localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
                window.localStorage.setItem('theme', 'light');
            }
        }
    }, [darkTheme]);

    useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue(
            '--initial-color-mode'
        );
        setDarkTheme(initialColorValue === 'dark');
    }, []);


  return (
    <section className={navStyles.navbarWrapper}>
        <div className={navStyles.navBrand}>
              <div className={navStyles.logos}>
                  <div className={[navStyles.logos1, "removeDark"].join(' ')}>
                      <Link href="/">
                          <Image
                              src="/logo light.png"
                              width={200}
                              height={63.39}
                              layout="intrinsic"
                          />
                      </Link>
                  </div>
                  <div className={navStyles.logos2}>
                    <Link href="/">
                        <Image
                            src="/Logo.png"
                            width={200}
                            height={63.39}
                            layout="intrinsic"
                        />
                    </Link>
                  </div>
               </div> 
        </div>

        <div className={navStyles.navLinksContainer}>
           <Link href="#">
                <motion.div 
                    className={navStyles.navLinks}
                    whileHover="hover"
                    variants={linkHoverVariant}
                >
                    READ
                </motion.div>
           </Link>
           <Link href="#">
                <motion.div 
                    className={navStyles.navLinks}
                    whileHover="hover"
                    variants={linkHoverVariant}
                >
                    ABOUT
                </motion.div>
           </Link>
           <Link href="#">
                <motion.div 
                    className={navStyles.navLinks}
                    whileHover="hover"
                    variants={linkHoverVariant}
                >
                    RESOURCES
                </motion.div>
           </Link>
           <Link href="#">
                <motion.div 
                    className={navStyles.navLinks}
                    whileHover="hover"
                    variants={linkHoverVariant}
                >
                    NEWSLETTER
                </motion.div>
           </Link>
           <Link href="#">
                <motion.div 
                    className={navStyles.navLinks}
                    whileHover="hover"
                    variants={linkHoverVariant}
                > 
                    CONTACT
                </motion.div>
           </Link>
        </div>
        
        <div className={navStyles.navElement}>
            <motion.div 
                className={navStyles.searchContainer}
                whileHover="hover"
                >
                  <motion.div
                      variants={searchVariants2}
                      className={navStyles.searchIconDark}>
                      <Image

                          src={"/searchDarkHover.png"}
                          width={38.06}
                          height={32}
                          layout="fixed"
                      />
                  </motion.div>
                  <motion.div
                      variants={searchVariants}
                      className={navStyles.searchIconDark}>
                      <Image

                          src={"/searchDark.png"}
                          width={38.06}
                          height={32}
                          layout="fixed"
                      />
                  </motion.div>
                  <motion.div 
                    variants={searchVariants2}
                    className={navStyles.searchIcon}>
                      <Image

                          src={"/SearchBlack.png"}
                          width={38.06}
                          height={32}
                          layout="fixed"
                      />
                  </motion.div>                  
                  <motion.div
                      variants={searchVariants} 
                      className={navStyles.searchIcon}>
                    <Image 
                    
                        src={"/search.png"}
                        width={38.06}
                        height={32}
                        layout="fixed"
                    />
                  </motion.div>
                  
            </motion.div>

            <div className={navStyles.colourModeToggle}>
                  <form action="#">
                      <label className={navStyles.switch}>
                          <input
                              type="checkbox"
                              checked={darkTheme}
                              onChange={handleToggle}
                          />
                          <span className={navStyles.slider}></span>
                          <span className={navStyles.sun}>
                            <Image
                                src={"/sun.png"}
                                width={20}
                                height={20}
                                layout="intrinsic"
                            />
                          </span>
                          <span className={navStyles.moon}>
                              <Image
                                  src={"/moon.png"}
                                  width={20}
                                  height={20}
                                  layout="intrinsic"
                              />
                          </span>
                      </label>
                  </form>
            </div>

            
        </div>
    </section>
  )
}

export default Navbar