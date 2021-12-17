import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-link" {...props}>
    <path d="M9 8L7 8C5.11438 8 4.17157 8 3.58578 8.58579C3 9.17158 3 10.1144 3 12V12C3 13.8856 3 14.8284 3.58579 15.4142C4.17157 16 5.11438 16 7 16L9 16" />
	<path d="M15 16L17 16C18.8856 16 19.8284 16 20.4142 15.4142C21 14.8284 21 13.8856 21 12V12C21 10.1144 21 9.17157 20.4142 8.58578C19.8284 8 18.8856 8 17 8L15 8" />
	<path d="M8 12H16" />
  </svg>
}

export default SvgComponent
