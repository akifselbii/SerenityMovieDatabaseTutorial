using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SerenityMovieDatabase.Default.MovieGenresRow>;
using MyRow = SerenityMovieDatabase.Default.MovieGenresRow;

namespace SerenityMovieDatabase.Default
{
    public interface IMovieGenresRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieGenresRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieGenresRetrieveHandler
    {
        public MovieGenresRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}