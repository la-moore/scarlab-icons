import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-justify-left" {...props}>
    <path d="M3 6H21" />
	<path d="M3 14H21" />
	<path d="M3 10L17 10" />
	<path d="M3 18L17 18" />
  </svg>
}

export default SvgComponent
