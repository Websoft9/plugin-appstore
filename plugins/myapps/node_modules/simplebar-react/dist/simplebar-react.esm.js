/**
 * simplebar-react - v2.4.3
 * React component for SimpleBar
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat
 * Under MIT License
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import SimpleBarJS from 'simplebar/dist/simplebar-core.esm';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded = ["children", "scrollableNodeProps", "tag"];
/* Deprecated
 * Hardcore this here until we can safely deprecated it.
 * Helper function to retrieve options from element attributes
 */

var getOptions = function getOptions(obj) {
  var options = Array.prototype.reduce.call(obj, function (acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);

    if (option) {
      var key = option[1].replace(/\W+(.)/g, function (x, chr) {
        return chr.toUpperCase();
      });

      switch (attribute.value) {
        case 'true':
          acc[key] = true;
          break;

        case 'false':
          acc[key] = false;
          break;

        case undefined:
          acc[key] = true;
          break;

        default:
          acc[key] = attribute.value;
      }
    }

    return acc;
  }, {});
  return options;
};

var SimpleBar = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$scrollableNodePr = _ref.scrollableNodeProps,
      scrollableNodeProps = _ref$scrollableNodePr === void 0 ? {} : _ref$scrollableNodePr,
      _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'div' : _ref$tag,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  var RootTag = tag;
  var instance;
  var scrollableNodeRef = useRef();
  var elRef = useRef();
  var contentNodeRef = useRef();
  var options = {};
  var rest = {};
  var deprecatedOptions = [];
  Object.keys(otherProps).forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(SimpleBarJS.defaultOptions, key)) {
      options[key] = otherProps[key];
    } else if (key.match(/data-simplebar-(.+)/) && key !== 'data-simplebar-direction') {
      deprecatedOptions.push({
        name: key,
        value: otherProps[key]
      });
    } else {
      rest[key] = otherProps[key];
    }
  });

  if (deprecatedOptions.length) {
    console.warn("simplebar-react: this way of passing options is deprecated. Pass it like normal props instead:\n        'data-simplebar-auto-hide=\"false\"' \u2014> 'autoHide=\"false\"'\n      ");
  }

  useEffect(function () {
    scrollableNodeRef = scrollableNodeProps.ref || scrollableNodeRef;

    if (elRef.current) {
      instance = new SimpleBarJS(elRef.current, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, getOptions(deprecatedOptions)), options), scrollableNodeRef && {
        scrollableNode: scrollableNodeRef.current
      }), contentNodeRef.current && {
        contentNode: contentNodeRef.current
      }));

      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref) {
        ref.current = instance;
      }
    }

    return function () {
      instance.unMount();
      instance = null;

      if (typeof ref === 'function') {
        ref(null);
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement(RootTag, _extends({
    ref: elRef,
    "data-simplebar": true
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "simplebar-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "simplebar-height-auto-observer-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "simplebar-height-auto-observer"
  })), /*#__PURE__*/React.createElement("div", {
    className: "simplebar-mask"
  }, /*#__PURE__*/React.createElement("div", {
    className: "simplebar-offset"
  }, typeof children === 'function' ? children({
    scrollableNodeRef: scrollableNodeRef,
    contentNodeRef: contentNodeRef
  }) : /*#__PURE__*/React.createElement("div", _extends({}, scrollableNodeProps, {
    className: "simplebar-content-wrapper".concat(scrollableNodeProps.className ? " ".concat(scrollableNodeProps.className) : '')
  }), /*#__PURE__*/React.createElement("div", {
    className: "simplebar-content"
  }, children)))), /*#__PURE__*/React.createElement("div", {
    className: "simplebar-placeholder"
  })), /*#__PURE__*/React.createElement("div", {
    className: "simplebar-track simplebar-horizontal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "simplebar-scrollbar"
  })), /*#__PURE__*/React.createElement("div", {
    className: "simplebar-track simplebar-vertical"
  }, /*#__PURE__*/React.createElement("div", {
    className: "simplebar-scrollbar"
  })));
});
SimpleBar.displayName = 'SimpleBar';
SimpleBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  scrollableNodeProps: PropTypes.object,
  tag: PropTypes.string
};

export default SimpleBar;
