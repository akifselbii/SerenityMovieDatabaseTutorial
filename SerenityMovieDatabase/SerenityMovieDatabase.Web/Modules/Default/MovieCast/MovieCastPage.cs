using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SerenityMovieDatabase.Default.Pages 
{
    [PageAuthorize(typeof(MovieCastRow))]
    public class MovieCastController : Controller
    {
        [Route("Default/MovieCast")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/MovieCast/MovieCastIndex.cshtml");
        }
    }
}