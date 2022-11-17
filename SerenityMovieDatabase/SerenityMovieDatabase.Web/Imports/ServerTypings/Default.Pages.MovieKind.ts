namespace SerenityMovieDatabase.Default.Pages {
    export enum MovieKind {
        Film = 1,
        TvSeries = 2,
        MiniSeries = 3
    }
    Serenity.Decorators.registerEnumType(MovieKind, 'SerenityMovieDatabase.Default.Pages.MovieKind', 'MovieDB.MovieKind');
}
