import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-arrow-down-right-circle" {...props}>
    <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" />
	<path d="M14.5 14.5L9 9" />
	<path d="M10 15H14.6717C14.853 15 15 14.853 15 14.6716V10" />
  </svg>
}

export default SvgComponent
