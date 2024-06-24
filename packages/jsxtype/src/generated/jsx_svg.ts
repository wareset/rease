import {
  ConditionalProcessingCategory,
  CoreCategory,
  StyleCategory,
  PresentationCategory,
  XlinkCategory,
  FilterPrimitiveCategory,
  AnimationAttributeTargetCategory,
  AnimationTimingCategory,
  AnimationValueCategory,
  AnimationAdditionCategory,
  TransferFunctionElementCategory,
  ConditionalCategory,
  MediaPresentationCategory,
  FocusCategory,
  AnimationTargetElementCategory,
  AriaCategory,
  DeprecatedXlinkCategory,
} from './svg_attr_categories';
/**
 * animations
 */

// tagName: animate
// elements: script
// elementcategories: descriptive
export type JSX_SVG_Animate = AnimationAdditionCategory & AnimationTargetElementCategory & AnimationAttributeTargetCategory & AnimationTimingCategory & AnimationValueCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
}

// tagName: animateMotion
export type JSX_SVG_AnimateMotion = AnimationAdditionCategory & AnimationTargetElementCategory & AnimationTimingCategory & AnimationValueCategory & ConditionalProcessingCategory & CoreCategory & {
  "path": any;
  "keyPoints": any;
  "rotate": any;
  "origin": any;
}

// tagName: animateTransform
// elements: script
// elementcategories: descriptive
export type JSX_SVG_AnimateTransform = AnimationAdditionCategory & AnimationTargetElementCategory & AnimationAttributeTargetCategory & AnimationTimingCategory & AnimationValueCategory & ConditionalProcessingCategory & CoreCategory & {
  "type": any;
}

// tagName: discard
// elements: script
// elementcategories: descriptive
export type JSX_SVG_Discard = ConditionalProcessingCategory & CoreCategory & AriaCategory & {
  "begin": any;
  "href": any;
}

// tagName: mpath
// elements: script
// elementcategories: descriptive
export type JSX_SVG_Mpath = CoreCategory & {
  "href": any;
}

// tagName: set
// elements: script
// elementcategories: descriptive
export type JSX_SVG_Set = AnimationTargetElementCategory & AnimationAttributeTargetCategory & AnimationTimingCategory & ConditionalProcessingCategory & CoreCategory & {
  "to": any;
}


/**
 * masking
 */

// tagName: mask
// elements: a, clipPath, color-profile, filter, font, font-face, foreignObject, image, marker, mask, pattern, script, style, switch, view, text, altGlyphDef
// elementcategories: animation, descriptive, shape, structural, gradient
export type JSX_SVG_Mask = ConditionalProcessingCategory & CoreCategory & PresentationCategory & StyleCategory & {
  "x": any;
  "y": any;
  "width": any;
  "height": any;
  "maskUnits": any;
  "maskContentUnits": any;
}

// tagName: clipPath
// elements: script, text, use
// elementcategories: descriptive, animation, shape
export type JSX_SVG_ClipPath = ConditionalProcessingCategory & CoreCategory & PresentationCategory & StyleCategory & {
  "externalResourcesRequired": any;
  "transform": any;
  "clipPathUnits": any;
}


/**
 * filters
 */

// tagName: feBlend
// elements: animate, script, set
export type JSX_SVG_FeBlend = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
  "in2": any;
  "mode": any;
}

// tagName: feColorMatrix
// elements: animate, script, set
export type JSX_SVG_FeColorMatrix = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
  "type": any;
  "values": any;
}

// tagName: feComponentTransfer
// elements: feFuncR, feFuncG, feFuncB, feFuncA, script
export type JSX_SVG_FeComponentTransfer = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
}

// tagName: feComposite
// elements: animate, script, set
export type JSX_SVG_FeComposite = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
  "in2": any;
  "operator": any;
  "k1": any;
  "k2": any;
  "k3": any;
  "k4": any;
}

