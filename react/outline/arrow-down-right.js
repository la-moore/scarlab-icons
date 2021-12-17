import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-arrow-down-right" {...props}>
    <path d="M14.5 14.5L9 9" />
	<path d="M15 10L15 14.6717C15 14.853 14.853 15 14.6716 15L10 15" />
  </svg>
}

export default SvgComponent
