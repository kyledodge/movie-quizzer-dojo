/**
 * Widget for displaying image and information about a Movie.
 *
 * @module app/dijit/Movie
 * @requires app/data/Constants
 * @requires app/events/MovieEvent
 */

define([
    'dijit/_WidgetsInTemplateMixin',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetBase',
    'dojo/_base/declare',
    "dojo/_base/lang",
    "dojo/on",
    "dojo/topic",
    'dojo/text!app/dijit/templates/Movie.html',
    "app/events/MovieEvent",
    "app/data/Constants"
], function (WidgetsInTemplateMixin, TemplatedMixin, WidgetBase, declare, lang, on, topic, template, MovieEvent, Constants) {
    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: template,
        title: "",
        tagline: "",
        releaseDate: "",
        genre: "",
        director: "",
        revenue: "",
        actors: [],
        imageURL: "",
        movieID: "",

        /**
         * Creates a Movie.
         * @function constructor
         * @param {string} title - title of the movie.
         * @param {string} tagline - tagline, or short description, of the movie.
         * @param {date} releaseDate - date of movie release
         * @param {string} genre - genre of the movie
         * @param {string} director - name of the director of the movie
         * @param {number} revenue - total gross revenue of the movie
         * @param {array} actors - top actors starring in the movie
         * @param {string} movieID - google freebase "mid" parameter used as movieID
         */
        constructor: function(title, tagline, releaseDate, genre, director, revenue, actors, movieID) {
            this.title = title;
            this.tagline = tagline;
            this.releaseDate = releaseDate;
            this.genre = genre;
            this.director = director;
            this.revenue = revenue;
            this.actors = actors;
            this.imageURL = this.getImageURL(movieID);
            this.movieID = movieID;
        },

        startup: function () {
            this.inherited(arguments);

            //when the movie is clicked, we need to fire off a topic event
            on(this.movieLink, "click", lang.hitch(this, this.movieClicked));
        },

        movieClicked: function(evt) {
            //publish our movie click event and pass the movieID
            topic.publish(MovieEvent.prototype.MOVIE_CLICKED, {
                movieID: this.movieID
            });
        },

        /**
         * Setter function for releaseDate attribute. Formats the date to a 4 year format (ex: 2001)
         * @method _setReleaseDateAttr
         * @param {string} releaseDate - date represented as a string, typically yyyy-mm-dd.
         */
        _setReleaseDateAttr: function(releaseDate) {
            //format so the release date only shows the year
            this.releaseDate = new Date(releaseDate).getFullYear();
        },

        /**
         * Setter function for revenue attribute. Formats the revenue to USD currency format
         * @param {Number} revenue - the total grossing revenue of the movie.
         */
        _setRevenueAttr: function(revenue) {
            //format so the revenue is in USD currency format
            this.revenue = '$' + Number(revenue)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, '$&,');
        },

        /**
         * Returns the fully qualified url for the movie image.
         * @param {String} movieID - The google freebase movie id (mid).
         */
        getImageURL: function(movieID) {
            //use the image constant and replace the id placeholder with the movieID string
            return Constants.prototype.image_path_poster.replace("{{id}}", movieID);
        }
    });
});
