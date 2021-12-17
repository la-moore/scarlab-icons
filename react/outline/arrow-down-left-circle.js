import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-arrow-down-left-circle" {...props}>
    <path d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" />
	<path d="M9.5 14.5L15 9" />
	<path d="M14 15H9.32833C9.147 15 9 14.853 9 14.6716V10" />
  </svg>
}

export default SvgComponent
