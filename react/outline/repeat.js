import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-repeat" {...props}>
    <path d="M6 11.976C6 7.05472 7.05476 5.99995 11.976 5.99995L15 5.99995" />
	<path d="M18 12.024C18 16.9452 16.9452 18 12.024 18L9 18" />
	<path d="M3 9L6 12L9 9" />
	<path d="M21 15L18 12L15 15" />
  </svg>
}

export default SvgComponent
