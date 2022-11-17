﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SerenityMovieDatabase.Default.GenreRow>;
using MyRow = SerenityMovieDatabase.Default.GenreRow;

namespace SerenityMovieDatabase.Default
{
    public interface IGenreRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class GenreRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGenreRetrieveHandler
    {
        public GenreRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}