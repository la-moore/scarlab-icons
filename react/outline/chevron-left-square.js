import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-chevron-left-square" {...props}>
    <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" />
	<path d="M13 9L10.2625 11.7375V11.7375C10.1175 11.8825 10.1175 12.1175 10.2625 12.2625V12.2625L13 15" />
  </svg>
}

export default SvgComponent
