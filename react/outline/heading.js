import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-heading" {...props}>
    <path d="M5 4L9 4" />
	<path d="M15 4L19 4" />
	<path d="M5 20H9" />
	<path d="M15 20H19" />
	<path d="M7 4V20" />
	<path d="M17 4V20" />
	<path d="M7 12H17" />
  </svg>
}

export default SvgComponent
