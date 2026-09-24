import { PersonIcon } from './icons'

function Avatar({ size = 72 }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full border border-border bg-elevated text-foreground-secondary"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <PersonIcon className="h-1/2 w-1/2" />
    </div>
  )
}

export default Avatar