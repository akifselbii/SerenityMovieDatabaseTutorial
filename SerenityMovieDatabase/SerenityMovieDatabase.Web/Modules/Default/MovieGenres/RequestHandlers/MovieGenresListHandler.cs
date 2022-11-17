using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SerenityMovieDatabase.Default.MovieGenresRow>;
using MyRow = SerenityMovieDatabase.Default.MovieGenresRow;

namespace SerenityMovieDatabase.Default
{
    public interface IMovieGenresListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieGenresListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieGenresListHandler
    {
        public MovieGenresListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}