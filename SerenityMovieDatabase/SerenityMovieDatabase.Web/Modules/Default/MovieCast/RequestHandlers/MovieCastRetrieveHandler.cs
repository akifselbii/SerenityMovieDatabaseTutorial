using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SerenityMovieDatabase.Default.MovieCastRow>;
using MyRow = SerenityMovieDatabase.Default.MovieCastRow;

namespace SerenityMovieDatabase.Default
{
    public interface IMovieCastRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieCastRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieCastRetrieveHandler
    {
        public MovieCastRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}