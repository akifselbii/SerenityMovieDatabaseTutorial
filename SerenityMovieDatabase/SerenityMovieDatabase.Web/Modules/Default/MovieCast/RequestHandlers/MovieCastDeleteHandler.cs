using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SerenityMovieDatabase.Default.MovieCastRow;

namespace SerenityMovieDatabase.Default
{
    public interface IMovieCastDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieCastDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMovieCastDeleteHandler
    {
        public MovieCastDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}