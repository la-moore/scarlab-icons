import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-corner-right-down" {...props}>
    <path d="M7 8.5L9.5 8.5C11.3856 8.5 12.3284 8.5 12.9142 9.08579C13.5 9.67157 13.5 10.6144 13.5 12.5L13.5 16" />
	<path d="M17 13.5L14 16.5V16.5C13.7239 16.7761 13.2761 16.7761 13 16.5V16.5L10 13.5" />
  </svg>
}

export default SvgComponent
