import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-liras-circle" {...props}>
    <path d="M15 17H9C9.66667 16.6667 11 15.8 11 15C11 14.2 11 10.5416 11 8.87498C11 6.37499 15 6.37502 15 8.87498" />
	<path d="M9 11H13" />
	<path d="M9 14H13" />
	<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
  </svg>
}

export default SvgComponent