// tagName: feConvolveMatrix
// elements: animate, script, set
export type JSX_SVG_FeConvolveMatrix = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
  "order": any;
  "kernelMatrix": any;
  "divisor": any;
  "bias": any;
  "targetX": any;
  "targetY": any;
  "edgeMode": any;
  "kernelUnitLength": any;
  "preserveAlpha": any;
}

// tagName: feDiffuseLighting
export type JSX_SVG_FeDiffuseLighting = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
  "surfaceScale": any;
  "diffuseConstant": any;
  "kernelUnitLength": any;
}

// tagName: feDisplacementMap
// elements: animate, script, set
export type JSX_SVG_FeDisplacementMap = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
  "in2": any;
  "scale": any;
  "xChannelSelector": any;
  "yChannelSelector": any;
}

// tagName: feDistantLight
// elements: animate, script, set
export type JSX_SVG_FeDistantLight = CoreCategory & {
  "azimuth": any;
  "elevation": any;
}

// tagName: feDropShadow
// elements: animate, script, set
export type JSX_SVG_FeDropShadow = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
  "stdDeviation": any;
  "dx": any;
  "dy": any;
}

// tagName: feFlood
// elements: animate, script, set
export type JSX_SVG_FeFlood = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
}

// tagName: feFuncR
// elements: animate, script, set
export type JSX_SVG_FeFuncR = CoreCategory & TransferFunctionElementCategory & {
}

// tagName: feFuncG
// elements: animate, script, set
export type JSX_SVG_FeFuncG = CoreCategory & TransferFunctionElementCategory & {
}

// tagName: feFuncB
// elements: animate, script, set
export type JSX_SVG_FeFuncB = CoreCategory & TransferFunctionElementCategory & {
}

// tagName: feFuncA
// elements: animate, script, set
export type JSX_SVG_FeFuncA = CoreCategory & TransferFunctionElementCategory & {
}

// tagName: feGaussianBlur
// elements: animate, script, set
export type JSX_SVG_FeGaussianBlur = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
  "stdDeviation": any;
  "edgeMode": any;
}

// tagName: feImage
// elements: animate, animateTransform, script, set
export type JSX_SVG_FeImage = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "externalResourcesRequired": any;
  "preserveAspectRatio": any;
  "xlink-href": any;
  "href": any;
  "crossorigin": any;
}

// tagName: feMerge
// elements: feMergeNode, script
export type JSX_SVG_FeMerge = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
}

// tagName: feMergeNode
// elements: animate, script, set
export type JSX_SVG_FeMergeNode = CoreCategory & {
  "in": any;
}

// tagName: feMorphology
// elements: animate, script, set
export type JSX_SVG_FeMorphology = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
  "operator": any;
  "radius": any;
}

// tagName: feOffset
// elements: animate, script, set
export type JSX_SVG_FeOffset = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
  "dx": any;
  "dy": any;
}

// tagName: fePointLight
// elements: animate, script, set
export type JSX_SVG_FePointLight = CoreCategory & {
  "x": any;
  "y": any;
  "z": any;
}

// tagName: feSpecularLighting
export type JSX_SVG_FeSpecularLighting = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
  "surfaceScale": any;
  "specularConstant": any;
  "specularExponent": any;
  "kernelUnitLength": any;
}

// tagName: feSpotLight
// elements: animate, script, set
export type JSX_SVG_FeSpotLight = CoreCategory & {
  "x": any;
  "y": any;
  "z": any;
  "pointsAtX": any;
  "pointsAtY": any;
  "pointsAtZ": any;
  "specularExponent": any;
  "limitingConeAngle": any;
}

// tagName: feTile
// elements: animate, script, set
export type JSX_SVG_FeTile = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "in": any;
}

// tagName: feTurbulence
// elements: animate, script, set
export type JSX_SVG_FeTurbulence = CoreCategory & StyleCategory & PresentationCategory & FilterPrimitiveCategory & {
  "baseFrequency": any;
  "numOctaves": any;
  "seed": any;
  "stitchTiles": any;
  "type": any;
}

