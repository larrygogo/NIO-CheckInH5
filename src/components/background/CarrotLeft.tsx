
const CarrotLeft = () => {
  return (
    <div
      style={{
        position: 'absolute',
        // 291.17 / 43 = 6.75
        top: '6.75rem',
        // 45.05 / 43 = 1.05
        left: '1.05rem',
      }}
    >
      <img
        draggable="false"
        src="/images/left-carrot.svg"
        alt="left-carrot"
        style={{
          // 36.88 / 43 = 0.86
          width: '0.86rem',
          // 66.58 / 43 = 1.55
          height: '1.55rem',
        }}
      />
    </div>
  )
}

export default CarrotLeft
