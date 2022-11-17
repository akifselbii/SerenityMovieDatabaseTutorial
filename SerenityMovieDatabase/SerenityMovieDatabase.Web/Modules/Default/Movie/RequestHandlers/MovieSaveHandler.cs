using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using System.Linq;
using MyRequest = Serenity.Services.SaveRequest<SerenityMovieDatabase.Default.MovieRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SerenityMovieDatabase.Default.MovieRow;

namespace SerenityMovieDatabase.Default
{
    public interface IMovieSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieSaveHandler
    {
        public MovieSaveHandler(IRequestContext context)
            : base(context)
        {
        }
    }
}