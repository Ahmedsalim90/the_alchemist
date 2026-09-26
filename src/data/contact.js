const whatsappMessage = encodeURIComponent(
  "Hello Ahmed, I found your portfolio and I'd like to discuss a software project."
)

export const whatsappUrl = `https://wa.me/237657576445?text=${whatsappMessage}`

export const contactMethods = [
  {
    label: 'Email',
    value: 'thealchemist237@gmail.com',
    href: 'mailto:thealchemist237@gmail.com',
    action: 'Send an Email',
    ariaLabel: 'Send an email to Nsangou Ahmed Salim',
  },
  {
    label: 'WhatsApp',
    value: '+237 657 576 445',
    href: whatsappUrl,
    action: 'Message on WhatsApp',
    ariaLabel: 'Contact Nsangou Ahmed Salim on WhatsApp',
    external: true,
  },
  {
    label: 'Phone',
    value: '+237 657 576 445',
    href: 'tel:+237657576445',
    action: 'Call Me',
    ariaLabel: 'Call Nsangou Ahmed Salim',
  },
  {
    label: 'LinkedIn',
    value: 'Nsangou Ahmed Salim',
    href: 'https://www.linkedin.com/in/nsangou-ahmed-0126b2390',
    action: 'LinkedIn',
    ariaLabel: "Visit Nsangou Ahmed Salim's LinkedIn profile",
    external: true,
  },
  {
    label: 'GitHub',
    value: 'Ahmedsalim90',
    href: 'https://github.com/Ahmedsalim90',
    action: 'GitHub',
    ariaLabel: "Visit Nsangou Ahmed Salim's GitHub profile",
    external: true,
  },
]