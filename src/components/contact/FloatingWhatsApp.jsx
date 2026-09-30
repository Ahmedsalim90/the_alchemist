import { WhatsappIcon } from '../ui/icons'
import { whatsappUrl } from '../../data/contact'

function FloatingWhatsApp() {
  return (
    
    <a  
    href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Nsangou Ahmed Salim on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-whatsapp bg-surface shadow-whatsapp transition-all duration-300 hover:-translate-y-1 hover:bg-whatsapp-soft sm:bottom-6 sm:right-6"
    >
      <WhatsappIcon className="h-5 w-5" />
    </a>
  )
}

export default FloatingWhatsApp