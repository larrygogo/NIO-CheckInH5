import Translations from "src/@core/layouts/components/Translations";
import {useTranslation} from "react-i18next";
import {useRequest} from "ahooks";
import {CircularProgress, Fade, useTheme} from "@mui/material";
import axios from "axios";
import {useState} from "react";
import Box from "@mui/material/Box";

type Props = {

  setStep: (step: number) => void;
  setImage: (image: string) => void;
}

const NameInput = (props: Props) => {
  const {setStep, setImage} = props
  const theme = useTheme();
  const {t, i18n} = useTranslation()
  const [uid, setUid] = useState<string>('')
  const [showError, setShowError] = useState<string>()

  const {loading, run: handleCheck} = useRequest(
    (uid: string, lang: string) => axios.get('/api/check', {
      params: {
        uid,
        lang
      }
    }),
    {
      manual: true,
      onSuccess: (data: any) => {
        setStep(3)
        setImage(data.data)
      },
      onError: (e: any) => {
        setShowError(e.response.data || e.message || 'Unknown error')
      }
    }
  )

  const handleClick = () => {
    handleCheck(uid, i18n.language);
  }

  return (
    <div
      style={{
        // 58.38 / 43 = 1.35
        marginTop: '1.35rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <input
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          style={{
            width: '5rem',
            height: '0.91rem',
            borderRadius: '0.23rem',
            border: '0.05rem solid #FF6010',
            padding: '0.4rem',
            fontSize: '0.3rem',
            boxSizing: 'border-box',
          }}
          placeholder={t('input.placeholder') || ''}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // 23.33 / 43 = 0.54
          marginTop: '0.54rem',
        }}
      >
        <button
          onClick={handleClick}
          style={{
            backgroundColor: '#FF6010',
            borderRadius: '0.23rem',
            // 35.72 / 43 = 0.83
            width: '5rem',
            // 174.03 / 43 = 4.04
            height: '0.83rem',
            boxShadow: 'none',
            border: 0,
            color: '#FFFFFF'
          }}
        >
          <Translations text="button.submit"/>
        </button>
      </div>
      <Fade
        in={loading}
        style={{
          transitionDelay: loading ? '800ms' : '0ms',
        }}
        unmountOnExit
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.5)',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              backgroundColor: 'rgba(130,66,19,0.8)',
              borderRadius: '0.4rem',
              color: '#ffffff'
            }}
          >
            <CircularProgress color="inherit"/>
            <div style={{fontSize: '0.5rem', }}>loading...</div>
          </div>
        </Box>
      </Fade>
      <Fade
        in={!!showError}
        style={{
          transitionDelay: showError ? '800ms' : '0ms',
        }}
        unmountOnExit
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              backgroundColor: '#F9E2C5',
              boxShadow: theme.shadows[5],
              borderRadius: '0.4rem',
              color: '#FF6010'
            }}
          >
            <div style={{fontSize: '0.5rem', }}>
              {showError}
            </div>
            <button
              onClick={() => setShowError(undefined)}
              style={{
                backgroundColor: '#FF6010',
                borderRadius: '0.23rem',
                // 35.72 / 43 = 0.83
                width: '4rem',
                // 174.03 / 43 = 4.04
                height: '0.83rem',
                boxShadow: 'none',
                border: 0,
                color: '#FFFFFF'
              }}
            >
              <Translations text="button.ok" />
            </button>
          </div>

        </Box>
      </Fade>
    </div>
  )
}

export default NameInput;
