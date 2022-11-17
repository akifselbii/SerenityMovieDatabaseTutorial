using FluentMigrator;
using Serenity.Extensions;
using System;

namespace SerenityMovieDatabase.Migrations.DefaultDB
{
    [Migration(20160519181800)]
    public class DefaultDB_20160519_181800_SampleGenres : AutoReversingMigration
    {
        public override void Up()
        {
            Insert.IntoTable("Genre").InSchema("mov")
                .Row(new
                {
                    Name = "Action"
                })
                .Row(new
                {
                    Name = "Drama"
                })
                .Row(new
                {
                    Name = "Comedy"
                })
                .Row(new
                {
                    Name = "Sci-fi"
                })
                .Row(new
                {
                    Name = "Fantasy"
                })
                .Row(new
                {
                    Name = "Documentary"
                });
        }
    }
}