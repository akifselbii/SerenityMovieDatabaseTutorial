using Serenity.Navigation;
using MyPages = SerenityMovieDatabase.Default.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "",
    icon: "fa-tachometer")]

[assembly: NavigationMenu(2000, "Movie Database", icon: "fa-film")]
[assembly: NavigationLink(2100, "Movie Database/Movies",
    typeof(MyPages.MovieController), icon: "fa-video-camera")]
[assembly: NavigationLink(2200, "Movie Database/Genre", typeof(MyPages.GenreController), icon: "fa-video-camera")]
//[assembly: NavigationLink(int.MaxValue, "Default/Movie Cast", typeof(MyPages.MovieCastController), icon: null)]
