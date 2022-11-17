using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SerenityMovieDatabase.Default.PersonRow>;
using MyRow = SerenityMovieDatabase.Default.PersonRow;

namespace SerenityMovieDatabase.Default
{
    public interface IPersonRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonRetrieveHandler
    {
        public PersonRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}