import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-yen" {...props}>
    <path d="M9 7L12 11.5L15 7" />
	<path d="M12 11.5V17" />
	<path d="M9 12H15" />
	<path d="M9 15H15" />
  </svg>
}

export default SvgComponent
