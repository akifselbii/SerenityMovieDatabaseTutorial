using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerenityMovieDatabase.Default
{
    public partial class GenreListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "SerenityMovieDatabase.Default.GenreListFormatter";

        public GenreListFormatterAttribute()
            : base(Key)
        {
        }
    }
}
