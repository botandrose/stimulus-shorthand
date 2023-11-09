import { ValueListObserver } from "@hotwired/stimulus"

export default function shorthand({ controller, value }) {
  const shorthandAttribute = `data-${controller}`

  new ValueListObserver(document.body, shorthandAttribute, {
    elementMatchedValue: function(element, _value) {
      const valueValue = element.getAttribute(shorthandAttribute)
      if(valueValue) {
        // expand to full stimulus declaration
        element.setAttribute(`${shorthandAttribute}-${value}-value`, valueValue)
        element.setAttribute("data-controller", controller)
        element.removeAttribute(shorthandAttribute)
      }
    },

    // stub remaining interface with no-ops
    elementUnmatchedValue: function(_element, _value) {},
    parseValueForToken: _token => true,
  }).start()
}

