import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-arrow-right" {...props}>
    <path d="M16 12L8 12" />
	<path d="M13 15L15.913 12.087L16 12L15.913 11.913L13 9" />
  </svg>
}

export default SvgComponent
