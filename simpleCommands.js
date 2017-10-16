module.exports = {
    help: function () {
        var reply = {
            title: 'Help overview',
            description: 'List off available commands\n'+
            '-!kitsu help\n'+
            '-!kitsu.manga <*MangaName*>\n'+
            '-!kitsu.anime <*AnimeName*>'
        };
        return reply;
    }
};
