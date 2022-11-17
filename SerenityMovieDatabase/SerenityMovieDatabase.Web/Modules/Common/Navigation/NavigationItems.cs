using Serenity.Navigation;
using static MVC.Views;
using MyPages = SerenityMovieDatabase.Default.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationLink(1001, "Default Database/Person", typeof(MyPages.PersonController), icon: null)]