// tagName: filter
// elements: animate, script, set
// elementcategories: descriptive, filter primitive
export type JSX_SVG_Filter = CoreCategory & StyleCategory & PresentationCategory & {
  "externalResourcesRequired": any;
  "x": any;
  "y": any;
  "width": any;
  "height": any;
  "filterUnits": any;
  "primitiveUnits": any;
}


/**
 * general
 */

// tagName: a
export type JSX_SVG_A = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & DeprecatedXlinkCategory & {
  "href": any;
  "target": any;
  "download": any;
  "ping": any;
  "rel": any;
  "hreflang": any;
  "type": any;
  "referrerpolicy": any;
}

// tagName: circle
// elements: clipPath, marker, mask, script, style
// elementcategories: animation, descriptive, paint server
export type JSX_SVG_Circle = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
  "pathLength": any;
  // geometryproperties
  "cx": any;
  "cy": any;
  "r": any;
}

// tagName: defs
// elements: a, clipPath, filter, foreignObject, image, marker, mask, script, style, switch, view, text
// elementcategories: animation, descriptive, shape, structural, paint server
export type JSX_SVG_Defs = CoreCategory & PresentationCategory & {
}

// tagName: desc
export type JSX_SVG_Desc = CoreCategory & {
}

// tagName: ellipse
// elements: clipPath, marker, mask, script, style
// elementcategories: animation, descriptive, paint server
export type JSX_SVG_Ellipse = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
  "pathLength": any;
  // geometryproperties
  "cx": any;
  "cy": any;
  "rx": any;
  "ry": any;
}

// tagName: foreignObject
export type JSX_SVG_ForeignObject = AriaCategory & CoreCategory & ConditionalProcessingCategory & PresentationCategory & {
  // geometryproperties
  "x": any;
  "y": any;
  "width": any;
  "height": any;
}

// tagName: g
// elements: a, clipPath, filter, foreignObject, image, marker, mask, script, style, switch, text, view
// elementcategories: animation, descriptive, shape, structural, paint server
export type JSX_SVG_G = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
}

// tagName: image
// elements: clipPath, mask, script, style
// elementcategories: animation, descriptive
export type JSX_SVG_Image = AriaCategory & CoreCategory & ConditionalProcessingCategory & DeprecatedXlinkCategory & PresentationCategory & {
  "preserveAspectRatio": any;
  "href": any;
  "crossorigin": any;
  // geometryproperties
  "x": any;
  "y": any;
  "width": any;
  "height": any;
}

// tagName: line
// elements: clipPath, marker, mask, script, style
// elementcategories: animation, descriptive, paint server
export type JSX_SVG_Line = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
  "pathLength": any;
  "x1": any;
  "y1": any;
  "x2": any;
  "y2": any;
}

// tagName: linearGradient
// elements: animate, animateTransform, script, style, set, stop
// elementcategories: descriptive
export type JSX_SVG_LinearGradient = CoreCategory & PresentationCategory & DeprecatedXlinkCategory & {
  "x1": any;
  "y1": any;
  "x2": any;
  "y2": any;
  "gradientUnits": any;
  "gradientTransform": any;
  "spreadMethod": any;
  "href": any;
}

// tagName: marker
// elements: a, clipPath, filter, foreignObject, image, marker, mask, script, style, switch, view, text
// elementcategories: animation, descriptive, shape, structural, paint server
export type JSX_SVG_Marker = CoreCategory & PresentationCategory & {
  "viewBox": any;
  "preserveAspectRatio": any;
  "refX": any;
  "refY": any;
  "markerUnits": any;
  "markerWidth": any;
  "markerHeight": any;
  "orient": any;
}

// tagName: metadata
export type JSX_SVG_Metadata = CoreCategory & {
}

// tagName: path
// elements: clipPath, marker, mask, script, style
// elementcategories: animation, descriptive, paint server
export type JSX_SVG_Path = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
  "pathLength": any;
  // geometryproperties
  "d": any;
}

