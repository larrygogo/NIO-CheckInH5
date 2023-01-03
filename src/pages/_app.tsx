import type {AppProps} from 'next/app'
import {CacheProvider, EmotionCache} from "@emotion/react";
import {NextPage} from "next";
import {createEmotionCache} from "src/@core/utils/create-emotion-cache";
import {TemplateConsumer} from "../@core/context/LayoutContext";
import WindowWrapper from "../@core/components/window-wrapper";
import ThemeComponent from "../@core/theme/ThemeComponent";

type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

export default function App(props: ExtendedAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props
  return (
    <CacheProvider value={emotionCache}>
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

    </CacheProvider>
  )
}
