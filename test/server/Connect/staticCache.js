/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../../index.js');

// }}}
// {{{ describe

describe('Ext.server.Connect.staticCache', function() {

    var fixtures = __dirname + '/../../shared/fixtures';

    var app = Ext.create('Ext.server.Connect');

    app.use(Ext.server.Connect.staticCache());
    app.use(Ext.server.Connect.static(fixtures));

    it('should set X-Cache to MISS when missed', function(done) {
        app.request()
        .get('/todo.txt')
        .expect('X-Cache', 'MISS', done);
    });

    it('should set Age', function(done) {
        app.request()
        .get('/todo.txt')
        .end(function(res){
            res.should.have.header('age');
            done();
        });
    });

    it('should set X-Cache to MISS end-to-end', function(done) {
        app.request()
        .get('/todo.txt')
        .set('Cache-Control', 'no-cache')
        .expect('X-Cache', 'MISS', done);
    });

    it('should set X-Cache to HIT when hit', function(done) {
        app.request()
        .get('/todo.txt')
        .expect('X-Cache', 'HIT', done);
    });

    it('should retain header fields', function(done) {
        app.request()
        .get('/todo.txt')
        .end(function(res) {
            res.should.have.header('content-type', 'text/plain; charset=UTF-8');
            res.should.have.header('content-length', '11');
            done();
        });
    });

    it('should serve the contents on GET', function(done) {
        app.request()
        .get('/todo.txt')
        .expect('- groceries', done);
    });

    it('should not serve the contents on HEAD', function(done) {
        app.request()
        .head('/todo.txt')
        .expect('', done);
    });

    it('should retain Content-Length on HEAD', function(done) {
        app.request()
        .head('/todo.txt')
        .expect('Content-Length', '11', done);
    });

    it('should not cache private', function(done) {
        var app = Ext.create('Ext.server.Connect');
        app.use(Ext.server.Connect.staticCache());
        app.use(function(req, res, next) {
            res.setHeader('Cache-Control', 'private');
            next();
        });
        app.use(Ext.server.Connect.static(fixtures));

        app.request()
        .head('/todo.txt')
        .expect('X-Cache', 'MISS', done);
    });

    it('should not cache no-store', function(done) {
        var app = Ext.create('Ext.server.Connect');
        app.use(Ext.server.Connect.staticCache());
        app.use(function(req, res, next){
            res.setHeader('Cache-Control', 'no-store');
            next();
        });
        app.use(Ext.server.Connect.static(fixtures));

        app.request()
        .head('/todo.txt')
        .expect('X-Cache', 'MISS', done);
    });

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
