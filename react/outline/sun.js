import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-sun" {...props}>
    <path d="M10 10C8.89543 11.1046 8.89543 12.8954 10 14C11.1046 15.1046 12.8954 15.1046 14 14C15.1046 12.8954 15.1046 11.1046 14 10C12.8954 8.89543 11.1046 8.89543 10 10Z" />
	<path d="M12 5V3" />
	<path d="M17 7L19 5" />
	<path d="M19 12H21" />
	<path d="M17 17L19 19" />
	<path d="M12 19V21" />
	<path d="M7 17L5 19" />
	<path d="M5 12H3" />
	<path d="M5 5L7 7" />
  </svg>
}

export default SvgComponent
