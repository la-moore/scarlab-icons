import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-monitor" {...props}>
    <path d="M3 7.648C3 3.82037 3.82037 3 7.648 3H16.352C20.1796 3 21 3.82037 21 7.648V12.352C21 16.1796 20.1796 17 16.352 17H7.648C3.82037 17 3 16.1796 3 12.352V7.648Z" />
	<path d="M7 21H17" />
	<path d="M12 17V21" />
  </svg>
}

export default SvgComponent
