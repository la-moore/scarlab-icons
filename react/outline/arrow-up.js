import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-arrow-up" {...props}>
    <path d="M12 8L12 16" />
	<path d="M15 11L12.087 8.08704L12 8L11.913 8.08704L9 11" />
  </svg>
}

export default SvgComponent
