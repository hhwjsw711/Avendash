import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  addClass?: string
}

const lngs = {
  en: { nativeName: 'English' },
  zh: { nativeName: '中文' },
}

const Navbar = ({ addClass }: NavbarProps) => {
  const { t, i18n } = useTranslation()
  return (
    <nav className={`${addClass} navbar-container navbar mx-auto my-5`}>
      <div className="navbar rounded-box bg-base-100 shadow-sm shadow-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <NavLink to={'/'}>{t('navbar.home')}</NavLink>
              </li>
              <li>
                <NavLink to={'/sensors'}>{t('navbar.dashboard')}</NavLink>
              </li>
              <li>
              <a href="https://www.bilibili.com" target="_blank" rel="noopener noreferrer">{t('navbar.video')}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <NavLink to={'/'} className="btn btn-ghost text-xl">
            {t('navbar.title')}
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              {t('navbar.language')}
              <svg
                width="12px"
                height="12px"
                className="inline-block h-2 w-2 fill-current opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl"
            >
              {Object.keys(lngs).map((lng) => (
                <li key={lng}>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm btn-block justify-start"
                    onClick={() => i18n.changeLanguage(lng)}
                    disabled={i18n.resolvedLanguage === lng}
                  >
                    {lngs[lng as keyof typeof lngs].nativeName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              {t('navbar.theme')}
              <svg
                width="12px"
                height="12px"
                className="inline-block h-2 w-2 fill-current opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl"
            >
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.default')}
                  value="default"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.retro')}
                  value="retro"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.cyberpunk')}
                  value="cyberpunk"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.valentine')}
                  value="valentine"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.wireframe')}
                  value="wireframe"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.autumn')}
                  value="autumn"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.black')}
                  value="black"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.luxury')}
                  value="luxury"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.coffee')}
                  value="coffee"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.nord')}
                  value="nord"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.pastel')}
                  value="pastel"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.cupcake')}
                  value="cupcake"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={t('navbar.halloween')}
                  value="halloween"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
