import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className='bg-gray-950 text-gray-300/40 text-sm flex flex-col items-center pb-[140px]'>
      <p>© 2026 Vladislav Prokhorov</p>
      <p>{t("footer.slogan")}</p>
    </footer>
  )
}
