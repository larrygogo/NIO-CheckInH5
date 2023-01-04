const LeftCarrot = () => {
  return (
    <div
      style={{
        position: 'absolute',
        // 279.72 / 43 = 6.49
        top: '6.49rem',
        // 38.13 / 43 = 0.88
        right: '0.88rem',
      }}
    >
      <img
        draggable="false"
        src="/images/right-carrot.svg"
        alt="left-carrot"
        style={{
          objectFit: 'contain',
          // 38.62 / 43 = 0.89
          width: '0.89rem',
        }}
      />
    </div>
  )
}

export default LeftCarrot
