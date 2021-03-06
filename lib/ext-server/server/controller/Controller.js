/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.controller.Controller

/**
 * @class Ext.server.controller.Controller
 *
 * {Ext_server_controller_Controller:doc-contents}
 */
Ext.define('Ext.server.controller.Controller', {

    // {{{ requires

    requires: [
        'Ext.server.view.View'
    ],

    // }}}
    // {{{ appMode

    appMode: 'server',

    // }}}
    // {{{ render

    render: function(config, next) {

        this.view.render(config, next);

    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
