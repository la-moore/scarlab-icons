import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-switch-vertical" {...props}>
    <path d="M15 21L15 9" />
	<path d="M9 15L9 3" />
	<path d="M12 18L14.913 20.913V20.913C14.961 20.961 15.039 20.961 15.087 20.913V20.913L18 18" />
	<path d="M6 6L8.91296 3.08704V3.08704C8.96103 3.03897 9.03897 3.03897 9.08704 3.08704V3.08704L12 6" />
  </svg>
}

export default SvgComponent