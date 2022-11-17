using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SerenityMovieDatabase.Default.PersonRow>;
using MyRow = SerenityMovieDatabase.Default.PersonRow;

namespace SerenityMovieDatabase.Default
{
    public interface IPersonListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonListHandler
    {
        public PersonListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}