// tagName: pattern
// elements: a, clipPath, filter, foreignObject, image, marker, mask, script, style, switch, text, view
// elementcategories: animation, descriptive, shape, structural, paint server
export type JSX_SVG_Pattern = CoreCategory & PresentationCategory & DeprecatedXlinkCategory & {
  "viewBox": any;
  "preserveAspectRatio": any;
  "x": any;
  "y": any;
  "width": any;
  "height": any;
  "patternUnits": any;
  "patternContentUnits": any;
  "patternTransform": any;
  "href": any;
}

// tagName: polygon
// elements: clipPath, marker, mask, script, style
// elementcategories: animation, descriptive, paint server
export type JSX_SVG_Polygon = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
  "pathLength": any;
  "points": any;
}

// tagName: polyline
// elements: clipPath, marker, mask, script, style
// elementcategories: animation, descriptive, paint server
export type JSX_SVG_Polyline = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
  "pathLength": any;
  "points": any;
}

// tagName: radialGradient
// elements: animate, animateTransform, set, stop, script, style
// elementcategories: descriptive
export type JSX_SVG_RadialGradient = CoreCategory & PresentationCategory & DeprecatedXlinkCategory & {
  "cx": any;
  "cy": any;
  "r": any;
  "fx": any;
  "fy": any;
  "fr": any;
  "gradientUnits": any;
  "gradientTransform": any;
  "spreadMethod": any;
  "href": any;
}

// tagName: rect
// elements: mask, clipPath, marker, script, style
// elementcategories: animation, descriptive, paint server
export type JSX_SVG_Rect = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
  "pathLength": any;
  // geometryproperties
  "x": any;
  "y": any;
  "width": any;
  "height": any;
  "rx": any;
  "ry": any;
}

// tagName: script
// elementcategories: structurally external
export type JSX_SVG_Script = CoreCategory & DeprecatedXlinkCategory & {
  "type": any;
  "href": any;
  "crossorigin": any;
}

// tagName: stop
// elements: animate, set, script, style
export type JSX_SVG_Stop = CoreCategory & PresentationCategory & {
  "offset": any;
}

// tagName: style
export type JSX_SVG_Style = CoreCategory & {
  "type": any;
  "media": any;
  "title": any;
}

// tagName: svg
// elements: a, clipPath, filter, foreignObject, image, marker, mask, script, style, switch, text, view
// elementcategories: animation, descriptive, shape, structural, paint server
export type JSX_SVG_Svg = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
  "viewBox": any;
  "preserveAspectRatio": any;
  "transform": any;
  // geometryproperties
  "x": any;
  "y": any;
  "width": any;
  "height": any;
}

// tagName: switch
// elements: a, foreignObject, g, image, svg, switch, text, use
// elementcategories: animation, shape
export type JSX_SVG_Switch = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
}

// tagName: symbol
// elements: a, clipPath, filter, foreignObject, image, marker, mask, script, style, switch, text, view
// elementcategories: animation, descriptive, shape, structural, paint server
export type JSX_SVG_Symbol = AriaCategory & CoreCategory & PresentationCategory & {
  "preserveAspectRatio": any;
  "viewBox": any;
  "refX": any;
  "refY": any;
  // geometryproperties
  "x": any;
  "y": any;
  "width": any;
  "height": any;
}

// tagName: text
// elements: a, clipPath, marker, mask, script, style
// elementcategories: animation, descriptive, text content child, paint server
export type JSX_SVG_Text = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
  "lengthAdjust": any;
  "x": any;
  "y": any;
  "dx": any;
  "dy": any;
  "rotate": any;
  "textLength": any;
}

// tagName: textPath
// elements: a, animate, clipPath, marker, mask, script, set, style, tspan
// elementcategories: descriptive, paint server
export type JSX_SVG_TextPath = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & DeprecatedXlinkCategory & {
  "lengthAdjust": any;
  "textLength": any;
  "path": any;
  "href": any;
  "startOffset": any;
  "method": any;
  "spacing": any;
  "side": any;
}

