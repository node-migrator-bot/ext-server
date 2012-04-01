/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * TODO:sourceディレクトリの該当クラスファイルも翻訳
 * TODO:自分のクラス以外の置換処理
 */
(function() {

    var fs = require('fs'),
        path = require('path'),
        markdown = require('node-markdown').Markdown,
        dirs = [],
        trans, ellipsis, strip_tags;

    strip_tags = function(input, allowed) {

        allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
            commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

        return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
            return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
        });
    }

    // {{{ ellipsis

    ellipsis = function(value, len, word) {

        if(value && value.length > len) {

            if(word) {
                var vs = value.substr(0, len - 2),
                    index = Math.max(vs.lastIndexOf(' '), vs.lastIndexOf('.'), vs.lastIndexOf('!'), vs.lastIndexOf('?'));

                if(index !== -1 && index >= (len - 15)) {
                    return vs.substr(0, index) + "...";
                }
            }

            return value.substr(0, len - 3) + "...";
        }

        return value;
    };

    // }}}
    // {{{ trans

    trans = function(o) {

        var classes, src, dest;

        classes = o.classes || [];
        src = o.src;
        dest = o.dest;

        classes.forEach(function(cls) {

            var file, output, html, destjson;

            output = path.normalize(dest + '/output/' + cls + '.js');
            destjson = JSON.parse(fs.readFileSync(output).toString().replace(/\);/, '').replace((new RegExp('Ext.data.JsonP.' + cls.replace(/\./g, '_') + '\\(')), ''));

            // doc.md
            file = path.normalize(src + '/' + cls + '/doc.md');
            destjson.html = destjson.html.replace((new RegExp('<p>{' + cls.replace(/\./g, '_') + ':doc-contents}</p>')), markdown(fs.readFileSync(file).toString()));

            var replaceAll = function(expression, org, dest) {
                return expression.split(org).join(dest);
            };

            var methodExecute = function(o) {

                var data;

                // desc.md
                try{
                    file = path.normalize(src + '/' + cls + '/method/' + o.name + '/desc.md');
                    data = fs.readFileSync(file).toString();
                    destjson.html = destjson.html.replace((new RegExp('<div class=\'short\'>{' + cls.replace(/\./g, '_') + ':' + o.id.replace(/\-/g, '\\-') + ':desc}[\n|.]+.* \.\.\.</div>')), '<div class="short">' + markdown(ellipsis(strip_tags(data).split('    ')[0].split("\n")[0], 50)) +'</div>');
                    destjson.html = destjson.html.replace((new RegExp('>{' + cls.replace(/\./g, '_') + ':' + o.id + ':desc} ...')), markdown(ellipsis(strip_tags(data).split('    ')[0].split("\n")[0], 50)));
                    destjson.html = destjson.html.replace((new RegExp('<p>{' + cls.replace(/\./g, '_') + ':' + o.id + ':desc}</p>')), markdown(data));
                    destjson.html = destjson.html.replace((new RegExp('>{' + cls.replace(/\./g, '_') + ':' + o.id + ':desc}</p>')), markdown(ellipsis(strip_tags(data).split('    ')[0].split("\n")[0], 50)));

                } catch(e) {
                    console.log(e);
                }

                // return.md
                try{
                    file = path.normalize(src + '/' + cls + '/method/' + o.name + '/return.md');
                    data = fs.readFileSync(file).toString();
                    destjson.html = destjson.html.replace((new RegExp('<p>{' + cls.replace(/\./g, '_') + ':' + o.id + ':return}</p>')), markdown(data));
                } catch(e) {
                }

                try{
                    // params
                    params = fs.readdirSync(path.normalize(src + '/' + cls + '/method/' + o.name + '/param/'));

                    params.forEach(function(p) {
                        file = path.normalize(src + '/' + cls + '/method/' + o.name + '/param/' + p);
                        data = fs.readFileSync(file).toString();
                        destjson.html = destjson.html.replace((new RegExp('{' + cls.replace(/\./g, '_') + ':' + o.id + ':param_' + p.replace('\.md', '') + '}')), data);
                    });

                } catch(e) {
                }
            };

            // method
            destjson.members.method.forEach(methodExecute);
            destjson.statics.method.forEach(methodExecute);

            // property
            destjson.members.property.forEach(function(o) {

                var data;

                // desc.md
                try{
                    file = path.normalize(src + '/' + cls + '/property/' + o.name + '/desc.md');
                    data = fs.readFileSync(file).toString();
                    destjson.html = destjson.html.replace((new RegExp('>{' + cls.replace(/\./g, '_') + ':' + o.id + ':desc} ...')), markdown(ellipsis(strip_tags(data).split('    ')[0].split("\n")[0], 50)));
                    destjson.html = destjson.html.replace((new RegExp('<p>{' + cls.replace(/\./g, '_') + ':' + o.id + ':desc}</p>')), markdown(data));
                    destjson.html = destjson.html.replace((new RegExp('>{' + cls.replace(/\./g, '_') + ':' + o.id + ':desc}</p>')), markdown(ellipsis(strip_tags(data).split('    ')[0].split("\n")[0], 50)));
                } catch(e) {
                    console.log(e);
                }

            });

            fs.writeFileSync(output, 'Ext.data.JsonP.' + cls.replace(/\./g, '_') + '(' +JSON.stringify(destjson) + ');', 'utf8');
        });

    };

    // }}}

    process.argv.forEach(function(val, index, array) {
        if(index > 1) {
            dirs.push(val);
        }
    });

    dirs.forEach(function(dir) {

        var src, dest, classes;

        src = path.normalize(__dirname + '/locale/' + dir);
        dest = path.normalize(__dirname + '/../api/' + dir);

        try {

            classes = fs.readdirSync(src);

            trans({
                src: src,
                dest: dest,
                classes: classes
            });

        } catch(e) {

            console.log(e);

        }

    });

})();

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */