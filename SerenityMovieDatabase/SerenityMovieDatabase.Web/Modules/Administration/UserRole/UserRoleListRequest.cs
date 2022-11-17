using Serenity.Services;

namespace SerenityMovieDatabase.Administration
{
    public class UserRoleListRequest : ServiceRequest
    {
        public int? UserID { get; set; }
    }
}