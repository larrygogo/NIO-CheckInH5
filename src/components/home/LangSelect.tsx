import {useTranslation} from "react-i18next";

type Props = {
  step: number;
  setStep: (step: number) => void;
}

const LangSelect = (props: Props) => {
  const {setStep} = props
  const {i18n} = useTranslation();
  // 185.04 / 43 = 4.3
  const handleChange = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <div
      style={{
        marginTop: '1.5rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          draggable={false}
          src="/images/lang-select-title.svg"
          alt="lang-select-title"
          style={{
            width: "4.3rem",
            objectFit: 'contain',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // 20.92 / 43 = 0.49
          marginTop: '0.49rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 0,
          }}
        >
            <img
              draggable={false}
              src="/images/lang-select-zh.svg"
              alt="lang-select-zh"
              onClick={async () => {
                await handleChange('zh')
                setStep(2)
              }}
              style={{
                //87.32 / 43 = 2.03
                marginRight: '-0.03rem',
                width: '2.03rem',
                objectFit: 'contain',
              }}
            />
          <img
            draggable={false}
            src="/images/lang-select-en.svg"
            alt="lang-select-en"
            onClick={async () => {
              await handleChange('en')
              setStep(2)
            }}
            style={{
              width: '2.03rem',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LangSelect;
