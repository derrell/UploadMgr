/* ***********************************************************************

   UploadMgr - provides an API for uploading one or multiple files
   with progress feedback (on modern browsers), does not block the user 
   interface during uploads, supports cancelling uploads.

   http://qooxdoo.org

   Copyright:
     2011 Zenesis Limited, http://www.zenesis.com

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     
     This software is provided under the same licensing terms as Qooxdoo,
     please see the LICENSE file in the Qooxdoo project's top-level directory 
     for details.

   Authors:
 * John Spackman (john.spackman@zenesis.com)

 ************************************************************************/

/**
 * This mixin provides a trivial way to make any widget suitable as a widget for
 * Uploader - the only trick is that the capture and releaseCapture methods in
 * qx.ui.core.Widget must not be fired.
 */
qx.Mixin.define("com.zenesis.qx.upload.MUploadButton", {
  include: [ com.zenesis.qx.upload.MParameters ],
  
  properties: {
  	/**
  	 * File types which are acceptable for upload; note that this is not guaranteed
  	 * because not all (older) browsers support it, but where available it will
  	 * restrict the file open dialog to only allow these file types.
  	 * 
  	 * This value is passed directly through to the input tag's accept attribute, so
  	 * the format can be seen here: {@link http://www.w3schools.com/tags/att_input_accept.asp};
  	 * in summary, it is a comma separated list of file extensions (with the dot) and/or
  	 * MIME types; EG:
  	 * 
  	 * 	.jpg,.png,.gif			-- Images
  	 * 	image/*,.mp4				-- Images and *.mp4
  	 */
  	acceptUpload: {
  		init: null,
  		nullable: true,
  		check: "String"
  	}
  },

  members: {
    // overridden
    capture: function() {
      // Nothing
    },

    // overridden
    releaseCapture: function() {
      // Nothing
    }
  }
});