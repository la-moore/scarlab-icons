import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-arrow-down" {...props}>
    <path d="M12 16L12 8" />
	<path d="M9 13L11.913 15.913L12 16L12.087 15.913L15 13" />
  </svg>
}

export default SvgComponent
