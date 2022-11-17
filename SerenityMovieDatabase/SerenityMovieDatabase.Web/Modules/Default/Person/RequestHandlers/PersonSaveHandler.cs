using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SerenityMovieDatabase.Default.PersonRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SerenityMovieDatabase.Default.PersonRow;

namespace SerenityMovieDatabase.Default
{
    public interface IPersonSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonSaveHandler
    {
        public PersonSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}