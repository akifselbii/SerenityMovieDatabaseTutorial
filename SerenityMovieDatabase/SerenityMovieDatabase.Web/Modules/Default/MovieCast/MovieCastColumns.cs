using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace SerenityMovieDatabase.Default.Columns
{
    [ColumnsScript("Default.MovieCast")]
    [BasedOnRow(typeof(MovieCastRow), CheckNames = true)]
    public class MovieCastColumns
    {
        [EditLink, Width(220)]
        public String PersonFullname { get; set; }
        [EditLink]
        public string Character { get; set; }
    }
}