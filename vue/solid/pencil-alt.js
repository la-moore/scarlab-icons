import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    "xmlns": "http://www.w3.org/2000/svg", 
	"width": "24", 
	"height": "24", 
	"viewBox": "0 0 24 24", 
	"fill": "currentColor", 
	"stroke": "none", 
	"fill-rule": "evenodd", 
	"clip-rule": "evenodd", 
	"class": "scarlab scarlab-pencil-alt",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M9.65451 3.34098C10.7432 1.6173 13.2568 1.6173 14.3455 3.34098L18.5365 9.97669C18.8393 10.4561 19 11.0116 19 11.5787V19C19 20.6568 17.6569 22 16 22H8C6.34315 22 5 20.6568 5 19V11.5787C5 11.0116 5.16072 10.4561 5.46353 9.97669L9.65451 3.34098ZM12.6545 4.40896C12.3507 3.92797 11.6493 3.92797 11.3455 4.40896L10.303 6.0595C10.657 6.62504 11.2856 6.99997 12 6.99997C12.7144 6.99997 13.343 6.625 13.6969 6.05942L12.6545 4.40896ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8Z"})
  ]))
}
