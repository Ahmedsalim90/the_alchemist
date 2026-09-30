import { useEffect } from 'react'

/**
 * Sets the browser tab title and meta description for the current page.
 * Lovable's TanStack Start export set these server-side via each route's
 * `head()` function; this is the client-side equivalent for our plain
 * Vite + react-router-dom setup — same visible result (tab title changes
 * per page), no new dependency.
 */
function usePageTitle(title, description) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}

export default usePageTitle
