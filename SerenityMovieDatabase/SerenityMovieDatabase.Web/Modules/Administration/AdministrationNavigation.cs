using Serenity.Navigation;
using Administration = SerenityMovieDatabase.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "fa-wrench")]
[assembly: NavigationLink(9100, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9200, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9300, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9400, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationLink(9500, "Administration/Background Jobs", url: "~/jobs", permission: SerenityMovieDatabase.Administration.PermissionKeys.BackgroundJob, icon: "fa-refresh", Target = "_blank")]
