using FluentMigrator;
using Serenity.Extensions;
using System;

namespace SerenityMovieDatabase.Migrations.DefaultDB
{
    [Migration(20160519145500)]
    public class DefaultDB_20160519_145500_MovieKind : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Movie").InSchema("mov")
                .AddColumn("Kind").AsInt32().NotNullable()
                    .WithDefaultValue(1);
        }
    }
}