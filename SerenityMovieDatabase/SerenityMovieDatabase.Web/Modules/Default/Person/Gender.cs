using Serenity.ComponentModel;
using System.ComponentModel;

namespace SerenityMovieDatabase.Default
{
    [EnumKey("Default.Gender")]
    public enum Gender
    {
        [Description("Male")]
        Male = 1,
        [Description("Female")]
        Female = 2
    }
}