import { useTranslation } from 'react-i18next'

interface FooterProps {
  addClass?: string
}

const Footer = ({ addClass }: FooterProps) => {
  const { t } = useTranslation()
  const company = t('footer.company')
  return (
    <footer
      className={`${addClass} footer footer-center bg-base-300 p-4 text-base-content`}
    >
      <aside>
        <p>{t('footer.copyright', { company })}</p>
      </aside>
    </footer>
  )
}

export default Footer
