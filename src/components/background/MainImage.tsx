
const MainImage = () => {

  return (
    <div
      style={{
        position: 'absolute',
        // 428.23 / 43 = 9.93
        top: '9.93rem',
        // 12.83 / 43 = 0.3
        left: '0.3rem',
      }}
    >
      <img
        draggable="false"
        src="/images/main.svg"
        alt="mainImage"
        style={{
          // 394.04 / 43 = 9.16
          width: '9.16rem',
          // 358.33 / 43 = 8.33
          height: '8.33rem',
        }}
      />
    </div>

  )
}

export default MainImage
