import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-cube-transparent" {...props}>
    <path d="M10 4L12 3L14 4" />
	<path d="M10 11L12 12L14 11" />
	<path d="M12 12V14" />
	<path d="M18.5 6.5L20 7.5V9.5" />
	<path d="M19.5 7.5L18 8.5" />
	<path d="M5.5 6.5L4 7.5V9.5" />
	<path d="M4 7.5L5.5 8.5" />
	<path d="M4 14.5V16.5L5.5 17.5" />
	<path d="M10 20L12 21L14 20" />
	<path d="M12 21V18.5" />
	<path d="M18.5 17.5L20 16.5V14.5" />
  </svg>
}

export default SvgComponent
