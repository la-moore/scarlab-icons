import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-chart-bubble" {...props}>
    <path d="M21 8C21 10.7614 18.7614 13 16 13C13.2386 13 11 10.7614 11 8C11 5.23858 13.2386 3 16 3C18.7614 3 21 5.23858 21 8Z" />
	<path d="M10 15.5C10 17.433 8.433 19 6.5 19C4.567 19 3 17.433 3 15.5C3 13.567 4.567 12 6.5 12C8.433 12 10 13.567 10 15.5Z" />
	<path d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z" />
  </svg>
}

export default SvgComponent