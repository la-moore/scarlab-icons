import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-mail" {...props}>
    <path d="M3 9.648C3 5.82037 3.82037 5 7.648 5H16.352C20.1796 5 21 5.82037 21 9.648V14.352C21 18.1796 20.1796 19 16.352 19H7.648C3.82037 19 3 18.1796 3 14.352V9.648Z" />
	<path d="M4 6L10.683 11.8476C11.437 12.5074 12.563 12.5074 13.317 11.8476L20 6" />
  </svg>
}

export default SvgComponent