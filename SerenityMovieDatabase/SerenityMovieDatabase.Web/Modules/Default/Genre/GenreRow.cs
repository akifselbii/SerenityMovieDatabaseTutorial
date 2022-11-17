using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SerenityMovieDatabase.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[mov].[Genre]")]
    [DisplayName("Genre"), InstanceName("Genre")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Genre")]
    public sealed class GenreRow : Row<GenreRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Genre Id"), Identity, IdProperty]
        public int? GenreId
        {
            get => fields.GenreId[this];
            set => fields.GenreId[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        public GenreRow()
            : base()
        {
        }

        public GenreRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field GenreId;
            public StringField Name;
        }
    }
}
