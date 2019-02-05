// vue.config.js
const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@scss',       resolve('/src/scss'))
            .set('@views',      resolve('/src/views'))
            .set('@components', resolve('/src/components'))
    },
    css: {
        loaderOptions: { 
            sass: {
                // pass options to sass-loader
                // @/ is an alias to src/
                // so this assumes you have a file named `src/variables.scss`
                data: `@import "@/scss/variables.scss";`
            }
        }
    }
}

