import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-film" {...props}>
    <path d="M8 3.5V20.5" />
	<path d="M16 3.5V20.5" />
	<path d="M21 12L4 12" />
	<path d="M8 8H4" />
	<path d="M8 16H4" />
	<path d="M20 8H16" />
	<path d="M20 16H16" />
	<path d="M3 10.7904C3 4.37501 4.37501 3 10.7904 3H13.2096C19.625 3 21 4.37501 21 10.7904V13.2096C21 19.625 19.625 21 13.2096 21H10.7904C4.37501 21 3 19.625 3 13.2096V10.7904Z" />
  </svg>
}

export default SvgComponent
