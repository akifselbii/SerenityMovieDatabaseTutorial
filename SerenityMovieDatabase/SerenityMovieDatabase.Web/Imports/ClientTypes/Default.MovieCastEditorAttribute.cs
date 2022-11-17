using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SerenityMovieDatabase.Default
{
    public partial class MovieCastEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SerenityMovieDatabase.Default.MovieCastEditor";

        public MovieCastEditorAttribute()
            : base(Key)
        {
        }
    }
}
