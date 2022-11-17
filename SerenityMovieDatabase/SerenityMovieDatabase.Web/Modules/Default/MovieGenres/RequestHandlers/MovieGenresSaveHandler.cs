using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SerenityMovieDatabase.Default.MovieGenresRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SerenityMovieDatabase.Default.MovieGenresRow;

namespace SerenityMovieDatabase.Default
{
    public interface IMovieGenresSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieGenresSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieGenresSaveHandler
    {
        public MovieGenresSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}