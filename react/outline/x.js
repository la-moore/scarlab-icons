import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-x" {...props}>
    <path d="M9 9L15 15" />
	<path d="M15 9L9 15" />
  </svg>
}

export default SvgComponent
