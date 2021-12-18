import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-frame" {...props}>
    <path d="M18 21L18 3" />
	<path d="M6 21L6 3" />
	<path d="M21 6L3 6" />
	<path d="M3 18L21 18" />
  </svg>
}

export default SvgComponent
