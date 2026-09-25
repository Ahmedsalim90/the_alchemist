function Container({ children, className = '' }) {
  return (
    <div
      className={`w-full ${className}`}
      style={{
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 'clamp(1rem, 4vw, 3rem)',
        paddingRight: 'clamp(1rem, 4vw, 3rem)',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  )
}

export default Container