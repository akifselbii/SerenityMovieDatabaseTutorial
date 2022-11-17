using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace SerenityMovieDatabase.Default.Columns
{
    [ColumnsScript("Default.Person")]
    [BasedOnRow(typeof(PersonRow), CheckNames = true)]
    public class PersonColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int PersonId { get; set; }
        [EditLink]
        public string Fullname { get; set; }
        public DateTime BirthDate { get; set; }
        public string BirthPlace { get; set; }
        public Gender Gender { get; set; }
        public int Height { get; set; }
    }
}