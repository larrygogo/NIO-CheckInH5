const Title = (props: any) => (

  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '1.11rem'
    }}
  >
    <img
      draggable={false}
      src="/images/title.svg"
      alt="title"
      style={{
        width: "6.4rem",
        objectFit: 'contain',
      }}
    />
  </div>
)

export default Title
