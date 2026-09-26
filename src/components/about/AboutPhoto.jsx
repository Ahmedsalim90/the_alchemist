import { useLanguage } from '../../context/LanguageContext'
import aboutPhoto from '../../assets/images/about/about-photo.jpeg'

function AboutPhoto() {
  const { t } = useLanguage()

  return (
    <div className="relative mx-auto w-full max-w-sm md:mx-0">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-surface">
        <img
          src={aboutPhoto}
          alt="Nsangou Ahmed Salim"
          className="h-full w-full object-cover"
        />
      </div>

      <p className="mt-3 text-[10px] uppercase tracking-widest text-foreground-muted">
        {t.about.photoTag}
      </p>
    </div>
  )
}

export default AboutPhoto