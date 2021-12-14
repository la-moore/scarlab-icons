import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-key" {...props}>
    <path d="M12.5 11.5L21 3" />
	<path d="M8.5 10C11.5376 10 14 12.4624 14 15.5C14 18.5376 11.5376 21 8.5 21C5.46243 21 3 18.5376 3 15.5C3 12.4624 5.46243 10 8.5 10Z" />
	<path d="M15.5 8.5L18 11L21 8L18.5 5.5" />
  </svg>
}

export default SvgComponent
