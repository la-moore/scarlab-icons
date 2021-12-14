import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-battery" {...props}>
    <path d="M21 11V13" />
	<path d="M3 10.656C3 8.46878 3.46878 8 5.656 8H15.344C17.5312 8 18 8.46878 18 10.656V13.344C18 15.5312 17.5312 16 15.344 16H5.656C3.46878 16 3 15.5312 3 13.344V10.656Z" />
  </svg>
}

export default SvgComponent
