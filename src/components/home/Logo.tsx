const Logo = () => {
  // 获取屏幕宽度像素
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1.5813953488372093rem'
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        draggable="false"
        src="/images/logo.svg"
        alt="logo"
        style={{
          width: "4.116rem",
          objectFit: 'contain',
        }}
      />
    </div>
  )
}

export default Logo
