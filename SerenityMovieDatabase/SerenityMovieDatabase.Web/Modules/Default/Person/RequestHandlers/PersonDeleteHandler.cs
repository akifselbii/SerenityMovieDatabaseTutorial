using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SerenityMovieDatabase.Default.PersonRow;

namespace SerenityMovieDatabase.Default
{
    public interface IPersonDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPersonDeleteHandler
    {
        public PersonDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}