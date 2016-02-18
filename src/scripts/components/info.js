;(function($, window, document, undefined) {

  'use strict';

  /**
   * This is a description for Info object.
   *
   * @namespace Info
   * @author Ultron
   */

  let Info = {

    /**
     * Initialize object
     * @function init
     * @memberof Info
     */

    init() {

      this._cache();
      this._events();

    }, // init()

    /**
     * Cache reusable data
     * @function cache
     * @memberof Info
     */

    _cache() {

      this.$win = $(window);
      this.$doc = $(document);
      this.$html = $('html');
      this.$body = $('body');
      this.$info = $('.c-info');
      this.$infoTrigger = $('.js-info');

    }, // _cache()

    /**
     * Attach event listeners
     * @function _events
     * @memberof Info
     */

    _events() {

      this.$html.on(
        'click.ui.info',
        '.js-info',
        event => this._showInfo(event)
      );

    }, // _events()

    /**
     * Handle click event
     * @function _myClickHandler
     * @memberof Info
     */

    _showInfo(event) {
      event.preventDefault();
      this.$body.toggleClass('has-info-opened')
      this.$info.toggleClass('is-active');
      this.$infoTrigger.toggleClass('is-active');
    } // _myClickHandler()

  }; // Info

  Info.init();

})(jQuery, window, document);
