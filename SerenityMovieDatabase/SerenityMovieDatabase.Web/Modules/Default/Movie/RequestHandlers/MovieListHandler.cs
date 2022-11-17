using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SerenityMovieDatabase.Default.MovieRow>;
using MyRow = SerenityMovieDatabase.Default.MovieRow;

namespace SerenityMovieDatabase.Default
{
    public interface IMovieListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieListHandler
    {
        public MovieListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}