// tagName: title
export type JSX_SVG_Title = CoreCategory & {
}

// tagName: tspan
// elements: a, animate, script, set, style, tspan
// elementcategories: descriptive, paint server
export type JSX_SVG_Tspan = AriaCategory & ConditionalProcessingCategory & CoreCategory & PresentationCategory & {
  "x": any;
  "y": any;
  "dx": any;
  "dy": any;
  "rotate": any;
  "textLength": any;
  "lengthAdjust": any;
}

// tagName: use
// elements: clipPath, mask, script, style
// elementcategories: animation, descriptive
export type JSX_SVG_Use = AriaCategory & CoreCategory & ConditionalProcessingCategory & PresentationCategory & DeprecatedXlinkCategory & {
  "href": any;
  // geometryproperties
  "x": any;
  "y": any;
  "width": any;
  "height": any;
}

// tagName: view
// elements: script, style
// elementcategories: animation, descriptive
export type JSX_SVG_View = AriaCategory & CoreCategory & {
  "viewBox": any;
  "preserveAspectRatio": any;
}


/**
 * SVGT12
 */

// tagName: animateColor
// elements: handler
// elementcategories: descriptive
/** @deprecated */
export type JSX_SVG_AnimateColor = ConditionalCategory & CoreCategory & XlinkCategory & AnimationAttributeTargetCategory & AnimationTimingCategory & AnimationValueCategory & AnimationAdditionCategory & {
}

// tagName: animation
// elements: discard, handler
// elementcategories: descriptive, animation
/** @deprecated */
export type JSX_SVG_Animation = ConditionalCategory & CoreCategory & FocusCategory & MediaPresentationCategory & XlinkCategory & AnimationTimingCategory & {
  "focusHighlight": any;
  "initialVisibility": any;
  "preserveAspectRatio": any;
  "xlink-href": any;
}

// tagName: audio
// elements: discard, handler
// elementcategories: descriptive, animation
/** @deprecated */
export type JSX_SVG_Audio = ConditionalCategory & CoreCategory & MediaPresentationCategory & XlinkCategory & AnimationTimingCategory & {
  "xlink-href": any;
  "type": any;
}

// tagName: font
// elements: font-face, missing-glyph, glyph, hkern
// elementcategories: descriptive
/** @deprecated */
export type JSX_SVG_Font = CoreCategory & {
  "externalResourcesRequired": any;
  "horiz-origin-x": any;
  "horiz-adv-x": any;
}

// tagName: font-face
/** @deprecated */
export type JSX_SVG_FontFace = CoreCategory & {
  "externalResourcesRequired": any;
  "font-family": any;
  "font-style": any;
  "font-variant": any;
  "font-weight": any;
  "font-stretch": any;
  "unicode-range": any;
  "units-per-em": any;
  "panose-1": any;
  "stemv": any;
  "stemh": any;
  "slope": any;
  "cap-height": any;
  "x-height": any;
  "accent-height": any;
  "ascent": any;
  "descent": any;
  "widths": any;
  "bbox": any;
  "ideographic": any;
  "alphabetic": any;
  "mathematical": any;
  "hanging": any;
  "underline-position": any;
  "underline-thickness": any;
  "strikethrough-position": any;
  "strikethrough-thickness": any;
  "overline-position": any;
  "overline-thickness": any;
}

// tagName: font-face-src
// elements: font-face-uri
// elementcategories: descriptive
/** @deprecated */
export type JSX_SVG_FontFaceSrc = CoreCategory & {
}

// tagName: font-face-uri
// elementcategories: descriptive
/** @deprecated */
export type JSX_SVG_FontFaceUri = CoreCategory & XlinkCategory & {
  "externalResourcesRequired": any;
  "xlink-href": any;
}

