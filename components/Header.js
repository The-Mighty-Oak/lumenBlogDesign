import Image from 'next/image'
import headerStyles from '../styles/header.module.css'

const Header = () => {
  return (
    <section className={headerStyles.headerWrapper}>

        <div className={headerStyles.headerLeft}>
              <h1 className={headerStyles.headerMainText}>Helpful Content <span className={headerStyles.headerMainTextInside}>to Help you</span> Live your Best Life.</h1>
        </div>

        <div className={headerStyles.heroImage}>
            <div className={headerStyles.heroDark}>
                <Image
                     src="/heroImageDark.png"
                     width={849}
                    height={384.86}
                     layout="intrinsic"
                 />
            </div>
            <div className={headerStyles.heroLight}>
                <Image
                    src="/heroImageLight.png"
                    width={849}
                    height={384.86}
                    layout="intrinsic"
                />
            </div>
              
        </div>
    </section>
  )
}

export default Header