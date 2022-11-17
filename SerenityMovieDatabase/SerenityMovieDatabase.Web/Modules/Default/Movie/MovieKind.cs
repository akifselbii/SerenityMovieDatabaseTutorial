﻿using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;
using Serenity.ComponentModel;
using System.ComponentModel;

namespace SerenityMovieDatabase.Default.Pages
{

    [EnumKey("MovieDB.MovieKind")]
    public enum MovieKind
    {
        [Description("Film")]
        Film = 1,
        [Description("TV Series")]
        TvSeries = 2,
        [Description("Mini Series")]
        MiniSeries = 3
    }
}