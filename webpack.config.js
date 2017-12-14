var path = require('path');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        //pokemon:'./PokemonApp/index.js'
        jobmanager: './JobManager/index.js'

    },
    output: {
        path: path.resolve(__dirname, 'dist') + '/jobmanager', //'/pokemonapp',
        filename: '[name].bundle.js',
        publicPath: '/jobmanager'
        //publicPath: '/pokemonapp/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'es2017', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(?:png|jpg|jpeg)$/,
                include: path.join(__dirname, 'img'),
                loader: 'url-loader?limit=30000&name=images/[name].[ext]'
            }
        ]
    },
    devtool: '#eval-inline-source-map',
    
};