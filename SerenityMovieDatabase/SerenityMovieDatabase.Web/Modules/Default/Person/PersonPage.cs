using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SerenityMovieDatabase.Default.Pages 
{
    [PageAuthorize(typeof(PersonRow))]
    public class PersonController : Controller
    {
        [Route("Default/Person")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Person/PersonIndex.cshtml");
        }
    }
}