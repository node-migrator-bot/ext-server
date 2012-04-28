/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.action.Action

/**
 * @class Ext.app.action.Action
 *
 * {Ext_app_action_Action:doc-contents}
 */
Ext.define('Ext.app.action.Action', {

    // {{{ $execute

    $execute: Ext.emptyFn,

    // }}}
    // {{{ uses

    uses: [],

    // }}}
    // {{{ constructor

    constructor: function(param) {

        if(Ext.isFunction(param)) {
            this.execute = param;
        } else {
            Ext.apply(this, param);
        }

        // TODO: this.executeがisFunctionではない場合、例外処理を発生させる





    },

    // }}}
    // {{{ init

    init: function(config, next) {

        if(
            (Ext.isArray(this.uses) && this.uses.length > 0) ||
            Ext.isString(this.uses)
        ) {

            // bind module
            this.$bind(config, next);

        } else {

            next();

        }

    },

    // }}}
    // {{{ $bind

    $bind: function(config, next) {

        var uses, tmp;

        if(Ext.isArray(this.uses)) {

            uses = this.uses;

        } else if(Ext.isString()) {

            uses.push(this.uses);

        } else {

            // TODO: Exception例外
            uses.push(this.uses);

        }

        tmp = [];
        Ext.iterate(uses, function(item) {

            var name, conn;

            name = item;
            conn = 'default';

            if(Ext.isObject(item)) {
                name = item.name;
                conn = item.conn;
            }

            tmp.push({
                name: name,
                conn: conn,
                path: require('path').normalize(config.config.app.paths.modules + '/' + name + '.js'),
                define: null,
                ready: false
            });

        });

        uses = tmp;

        Ext.iterate(uses, function(item) {

            var cls = '';

            if(config.name + '.' === item.name.substr(0, config.name.length)) {


            } else {


            }

        });

            /*
            console.log(item);
            */

        next();

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