// tagName: glyph
// elementcategories: descriptive
/** @deprecated */
export type JSX_SVG_Glyph = CoreCategory & {
  "d": any;
  "horiz-adv-x": any;
  "unicode": any;
  "glyph-name": any;
  "arabic-form": any;
  "lang": any;
}

// tagName: handler
/** @deprecated */
export type JSX_SVG_Handler = CoreCategory & {
  "externalResourcesRequired": any;
  "xlink-href": any;
  "type": any;
  "ev-event": any;
}

// tagName: hkern
// elementcategories: descriptive
/** @deprecated */
export type JSX_SVG_Hkern = CoreCategory & {
  "u1": any;
  "g1": any;
  "u2": any;
  "g2": any;
  "k": any;
}

// tagName: missing-glyph
// elementcategories: descriptive
/** @deprecated */
export type JSX_SVG_MissingGlyph = CoreCategory & {
  "d": any;
  "horiz-adv-x": any;
}

// tagName: prefetch
// elementcategories: descriptive
/** @deprecated */
export type JSX_SVG_Prefetch = CoreCategory & XlinkCategory & {
  "mediaSize": any;
  "mediaTime": any;
  "mediaCharacterEncoding": any;
  "mediaContentEncodings": any;
  "bandwidth": any;
}

// tagName: tbreak
/** @deprecated */
export type JSX_SVG_Tbreak = CoreCategory & ConditionalCategory & {
}

// tagName: textArea
// elements: discard, handler, tspan, switch, a
// elementcategories: descriptive, animation
/** @deprecated */
export type JSX_SVG_TextArea = CoreCategory & ConditionalCategory & PresentationCategory & FocusCategory & {
  "editable": any;
  "focusHighlight": any;
  "transform": any;
  "x": any;
  "y": any;
  "width": any;
  "height": any;
}

// tagName: video
// elements: discard, handler
// elementcategories: descriptive, animation
/** @deprecated */
export type JSX_SVG_Video = CoreCategory & MediaPresentationCategory & XlinkCategory & ConditionalCategory & FocusCategory & AnimationTimingCategory & {
  "focusHighlight": any;
  "externalResourcesRequired": any;
  "transform": any;
  "preserveAspectRatio": any;
  "initialVisibility": any;
  "x": any;
  "y": any;
  "width": any;
  "height": any;
  "xlink-href": any;
  "type": any;
  "transformBehavior": any;
  "overlay": any;
}


/**
 * SVG11
 */

// tagName: altGlyph
/** @deprecated */
export type JSX_SVG_AltGlyph = ConditionalProcessingCategory & CoreCategory & PresentationCategory & StyleCategory & XlinkCategory & {
  "externalResourcesRequired": any;
  "x": any;
  "y": any;
  "dx": any;
  "dy": any;
  "glyphRef": any;
  "format": any;
  "rotate": any;
  "xlink-href": any;
}

// tagName: altGlyphDef
/** @deprecated */
export type JSX_SVG_AltGlyphDef = CoreCategory & {
}

// tagName: altGlyphItem
/** @deprecated */
export type JSX_SVG_AltGlyphItem = CoreCategory & {
}

// tagName: color-profile
// elementcategories: descriptive
/** @deprecated */
export type JSX_SVG_ColorProfile = CoreCategory & XlinkCategory & {
  "local": any;
  "name": any;
  "rendering-intent": any;
  "xlink-href": any;
}

// tagName: cursor
// elementcategories: descriptive
/** @deprecated */
export type JSX_SVG_Cursor = CoreCategory & ConditionalProcessingCategory & XlinkCategory & {
  "externalResourcesRequired": any;
  "x": any;
  "y": any;
  "xlink-href": any;
}

// tagName: font-face-format
/** @deprecated */
export type JSX_SVG_FontFaceFormat = CoreCategory & {
  "string": any;
}

// tagName: font-face-name
/** @deprecated */
export type JSX_SVG_FontFaceName = CoreCategory & {
  "name": any;
}

