using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SerenityMovieDatabase.Default.MovieCastRow>;
using MyRow = SerenityMovieDatabase.Default.MovieCastRow;

namespace SerenityMovieDatabase.Default
{
    public interface IMovieCastListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieCastListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieCastListHandler
    {
        public MovieCastListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}