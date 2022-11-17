using FluentMigrator;
using Serenity.Extensions;
using System;

namespace SerenityMovieDatabase.Migrations.DefaultDB
{
    [Migration(20160603_205900)]
    public class DefaultDB_20160603_205900_PersonMovieImages : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Person").InSchema("mov")
                .AddColumn("PrimaryImage").AsString(100).Nullable()
                .AddColumn("GalleryImages").AsString(int.MaxValue).Nullable();

            Alter.Table("Movie").InSchema("mov")
                .AddColumn("PrimaryImage").AsString(100).Nullable()
                .AddColumn("GalleryImages").AsString(int.MaxValue).Nullable();
        }
    }
}