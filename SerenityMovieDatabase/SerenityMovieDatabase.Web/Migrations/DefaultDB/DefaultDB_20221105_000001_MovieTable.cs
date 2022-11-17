using FluentMigrator;
using Serenity.Extensions;
using System;

namespace SerenityMovieDatabase.Migrations.DefaultDB
{
    [Migration(20221105000001)]
    public class DefaultDB_20221105_000001_MovieTable : AutoReversingMigration
    {   
        public override void Up()
        {
            Create.Schema("mov");

            Create.Table("Movie").InSchema("mov")
                .WithColumn("MovieId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Title").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Storyline").AsString(Int32.MaxValue).Nullable()
                .WithColumn("Year").AsInt32().Nullable()
                .WithColumn("ReleaseDate").AsDateTime().Nullable()
                .WithColumn("Runtime").AsInt32().Nullable();
        }
    }
}