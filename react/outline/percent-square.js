import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-percent-square" {...props}>
    <path d="M16 8L8 16" />
	<path d="M9 9.01001L9 9.00001" />
	<path d="M15 15.01L15 15" />
	<path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" />
  </svg>
}

export default SvgComponent
