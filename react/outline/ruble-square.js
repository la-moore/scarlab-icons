import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-ruble-square" {...props}>
    <path d="M11 8V17" />
	<path d="M9 15H15" />
	<path d="M11 8H13.5C16.5 8 16.5 12 13.5 12H9" />
	<path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" />
  </svg>
}

export default SvgComponent
