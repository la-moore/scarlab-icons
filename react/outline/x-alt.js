import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-x-alt" {...props}>
    <path d="M7 7L17 17" />
	<path d="M17 7L7 17" />
  </svg>
}

export default SvgComponent