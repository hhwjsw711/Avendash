'use client'
import { useTranslation } from 'react-i18next'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { ContainerScroll } from '../Components/ui/container-scroll-animation'

const Videos = () => {
  const { t } = useTranslation()
  return (
    <>
      <Navbar addClass="" />
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                {t('videos.title')}
              </h1>
            </>
          }
        >
          <iframe
            src="https://ls.578.cn/2020/live.php"
            title="Example"
            height={720}
            width={1400}
            className="mx-auto h-full w-full rounded-2xl object-cover"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <Footer addClass="mt-10" />
    </>
  )
}

export default Videos
