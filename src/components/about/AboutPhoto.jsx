import aboutPhoto from '../../assets/images/about/about-photo.JPEG'

function AboutPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-sm md:mx-0">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-surface">
        {/*
          Swap-in point for the real photo:
          <img
            src={aboutPhoto}
            alt="Nsangou Ahmed Salim"
            className="h-full w-full object-cover"
          />
          (import aboutPhoto from '../../assets/images/about/your-file.jpg' at the top)
        */}
       <img
  src={aboutPhoto}
  alt="Nsangou Ahmed Salim"
  className="h-full w-full object-cover"
/>
      </div>

      <p className="mt-3 text-[10px] uppercase tracking-widest text-foreground-muted">
        Nsangou Ahmed Salim · Software Engineering · Cameroon
      </p>
    </div>
  )
}

export default AboutPhoto