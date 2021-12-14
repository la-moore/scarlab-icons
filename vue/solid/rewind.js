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
	"class": "scarlab scarlab-rewind",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M16.4855 8.14251C16.7944 7.95715 17.1792 7.95229 17.4927 8.1298C17.8062 8.30731 18 8.63973 18 9V15C18 15.3603 17.8062 15.6927 17.4927 15.8702C17.1792 16.0477 16.7944 16.0429 16.4855 15.8575L13 13.7662V15C13 15.3603 12.8062 15.6927 12.4927 15.8702C12.1792 16.0477 11.7944 16.0429 11.4855 15.8575L6.4855 12.8575C6.1843 12.6768 6 12.3513 6 12C6 11.6487 6.1843 11.3232 6.4855 11.1425L11.4855 8.14251C11.7944 7.95715 12.1792 7.95229 12.4927 8.1298C12.8062 8.30731 13 8.63973 13 9V10.2338L16.4855 8.14251Z"})
  ]))
}