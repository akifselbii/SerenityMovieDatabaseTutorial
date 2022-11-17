using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SerenityMovieDatabase.Default.Pages
{

    [PageAuthorize(typeof(GenreRow))]
    public class GenreController : Controller
    {
        [Route("Default/Genre")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Genre/GenreIndex.cshtml");
        }
    }
}