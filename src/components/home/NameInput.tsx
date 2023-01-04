import Translations from "src/@core/layouts/components/Translations";
import {useTranslation} from "react-i18next";
import {useRequest} from "ahooks";

type Props = {
  step: number;
  setStep: (step: number) => void;
}

const NameInput = (props: Props) => {
  const {step, setStep} = props
  const {t} = useTranslation()

  const {} = useRequest()

  const handleClick = () => {
    setTimeout(() => {
      setStep(3)
    }, 2000)
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
          <Translations text="button.text"/>
        </button>
      </div>
      <Fade
        in={loading}
        style={{
          transitionDelay: loading ? '800ms' : '0ms',
        }}
        unmountOnExit
      >
        <CircularProgress />
      </Fade>
    </div>
  )
}

export default NameInput;
