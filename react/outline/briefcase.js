import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-briefcase" {...props}>
    <path d="M3 11.648C3 7.82037 3.82037 7 7.648 7H16.352C20.1796 7 21 7.82037 21 11.648V16.352C21 20.1796 20.1796 21 16.352 21H7.648C3.82037 21 3 20.1796 3 16.352V11.648Z" />
	<path d="M8 21V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V21" />
  </svg>
}

export default SvgComponent
