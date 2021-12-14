import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-chat" {...props}>
    <path d="M8 10H8.01" />
	<path d="M12 10H12.01" />
	<path d="M16 10H16.01" />
	<path d="M3 10C3 4.2355 4.2355 3 10 3H14C19.7645 3 21 4.2355 21 10C21 15.7645 19.7645 17 14 17L8 21V16.9322C3.93913 16.609 3 15.0258 3 10Z" />
  </svg>
}

export default SvgComponent
