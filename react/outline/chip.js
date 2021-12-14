import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-chip" {...props}>
    <path d="M5 9.648C5 5.82037 5.82037 5 9.648 5H14.352C18.1796 5 19 5.82037 19 9.648V14.352C19 18.1796 18.1796 19 14.352 19H9.648C5.82037 19 5 18.1796 5 14.352V9.648Z" />
	<path d="M9 10.992C9 9.35159 9.35159 9 10.992 9H13.008C14.6484 9 15 9.35159 15 10.992V13.008C15 14.6484 14.6484 15 13.008 15H10.992C9.35159 15 9 14.6484 9 13.008V10.992Z" />
	<path d="M8 5L8 3" />
	<path d="M8 21L8 19" />
	<path d="M21 16L19 16" />
	<path d="M5 16L3 16" />
	<path d="M16 5L16 3" />
	<path d="M16 21L16 19" />
	<path d="M21 8L19 8" />
	<path d="M5 8L3 8" />
  </svg>
}

export default SvgComponent