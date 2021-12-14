import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-liras-square" {...props}>
    <path d="M15 17H9C9.66667 16.6667 11 15.8 11 15C11 14.2 11 10.5416 11 8.87498C11 6.37499 15 6.37502 15 8.87498" />
	<path d="M9 11H13" />
	<path d="M9 14H13" />
	<path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" />
  </svg>
}

export default SvgComponent
