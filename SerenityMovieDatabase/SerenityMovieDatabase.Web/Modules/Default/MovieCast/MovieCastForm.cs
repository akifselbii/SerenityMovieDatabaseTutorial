using Serenity.ComponentModel;
using Serenity.Web;
using System;

namespace SerenityMovieDatabase.Default.Forms
{
    [FormScript("Default.MovieCast")]
    [BasedOnRow(typeof(MovieCastRow), CheckNames = true)]
    public class MovieCastForm
    {
        public Int32 PersonId { get; set; }
        public String Character { get; set; }
    }
}