﻿using Serenity.ComponentModel;
using System;

namespace SerenityMovieDatabase.Default.Columns
{
    [ColumnsScript("Default.PersonMovie")]
    [BasedOnRow(typeof(MovieCastRow))]
    public class PersonMovieColumns
    {
        [Width(220)]
        public String MovieTitle { get; set; }
        [Width(100)]
        public Int32 MovieYear { get; set; }
        [Width(200)]
        public String Character { get; set; }
    }
}