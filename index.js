import { ValueListObserver } from "@hotwired/stimulus"

export default function shorthand({ controller, value }) {
  const shorthandAttribute = `data-${controller}`

  new ValueListObserver(document.firstElementChild, shorthandAttribute, {
    elementMatchedValue: function(element, _value) {
      const valueValue = element.getAttribute(shorthandAttribute)
      if(valueValue) {
        // expand to full stimulus declaration
        element.setAttribute(`${shorthandAttribute}-${value}-value`, valueValue)
        let controllers = (element.getAttribute("data-controller") || "").split(" ")
        controllers.push(controller)
        element.setAttribute("data-controller", controllers.join(" "))
        element.removeAttribute(shorthandAttribute)
      }
    },

    // stub remaining interface with no-ops
    elementUnmatchedValue: function(_element, _value) {},
    parseValueForToken: _token => true,
  }).start()
}

