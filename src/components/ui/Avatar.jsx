import avatarPhoto from '../../assets/images/about/avatar-photo.jpeg'

function Avatar({ size = 72 }) {
  return (
    <div
      className="shrink-0 overflow-hidden rounded-full border border-border bg-elevated"
      style={{ width: size, height: size }}
    >
      <img
        src={avatarPhoto}
        alt="Nsangou Ahmed Salim"
        className="h-full w-full object-cover object-top"
      />
    </div>
  )
}

export default Avatar