// tagName: glyphRef
/** @deprecated */
export type JSX_SVG_GlyphRef = CoreCategory & StyleCategory & PresentationCategory & XlinkCategory & {
  "x": any;
  "y": any;
  "dx": any;
  "dy": any;
  "glyphRef": any;
  "format": any;
  "xlink-href": any;
}

// tagName: tref
// elements: animate, animateColor, set
// elementcategories: descriptive
/** @deprecated */
export type JSX_SVG_Tref = ConditionalProcessingCategory & CoreCategory & PresentationCategory & StyleCategory & XlinkCategory & {
  "externalResourcesRequired": any;
  "xlink-href": any;
}

// tagName: vkern
/** @deprecated */
export type JSX_SVG_Vkern = CoreCategory & {
  "u1": any;
  "g1": any;
  "u2": any;
  "g2": any;
  "k": any;
}


export interface JSX_SVG {
  /**
   * animations
   */

  "animate":             JSX_SVG_Animate & { children: any };
  "animateMotion":       JSX_SVG_AnimateMotion & { children: any };
  "animateTransform":    JSX_SVG_AnimateTransform & { children: any };
  "discard":             JSX_SVG_Discard & { children: any };
  "mpath":               JSX_SVG_Mpath & { children: any };
  "set":                 JSX_SVG_Set & { children: any };

  /**
   * masking
   */

  "mask":                JSX_SVG_Mask & { children: any };
  "clipPath":            JSX_SVG_ClipPath & { children: any };

  /**
   * filters
   */

  "feBlend":             JSX_SVG_FeBlend & { children: any };
  "feColorMatrix":       JSX_SVG_FeColorMatrix & { children: any };
  "feComponentTransfer": JSX_SVG_FeComponentTransfer & { children: any };
  "feComposite":         JSX_SVG_FeComposite & { children: any };
  "feConvolveMatrix":    JSX_SVG_FeConvolveMatrix & { children: any };
  "feDiffuseLighting":   JSX_SVG_FeDiffuseLighting & { children: any };
  "feDisplacementMap":   JSX_SVG_FeDisplacementMap & { children: any };
  "feDistantLight":      JSX_SVG_FeDistantLight & { children: any };
  "feDropShadow":        JSX_SVG_FeDropShadow & { children: any };
  "feFlood":             JSX_SVG_FeFlood & { children: any };
  "feFuncR":             JSX_SVG_FeFuncR & { children: any };
  "feFuncG":             JSX_SVG_FeFuncG & { children: any };
  "feFuncB":             JSX_SVG_FeFuncB & { children: any };
  "feFuncA":             JSX_SVG_FeFuncA & { children: any };
  "feGaussianBlur":      JSX_SVG_FeGaussianBlur & { children: any };
  "feImage":             JSX_SVG_FeImage & { children: any };
  "feMerge":             JSX_SVG_FeMerge & { children: any };
  "feMergeNode":         JSX_SVG_FeMergeNode & { children: any };
  "feMorphology":        JSX_SVG_FeMorphology & { children: any };
  "feOffset":            JSX_SVG_FeOffset & { children: any };
  "fePointLight":        JSX_SVG_FePointLight & { children: any };
  "feSpecularLighting":  JSX_SVG_FeSpecularLighting & { children: any };
  "feSpotLight":         JSX_SVG_FeSpotLight & { children: any };
  "feTile":              JSX_SVG_FeTile & { children: any };
  "feTurbulence":        JSX_SVG_FeTurbulence & { children: any };
  "filter":              JSX_SVG_Filter & { children: any };

  /**
   * general
   */

