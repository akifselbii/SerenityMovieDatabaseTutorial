using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SerenityMovieDatabase.Default.MovieCastRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SerenityMovieDatabase.Default.MovieCastRow;

namespace SerenityMovieDatabase.Default
{
    public interface IMovieCastSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieCastSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieCastSaveHandler
    {
        public MovieCastSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}