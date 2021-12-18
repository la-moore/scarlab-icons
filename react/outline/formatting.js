import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-formatting" {...props}>
    <path d="M6 6V4.5V4.5C6 4.22386 6.22386 4 6.5 4H17.5C17.7761 4 18 4.22386 18 4.5V4.5V6" />
	<path d="M12 4V20" />
	<path d="M10 20H14" />
  </svg>
}

export default SvgComponent
