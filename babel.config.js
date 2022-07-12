module.export = {
    'preset': ["es2015", "@babel/env"],
    'plugins': [
        ['transform-runtime', { corejs: 2 }],
    ]
}