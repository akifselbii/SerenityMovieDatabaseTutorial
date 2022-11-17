using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerenityMovieDatabase.Default.Pages
{

    [PageAuthorize(typeof(MovieRow))]
    public class MovieController : Controller
    {
        [Route("Default/Movie")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Movie/MovieIndex.cshtml");
        }
    }
}