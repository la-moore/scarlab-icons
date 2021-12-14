import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-plus-alt" {...props}>
    <path d="M5 12H19" />
	<path d="M12 5L12 19" />
  </svg>
}

export default SvgComponent
