import { WhatsappIcon } from '../ui/icons'
import { whatsappUrl } from '../../data/contact'

function FloatingWhatsApp() {
  return (
    
    <a  
    href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Nsangou Ahmed Salim on WhatsApp"
      className="fixed bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-foreground-secondary shadow-sm transition-colors duration-200 hover:border-accent hover:text-accent"
    >
      <WhatsappIcon className="h-5 w-5" />
    </a>
  )
}

export default FloatingWhatsApp