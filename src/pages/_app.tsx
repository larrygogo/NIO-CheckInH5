import type {AppProps} from 'next/app'
import {CacheProvider, EmotionCache} from "@emotion/react";
import {NextPage} from "next";
import {I18nextProvider} from 'react-i18next';
import i18n from 'src/configs/i18n';
import {createEmotionCache} from "src/@core/utils/create-emotion-cache";
import {TemplateConsumer} from "src/@core/context/LayoutContext";
import WindowWrapper from "src/@core/components/window-wrapper";
import ThemeComponent from "src/@core/theme/ThemeComponent";
import {useEffect} from "react";

type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

export default function App(props: ExtendedAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props

  // H5根据屏幕大小计算根元素的font-size
  const getFontSize = () => {
    const html = document.documentElement
    const width = html.clientWidth
    html.style.fontSize = width / 10 + 'px'
  }

  useEffect(() => {
    getFontSize()
    window.addEventListener('resize', getFontSize)
    return () => {
      window.removeEventListener('resize', getFontSize)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <I18nextProvider i18n={i18n}>
        <TemplateConsumer>
          {({config}) => {
            return (
              <ThemeComponent config={config}>
                <WindowWrapper>
                  <Component {...pageProps} />
                </WindowWrapper>
              </ThemeComponent>
            )
          }}
        </TemplateConsumer>
      </I18nextProvider>
    </CacheProvider>
  )
}
