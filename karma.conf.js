module.exports = function(config) {
    config.set({
        basePath: '',
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        plugins: [
            'karma-spec-reporter',
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
        reporters: ['spec']
    });
};
