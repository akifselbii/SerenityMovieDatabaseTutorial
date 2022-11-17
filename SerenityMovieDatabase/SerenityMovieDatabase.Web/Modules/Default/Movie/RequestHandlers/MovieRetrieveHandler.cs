using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SerenityMovieDatabase.Default.MovieRow>;
using MyRow = SerenityMovieDatabase.Default.MovieRow;

namespace SerenityMovieDatabase.Default
{
    public interface IMovieRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieRetrieveHandler
    {
        public MovieRetrieveHandler(IRequestContext context)
            : base(context)
        {
        }
    }
}