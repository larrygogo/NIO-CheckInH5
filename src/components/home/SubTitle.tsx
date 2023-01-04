const SubTitle = (props: any) => (
  // 11.55 / 43 = 0.27
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '0.27rem'
    }}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      draggable={false}
      src="/images/sub-title.svg"
      alt="sub-title"
      style={{
        width: "6.4rem",
        objectFit: 'contain',
      }}
    />
  </div>
)

export default SubTitle
