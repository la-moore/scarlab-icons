import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-bitcoin" {...props}>
    <path d="M8 8.5H13.5C16 8.5 16 12 13.5 12H10.5" />
	<path d="M10.5 12H13.5C16 12 16 15.5 13.5 15.5H8" />
	<path d="M10 17V7" />
	<path d="M13 8.5V7" />
	<path d="M13 17V15.5" />
  </svg>
}

export default SvgComponent
