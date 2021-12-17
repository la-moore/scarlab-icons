import * as React from "react"

function SvgComponent(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="scarlab scarlab-ticket" {...props}>
    <path d="M15 5V8" />
	<path d="M15 16V19" />
	<path d="M15 11V13" />
	<path d="M4.4416 10.4557C3.79252 9.73379 2.96682 8.93468 3.07899 7.97035C3.35831 5.56902 4.46022 5 7.648 5H16.352C19.5398 5 20.6417 5.56902 20.921 7.97035C21.0332 8.93468 20.2075 9.73379 19.5584 10.4557C19.2424 10.8072 19 11.3037 19 12C19 12.6963 19.2424 13.1928 19.5584 13.5443C20.2075 14.2662 21.0332 15.0653 20.921 16.0296C20.6417 18.431 19.5398 19 16.352 19H7.648C4.46022 19 3.35831 18.431 3.07899 16.0296C2.96682 15.0653 3.79252 14.2662 4.4416 13.5443C4.75761 13.1928 5 12.6963 5 12C5 11.3037 4.75761 10.8072 4.4416 10.4557Z" />
  </svg>
}

export default SvgComponent