  "a":                   JSX_SVG_A & { children: any };
  "circle":              JSX_SVG_Circle & { children: any };
  "defs":                JSX_SVG_Defs & { children: any };
  "desc":                JSX_SVG_Desc & { children: any };
  "ellipse":             JSX_SVG_Ellipse & { children: any };
  "foreignObject":       JSX_SVG_ForeignObject & { children: any };
  "g":                   JSX_SVG_G & { children: any };
  "image":               JSX_SVG_Image & { children: any };
  "line":                JSX_SVG_Line & { children: any };
  "linearGradient":      JSX_SVG_LinearGradient & { children: any };
  "marker":              JSX_SVG_Marker & { children: any };
  "metadata":            JSX_SVG_Metadata & { children: any };
  "path":                JSX_SVG_Path & { children: any };
  "pattern":             JSX_SVG_Pattern & { children: any };
  "polygon":             JSX_SVG_Polygon & { children: any };
  "polyline":            JSX_SVG_Polyline & { children: any };
  "radialGradient":      JSX_SVG_RadialGradient & { children: any };
  "rect":                JSX_SVG_Rect & { children: any };
  "script":              JSX_SVG_Script & { children: any };
  "stop":                JSX_SVG_Stop & { children: any };
  "style":               JSX_SVG_Style & { children: any };
  "svg":                 JSX_SVG_Svg & { children: any };
  "switch":              JSX_SVG_Switch & { children: any };
  "symbol":              JSX_SVG_Symbol & { children: any };
  "text":                JSX_SVG_Text & { children: any };
  "textPath":            JSX_SVG_TextPath & { children: any };
  "title":               JSX_SVG_Title & { children: any };
  "tspan":               JSX_SVG_Tspan & { children: any };
  "use":                 JSX_SVG_Use & { children: any };
  "view":                JSX_SVG_View & { children: any };

  /**
   * SVGT12
   */

  /** @deprecated */
  "animateColor":        JSX_SVG_AnimateColor & { children: any };
  /** @deprecated */
  "animation":           JSX_SVG_Animation & { children: any };
  /** @deprecated */
  "audio":               JSX_SVG_Audio & { children: any };
  /** @deprecated */
  "font":                JSX_SVG_Font & { children: any };
  /** @deprecated */
  "font-face":           JSX_SVG_FontFace & { children: any };
  /** @deprecated */
  "font-face-src":       JSX_SVG_FontFaceSrc & { children: any };
  /** @deprecated */
  "font-face-uri":       JSX_SVG_FontFaceUri & { children: any };
  /** @deprecated */
  "glyph":               JSX_SVG_Glyph & { children: any };
  /** @deprecated */
  "handler":             JSX_SVG_Handler & { children: any };
  /** @deprecated */
  "hkern":               JSX_SVG_Hkern & { children: any };
  /** @deprecated */
  "missing-glyph":       JSX_SVG_MissingGlyph & { children: any };
  /** @deprecated */
  "prefetch":            JSX_SVG_Prefetch & { children: any };
  /** @deprecated */
  "tbreak":              JSX_SVG_Tbreak & { children: any };
  /** @deprecated */
  "textArea":            JSX_SVG_TextArea & { children: any };
  /** @deprecated */
  "video":               JSX_SVG_Video & { children: any };

  /**
   * SVG11
   */

  /** @deprecated */
  "altGlyph":            JSX_SVG_AltGlyph & { children: any };
  /** @deprecated */
  "altGlyphDef":         JSX_SVG_AltGlyphDef & { children: any };
  /** @deprecated */
  "altGlyphItem":        JSX_SVG_AltGlyphItem & { children: any };
  /** @deprecated */
  "color-profile":       JSX_SVG_ColorProfile & { children: any };
  /** @deprecated */
  "cursor":              JSX_SVG_Cursor & { children: any };
  /** @deprecated */
  "font-face-format":    JSX_SVG_FontFaceFormat & { children: any };
  /** @deprecated */
  "font-face-name":      JSX_SVG_FontFaceName & { children: any };
  /** @deprecated */
  "glyphRef":            JSX_SVG_GlyphRef & { children: any };
  /** @deprecated */
  "tref":                JSX_SVG_Tref & { children: any };
  /** @deprecated */
  "vkern":               JSX_SVG_Vkern & { children: any };
}
