var Kitsu = require('kitsu');
var kitsu = new Kitsu();

var xmlParser = require('xml2js').parseString;

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var xhr = new XMLHttpRequest();

module.exports = {
    manga: async (param) => {
        var res = await kitsu.get('manga?filter[text]=' + param);
        var dataRes = res.data[0];

        //sanitizing data
        var replyData = {};
        replyData.url = String(dataRes.posterImage.tiny) ? String(dataRes.posterImage.tiny) : "undefined";
        replyData.title = String(dataRes.canonicalTitle) ? String(dataRes.canonicalTitle) : "undefined";
        replyData.slug = String(dataRes.slug) ? String(dataRes.slug) : "undefined";
        replyData.description = String(dataRes.synopsis) ? String(dataRes.synopsis) : "undefined";
        replyData.rating = String(dataRes.averageRating) ? String(dataRes.averageRating) : "undefined";
        replyData.age = String(dataRes.ageRatingGuide) ? String(dataRes.ageRatingGuide) : "undefined";
        replyData.chapters = String(dataRes.chapterCount) ? String(dataRes.chapterCount) : "undefined";
        replyData.status = String(dataRes.status) ? String(dataRes.status) : "undefined";

        var thumbImg = {url : replyData.url};
        var reply = {
            title: replyData.title,
            url: `https://kitsu.io/manga/${replyData.slug}`,
            description: replyData.description,
            color: 0x00ff00,
            thumbnail: thumbImg,
            fields: [{
                    name: 'Avg rating',
                    value: replyData.rating,
                    inline: true
            },
            {
                    name: 'Age rating',
                    value: replyData.age,
                    inline: true
            },
            {
                    name: 'Chapters',
                    value: replyData.chapters,
                    inline: true
            },
            {
                    name: 'Status',
                    value: replyData.status,
                    inline: true
            }]
        };
        return reply;
    },
    anime: async (param) => {
        var res = await kitsu.get('anime?filter[text]=' + param);
        var dataRes = res.data[0];

        //sanitizing data
        var replyData = {};
        replyData.url = String(dataRes.posterImage.tiny) ? String(dataRes.posterImage.tiny) : "undefined";
        replyData.title = String(dataRes.canonicalTitle) ? String(dataRes.canonicalTitle) : "undefined";
        replyData.slug = String(dataRes.slug) ? String(dataRes.slug) : "undefined";
        replyData.description = String(dataRes.synopsis) ? String(dataRes.synopsis) : "undefined";
        replyData.rating = String(dataRes.averageRating) ? String(dataRes.averageRating) : "undefined";
        replyData.age = String(dataRes.ageRatingGuide) ? String(dataRes.ageRatingGuide) : "undefined";
        replyData.epiCount = String(dataRes.episodeCount) ? String(dataRes.episodeCount) : "undefined";
        replyData.epiLength = String(dataRes.episodeLength) ? String(dataRes.episodeLength) : "undefined";
        replyData.nsfw = String(dataRes.nsfw) ? String(dataRes.nsfw) : "undefined";
        replyData.status = String(dataRes.status) ? String(dataRes.status) : "undefined";


        var thumbImg = {url : replyData.url};
        var reply = {
            title: replyData.title,
            url: `https://kitsu.io/anime/${replyData.slug}`,
            description: replyData.description,
            color: 0x00ff00,
            thumbnail: thumbImg,
            fields: [{
                    name: 'Avg rating',
                    value: replyData.rating,
                    inline: true
            },
            {
                    name: 'Age rating',
                    value: replyData.age,
                    inline: true
            },
            {
                    name: 'NSFW',
                    value: replyData.nsfw,
                    inline: true
            },
            {
                    name: 'Episode count/length',
                    value: replyData.epiCount + "/" + replyData.epiLength + " min",
                    inline: true
            },
            {
                    name: 'Status',
                    value: replyData.status,
                    inline: true
            }]
        };
        return reply;
    },
};
