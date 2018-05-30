(function () {
  'use strict';

  svgEditor.readLang({
    lang: 'lang',
    dir: 'dir',
    common: {
      ok: 'OK',
      cancel: 'Cancel',
      key_backspace: 'Backspace',
      key_del: 'Del',
      key_down: 'Down',
      key_up: 'Up',
      more_opts: 'More options',
      url: 'url',
      width: 'width',
      height: 'height'
    },
    misc: {
      powered_by: 'Powered by'
    },
    ui: {
      toggle_stroke_tools: 'Show/hide more stroke tools',
      palette_info: 'Click to change fill color, shift-click to change stroke color',
      zoom_level: 'Change zoom level',
      panel_drag: 'Drag left/right to resize side panel',
      quality: 'Quality:',
      pathNodeTooltip: 'Drag node to move it. Double-click node to change segment type',
      pathCtrlPtTooltip: 'Drag control point to adjust curve properties'
    },
    properties: {
      id: 'id',
      fill_color: 'Change fill color',
      stroke_color: 'Change stroke color',
      stroke_style: 'Change stroke dash style',
      stroke_width: 'Change stroke width by 1, shift-click to change by 0.1',
      pos_x: 'Change X coordinate',
      pos_y: 'Change Y coordinate',
      linecap_butt: 'Linecap: Butt',
      linecap_round: 'Linecap: Round',
      linecap_square: 'Linecap: Square',
      linejoin_bevel: 'Linejoin: Bevel',
      linejoin_miter: 'Linejoin: Miter',
      linejoin_round: 'Linejoin: Round',
      angle: 'angle',
      blur: 'blur',
      opacity: 'opacity',
      circle_cx: "Change circle's cx coordinate",
      circle_cy: "Change circle's cy coordinate",
      circle_r: "Change circle's radius",
      ellipse_cx: "Change ellipse's cx coordinate",
      ellipse_cy: "Change ellipse's cy coordinate",
      ellipse_rx: "Change ellipse's x radius",
      ellipse_ry: "Change ellipse's y radius",
      line_x1: "Change line's starting x coordinate",
      line_x2: "Change line's ending x coordinate",
      line_y1: "Change line's starting y coordinate",
      line_y2: "Change line's ending y coordinate",
      rect_height: 'Change rectangle height',
      rect_width: 'Change rectangle width',
      corner_radius: 'Change Rectangle Corner Radius',
      image_width: 'Change image width',
      image_height: 'Change image height',
      image_url: 'Change URL',
      node_x: "Change node's x coordinate",
      node_y: "Change node's y coordinate",
      seg_type: 'Change Segment type',
      straight_segments: 'Straight',
      curve_segments: 'Curve',
      text_contents: 'text_contents',
      font_family: 'Change Font Family',
      font_size: 'Change Font Size',
      bold: 'Bold Text [B]',
      italic: 'Italic Text [I]'
    },
    tools: {
      main_menu: 'Main Menu',
      bkgnd_color_opac: 'bkgnd_color_opac',
      connector_no_arrow: 'No arrow',
      fitToContent: 'Fit to Content',
      fit_to_all: 'Fit to all content',
      fit_to_canvas: 'Fit to canvas',
      fit_to_layer_content: 'Fit to layer content',
      fit_to_sel: 'Fit to selection',
      align_relative_to: 'Align relative to ...',
      relativeTo: 'relative to:',
      page: 'page',
      largest_object: 'largest object',
      selected_objects: 'selected objects',
      smallest_object: 'smallest object',
      new_doc: 'New Image',
      open_doc: 'Open SVG',
      export_img: 'Export',
      save_doc: 'Save Image',
      import_doc: 'Import Image',
      align_to_page: 'Align Element to Page',
      align_bottom: 'Align Bottom',
      align_center: 'Align Center',
      align_left: 'Align Left',
      align_middle: 'Align Middle',
      align_right: 'Align Right',
      align_top: 'Align Top',
      mode_select: 'Select Tool',
      mode_fhpath: 'Pencil Tool',
      mode_line: 'Line Tool',
      mode_connect: 'Connect two objects',
      mode_rect: 'Rectangle',
      mode_square: 'Square',
      mode_fhrect: 'Free-Hand Rectangle',
      mode_ellipse: 'Ellipse',
      mode_circle: 'Circle',
      mode_fhellipse: 'Free-Hand Ellipse',
      mode_path: 'Path Tool',
      mode_shapelib: 'Shape library',
      mode_text: 'Text Tool',
      mode_image: 'Image Tool',
      mode_zoom: 'Zoom Tool [Ctrl+Up/Down]',
      mode_eyedropper: 'Eye Dropper Tool',
      no_embed: 'NOTE: This image cannot be embedded. It will depend on this path to be displayed',
      undo: 'Undo [Z]',
      redo: 'Redo [Y]',
      tool_source: 'Edit Source [U]',
      wireframe_mode: 'Wireframe Mode [F]',
      toggle_grid: 'Show/Hide Grid',
      clone: 'Duplicate Element [D]',
      del: 'Delete Element [Delete/Backspace]',
      group_elements: 'Group Elements [G]',
      make_link: 'Make (hyper)link',
      set_link_url: 'Set link URL (leave empty to remove)',
      to_path: 'Convert to Path',
      reorient_path: 'Reorient path',
      ungroup: 'Ungroup Elements [G]',
      docprops: 'Document Properties (D)',
      imagelib: 'Image library',
      move_bottom: 'Send to Back [ Ctrl+Shift+[ ]',
      move_top: 'Bring to Front [ Ctrl+Shift+] ]',
      node_clone: 'Clone Node',
      node_delete: 'Delete Node',
      node_link: 'Link Control Points',
      add_subpath: 'Add sub-path',
      openclose_path: 'Open/close sub-path',
      source_save: 'Apply Changes',
      cut: 'Cut',
      copy: 'Copy',
      paste: 'Paste',
      paste_in_place: 'Paste in Place',
      delete: 'Delete',
      group: 'Group',
      move_front: 'Bring to Front (SHFT+CTRL+])',
      move_up: 'Bring Forward (CTRL+])',
      move_down: 'Send Backward (CTRL+[)',
      move_back: 'Send to Back (SHFT+CTRL+[)'
    },
    layers: {
      layer: 'Layer',
      layers: 'Layers',
      del: 'Delete Layer',
      move_down: 'Move Layer Down',
      new: 'New Layer',
      rename: 'Rename Layer',
      move_up: 'Move Layer Up',
      dupe: 'Duplicate Layer...',
      merge_down: 'Merge Down',
      merge_all: 'Merge All',
      move_elems_to: 'Move elements to:',
      move_selected: 'Move selected elements to a different layer'
    },
    config: {
      image_props: 'Image Properties',
      doc_title: 'Title:',
      doc_dims: 'Canvas Dimensions',
      included_images: 'Included Images',
      image_opt_embed: 'Embed data (local files)',
      image_opt_ref: 'Use file reference',
      editor_prefs: 'Editor Preferences',
      icon_size: 'Icon size:',
      language: 'Language:',
      background: 'Editor Background',
      editor_img_url: 'URL:',
      editor_bg_note: 'Note: Background will not be saved with image.',
      icon_large: 'Large',
      icon_medium: 'Medium',
      icon_small: 'Small',
      icon_xlarge: 'Extra Large',
      select_predefined: 'Select predefined:',
      units_and_rulers: 'Units & Rulers',
      show_rulers: 'Show rulers',
      base_unit: 'Base Unit:',
      grid: 'Grid',
      snapping_onoff: 'Snapping on/off',
      snapping_stepsize: 'Snapping Step-Size:',
      grid_color: 'Grid color:'
    },
    shape_cats: {
      basic: 'basic',
      object: 'object',
      symbol: 'symbol',
      arrow: 'arrow',
      flowchart: 'flowchart',
      animal: 'animal',
      game: 'game',
      dialog_balloon: 'Dialog balloons',
      electronics: 'Electronics',
      math: 'Mathematical',
      music: 'Music',
      misc: 'Miscellaneous',
      raphael_1: 'raphaeljs.com set 1',
      raphael_2: 'raphaeljs.com set 2'
    },
    imagelib: {
      select_lib: 'Select an image library',
      show_list: 'Show library list',
      import_single: 'Import single',
      import_multi: 'Import multiple',
      open: 'Open as new document'
    },
    notification: {
      invalidAttrValGiven: 'Invalid value given',
      noContentToFitTo: 'No content to fit to',
      dupeLayerName: 'There is already a layer named that!',
      enterUniqueLayerName: 'Please enter a unique layer name',
      enterNewLayerName: 'Please enter the new layer name',
      layerHasThatName: 'Layer already has that name',
      QmoveElemsToLayer: 'Move selected elements to layer \'%s\'?',
      QwantToClear: 'Do you want to clear the drawing?\nThis will also erase your undo history!',
      QwantToOpen: 'Do you want to open a new file?\nThis will also erase your undo history!',
      QerrorsRevertToSource: 'There were parsing errors in your SVG source.\nRevert back to original SVG source?',
      QignoreSourceChanges: 'Ignore changes made to SVG source?',
      saveFromBrowser: 'Select \'Save As...\' in your browser (possibly via file menu or right-click context-menu) to save this image as a %s file.',
      noteTheseIssues: 'Also note the following issues: ',
      unsavedChanges: 'There are unsaved changes.',
      enterNewLinkURL: 'Enter the new hyperlink URL',
      errorLoadingSVG: 'Error: Unable to load SVG data',
      URLloadFail: 'Unable to load from URL',
      retrieving: 'Retrieving \'%s\' ...',
      popupWindowBlocked: 'Popup window may be blocked by browser',
      featNotSupported: 'Feature not supported',
      enterNewImgURL: 'Enter the new image URL',
      defsFailOnSave: 'NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.',
      loadingImage: 'Loading image, please wait...',
      exportNoBlur: 'Blurred elements will appear as un-blurred',
      exportNoforeignObject: 'foreignObject elements will not appear',
      exportNoDashArray: 'Strokes will appear filled',
      exportNoText: 'Text may not appear as expected'
    }
  });

}());
