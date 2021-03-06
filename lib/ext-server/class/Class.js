/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.Class

/**
 * @class Ext.Class
 *
 * {Ext_Class:doc-contents}
 */
(function() {

    var ExtClass,
        Base = Ext.Base,
        baseStaticMembers = [],
        baseStaticMember, baseStaticMemberLength;

    for(baseStaticMember in Base) {
        if(Base.hasOwnProperty(baseStaticMember)) {
            baseStaticMembers.push(baseStaticMember);
        }
    }

    baseStaticMemberLength = baseStaticMembers.length;

    // Creates a constructor that has nothing extra in its scope chain.
    function makeCtor(className) {
        function constructor() {
            return this.constructor.apply(this, arguments);
        }
        //<debug>
        if(className) {
            constructor.displayName = className;
        }
        //</debug>
        return constructor;
    }

    /**
     * {Ext_Class:method-create:desc}
     *
     * @param {Object} data {Ext_Class:method-create:param_data}
     * @param {Function} onCreated {Ext_Class:method-create:param_onCreated}
     *
     * @return {Ext.Base} {Ext_Class:method-create:return}
     */
    Ext.Class = ExtClass = function(Class, data, onCreated) {

        if(typeof Class != 'function') {
            onCreated = data;
            data = Class;
            Class = null;
        }

        if(!data) {
            data = {};
        }

        Class = ExtClass.create(Class, data);

        ExtClass.process(Class, data, onCreated);

        return Class;
    };

    Ext.apply(ExtClass, {

        /**
         * @private
         * @param Class
         * @param data
         * @param hooks
         */
        onBeforeCreated: function(Class, data, hooks) {
            Class.addMembers(data);

            hooks.onCreated.call(Class, Class);
        },

        /**
         * @private
         * @param Class
         * @param classData
         * @param onClassCreated
         */
        create: function(Class, data) {
            var name, i;

            if(!Class) {
                // This "helped" a bit in IE8 when we create 450k instances (3400ms->2700ms),
                // but removes some flexibility as a result because overrides cannot override
                // the constructor method... kept in case we want to reconsider because it is
                // more involved than just use the pass 'constructor'
                //
                //if(data.hasOwnProperty('constructor')) {
                //    Class = data.constructor;
                //    delete data.constructor;
                //    Class.$owner = Class;
                //    Class.$name = 'constructor';
                //} else {
                Class = makeCtor(
                    //<debug>
                    data.$className
                    //</debug>
                );
                //}
            }

            for(i = 0; i < baseStaticMemberLength; i++) {
                name = baseStaticMembers[i];
                Class[name] = Base[name];
            }

            return Class;
        },

        /**
         * @private
         * @param Class
         * @param data
         * @param onCreated
         */
        process: function(Class, data, onCreated) {
            var preprocessorStack = data.preprocessors || ExtClass.defaultPreprocessors,
                registeredPreprocessors = this.preprocessors,
                hooks = {
                    onBeforeCreated: this.onBeforeCreated
                },
                preprocessors = [],
                preprocessor, preprocessorsProperties,
                i, ln, j, subLn, preprocessorProperty, process;

            delete data.preprocessors;

            for(i = 0,ln = preprocessorStack.length; i < ln; i++) {
                preprocessor = preprocessorStack[i];

                if(typeof preprocessor == 'string') {
                    preprocessor = registeredPreprocessors[preprocessor];
                    preprocessorsProperties = preprocessor.properties;

                    if(preprocessorsProperties === true) {
                        preprocessors.push(preprocessor.fn);
                    }
                    else if(preprocessorsProperties) {
                        for(j = 0,subLn = preprocessorsProperties.length; j < subLn; j++) {
                            preprocessorProperty = preprocessorsProperties[j];

                            if(data.hasOwnProperty(preprocessorProperty)) {
                                preprocessors.push(preprocessor.fn);
                                break;
                            }
                        }
                    }
                }
                else {
                    preprocessors.push(preprocessor);
                }
            }

            hooks.onCreated = onCreated ? onCreated : Ext.emptyFn;
            hooks.preprocessors = preprocessors;

            this.doProcess(Class, data, hooks);
        },
        
        doProcess: function(Class, data, hooks){
            var me = this,
                preprocessor = hooks.preprocessors.shift();

            if(!preprocessor) {
                hooks.onBeforeCreated.apply(me, arguments);
                return;
            }

            if(preprocessor.call(me, Class, data, hooks, me.doProcess) !== false) {
                me.doProcess(Class, data, hooks);
            }
        },

        /** @private */
        preprocessors: {},

        /**
         * {Ext_Class:method-registerPreprocessor:desc}
         *
         * @param {String} name {Ext_Class:method-registerPreprocessor:param_name}
         * @param {Function} fn {Ext_Class:method-registerPreprocessor:param_fn}
         * @param {Function} fn.cls {Ext_Class:method-registerPreprocessor:param_fn.cls}
         * @param {Object} fn.data {Ext_Class:method-registerPreprocessor:param_fn.data}
         * @param {Function} fn.fn {Ext_Class:method-registerPreprocessor:param_fn.fn}
         * @return {Ext.Class} {Ext_Class:method-registerPreprocessor:return} 
         * @private
         * @static
         */
        registerPreprocessor: function(name, fn, properties, position, relativeTo) {
            if(!position) {
                position = 'last';
            }

            if(!properties) {
                properties = [name];
            }

            this.preprocessors[name] = {
                name: name,
                properties: properties || false,
                fn: fn
            };

            this.setDefaultPreprocessorPosition(name, position, relativeTo);

            return this;
        },

        /**
         * {Ext_Class:method-getPreprocessor:desc}
         *
         * @param {String} name {Ext_Class:method-getPreprocessor:param_name}
         * @return {Function} {Ext_Class:method-getPreprocessor:return}
         * @private
         * @static
         */
        getPreprocessor: function(name) {
            return this.preprocessors[name];
        },

        /**
         * @private
         */
        getPreprocessors: function() {
            return this.preprocessors;
        },

        /**
         * @private
         */
        defaultPreprocessors: [],

        /**
         * {Ext_Class:method-getDefaultPreprocessors:desc}
         * @return {Function[]} {Ext_Class:method-getDefaultPreprocessors:return}
         * @private
         * @static
         */
        getDefaultPreprocessors: function() {
            return this.defaultPreprocessors;
        },

        /**
         * {Ext_Class:method-setDefaultPreprocessors:desc}
         *
         * @private
         * @param {Array} preprocessors {Ext_Class:method-setDefaultPreprocessors:param_preprocessors}
         * @return {Ext.Class} {Ext_Class:method-setDefaultPreprocessors:return}
         * @static
         */
        setDefaultPreprocessors: function(preprocessors) {
            this.defaultPreprocessors = Ext.Array.from(preprocessors);

            return this;
        },

        /**
         * {Ext_Class:method-setDefaultPreprocessorPosition:desc}
         * @private
         * @param {String} name {Ext_Class:method-setDefaultPreprocessorPosition:param_name}
         * @param {String} offset {Ext_Class:method-setDefaultPreprocessorPosition:param_offset}
         * @param {String} relativeName {Ext_Class:method-setDefaultPreprocessorPosition:relativeName}
         * @return {Ext.Class} this
         * @static
         */
        setDefaultPreprocessorPosition: function(name, offset, relativeName) {
            var defaultPreprocessors = this.defaultPreprocessors,
                index;

            if(typeof offset == 'string') {
                if(offset === 'first') {
                    defaultPreprocessors.unshift(name);

                    return this;
                }
                else if(offset === 'last') {
                    defaultPreprocessors.push(name);

                    return this;
                }

                offset = (offset === 'after') ? 1 : -1;
            }

            index = Ext.Array.indexOf(defaultPreprocessors, relativeName);

            if(index !== -1) {
                Ext.Array.splice(defaultPreprocessors, Math.max(0, index + offset), 0, name);
            }

            return this;
        },

        configNameCache: {},

        getConfigNameMap: function(name) {
            var cache = this.configNameCache,
                map = cache[name],
                capitalizedName;

            if(!map) {
                capitalizedName = name.charAt(0).toUpperCase() + name.substr(1);

                map = cache[name] = {
                    internal: name,
                    initialized: '_is' + capitalizedName + 'Initialized',
                    apply: 'apply' + capitalizedName,
                    update: 'update' + capitalizedName,
                    'set': 'set' + capitalizedName,
                    'get': 'get' + capitalizedName,
                    doSet : 'doSet' + capitalizedName,
                    changeEvent: name.toLowerCase() + 'change'
                };
            }

            return map;
        }
    });

    /**
     * @cfg {String} extend
     * {Ext_Class:cfg-extend:desc}
     */
    ExtClass.registerPreprocessor('extend', function(Class, data) {
        var Base = Ext.Base,
            basePrototype = Base.prototype,
            extend = data.extend,
            Parent, parentPrototype, i;

        delete data.extend;

        if(extend && extend !== Object) {
            Parent = extend;
        }
        else {
            Parent = Base;
        }

        parentPrototype = Parent.prototype;

        if(!Parent.$isClass) {
            for(i in basePrototype) {
                if(!parentPrototype[i]) {
                    parentPrototype[i] = basePrototype[i];
                }
            }
        }

        Class.extend(Parent);

        Class.triggerExtended.apply(Class, arguments);

        if(data.onClassExtended) {
            Class.onExtended(data.onClassExtended);
            delete data.onClassExtended;
        }

    }, true);

    //<feature classSystem.statics>
    /**
     * @cfg {Object} statics
     * {Ext_Class:cfg-statics:desc}
     */
    ExtClass.registerPreprocessor('statics', function(Class, data) {
        Class.addStatics(data.statics);

        delete data.statics;
    });
    //</feature>

    //<feature classSystem.inheritableStatics>
    /**
     * @cfg {Object} inheritableStatics
     * {Ext_Class:cfg-inheritableStatics:desc}
     */
    ExtClass.registerPreprocessor('inheritableStatics', function(Class, data) {
        Class.addInheritableStatics(data.inheritableStatics);

        delete data.inheritableStatics;
    });
    //</feature>

    //<feature classSystem.config>
    /**
     * @cfg {Object} config
     * {Ext_Class:cfg-config:desc}
     */
    ExtClass.registerPreprocessor('config', function(Class, data) {
        var config = data.config,
            prototype = Class.prototype;

        delete data.config;

        Ext.Object.each(config, function(name, value) {
            var nameMap = ExtClass.getConfigNameMap(name),
                internalName = nameMap.internal,
                initializedName = nameMap.initialized,
                applyName = nameMap.apply,
                updateName = nameMap.update,
                setName = nameMap.set,
                getName = nameMap.get,
                hasOwnSetter = (setName in prototype) || data.hasOwnProperty(setName),
                hasOwnApplier = (applyName in prototype) || data.hasOwnProperty(applyName),
                hasOwnUpdater = (updateName in prototype) || data.hasOwnProperty(updateName),
                optimizedGetter, customGetter;

            if(value === null || (!hasOwnSetter && !hasOwnApplier && !hasOwnUpdater)) {
                prototype[internalName] = value;
                prototype[initializedName] = true;
            }
            else {
                prototype[initializedName] = false;
            }

            if(!hasOwnSetter) {
                data[setName] = function(value) {
                    var oldValue = this[internalName],
                        applier = this[applyName],
                        updater = this[updateName];

                    if(!this[initializedName]) {
                        this[initializedName] = true;
                    }

                    if(applier) {
                        value = applier.call(this, value, oldValue);
                    }

                    if(typeof value != 'undefined') {
                        this[internalName] = value;

                        if(updater && value !== oldValue) {
                            updater.call(this, value, oldValue);
                        }
                    }

                    return this;
                };
            }

            if(!(getName in prototype) || data.hasOwnProperty(getName)) {
                customGetter = data[getName] || false;

                if(customGetter) {
                    optimizedGetter = function() {
                        return customGetter.apply(this, arguments);
                    };
                }
                else {
                    optimizedGetter = function() {
                        return this[internalName];
                    };
                }

                data[getName] = function() {
                    var currentGetter;

                    if(!this[initializedName]) {
                        this[initializedName] = true;
                        this[setName](this.config[name]);
                    }

                    currentGetter = this[getName];

                    if('$previous' in currentGetter) {
                        currentGetter.$previous = optimizedGetter;
                    }
                    else {
                        this[getName] = optimizedGetter;
                    }

                    return optimizedGetter.apply(this, arguments);
                };
            }
        });

        Class.addConfig(config, true);
    });
    //</feature>

    //<feature classSystem.mixins>
    /**
     * @cfg {String[]/Object} mixins
     * {Ext_Class:cfg-mixins:desc}
     */
    ExtClass.registerPreprocessor('mixins', function(Class, data, hooks) {
        var mixins = data.mixins,
            name, mixin, i, ln;

        delete data.mixins;

        Ext.Function.interceptBefore(hooks, 'onCreated', function() {
            if(mixins instanceof Array) {
                for(i = 0,ln = mixins.length; i < ln; i++) {
                    mixin = mixins[i];
                    name = mixin.prototype.mixinId || mixin.$className;

                    Class.mixin(name, mixin);
                }
            }
            else {
                for(var mixinName in mixins) {
                    if(mixins.hasOwnProperty(mixinName)) {
                        Class.mixin(mixinName, mixins[mixinName]);
                    }
                }
            }
        });
    });
    //</feature>

    Ext.extend = function(Class, Parent, members) {

        if(arguments.length === 2 && Ext.isObject(Parent)) {
            members = Parent;
            Parent = Class;
            Class = null;
        }

        var cls;

        if(!Parent) {
            throw new Error("[Ext.extend] Attempting to extend from a class which has not been loaded on the page.");
        }

        members.extend = Parent;
        members.preprocessors = [
            'extend'
            //<feature classSystem.statics>
            ,'statics'
            //</feature>
            //<feature classSystem.inheritableStatics>
            ,'inheritableStatics'
            //</feature>
            //<feature classSystem.mixins>
            ,'mixins'
            //</feature>
            //<feature classSystem.config>
            ,'config'
            //</feature>
        ];

        if(Class) {
            cls = new ExtClass(Class, members);
        } else {
            cls = new ExtClass(members);
        }

        cls.prototype.override = function(o) {
            for(var m in o) {
                if(o.hasOwnProperty(m)) {
                    this[m] = o[m];
                }
            }
        };

        return cls;
    };

}());

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
