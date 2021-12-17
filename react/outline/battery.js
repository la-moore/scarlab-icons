import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-battery" {...props}>
    <path d="M21 11V13" />
	<path d="M3 12C3 10.1144 3 9.17157 3.58579 8.58579C4.17157 8 5.11438 8 7 8H10.5H14C15.8856 8 16.8284 8 17.4142 8.58579C18 9.17157 18 10.1144 18 12V12V12C18 13.8856 18 14.8284 17.4142 15.4142C16.8284 16 15.8856 16 14 16H10.5H7C5.11438 16 4.17157 16 3.58579 15.4142C3 14.8284 3 13.8856 3 12V12V12Z" />
  </svg>
}

export default SvgComponent
