using Serenity.ComponentModel;
using Serenity.Web;
using System;

namespace SerenityMovieDatabase.Default.Forms
{
    [FormScript("Default.Person")]
    [BasedOnRow(typeof(PersonRow), CheckNames = true)]
    public class PersonForm
    {
        public string FirstName { get; set; }
        public string Lastname { get; set; }
        public String PrimaryImage { get; set; }
        public String GalleryImages { get; set; }
        public DateTime BirthDate { get; set; }
        public string BirthPlace { get; set; }
        public Gender Gender { get; set; }
        public int Height { get; set; }
    }
}