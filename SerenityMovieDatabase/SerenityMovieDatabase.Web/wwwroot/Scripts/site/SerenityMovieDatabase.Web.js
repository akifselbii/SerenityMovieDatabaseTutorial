var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        class LanguageColumns {
        }
        LanguageColumns.columnsKey = 'Administration.Language';
        Administration.LanguageColumns = LanguageColumns;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        class LanguageForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
            }
        }
        LanguageForm.formKey = 'Administration.Language';
        Administration.LanguageForm = LanguageForm;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let PermissionKeys;
        (function (PermissionKeys) {
            PermissionKeys.Security = "Administration:Security";
            PermissionKeys.Translation = "Administration:Translation";
            PermissionKeys.BackgroundJob = "Administration:BackgroundJob";
        })(PermissionKeys = Administration.PermissionKeys || (Administration.PermissionKeys = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        class RoleColumns {
        }
        RoleColumns.columnsKey = 'Administration.Role';
        Administration.RoleColumns = RoleColumns;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        class RoleForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
            }
        }
        RoleForm.formKey = 'Administration.Role';
        Administration.RoleForm = RoleForm;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(x => {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(x => {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        class UserColumns {
        }
        UserColumns.columnsKey = 'Administration.User';
        Administration.UserColumns = UserColumns;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        class UserForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
            }
        }
        UserForm.formKey = 'Administration.User';
        Administration.UserForm = UserForm;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(x => {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(x => {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(x => {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Default.Gender || (Default.Gender = {}));
        Serenity.Decorators.registerEnumType(Gender, 'SerenityMovieDatabase.Default.Gender', 'Default.Gender');
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        class GenreColumns {
        }
        GenreColumns.columnsKey = 'Default.Genre';
        Default.GenreColumns = GenreColumns;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        class GenreForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!GenreForm.init) {
                    GenreForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(GenreForm, [
                        'Name', w0
                    ]);
                }
            }
        }
        GenreForm.formKey = 'Default.Genre';
        Default.GenreForm = GenreForm;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let GenreRow;
        (function (GenreRow) {
            GenreRow.idProperty = 'GenreId';
            GenreRow.nameProperty = 'Name';
            GenreRow.localTextPrefix = 'Default.Genre';
            GenreRow.lookupKey = 'Default.Genre';
            function getLookup() {
                return Q.getLookup('Default.Genre');
            }
            GenreRow.getLookup = getLookup;
            GenreRow.deletePermission = 'Administration:General';
            GenreRow.insertPermission = 'Administration:General';
            GenreRow.readPermission = 'Administration:General';
            GenreRow.updatePermission = 'Administration:General';
        })(GenreRow = Default.GenreRow || (Default.GenreRow = {}));
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let GenreService;
        (function (GenreService) {
            GenreService.baseUrl = 'Default/Genre';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                GenreService[x] = function (r, s, o) {
                    return Q.serviceRequest(GenreService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GenreService = Default.GenreService || (Default.GenreService = {}));
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        class MovieCastColumns {
        }
        MovieCastColumns.columnsKey = 'Default.MovieCast';
        Default.MovieCastColumns = MovieCastColumns;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        class MovieCastForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!MovieCastForm.init) {
                    MovieCastForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(MovieCastForm, [
                        'PersonId', w0,
                        'Character', w1
                    ]);
                }
            }
        }
        MovieCastForm.formKey = 'Default.MovieCast';
        Default.MovieCastForm = MovieCastForm;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let MovieCastRow;
        (function (MovieCastRow) {
            MovieCastRow.idProperty = 'MovieCastId';
            MovieCastRow.nameProperty = 'Character';
            MovieCastRow.localTextPrefix = 'Default.MovieCast';
            MovieCastRow.deletePermission = 'Administration:General';
            MovieCastRow.insertPermission = 'Administration:General';
            MovieCastRow.readPermission = 'Administration:General';
            MovieCastRow.updatePermission = 'Administration:General';
        })(MovieCastRow = Default.MovieCastRow || (Default.MovieCastRow = {}));
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let MovieCastService;
        (function (MovieCastService) {
            MovieCastService.baseUrl = 'Default/MovieCast';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                MovieCastService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovieCastService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MovieCastService = Default.MovieCastService || (Default.MovieCastService = {}));
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        class MovieColumns {
        }
        MovieColumns.columnsKey = 'Default.Movie';
        Default.MovieColumns = MovieColumns;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        class MovieForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!MovieForm.init) {
                    MovieForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = Default.MovieCastEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.MultipleImageUploadEditor;
                    var w5 = s.IntegerEditor;
                    var w6 = s.DateEditor;
                    var w7 = s.LookupEditor;
                    var w8 = s.EnumEditor;
                    Q.initFormType(MovieForm, [
                        'Title', w0,
                        'Description', w1,
                        'CastList', w2,
                        'PrimaryImage', w3,
                        'GalleryImages', w4,
                        'Storyline', w1,
                        'Year', w5,
                        'ReleaseDate', w6,
                        'GenreList', w7,
                        'Kind', w8,
                        'Runtime', w5
                    ]);
                }
            }
        }
        MovieForm.formKey = 'Default.Movie';
        Default.MovieForm = MovieForm;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let MovieGenresRow;
        (function (MovieGenresRow) {
            MovieGenresRow.idProperty = 'MovieGenreId';
            MovieGenresRow.localTextPrefix = 'Default.MovieGenres';
            MovieGenresRow.deletePermission = 'Administration:General';
            MovieGenresRow.insertPermission = 'Administration:General';
            MovieGenresRow.readPermission = 'Administration:General';
            MovieGenresRow.updatePermission = 'Administration:General';
        })(MovieGenresRow = Default.MovieGenresRow || (Default.MovieGenresRow = {}));
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let MovieRow;
        (function (MovieRow) {
            MovieRow.idProperty = 'MovieId';
            MovieRow.nameProperty = 'Title';
            MovieRow.localTextPrefix = 'Default.Movie';
            MovieRow.deletePermission = 'Administration:General';
            MovieRow.insertPermission = 'Administration:General';
            MovieRow.readPermission = 'Administration:General';
            MovieRow.updatePermission = 'Administration:General';
        })(MovieRow = Default.MovieRow || (Default.MovieRow = {}));
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let MovieService;
        (function (MovieService) {
            MovieService.baseUrl = 'Default/Movie';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                MovieService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovieService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MovieService = Default.MovieService || (Default.MovieService = {}));
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        var Pages;
        (function (Pages) {
            let MovieKind;
            (function (MovieKind) {
                MovieKind[MovieKind["Film"] = 1] = "Film";
                MovieKind[MovieKind["TvSeries"] = 2] = "TvSeries";
                MovieKind[MovieKind["MiniSeries"] = 3] = "MiniSeries";
            })(MovieKind = Pages.MovieKind || (Pages.MovieKind = {}));
            Serenity.Decorators.registerEnumType(MovieKind, 'SerenityMovieDatabase.Default.Pages.MovieKind', 'MovieDB.MovieKind');
        })(Pages = Default.Pages || (Default.Pages = {}));
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        class PersonColumns {
        }
        PersonColumns.columnsKey = 'Default.Person';
        Default.PersonColumns = PersonColumns;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        class PersonForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!PersonForm.init) {
                    PersonForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.EnumEditor;
                    var w5 = s.IntegerEditor;
                    Q.initFormType(PersonForm, [
                        'FirstName', w0,
                        'Lastname', w0,
                        'PrimaryImage', w1,
                        'GalleryImages', w2,
                        'BirthDate', w3,
                        'BirthPlace', w0,
                        'Gender', w4,
                        'Height', w5
                    ]);
                }
            }
        }
        PersonForm.formKey = 'Default.Person';
        Default.PersonForm = PersonForm;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        class PersonMovieColumns {
        }
        PersonMovieColumns.columnsKey = 'Default.PersonMovie';
        Default.PersonMovieColumns = PersonMovieColumns;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let PersonRow;
        (function (PersonRow) {
            PersonRow.idProperty = 'PersonId';
            PersonRow.nameProperty = 'Fullname';
            PersonRow.localTextPrefix = 'Default.Person';
            PersonRow.lookupKey = 'Default.Person';
            function getLookup() {
                return Q.getLookup('Default.Person');
            }
            PersonRow.getLookup = getLookup;
            PersonRow.deletePermission = 'Administration:General';
            PersonRow.insertPermission = 'Administration:General';
            PersonRow.readPermission = 'Administration:General';
            PersonRow.updatePermission = 'Administration:General';
        })(PersonRow = Default.PersonRow || (Default.PersonRow = {}));
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let PersonService;
        (function (PersonService) {
            PersonService.baseUrl = 'Default/Person';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(x => {
                PersonService[x] = function (r, s, o) {
                    return Q.serviceRequest(PersonService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PersonService = Default.PersonService || (Default.PersonService = {}));
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Membership;
    (function (Membership) {
        class ChangePasswordForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
            }
        }
        ChangePasswordForm.formKey = 'Membership.ChangePassword';
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = SerenityMovieDatabase.Membership || (SerenityMovieDatabase.Membership = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Membership;
    (function (Membership) {
        class ForgotPasswordForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailAddressEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
            }
        }
        ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = SerenityMovieDatabase.Membership || (SerenityMovieDatabase.Membership = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Membership;
    (function (Membership) {
        class LoginForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
            }
        }
        LoginForm.formKey = 'Membership.Login';
        Membership.LoginForm = LoginForm;
    })(Membership = SerenityMovieDatabase.Membership || (SerenityMovieDatabase.Membership = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Membership;
    (function (Membership) {
        class ResetPasswordForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
            }
        }
        ResetPasswordForm.formKey = 'Membership.ResetPassword';
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = SerenityMovieDatabase.Membership || (SerenityMovieDatabase.Membership = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Membership;
    (function (Membership) {
        class SignUpForm extends Serenity.PrefixedContext {
            constructor(prefix) {
                super(prefix);
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailAddressEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
            }
        }
        SignUpForm.formKey = 'Membership.SignUp';
        Membership.SignUpForm = SignUpForm;
    })(Membership = SerenityMovieDatabase.Membership || (SerenityMovieDatabase.Membership = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Texts;
    (function (Texts) {
        SerenityMovieDatabase['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Default: { Genre: { GenreId: 1, Name: 1 }, Movie: { CastList: 1, Description: 1, GalleryImages: 1, GenreList: 1, Kind: 1, MovieId: 1, PrimaryImage: 1, ReleaseDate: 1, Runtime: 1, Storyline: 1, Title: 1, Year: 1 }, MovieCast: { Character: 1, MovieCastId: 1, MovieDescription: 1, MovieId: 1, MovieKind: 1, MovieReleaseDate: 1, MovieRuntime: 1, MovieStoryline: 1, MovieTitle: 1, MovieYear: 1, PersonBirthDate: 1, PersonBirthPlace: 1, PersonFirstName: 1, PersonFullname: 1, PersonGender: 1, PersonHeight: 1, PersonId: 1, PersonLastname: 1 }, MovieGenres: { GenreId: 1, GenreName: 1, MovieDescription: 1, MovieGenreId: 1, MovieId: 1, MovieKind: 1, MovieReleaseDate: 1, MovieRuntime: 1, MovieStoryline: 1, MovieTitle: 1, MovieYear: 1 }, Person: { BirthDate: 1, BirthPlace: 1, FirstName: 1, Fullname: 1, GalleryImages: 1, Gender: 1, Height: 1, Lastname: 1, PersonId: 1, PrimaryImage: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, GoogleButton: 1, LoginToYourAccount: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = SerenityMovieDatabase.Texts || (SerenityMovieDatabase.Texts = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let LanguageDialog = class LanguageDialog extends Serenity.EntityDialog {
            constructor() {
                super(...arguments);
                this.form = new Administration.LanguageForm(this.idPrefix);
            }
            getFormKey() { return Administration.LanguageForm.formKey; }
            getIdProperty() { return Administration.LanguageRow.idProperty; }
            getLocalTextPrefix() { return Administration.LanguageRow.localTextPrefix; }
            getNameProperty() { return Administration.LanguageRow.nameProperty; }
            getService() { return Administration.LanguageService.baseUrl; }
        };
        LanguageDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageDialog);
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let LanguageGrid = class LanguageGrid extends Serenity.EntityGrid {
            getColumnsKey() { return "Administration.Language"; }
            getDialogType() { return Administration.LanguageDialog; }
            getIdProperty() { return Administration.LanguageRow.idProperty; }
            getLocalTextPrefix() { return Administration.LanguageRow.localTextPrefix; }
            getService() { return Administration.LanguageService.baseUrl; }
            constructor(container) {
                super(container);
            }
            getDefaultSortBy() {
                return ["LanguageName" /* LanguageRow.Fields.LanguageName */];
            }
        };
        LanguageGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageGrid);
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let RoleDialog = class RoleDialog extends Serenity.EntityDialog {
            constructor() {
                super(...arguments);
                this.form = new Administration.RoleForm(this.idPrefix);
            }
            getFormKey() { return Administration.RoleForm.formKey; }
            getIdProperty() { return Administration.RoleRow.idProperty; }
            getLocalTextPrefix() { return Administration.RoleRow.localTextPrefix; }
            getNameProperty() { return Administration.RoleRow.nameProperty; }
            getService() { return Administration.RoleService.baseUrl; }
            getToolbarButtons() {
                let buttons = super.getToolbarButtons();
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: () => {
                        new Administration.RolePermissionDialog({
                            roleID: this.entity.RoleId,
                            title: this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            }
            updateInterface() {
                super.updateInterface();
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            }
        };
        RoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleDialog);
        Administration.RoleDialog = RoleDialog;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let RoleGrid = class RoleGrid extends Serenity.EntityGrid {
            getColumnsKey() { return "Administration.Role"; }
            getDialogType() { return Administration.RoleDialog; }
            getIdProperty() { return Administration.RoleRow.idProperty; }
            getLocalTextPrefix() { return Administration.RoleRow.localTextPrefix; }
            getService() { return Administration.RoleService.baseUrl; }
            constructor(container) {
                super(container);
            }
            getDefaultSortBy() {
                return ["RoleName" /* RoleRow.Fields.RoleName */];
            }
        };
        RoleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleGrid);
        Administration.RoleGrid = RoleGrid;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let RolePermissionDialog = class RolePermissionDialog extends Serenity.TemplatedDialog {
            constructor(opt) {
                super(opt);
                this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: this.options.roleID,
                    Module: null,
                    Submodule: null
                }, response => {
                    this.permissions.value = response.Entities.map(x => ({ PermissionKey: x }));
                });
                this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
            }
            getDialogOptions() {
                let opt = super.getDialogOptions();
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: e => {
                            Administration.RolePermissionService.Update({
                                RoleID: this.options.roleID,
                                Permissions: this.permissions.value.map(x => x.PermissionKey),
                                Module: null,
                                Submodule: null
                            }, response => {
                                this.dialogClose();
                                window.setTimeout(() => Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')), 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: () => this.dialogClose()
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            }
            getTemplate() {
                return '<div id="~_Permissions"></div>';
            }
        };
        RolePermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RolePermissionDialog);
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let TranslationGrid = class TranslationGrid extends Serenity.EntityGrid {
            constructor(container) {
                super(container);
                this.element.on('keyup.' + this.uniqueName + ' change.' + this.uniqueName, 'input.custom-text', e => {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    this.view.getItemById($(e.target).data('key')).CustomText = value;
                    this.hasChanges = true;
                });
            }
            getIdProperty() { return "Key"; }
            getLocalTextPrefix() { return "Administration.Translation"; }
            getService() { return Administration.TranslationService.baseUrl; }
            onClick(e, row, cell) {
                super.onClick(e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                let item = this.itemAt(row);
                let done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = () => {
                        item.CustomText = item.SourceText;
                        this.view.updateItem(item.Key, item);
                        this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = () => {
                        item.CustomText = item.TargetText;
                        this.view.updateItem(item.Key, item);
                        this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            }
            getColumns() {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: ctx => {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: ctx => Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key))
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: ctx => Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || ''))
                });
                return columns;
            }
            createToolbarExtensions() {
                super.createToolbarExtensions();
                let opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: el => el.appendTo(this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'),
                    options: opt
                });
                this.sourceLanguage.changeSelect2(e => {
                    if (this.hasChanges) {
                        this.saveChanges(this.targetLanguageKey).then(() => this.refresh());
                    }
                    else {
                        this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: el => el.appendTo(this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'),
                    options: opt
                });
                this.targetLanguage.changeSelect2(e => {
                    if (this.hasChanges) {
                        this.saveChanges(this.targetLanguageKey).then(() => this.refresh());
                    }
                    else {
                        this.refresh();
                    }
                });
            }
            saveChanges(language) {
                var translations = {};
                for (let item of this.getItems()) {
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(() => {
                    this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            }
            onViewSubmit() {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return super.onViewSubmit();
            }
            getButtons() {
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: e => this.saveChanges(this.targetLanguageKey).then(() => this.refresh()),
                        cssClass: 'apply-changes-button'
                    }];
            }
            createQuickSearchInput() {
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, (field, searchText) => {
                    this.searchText = searchText;
                    this.view.setItems(this.view.getItems(), true);
                });
            }
            onViewFilter(item) {
                if (!super.onViewFilter(item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            }
            usePager() {
                return false;
            }
        };
        TranslationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TranslationGrid);
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let UserDialog = class UserDialog extends Serenity.EntityDialog {
            constructor() {
                super();
                this.form = new Administration.UserForm(this.idPrefix);
                this.form.Password.addValidationRule(this.uniqueName, e => {
                    if (this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                this.form.PasswordConfirm.addValidationRule(this.uniqueName, e => {
                    if (this.form.Password.value != this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
            }
            getFormKey() { return Administration.UserForm.formKey; }
            getIdProperty() { return Administration.UserRow.idProperty; }
            getIsActiveProperty() { return Administration.UserRow.isActiveProperty; }
            getLocalTextPrefix() { return Administration.UserRow.localTextPrefix; }
            getNameProperty() { return Administration.UserRow.nameProperty; }
            getService() { return Administration.UserService.baseUrl; }
            getToolbarButtons() {
                let buttons = super.getToolbarButtons();
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: () => {
                        new Administration.UserRoleDialog({
                            userID: this.entity.UserId,
                            username: this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: () => {
                        new Administration.UserPermissionDialog({
                            userID: this.entity.UserId,
                            username: this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            }
            updateInterface() {
                super.updateInterface();
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            }
            afterLoadEntity() {
                super.afterLoadEntity();
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            }
        };
        UserDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserDialog);
        Administration.UserDialog = UserDialog;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let UserGrid = class UserGrid extends Serenity.EntityGrid {
            getColumnsKey() { return "Administration.User"; }
            getDialogType() { return Administration.UserDialog; }
            getIdProperty() { return Administration.UserRow.idProperty; }
            getIsActiveProperty() { return Administration.UserRow.isActiveProperty; }
            getLocalTextPrefix() { return Administration.UserRow.localTextPrefix; }
            getService() { return Administration.UserService.baseUrl; }
            constructor(container) {
                super(container);
            }
            getDefaultSortBy() {
                return ["Username" /* UserRow.Fields.Username */];
            }
        };
        UserGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserGrid);
        Administration.UserGrid = UserGrid;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            return Q.Authorization.hasPermission(permissionKey);
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = SerenityMovieDatabase.Authorization || (SerenityMovieDatabase.Authorization = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let PermissionCheckEditor = class PermissionCheckEditor extends Serenity.DataGrid {
            constructor(container, opt) {
                super(container, opt);
                this._rolePermissions = {};
                this._implicitPermissions = {};
                let titleByKey = {};
                let permissionKeys = this.getSortedGroupAndPermissionKeys(titleByKey);
                let items = permissionKeys.map(key => ({
                    Key: key,
                    ParentKey: this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }));
                this.byParentKey = Q.toGrouping(items, x => x.ParentKey);
                this.setItems(items);
            }
            getIdProperty() { return "Key"; }
            getItemGrantRevokeClass(item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                let desc = this.getDescendants(item, true);
                let granted = desc.filter(x => x.GrantRevoke === grant);
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            }
            roleOrImplicit(key) {
                if (this._rolePermissions[key])
                    return true;
                for (var k of Object.keys(this._rolePermissions)) {
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var i of Object.keys(this._implicitPermissions)) {
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            }
            getItemEffectiveClass(item) {
                if (item.IsGroup) {
                    let desc = this.getDescendants(item, true);
                    let grantCount = Q.count(desc, x => x.GrantRevoke === true ||
                        (x.GrantRevoke == null && this.roleOrImplicit(x.Key)));
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                let granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            }
            getColumns() {
                let columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(() => this.view, x => x.Key, ctx => {
                            let item = ctx.item;
                            let klass = this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: ctx => {
                            let item1 = ctx.item;
                            let klass1 = this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: ctx => {
                            let item2 = ctx.item;
                            let klass2 = this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            }
            setItems(items) {
                Serenity.SlickTreeHelper.setIndents(items, x => x.Key, x => x.ParentKey, false);
                this.view.setItems(items, true);
            }
            onViewSubmit() {
                return false;
            }
            onViewFilter(item) {
                if (!super.onViewFilter(item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, x => x.ParentKey))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), x => this.matchContains(x));
                }
                return true;
            }
            matchContains(item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            }
            getDescendants(item, excludeGroups) {
                let result = [];
                let stack = [item];
                while (stack.length > 0) {
                    let i = stack.pop();
                    let children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (let child of children) {
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            }
            onClick(e, row, cell) {
                super.onClick(e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, x => x.Key);
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                let target = $(e.target);
                let grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    let item = this.itemAt(row);
                    let checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var d of this.getDescendants(item, true)) {
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            }
            getParentKey(key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                let idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            }
            getButtons() {
                return [];
            }
            createToolbarExtensions() {
                super.createToolbarExtensions();
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, (field, text) => {
                    this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    this.view.setItems(this.view.getItems(), true);
                });
            }
            getSortedGroupAndPermissionKeys(titleByKey) {
                let keys = Q.getRemoteData('Administration.PermissionKeys');
                let titleWithGroup = {};
                for (var k of keys) {
                    let s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    let parts = s.split(':');
                    let group = '';
                    let groupTitle = '';
                    for (let i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        let txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort((x, y) => Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]));
                return keys;
            }
            get value() {
                let result = [];
                for (let item of this.view.getItems()) {
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            }
            set value(value) {
                for (let item of this.view.getItems()) {
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (let row of value) {
                        let r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            }
            get rolePermissions() {
                return Object.keys(this._rolePermissions);
            }
            set rolePermissions(value) {
                this._rolePermissions = {};
                if (value) {
                    for (let k of value) {
                        this._rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            }
            set implicitPermissions(value) {
                this._implicitPermissions = {};
                if (value) {
                    for (var k of Object.keys(value)) {
                        this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                        var l = value[k];
                        if (l) {
                            for (var s of l)
                                this._implicitPermissions[k][s] = true;
                        }
                    }
                }
            }
        };
        PermissionCheckEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
        ], PermissionCheckEditor);
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let UserPermissionDialog = class UserPermissionDialog extends Serenity.TemplatedDialog {
            constructor(opt) {
                super(opt);
                this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: this.options.userID,
                    Module: null,
                    Submodule: null
                }, response => {
                    this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: this.options.userID,
                    Module: null,
                    Submodule: null,
                }, response => {
                    this.permissions.rolePermissions = response.Entities;
                });
                this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
            }
            getDialogOptions() {
                let opt = super.getDialogOptions();
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        cssClass: 'btn btn-primary',
                        click: e => {
                            Administration.UserPermissionService.Update({
                                UserID: this.options.userID,
                                Permissions: this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, response => {
                                this.dialogClose();
                                window.setTimeout(() => Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')), 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: () => this.dialogClose()
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            }
            getTemplate() {
                return '<div id="~_Permissions"></div>';
            }
        };
        UserPermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserPermissionDialog);
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let RoleCheckEditor = class RoleCheckEditor extends Serenity.CheckTreeEditor {
            constructor(div) {
                super(div);
            }
            createToolbarExtensions() {
                super.createToolbarExtensions();
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, (field, text) => {
                    this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    this.view.setItems(this.view.getItems(), true);
                });
            }
            getButtons() {
                return [];
            }
            getTreeItems() {
                return Administration.RoleRow.getLookup().items.map(role => ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }));
            }
            onViewFilter(item) {
                return super.onViewFilter(item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            }
        };
        RoleCheckEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], RoleCheckEditor);
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Administration;
    (function (Administration) {
        let UserRoleDialog = class UserRoleDialog extends Serenity.TemplatedDialog {
            constructor(opt) {
                super(opt);
                this.permissions = new Administration.RoleCheckEditor(this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: this.options.userID
                }, response => {
                    this.permissions.value = response.Entities.map(x => x.toString());
                });
            }
            getDialogOptions() {
                var opt = super.getDialogOptions();
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        cssClass: 'btn btn-primary',
                        click: () => {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: this.options.userID,
                                Roles: this.permissions.value.map(x => parseInt(x, 10))
                            }, response => {
                                this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: () => this.dialogClose()
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            }
            getTemplate() {
                return "<div id='~_Roles'></div>";
            }
        };
        UserRoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserRoleDialog);
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = SerenityMovieDatabase.Administration || (SerenityMovieDatabase.Administration = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var k of SerenityMovieDatabase.Administration.LanguageRow.getLookup().items) {
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = SerenityMovieDatabase.LanguageList || (SerenityMovieDatabase.LanguageList = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('SerenityMovieDatabase');
        Serenity.EntityDialog.defaultLanguageList = SerenityMovieDatabase.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = SerenityMovieDatabase.ScriptInitialization || (SerenityMovieDatabase.ScriptInitialization = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Common;
    (function (Common) {
        class SidebarSearch extends Serenity.Widget {
            constructor(input, menuUL) {
                super(input);
                new Serenity.QuickSearchInput(input, {
                    onSearch: (field, text, success) => {
                        this.updateMatchFlags(text);
                        success(true);
                    }
                });
                this.menuUL = menuUL;
            }
            updateMatchFlags(text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(x => !Q.isTrimmedEmpty(x));
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var p of parts) {
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            }
        }
        Common.SidebarSearch = SidebarSearch;
    })(Common = SerenityMovieDatabase.Common || (SerenityMovieDatabase.Common = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let GenreDialog = class GenreDialog extends Serenity.EntityDialog {
            constructor() {
                super(...arguments);
                this.form = new Default.GenreForm(this.idPrefix);
            }
            getFormKey() { return Default.GenreForm.formKey; }
            getIdProperty() { return Default.GenreRow.idProperty; }
            getLocalTextPrefix() { return Default.GenreRow.localTextPrefix; }
            getNameProperty() { return Default.GenreRow.nameProperty; }
            getService() { return Default.GenreService.baseUrl; }
            getDeletePermission() { return Default.GenreRow.deletePermission; }
            getInsertPermission() { return Default.GenreRow.insertPermission; }
            getUpdatePermission() { return Default.GenreRow.updatePermission; }
        };
        GenreDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GenreDialog);
        Default.GenreDialog = GenreDialog;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let GenreGrid = class GenreGrid extends Serenity.EntityGrid {
            getColumnsKey() { return Default.GenreColumns.columnsKey; }
            getDialogType() { return Default.GenreDialog; }
            getIdProperty() { return Default.GenreRow.idProperty; }
            getInsertPermission() { return Default.GenreRow.insertPermission; }
            getLocalTextPrefix() { return Default.GenreRow.localTextPrefix; }
            getService() { return Default.GenreService.baseUrl; }
            constructor(container) {
                super(container);
            }
        };
        GenreGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], GenreGrid);
        Default.GenreGrid = GenreGrid;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let GenreListFormatter = class GenreListFormatter {
            format(ctx) {
                let idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                let byId = Default.GenreRow.getLookup().itemById;
                return idList.map(x => {
                    let g = byId[x];
                    if (!g)
                        return x.toString();
                    return Q.htmlEncode(g.Name);
                }).join(", ");
            }
        };
        GenreListFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], GenreListFormatter);
        Default.GenreListFormatter = GenreListFormatter;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let MovieDialog = class MovieDialog extends Serenity.EntityDialog {
            constructor() {
                super(...arguments);
                this.form = new Default.MovieForm(this.idPrefix);
            }
            getFormKey() { return Default.MovieForm.formKey; }
            getIdProperty() { return Default.MovieRow.idProperty; }
            getLocalTextPrefix() { return Default.MovieRow.localTextPrefix; }
            getNameProperty() { return Default.MovieRow.nameProperty; }
            getService() { return Default.MovieService.baseUrl; }
            getDeletePermission() { return Default.MovieRow.deletePermission; }
            getInsertPermission() { return Default.MovieRow.insertPermission; }
            getUpdatePermission() { return Default.MovieRow.updatePermission; }
        };
        MovieDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], MovieDialog);
        Default.MovieDialog = MovieDialog;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let MovieGrid = class MovieGrid extends Serenity.EntityGrid {
            getColumnsKey() { return Default.MovieColumns.columnsKey; }
            getDialogType() { return Default.MovieDialog; }
            getIdProperty() { return Default.MovieRow.idProperty; }
            getInsertPermission() { return Default.MovieRow.insertPermission; }
            getLocalTextPrefix() { return Default.MovieRow.localTextPrefix; }
            getService() { return Default.MovieService.baseUrl; }
            constructor(container) {
                super(container);
            }
            getQuickSearchFields() {
                const txt = (s) => Q.text(`Db.${Default.MovieRow.localTextPrefix}.${s}`).toLowerCase();
                return [
                    { name: "", title: "all" },
                    { name: "Description" /* fld.Description */, title: txt("Description" /* fld.Description */) },
                    { name: "Storyline" /* fld.Storyline */, title: txt("Storyline" /* fld.Storyline */) },
                    { name: "Year" /* fld.Year */, title: txt("Year" /* fld.Year */) }
                ];
            }
        };
        MovieGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MovieGrid);
        Default.MovieGrid = MovieGrid;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let MovieCastEditDialog = class MovieCastEditDialog extends Serenity.Extensions.GridEditorDialog {
            constructor() {
                super();
                this.form = new Default.MovieCastForm(this.idPrefix);
            }
            getFormKey() { return Default.MovieCastForm.formKey; }
            getNameProperty() { return Default.MovieCastRow.nameProperty; }
            getLocalTextPrefix() { return Default.MovieCastRow.localTextPrefix; }
        };
        MovieCastEditDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], MovieCastEditDialog);
        Default.MovieCastEditDialog = MovieCastEditDialog;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let MovieCastEditor = class MovieCastEditor extends Serenity.Extensions.GridEditorBase {
            getColumnsKey() { return "Default.MovieCast"; }
            getDialogType() { return Default.MovieCastEditDialog; }
            getLocalTextPrefix() { return Default.MovieCastRow.localTextPrefix; }
            constructor(container) {
                super(container);
            }
            getAddButtonCaption() {
                return "Add";
            }
            validateEntity(row, id) {
                if (!super.validateEntity(row, id))
                    return false;
                row.PersonFullname = Default.PersonRow.getLookup()
                    .itemById[row.PersonId].Fullname;
                return true;
            }
        };
        MovieCastEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], MovieCastEditor);
        Default.MovieCastEditor = MovieCastEditor;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let PersonDialog = class PersonDialog extends Serenity.EntityDialog {
            constructor() {
                super();
                this.form = new Default.PersonForm(this.idPrefix);
                this.moviesGrid = new Default.PersonMovieGrid(this.byId("MoviesGrid"));
                this.tabs.on('tabsactivate', (e, i) => {
                    this.arrange();
                });
            }
            getFormKey() { return Default.PersonForm.formKey; }
            getIdProperty() { return Default.PersonRow.idProperty; }
            getLocalTextPrefix() { return Default.PersonRow.localTextPrefix; }
            getNameProperty() { return Default.PersonRow.nameProperty; }
            getService() { return Default.PersonService.baseUrl; }
            getDeletePermission() { return Default.PersonRow.deletePermission; }
            getInsertPermission() { return Default.PersonRow.insertPermission; }
            getUpdatePermission() { return Default.PersonRow.updatePermission; }
            getTemplate() {
                return `<div id="~_Tabs" class="s-DialogContent">
                        <ul>
                            <li><a href="#~_TabInfo"><span>Person</span></a></li>
                            <li><a href="#~_TabMovies"><span>Movies</span></a></li>
                        </ul>
                        <div id="~_TabInfo" class="tab-pane s-TabInfo">
                            <div id="~_Toolbar" class="s-DialogToolbar">
                            </div>
                            <div class="s-Form">
                                <form id="~_Form" action="">
                                    <div class="fieldset">
                                        <div id="~_PropertyGrid"></div>
                                        <div class="clear"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div id="~_TabMovies" class="tab-pane s-TabMovies">
                            <div id="~_MoviesGrid">

                            </div>
                        </div>
                    </div>`;
            }
            afterLoadEntity() {
                super.afterLoadEntity();
                this.moviesGrid.personID = this.entityId;
            }
        };
        PersonDialog = __decorate([
            Serenity.Decorators.registerClass('SerenityMovieDatabase.Default.PersonDialog')
        ], PersonDialog);
        Default.PersonDialog = PersonDialog;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let PersonGrid = class PersonGrid extends Serenity.EntityGrid {
            getColumnsKey() { return Default.PersonColumns.columnsKey; }
            getDialogType() { return Default.PersonDialog; }
            getIdProperty() { return Default.PersonRow.idProperty; }
            getInsertPermission() { return Default.PersonRow.insertPermission; }
            getLocalTextPrefix() { return Default.PersonRow.localTextPrefix; }
            getService() { return Default.PersonService.baseUrl; }
            constructor(container) {
                super(container);
            }
        };
        PersonGrid = __decorate([
            Serenity.Decorators.registerClass('SerenityMovieDatabase.Default.PersonGrid')
        ], PersonGrid);
        Default.PersonGrid = PersonGrid;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Default;
    (function (Default) {
        let PersonMovieGrid = class PersonMovieGrid extends Serenity.EntityGrid {
            constructor(container) {
                super(container);
            }
            getColumnsKey() { return "Default.PersonMovie"; }
            getIdProperty() { return Default.MovieCastRow.idProperty; }
            getLocalTextPrefix() { return Default.MovieCastRow.localTextPrefix; }
            getService() { return Default.MovieCastService.baseUrl; }
            getButtons() {
                return null;
            }
            getInitialTitle() {
                return null;
            }
            usePager() {
                return false;
            }
            getGridCanLoad() {
                return this.personID != null;
            }
            get personID() {
                return this._personID;
            }
            set personID(value) {
                if (this._personID != value) {
                    this._personID = value;
                    this.setEquality("PersonId" /* MovieCastRow.Fields.PersonId */, value);
                    this.refresh();
                }
            }
        };
        PersonMovieGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PersonMovieGrid);
        Default.PersonMovieGrid = PersonMovieGrid;
    })(Default = SerenityMovieDatabase.Default || (SerenityMovieDatabase.Default = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Membership;
    (function (Membership) {
        let LoginPanel = class LoginPanel extends Serenity.PropertyPanel {
            getFormKey() { return Membership.LoginForm.formKey; }
            constructor(container) {
                super(container);
                this.byId('LoginButton').click(e => {
                    e.preventDefault();
                    if (!this.validateForm()) {
                        return;
                    }
                    var request = this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: response => {
                            this.redirectToReturnUrl();
                        },
                        onError: (response) => {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
            }
            redirectToReturnUrl() {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            }
            getTemplate() {
                return `
    <h2 class="text-center p-4">
        <img src="${Q.resolveUrl("~/Content/site/images/serenity-logo-w-128.png")}"
            class="rounded-circle p-1" style="background-color: var(--s-sidebar-band-bg)"
            width="50" height="50" /> SerenityMovieDatabase
    </h2>

    <div class="s-Panel p-4">
        <h5 class="text-center my-4">${Q.text("Forms.Membership.Login.LoginToYourAccount")}</h5>
        <form id="~_Form" action="">
            <div id="~_PropertyGrid"></div>
            <div class="px-field">
                <a class="float-end text-decoration-none" href="${Q.resolveUrl('~/Account/ForgotPassword')}">
                    ${Q.text("Forms.Membership.Login.ForgotPassword")}
                </a>
            </div>
            <div class="px-field">
                <button id="~_LoginButton" type="submit" class="btn btn-primary my-3 w-100">
                    ${Q.text("Forms.Membership.Login.SignInButton")}
                </button>
            </div>
        </form>
    </div>

    <div class="text-center mt-2">
        <a class="text-decoration-none" href="${Q.resolveUrl('~/Account/SignUp')}">${Q.text("Forms.Membership.Login.SignUpButton")}</a>
    </div>   
`;
            }
        };
        LoginPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], LoginPanel);
        Membership.LoginPanel = LoginPanel;
    })(Membership = SerenityMovieDatabase.Membership || (SerenityMovieDatabase.Membership = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Membership;
    (function (Membership) {
        let ChangePasswordPanel = class ChangePasswordPanel extends Serenity.PropertyPanel {
            constructor(container) {
                super(container);
                this.form = new Membership.ChangePasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, e => {
                    if (this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, e => {
                    if (this.form.ConfirmPassword.value !== this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(e => {
                    e.preventDefault();
                    if (!this.validateForm()) {
                        return;
                    }
                    var request = this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: response => {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), () => {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            getFormKey() { return Membership.ChangePasswordForm.formKey; }
            getTemplate() {
                return `<div class="s-Panel">
    <h3 class="page-title mb-4 text-center">${Q.text("Forms.Membership.ChangePassword.FormTitle")}</h3>
    <form id="~_Form" action="">
        <div id="~_PropertyGrid"></div>
        <div class="px-field mt-4">
            <button id="~_SubmitButton" type="submit" class="btn btn-primary w-100">
                ${Q.text("Forms.Membership.ChangePassword.SubmitButton")}
            </button>
        </div>
    </form>
</div>`;
            }
        };
        ChangePasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangePasswordPanel);
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = SerenityMovieDatabase.Membership || (SerenityMovieDatabase.Membership = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Membership;
    (function (Membership) {
        let ForgotPasswordPanel = class ForgotPasswordPanel extends Serenity.PropertyPanel {
            constructor(container) {
                super(container);
                this.form = new Membership.ForgotPasswordForm(this.idPrefix);
                this.byId('SubmitButton').click(e => {
                    e.preventDefault();
                    if (!this.validateForm()) {
                        return;
                    }
                    var request = this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: response => {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), () => {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            getFormKey() { return Membership.ForgotPasswordForm.formKey; }
        };
        ForgotPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ForgotPasswordPanel);
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = SerenityMovieDatabase.Membership || (SerenityMovieDatabase.Membership = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Membership;
    (function (Membership) {
        let ResetPasswordPanel = class ResetPasswordPanel extends Serenity.PropertyPanel {
            constructor(container) {
                super(container);
                this.form = new Membership.ResetPasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, e => {
                    if (this.form.NewPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, e => {
                    if (this.form.ConfirmPassword.value !== this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(e => {
                    e.preventDefault();
                    if (!this.validateForm()) {
                        return;
                    }
                    var request = this.getSaveEntity();
                    request.Token = this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: response => {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), () => {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
            }
            getFormKey() { return Membership.ResetPasswordForm.formKey; }
        };
        ResetPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ResetPasswordPanel);
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = SerenityMovieDatabase.Membership || (SerenityMovieDatabase.Membership = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
var SerenityMovieDatabase;
(function (SerenityMovieDatabase) {
    var Membership;
    (function (Membership) {
        let SignUpPanel = class SignUpPanel extends Serenity.PropertyPanel {
            constructor(container) {
                super(container);
                this.form = new Membership.SignUpForm(this.idPrefix);
                this.form.ConfirmEmail.addValidationRule(this.uniqueName, e => {
                    if (this.form.ConfirmEmail.value !== this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, e => {
                    if (this.form.ConfirmPassword.value !== this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(e => {
                    e.preventDefault();
                    if (!this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: this.form.DisplayName.value,
                            Email: this.form.Email.value,
                            Password: this.form.Password.value
                        },
                        onSuccess: response => {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), () => {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            getFormKey() { return Membership.SignUpForm.formKey; }
        };
        SignUpPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], SignUpPanel);
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = SerenityMovieDatabase.Membership || (SerenityMovieDatabase.Membership = {}));
})(SerenityMovieDatabase || (SerenityMovieDatabase = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyZW5pdHlNb3ZpZURhdGFiYXNlLldlYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5QZXJtaXNzaW9uS2V5cy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uTGlzdFJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbkl0ZW0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZUxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlTGlzdFJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkdlbmRlci50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkdlbnJlQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkdlbnJlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkdlbnJlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuR2VucmVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuTW92aWVDYXN0Q29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0Lk1vdmllQ2FzdEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Nb3ZpZUNhc3RSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Nb3ZpZUNhc3RTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuTW92aWVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuTW92aWVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuTW92aWVHZW5yZXNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Nb3ZpZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0Lk1vdmllU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlBhZ2VzLk1vdmllS2luZC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlBlcnNvbkNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5QZXJzb25Gb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUGVyc29uTW92aWVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUGVyc29uUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUGVyc29uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TY3JpcHRVc2VyRGVmaW5pdGlvbi50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9UZXh0cy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9Sb2xlUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vVHJhbnNsYXRpb25HcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL1VzZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvQXV0aGVudGljYXRpb24vQXV0aG9yaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vUGVybWlzc2lvbkNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9Vc2VyUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvUm9sZUNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Vc2VyUm9sZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vU2NyaXB0SW5pdGlhbGl6YXRpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9OYXZpZ2F0aW9uL1NpZGViYXJTZWFyY2gudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvR2VucmUvR2VucmVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvR2VucmUvR2VucmVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L01vdmllL0dlbnJlTGlzdEZvcm1hdHRlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Nb3ZpZS9Nb3ZpZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Nb3ZpZS9Nb3ZpZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvTW92aWVDYXN0L01vdmllQ2FzdEVkaXREaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvTW92aWVDYXN0L01vdmllQ2FzdEVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9QZXJzb24vUGVyc29uRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1BlcnNvbi9QZXJzb25HcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1BlcnNvbi9QZXJzb25Nb3ZpZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9Mb2dpblBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvQ2hhbmdlUGFzc3dvcmQvQ2hhbmdlUGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9SZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1NpZ25VcC9TaWduVXBQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLHFCQUFxQixDQUk5QjtBQUpELFdBQVUscUJBQXFCO0lBQUMsSUFBQSxjQUFjLENBSTdDO0lBSitCLFdBQUEsY0FBYztRQUMxQyxNQUFhLGVBQWU7O1FBQ2pCLDBCQUFVLEdBQUcseUJBQXlCLENBQUM7UUFEckMsOEJBQWUsa0JBRTNCLENBQUE7SUFDTCxDQUFDLEVBSitCLGNBQWMsR0FBZCxvQ0FBYyxLQUFkLG9DQUFjLFFBSTdDO0FBQUQsQ0FBQyxFQUpTLHFCQUFxQixLQUFyQixxQkFBcUIsUUFJOUI7QUNKRCxJQUFVLHFCQUFxQixDQTBCOUI7QUExQkQsV0FBVSxxQkFBcUI7SUFBQyxJQUFBLGNBQWMsQ0EwQjdDO0lBMUIrQixXQUFBLGNBQWM7UUFNMUMsTUFBYSxZQUFhLFNBQVEsUUFBUSxDQUFDLGVBQWU7WUFJdEQsWUFBWSxNQUFjO2dCQUN0QixLQUFLLENBQUMsTUFB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QVksRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxXQUFXLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLEVBQUMsV0FBVyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMs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NEJBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO3lCQUNyQzt3QkFDRCxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUU7NEJBQ2xCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxFQUFFLEdBQUcsRUFBRTtnQ0FDMUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDOUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQztxQkFDSixDQUFDLENBQUM7Z0JBRVAsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBM0NTLFVBQVUsS0FBSyxPQUFPLFdBQUEsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0E0Q3hELENBQUE7UUE5Q1ksV0FBVztZQUR2QixRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtXQUN2QixXQUFXLENBOEN2QjtRQTlDWSxzQkFBVyxjQThDdkIsQ0FBQTtJQUNMLENBQUMsRUFsRCtCLFVBQVUsR0FBVixnQ0FBVSxLQUFWLGdDQUFVLFFBa0R6QztBQUFELENBQUMsRUFsRFMscUJBQXFCLEtBQXJCLHFCQUFxQixRQWtEOUIiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VGb3JtIHtcclxuICAgICAgICBMYW5ndWFnZUlkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTGFuZ3VhZ2VOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxhbmd1YWdlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2VGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShMYW5ndWFnZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBJZD86IG51bWJlcjtcclxuICAgICAgICBMYW5ndWFnZUlkPzogc3RyaW5nO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdMYW5ndWFnZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPExhbmd1YWdlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxMYW5ndWFnZVJvdz4oJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIExhbmd1YWdlSWQgPSBcIkxhbmd1YWdlSWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VOYW1lID0gXCJMYW5ndWFnZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PExhbmd1YWdlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pkxhbmd1YWdlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQZXJtaXNzaW9uS2V5cyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNlY3VyaXR5ID0gXCJBZG1pbmlzdHJhdGlvbjpTZWN1cml0eVwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBUcmFuc2xhdGlvbiA9IFwiQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb25cIjtcclxuICAgICAgICBleHBvcnQgY29uc3QgQmFja2dyb3VuZEpvYiA9IFwiQWRtaW5pc3RyYXRpb246QmFja2dyb3VuZEpvYlwiO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZUZvcm0ge1xyXG4gICAgICAgIFJvbGVOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSb2xlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUm9sZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJvbGVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JvbGVOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgUm9sZVBlcm1pc3Npb25JZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybWlzc2lvbktleT86IHN0cmluZztcclxuICAgICAgICBSb2xlUm9sZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUm9sZVBlcm1pc3Npb25JZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdQZXJtaXNzaW9uS2V5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uSWQgPSBcIlJvbGVQZXJtaXNzaW9uSWRcIixcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgUGVybWlzc2lvbktleSA9IFwiUGVybWlzc2lvbktleVwiLFxyXG4gICAgICAgICAgICBSb2xlUm9sZU5hbWUgPSBcIlJvbGVSb2xlTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogc3RyaW5nW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUm93IHtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSb2xlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUm9sZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxSb2xlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxSb2xlUm93PignQWRtaW5pc3RyYXRpb24uUm9sZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFJvbGVOYW1lID0gXCJSb2xlTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSb2xlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFJvbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlJvbGVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uSXRlbSB7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFNvdXJjZVRleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0VGV4dD86IHN0cmluZztcclxuICAgICAgICBDdXN0b21UZXh0Pzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0IHtcclxuICAgICAgICBTb3VyY2VMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgICAgIFRhcmdldExhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUcmFuc2xhdGlvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUcmFuc2xhdGlvbkl0ZW0+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1VwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UcmFuc2xhdGlvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRhcmdldExhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVHJhbnNsYXRpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBVc2VySW1hZ2U6IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZENvbmZpcm06IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghVXNlckZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFVzZXJGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShVc2VyRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VySW1hZ2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmRDb25maXJtJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvdXJjZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBVc2VyUGVybWlzc2lvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBQZXJtaXNzaW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIEdyYW50ZWQ/OiBib29sZWFuO1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXI/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlclBlcm1pc3Npb25JZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdQZXJtaXNzaW9uS2V5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uSWQgPSBcIlVzZXJQZXJtaXNzaW9uSWRcIixcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgUGVybWlzc2lvbktleSA9IFwiUGVybWlzc2lvbktleVwiLFxyXG4gICAgICAgICAgICBHcmFudGVkID0gXCJHcmFudGVkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBVc2VyID0gXCJVc2VyXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclBlcm1pc3Npb25Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFJvbGVQZXJtaXNzaW9ucyhyZXF1ZXN0OiBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFBlcm1pc3Npb25LZXlzKHJlcXVlc3Q6IFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RcIixcclxuICAgICAgICAgICAgTGlzdFJvbGVQZXJtaXNzaW9ucyA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFJvbGVQZXJtaXNzaW9uc1wiLFxyXG4gICAgICAgICAgICBMaXN0UGVybWlzc2lvbktleXMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RQZXJtaXNzaW9uS2V5c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnLCBcclxuICAgICAgICAgICAgJ0xpc3RSb2xlUGVybWlzc2lvbnMnLCBcclxuICAgICAgICAgICAgJ0xpc3RQZXJtaXNzaW9uS2V5cydcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJQZXJtaXNzaW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiBVc2VyUGVybWlzc2lvblJvd1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVMaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxudW1iZXI+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBVc2VyUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUm9sZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJSb2xlSWQgPSBcIlVzZXJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvbGVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBVc2VyUm9sZVVwZGF0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBVc2VyUm9sZUxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFVzZXJSb2xlTGlzdFJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJSb2xlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VXNlclJvbGVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZXM/OiBudW1iZXJbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb3cge1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRIYXNoPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkU2FsdD86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBVc2VySW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZT86IHN0cmluZztcclxuICAgICAgICBJc0FjdGl2ZT86IG51bWJlcjtcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZENvbmZpcm0/OiBzdHJpbmc7XHJcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIEluc2VydERhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VySWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpc0FjdGl2ZVByb3BlcnR5ID0gJ0lzQWN0aXZlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1VzZXJuYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8VXNlclJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8VXNlclJvdz4oJ0FkbWluaXN0cmF0aW9uLlVzZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgU291cmNlID0gXCJTb3VyY2VcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRIYXNoID0gXCJQYXNzd29yZEhhc2hcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRTYWx0ID0gXCJQYXNzd29yZFNhbHRcIixcclxuICAgICAgICAgICAgRGlzcGxheU5hbWUgPSBcIkRpc3BsYXlOYW1lXCIsXHJcbiAgICAgICAgICAgIEVtYWlsID0gXCJFbWFpbFwiLFxyXG4gICAgICAgICAgICBVc2VySW1hZ2UgPSBcIlVzZXJJbWFnZVwiLFxyXG4gICAgICAgICAgICBMYXN0RGlyZWN0b3J5VXBkYXRlID0gXCJMYXN0RGlyZWN0b3J5VXBkYXRlXCIsXHJcbiAgICAgICAgICAgIElzQWN0aXZlID0gXCJJc0FjdGl2ZVwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZCA9IFwiUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRDb25maXJtID0gXCJQYXNzd29yZENvbmZpcm1cIixcclxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcclxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Vc2VyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFVzZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVc2VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVuZGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlVuZGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5VbmRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxVc2VyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBVbmRlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9VbmRlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnVW5kZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VXNlclNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGVudW0gR2VuZGVyIHtcclxuICAgICAgICBNYWxlID0gMSxcclxuICAgICAgICBGZW1hbGUgPSAyXHJcbiAgICB9XHJcbiAgICBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRW51bVR5cGUoR2VuZGVyLCAnU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkRlZmF1bHQuR2VuZGVyJywgJ0RlZmF1bHQuR2VuZGVyJyk7XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgR2VucmVDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LkdlbnJlJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdlbnJlRm9ybSB7XHJcbiAgICAgICAgTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBHZW5yZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuR2VucmUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUdlbnJlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgR2VucmVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShHZW5yZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBHZW5yZVJvdyB7XHJcbiAgICAgICAgR2VucmVJZD86IG51bWJlcjtcclxuICAgICAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgR2VucmVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0dlbnJlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdEZWZhdWx0LkdlbnJlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0RlZmF1bHQuR2VucmUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPEdlbnJlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxHZW5yZVJvdz4oJ0RlZmF1bHQuR2VucmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIEdlbnJlSWQgPSBcIkdlbnJlSWRcIixcclxuICAgICAgICAgICAgTmFtZSA9IFwiTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEdlbnJlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9HZW5yZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxHZW5yZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEdlbnJlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEdlbnJlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEdlbnJlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkRlZmF1bHQvR2VucmUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9HZW5yZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L0dlbnJlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiRGVmYXVsdC9HZW5yZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L0dlbnJlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5HZW5yZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllQ2FzdENvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuTW92aWVDYXN0JztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vdmllQ2FzdEZvcm0ge1xyXG4gICAgICAgIFBlcnNvbklkOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgQ2hhcmFjdGVyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllQ2FzdEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuTW92aWVDYXN0JztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFNb3ZpZUNhc3RGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBNb3ZpZUNhc3RGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkxvb2t1cEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKE1vdmllQ2FzdEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUGVyc29uSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ2hhcmFjdGVyJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE1vdmllQ2FzdFJvdyB7XHJcbiAgICAgICAgTW92aWVDYXN0SWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW92aWVJZD86IG51bWJlcjtcclxuICAgICAgICBQZXJzb25JZD86IG51bWJlcjtcclxuICAgICAgICBDaGFyYWN0ZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVUaXRsZT86IHN0cmluZztcclxuICAgICAgICBNb3ZpZURlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAgICAgIE1vdmllU3RvcnlsaW5lPzogc3RyaW5nO1xyXG4gICAgICAgIE1vdmllWWVhcj86IG51bWJlcjtcclxuICAgICAgICBNb3ZpZVJlbGVhc2VEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIE1vdmllUnVudGltZT86IG51bWJlcjtcclxuICAgICAgICBNb3ZpZUtpbmQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVyc29uRmlyc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcnNvbkxhc3RuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcnNvbkZ1bGxuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcnNvbkJpcnRoRGF0ZT86IHN0cmluZztcclxuICAgICAgICBQZXJzb25CaXJ0aFBsYWNlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcnNvbkdlbmRlcj86IG51bWJlcjtcclxuICAgICAgICBQZXJzb25IZWlnaHQ/OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNb3ZpZUNhc3RSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ01vdmllQ2FzdElkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0NoYXJhY3Rlcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdEZWZhdWx0Lk1vdmllQ2FzdCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIE1vdmllQ2FzdElkID0gXCJNb3ZpZUNhc3RJZFwiLFxyXG4gICAgICAgICAgICBNb3ZpZUlkID0gXCJNb3ZpZUlkXCIsXHJcbiAgICAgICAgICAgIFBlcnNvbklkID0gXCJQZXJzb25JZFwiLFxyXG4gICAgICAgICAgICBDaGFyYWN0ZXIgPSBcIkNoYXJhY3RlclwiLFxyXG4gICAgICAgICAgICBNb3ZpZVRpdGxlID0gXCJNb3ZpZVRpdGxlXCIsXHJcbiAgICAgICAgICAgIE1vdmllRGVzY3JpcHRpb24gPSBcIk1vdmllRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgTW92aWVTdG9yeWxpbmUgPSBcIk1vdmllU3RvcnlsaW5lXCIsXHJcbiAgICAgICAgICAgIE1vdmllWWVhciA9IFwiTW92aWVZZWFyXCIsXHJcbiAgICAgICAgICAgIE1vdmllUmVsZWFzZURhdGUgPSBcIk1vdmllUmVsZWFzZURhdGVcIixcclxuICAgICAgICAgICAgTW92aWVSdW50aW1lID0gXCJNb3ZpZVJ1bnRpbWVcIixcclxuICAgICAgICAgICAgTW92aWVLaW5kID0gXCJNb3ZpZUtpbmRcIixcclxuICAgICAgICAgICAgUGVyc29uRmlyc3ROYW1lID0gXCJQZXJzb25GaXJzdE5hbWVcIixcclxuICAgICAgICAgICAgUGVyc29uTGFzdG5hbWUgPSBcIlBlcnNvbkxhc3RuYW1lXCIsXHJcbiAgICAgICAgICAgIFBlcnNvbkZ1bGxuYW1lID0gXCJQZXJzb25GdWxsbmFtZVwiLFxyXG4gICAgICAgICAgICBQZXJzb25CaXJ0aERhdGUgPSBcIlBlcnNvbkJpcnRoRGF0ZVwiLFxyXG4gICAgICAgICAgICBQZXJzb25CaXJ0aFBsYWNlID0gXCJQZXJzb25CaXJ0aFBsYWNlXCIsXHJcbiAgICAgICAgICAgIFBlcnNvbkdlbmRlciA9IFwiUGVyc29uR2VuZGVyXCIsXHJcbiAgICAgICAgICAgIFBlcnNvbkhlaWdodCA9IFwiUGVyc29uSGVpZ2h0XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTW92aWVDYXN0U2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9Nb3ZpZUNhc3QnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TW92aWVDYXN0Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TW92aWVDYXN0Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPE1vdmllQ2FzdFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxNb3ZpZUNhc3RSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9Nb3ZpZUNhc3QvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9Nb3ZpZUNhc3QvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiRGVmYXVsdC9Nb3ZpZUNhc3QvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L01vdmllQ2FzdC9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L01vdmllQ2FzdC9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+TW92aWVDYXN0U2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5Nb3ZpZSc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZUZvcm0ge1xyXG4gICAgICAgIFRpdGxlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgIENhc3RMaXN0OiBNb3ZpZUNhc3RFZGl0b3I7XHJcbiAgICAgICAgUHJpbWFyeUltYWdlOiBTZXJlbml0eS5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICBHYWxsZXJ5SW1hZ2VzOiBTZXJlbml0eS5NdWx0aXBsZUltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIFN0b3J5bGluZTogU2VyZW5pdHkuVGV4dEFyZWFFZGl0b3I7XHJcbiAgICAgICAgWWVhcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBSZWxlYXNlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBHZW5yZUxpc3Q6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBLaW5kOiBTZXJlbml0eS5FbnVtRWRpdG9yO1xyXG4gICAgICAgIFJ1bnRpbWU6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE1vdmllRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5Nb3ZpZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTW92aWVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBNb3ZpZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5UZXh0QXJlYUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IE1vdmllQ2FzdEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzQgPSBzLk11bHRpcGxlSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzUgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzYgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzcgPSBzLkxvb2t1cEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3OCA9IHMuRW51bUVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShNb3ZpZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVGl0bGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ2FzdExpc3QnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUHJpbWFyeUltYWdlJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dhbGxlcnlJbWFnZXMnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnU3RvcnlsaW5lJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1llYXInLCB3NSxcclxuICAgICAgICAgICAgICAgICAgICAnUmVsZWFzZURhdGUnLCB3NixcclxuICAgICAgICAgICAgICAgICAgICAnR2VucmVMaXN0JywgdzcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0tpbmQnLCB3OCxcclxuICAgICAgICAgICAgICAgICAgICAnUnVudGltZScsIHc1XHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNb3ZpZUdlbnJlc1JvdyB7XHJcbiAgICAgICAgTW92aWVHZW5yZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgR2VucmVJZD86IG51bWJlcjtcclxuICAgICAgICBNb3ZpZVRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIE1vdmllRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVTdG9yeWxpbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVZZWFyPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllUmVsZWFzZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTW92aWVSdW50aW1lPzogbnVtYmVyO1xyXG4gICAgICAgIE1vdmllS2luZD86IG51bWJlcjtcclxuICAgICAgICBHZW5yZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNb3ZpZUdlbnJlc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnTW92aWVHZW5yZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0RlZmF1bHQuTW92aWVHZW5yZXMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBNb3ZpZUdlbnJlSWQgPSBcIk1vdmllR2VucmVJZFwiLFxyXG4gICAgICAgICAgICBNb3ZpZUlkID0gXCJNb3ZpZUlkXCIsXHJcbiAgICAgICAgICAgIEdlbnJlSWQgPSBcIkdlbnJlSWRcIixcclxuICAgICAgICAgICAgTW92aWVUaXRsZSA9IFwiTW92aWVUaXRsZVwiLFxyXG4gICAgICAgICAgICBNb3ZpZURlc2NyaXB0aW9uID0gXCJNb3ZpZURlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIE1vdmllU3RvcnlsaW5lID0gXCJNb3ZpZVN0b3J5bGluZVwiLFxyXG4gICAgICAgICAgICBNb3ZpZVllYXIgPSBcIk1vdmllWWVhclwiLFxyXG4gICAgICAgICAgICBNb3ZpZVJlbGVhc2VEYXRlID0gXCJNb3ZpZVJlbGVhc2VEYXRlXCIsXHJcbiAgICAgICAgICAgIE1vdmllUnVudGltZSA9IFwiTW92aWVSdW50aW1lXCIsXHJcbiAgICAgICAgICAgIE1vdmllS2luZCA9IFwiTW92aWVLaW5kXCIsXHJcbiAgICAgICAgICAgIEdlbnJlTmFtZSA9IFwiR2VucmVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTW92aWVSb3cge1xyXG4gICAgICAgIE1vdmllSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgU3RvcnlsaW5lPzogc3RyaW5nO1xyXG4gICAgICAgIFllYXI/OiBudW1iZXI7XHJcbiAgICAgICAgUmVsZWFzZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUnVudGltZT86IG51bWJlcjtcclxuICAgICAgICBLaW5kPzogRGVmYXVsdC5QYWdlcy5Nb3ZpZUtpbmQ7XHJcbiAgICAgICAgR2VucmVMaXN0PzogbnVtYmVyW107XHJcbiAgICAgICAgQ2FzdExpc3Q/OiBNb3ZpZUNhc3RSb3dbXTtcclxuICAgICAgICBQcmltYXJ5SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAgICAgR2FsbGVyeUltYWdlcz86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1vdmllUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdNb3ZpZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1RpdGxlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0RlZmF1bHQuTW92aWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBNb3ZpZUlkID0gXCJNb3ZpZUlkXCIsXHJcbiAgICAgICAgICAgIFRpdGxlID0gXCJUaXRsZVwiLFxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgU3RvcnlsaW5lID0gXCJTdG9yeWxpbmVcIixcclxuICAgICAgICAgICAgWWVhciA9IFwiWWVhclwiLFxyXG4gICAgICAgICAgICBSZWxlYXNlRGF0ZSA9IFwiUmVsZWFzZURhdGVcIixcclxuICAgICAgICAgICAgUnVudGltZSA9IFwiUnVudGltZVwiLFxyXG4gICAgICAgICAgICBLaW5kID0gXCJLaW5kXCIsXHJcbiAgICAgICAgICAgIEdlbnJlTGlzdCA9IFwiR2VucmVMaXN0XCIsXHJcbiAgICAgICAgICAgIENhc3RMaXN0ID0gXCJDYXN0TGlzdFwiLFxyXG4gICAgICAgICAgICBQcmltYXJ5SW1hZ2UgPSBcIlByaW1hcnlJbWFnZVwiLFxyXG4gICAgICAgICAgICBHYWxsZXJ5SW1hZ2VzID0gXCJHYWxsZXJ5SW1hZ2VzXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTW92aWVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdEZWZhdWx0L01vdmllJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PE1vdmllUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TW92aWVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TW92aWVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8TW92aWVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9Nb3ZpZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJEZWZhdWx0L01vdmllL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkRlZmF1bHQvTW92aWUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L01vdmllL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkRlZmF1bHQvTW92aWUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pk1vdmllU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuRGVmYXVsdC5QYWdlcyB7XHJcbiAgICBleHBvcnQgZW51bSBNb3ZpZUtpbmQge1xyXG4gICAgICAgIEZpbG0gPSAxLFxyXG4gICAgICAgIFR2U2VyaWVzID0gMixcclxuICAgICAgICBNaW5pU2VyaWVzID0gM1xyXG4gICAgfVxyXG4gICAgU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVudW1UeXBlKE1vdmllS2luZCwgJ1NlcmVuaXR5TW92aWVEYXRhYmFzZS5EZWZhdWx0LlBhZ2VzLk1vdmllS2luZCcsICdNb3ZpZURCLk1vdmllS2luZCcpO1xyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgUGVyc29uQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5QZXJzb24nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVyc29uRm9ybSB7XHJcbiAgICAgICAgRmlyc3ROYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTGFzdG5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQcmltYXJ5SW1hZ2U6IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIEdhbGxlcnlJbWFnZXM6IFNlcmVuaXR5Lk11bHRpcGxlSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgQmlydGhEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIEJpcnRoUGxhY2U6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBHZW5kZXI6IFNlcmVuaXR5LkVudW1FZGl0b3I7XHJcbiAgICAgICAgSGVpZ2h0OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQZXJzb25Gb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LlBlcnNvbic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUGVyc29uRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUGVyc29uRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5NdWx0aXBsZUltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gcy5FbnVtRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc1ID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFBlcnNvbkZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRmlyc3ROYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhc3RuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByaW1hcnlJbWFnZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdHYWxsZXJ5SW1hZ2VzJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JpcnRoRGF0ZScsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdCaXJ0aFBsYWNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dlbmRlcicsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdIZWlnaHQnLCB3NVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBQZXJzb25Nb3ZpZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuUGVyc29uTW92aWUnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcnNvblJvdyB7XHJcbiAgICAgICAgUGVyc29uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgRmlyc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIExhc3RuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEZ1bGxuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEJpcnRoRGF0ZT86IHN0cmluZztcclxuICAgICAgICBCaXJ0aFBsYWNlPzogc3RyaW5nO1xyXG4gICAgICAgIEdlbmRlcj86IEdlbmRlcjtcclxuICAgICAgICBIZWlnaHQ/OiBudW1iZXI7XHJcbiAgICAgICAgUHJpbWFyeUltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIEdhbGxlcnlJbWFnZXM/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQZXJzb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1BlcnNvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0Z1bGxuYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0RlZmF1bHQuUGVyc29uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0RlZmF1bHQuUGVyc29uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxQZXJzb25Sb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFBlcnNvblJvdz4oJ0RlZmF1bHQuUGVyc29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBQZXJzb25JZCA9IFwiUGVyc29uSWRcIixcclxuICAgICAgICAgICAgRmlyc3ROYW1lID0gXCJGaXJzdE5hbWVcIixcclxuICAgICAgICAgICAgTGFzdG5hbWUgPSBcIkxhc3RuYW1lXCIsXHJcbiAgICAgICAgICAgIEZ1bGxuYW1lID0gXCJGdWxsbmFtZVwiLFxyXG4gICAgICAgICAgICBCaXJ0aERhdGUgPSBcIkJpcnRoRGF0ZVwiLFxyXG4gICAgICAgICAgICBCaXJ0aFBsYWNlID0gXCJCaXJ0aFBsYWNlXCIsXHJcbiAgICAgICAgICAgIEdlbmRlciA9IFwiR2VuZGVyXCIsXHJcbiAgICAgICAgICAgIEhlaWdodCA9IFwiSGVpZ2h0XCIsXHJcbiAgICAgICAgICAgIFByaW1hcnlJbWFnZSA9IFwiUHJpbWFyeUltYWdlXCIsXHJcbiAgICAgICAgICAgIEdhbGxlcnlJbWFnZXMgPSBcIkdhbGxlcnlJbWFnZXNcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQZXJzb25TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdEZWZhdWx0L1BlcnNvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQZXJzb25Sb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQZXJzb25Sb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8UGVyc29uUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFBlcnNvblJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJEZWZhdWx0L1BlcnNvbi9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJEZWZhdWx0L1BlcnNvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L1BlcnNvbi9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkRlZmF1bHQvUGVyc29uL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkRlZmF1bHQvUGVyc29uL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5QZXJzb25TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBPbGRQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2hhbmdlUGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2hhbmdlUGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ09sZFBhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgT2xkUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRm9yZ290UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEZvcmdvdFBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExvZ2luRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5Mb2dpbic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTG9naW5Gb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBMb2dpbkZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShMb2dpbkZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcm5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNldFBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJlc2V0UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXNldFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSZXNldFBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdOZXdQYXNzd29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVG9rZW4/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTaWduVXBGb3JtIHtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybUVtYWlsOiBTZXJlbml0eS5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNpZ25VcEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuU2lnblVwJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTaWduVXBGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBTaWduVXBGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShTaWduVXBGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1FbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNjcmlwdFVzZXJEZWZpbml0aW9uIHtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBJc0FkbWluPzogYm9vbGVhbjtcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLlRleHRzIHtcclxuXHJcbiAgICBleHBvcnQgZGVjbGFyZSBuYW1lc3BhY2UgRGIge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIExhbmd1YWdlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJvbGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVQZXJtaXNzaW9uSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlUm9sZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFRyYW5zbGF0aW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21UZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW50aXR5UGx1cmFsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3ZlcnJpZGVDb25maXJtYXRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlQ2hhbmdlc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZUxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0VGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlciB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJc0FjdGl2ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3REaXJlY3RvcnlVcGRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkQ29uZmlybTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkSGFzaDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkU2FsdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySW1hZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50ZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJQZXJtaXNzaW9uSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIERlZmF1bHQge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEdlbnJlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHZW5yZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTW92aWUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhc3RMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHYWxsZXJ5SW1hZ2VzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VucmVMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgS2luZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcmltYXJ5SW1hZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZWxlYXNlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJ1bnRpbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdG9yeWxpbmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFllYXI6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIE1vdmllQ2FzdCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2hhcmFjdGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVDYXN0SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZURlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllS2luZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllUmVsZWFzZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZVJ1bnRpbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZVN0b3J5bGluZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZVllYXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25CaXJ0aERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25CaXJ0aFBsYWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVyc29uRmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVyc29uRnVsbG5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25HZW5kZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25IZWlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcnNvbkxhc3RuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBNb3ZpZUdlbnJlcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VucmVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdlbnJlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZUdlbnJlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb3ZpZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVLaW5kOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVSZWxlYXNlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllUnVudGltZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllU3RvcnlsaW5lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW92aWVUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmllWWVhcjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUGVyc29uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaXJ0aERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaXJ0aFBsYWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRnVsbG5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHYWxsZXJ5SW1hZ2VzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VuZGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSGVpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFzdG5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJzb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByaW1hcnlJbWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBkZWNsYXJlIG5hbWVzcGFjZSBGb3JtcyB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBNZW1iZXJzaGlwIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDaGFuZ2VQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgRm9yZ290UGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybUluZm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBMb2dpbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmFjZWJvb2tCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3Jnb3RQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdvb2dsZUJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvZ2luVG9Zb3VyQWNjb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9SOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVtZW1iZXJNZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpZ25JbkJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpZ25VcEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUmVzZXRQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbFN1YmplY3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBTaWduVXAge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjY2VwdFRlcm1zOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGVFbWFpbFN1YmplY3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybUluZm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVjbGFyZSBuYW1lc3BhY2UgTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IExvZ291dExpbms6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgU2l0ZVRpdGxlOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGRlY2xhcmUgbmFtZXNwYWNlIFNpdGUge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQWNjZXNzRGVuaWVkIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9DaGFuZ2VVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGlja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhY2tQZXJtaXNzaW9uczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90TG9nZ2VkSW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhZ2VUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEJhc2ljUHJvZ3Jlc3NEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FuY2VsVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBsZWFzZVdhaXQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBCdWxrU2VydmljZUFjdGlvbiB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbGxIYWRFcnJvcnNGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbFN1Y2Nlc3NGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1hdGlvbkZvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRXJyb3JDb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90aGluZ1RvUHJvY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU29tZUhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzc0NvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgRGFzaGJvYXJkIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbnRlbnREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIExheW91dCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJDb3B5cmlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckluZm86IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlclJpZ2h0czogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgR2VuZXJhbFNldHRpbmdzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmxhY2s6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmxhY2tMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbHVlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsdWVMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHcmVlbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHcmVlbkxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVB1cnBsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVQdXJwbGVMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUmVkTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lWWVsbG93OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVllbGxvd0xpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25EaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlckRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0UGVybWlzc2lvbnNCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRSb2xlc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHcmFudDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUmV2b2tlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJSb2xlRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFZhbGlkYXRpb25FcnJvciB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVjbGFyZSBuYW1lc3BhY2UgVmFsaWRhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uRXJyb3I6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgQ2FudEZpbmRVc2VyV2l0aEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEN1cnJlbnRQYXNzd29yZE1pc21hdGNoOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZUZvcmVpZ25LZXlFcnJvcjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbENvbmZpcm06IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxJblVzZTogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkQWN0aXZhdGVUb2tlbjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkUmVzZXRUb2tlbjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBNaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVQcmltYXJ5S2V5RXJyb3I6IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBTZXJlbml0eU1vdmllRGF0YWJhc2VbJ1RleHRzJ10gPSBRLnByb3h5VGV4dHMoVGV4dHMsICcnLCB7RGI6e0FkbWluaXN0cmF0aW9uOntMYW5ndWFnZTp7SWQ6MSxMYW5ndWFnZUlkOjEsTGFuZ3VhZ2VOYW1lOjF9LFJvbGU6e1JvbGVJZDoxLFJvbGVOYW1lOjF9LFJvbGVQZXJtaXNzaW9uOntQZXJtaXNzaW9uS2V5OjEsUm9sZUlkOjEsUm9sZVBlcm1pc3Npb25JZDoxLFJvbGVSb2xlTmFtZToxfSxUcmFuc2xhdGlvbjp7Q3VzdG9tVGV4dDoxLEVudGl0eVBsdXJhbDoxLEtleToxLE92ZXJyaWRlQ29uZmlybWF0aW9uOjEsU2F2ZUNoYW5nZXNCdXR0b246MSxTb3VyY2VMYW5ndWFnZToxLFNvdXJjZVRleHQ6MSxUYXJnZXRMYW5ndWFnZToxLFRhcmdldFRleHQ6MX0sVXNlcjp7RGlzcGxheU5hbWU6MSxFbWFpbDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJc0FjdGl2ZToxLExhc3REaXJlY3RvcnlVcGRhdGU6MSxQYXNzd29yZDoxLFBhc3N3b3JkQ29uZmlybToxLFBhc3N3b3JkSGFzaDoxLFBhc3N3b3JkU2FsdDoxLFNvdXJjZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MSxVc2VySWQ6MSxVc2VySW1hZ2U6MSxVc2VybmFtZToxfSxVc2VyUGVybWlzc2lvbjp7R3JhbnRlZDoxLFBlcm1pc3Npb25LZXk6MSxVc2VyOjEsVXNlcklkOjEsVXNlclBlcm1pc3Npb25JZDoxLFVzZXJuYW1lOjF9LFVzZXJSb2xlOntSb2xlSWQ6MSxVc2VyOjEsVXNlcklkOjEsVXNlclJvbGVJZDoxLFVzZXJuYW1lOjF9fSxEZWZhdWx0OntHZW5yZTp7R2VucmVJZDoxLE5hbWU6MX0sTW92aWU6e0Nhc3RMaXN0OjEsRGVzY3JpcHRpb246MSxHYWxsZXJ5SW1hZ2VzOjEsR2VucmVMaXN0OjEsS2luZDoxLE1vdmllSWQ6MSxQcmltYXJ5SW1hZ2U6MSxSZWxlYXNlRGF0ZToxLFJ1bnRpbWU6MSxTdG9yeWxpbmU6MSxUaXRsZToxLFllYXI6MX0sTW92aWVDYXN0OntDaGFyYWN0ZXI6MSxNb3ZpZUNhc3RJZDoxLE1vdmllRGVzY3JpcHRpb246MSxNb3ZpZUlkOjEsTW92aWVLaW5kOjEsTW92aWVSZWxlYXNlRGF0ZToxLE1vdmllUnVudGltZToxLE1vdmllU3RvcnlsaW5lOjEsTW92aWVUaXRsZToxLE1vdmllWWVhcjoxLFBlcnNvbkJpcnRoRGF0ZToxLFBlcnNvbkJpcnRoUGxhY2U6MSxQZXJzb25GaXJzdE5hbWU6MSxQZXJzb25GdWxsbmFtZToxLFBlcnNvbkdlbmRlcjoxLFBlcnNvbkhlaWdodDoxLFBlcnNvbklkOjEsUGVyc29uTGFzdG5hbWU6MX0sTW92aWVHZW5yZXM6e0dlbnJlSWQ6MSxHZW5yZU5hbWU6MSxNb3ZpZURlc2NyaXB0aW9uOjEsTW92aWVHZW5yZUlkOjEsTW92aWVJZDoxLE1vdmllS2luZDoxLE1vdmllUmVsZWFzZURhdGU6MSxNb3ZpZVJ1bnRpbWU6MSxNb3ZpZVN0b3J5bGluZToxLE1vdmllVGl0bGU6MSxNb3ZpZVllYXI6MX0sUGVyc29uOntCaXJ0aERhdGU6MSxCaXJ0aFBsYWNlOjEsRmlyc3ROYW1lOjEsRnVsbG5hbWU6MSxHYWxsZXJ5SW1hZ2VzOjEsR2VuZGVyOjEsSGVpZ2h0OjEsTGFzdG5hbWU6MSxQZXJzb25JZDoxLFByaW1hcnlJbWFnZToxfX19LEZvcm1zOntNZW1iZXJzaGlwOntDaGFuZ2VQYXNzd29yZDp7Rm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxGb3Jnb3RQYXNzd29yZDp7QmFja1RvTG9naW46MSxGb3JtSW5mbzoxLEZvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sTG9naW46e0ZhY2Vib29rQnV0dG9uOjEsRm9yZ290UGFzc3dvcmQ6MSxHb29nbGVCdXR0b246MSxMb2dpblRvWW91ckFjY291bnQ6MSxPUjoxLFJlbWVtYmVyTWU6MSxTaWduSW5CdXR0b246MSxTaWduVXBCdXR0b246MX0sUmVzZXRQYXNzd29yZDp7QmFja1RvTG9naW46MSxFbWFpbFN1YmplY3Q6MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LFNpZ25VcDp7QWNjZXB0VGVybXM6MSxBY3RpdmF0ZUVtYWlsU3ViamVjdDoxLEFjdGl2YXRpb25Db21wbGV0ZU1lc3NhZ2U6MSxCYWNrVG9Mb2dpbjoxLENvbmZpcm1FbWFpbDoxLENvbmZpcm1QYXNzd29yZDoxLERpc3BsYXlOYW1lOjEsRW1haWw6MSxGb3JtSW5mbzoxLEZvcm1UaXRsZToxLFBhc3N3b3JkOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfX19LE5hdmlnYXRpb246e0xvZ291dExpbms6MSxTaXRlVGl0bGU6MX0sU2l0ZTp7QWNjZXNzRGVuaWVkOntDbGlja1RvQ2hhbmdlVXNlcjoxLENsaWNrVG9Mb2dpbjoxLExhY2tQZXJtaXNzaW9uczoxLE5vdExvZ2dlZEluOjEsUGFnZVRpdGxlOjF9LEJhc2ljUHJvZ3Jlc3NEaWFsb2c6e0NhbmNlbFRpdGxlOjEsUGxlYXNlV2FpdDoxfSxCdWxrU2VydmljZUFjdGlvbjp7QWxsSGFkRXJyb3JzRm9ybWF0OjEsQWxsU3VjY2Vzc0Zvcm1hdDoxLENvbmZpcm1hdGlvbkZvcm1hdDoxLEVycm9yQ291bnQ6MSxOb3RoaW5nVG9Qcm9jZXNzOjEsU29tZUhhZEVycm9yc0Zvcm1hdDoxLFN1Y2Nlc3NDb3VudDoxfSxEYXNoYm9hcmQ6e0NvbnRlbnREZXNjcmlwdGlvbjoxfSxMYXlvdXQ6e0Zvb3RlckNvcHlyaWdodDoxLEZvb3RlckluZm86MSxGb290ZXJSaWdodHM6MSxHZW5lcmFsU2V0dGluZ3M6MSxMYW5ndWFnZToxLFRoZW1lOjEsVGhlbWVCbGFjazoxLFRoZW1lQmxhY2tMaWdodDoxLFRoZW1lQmx1ZToxLFRoZW1lQmx1ZUxpZ2h0OjEsVGhlbWVHcmVlbjoxLFRoZW1lR3JlZW5MaWdodDoxLFRoZW1lUHVycGxlOjEsVGhlbWVQdXJwbGVMaWdodDoxLFRoZW1lUmVkOjEsVGhlbWVSZWRMaWdodDoxLFRoZW1lWWVsbG93OjEsVGhlbWVZZWxsb3dMaWdodDoxfSxSb2xlUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxFZGl0QnV0dG9uOjEsU2F2ZVN1Y2Nlc3M6MX0sVXNlckRpYWxvZzp7RWRpdFBlcm1pc3Npb25zQnV0dG9uOjEsRWRpdFJvbGVzQnV0dG9uOjF9LFVzZXJQZXJtaXNzaW9uRGlhbG9nOntEaWFsb2dUaXRsZToxLEdyYW50OjEsUGVybWlzc2lvbjoxLFJldm9rZToxLFNhdmVTdWNjZXNzOjF9LFVzZXJSb2xlRGlhbG9nOntEaWFsb2dUaXRsZToxLFNhdmVTdWNjZXNzOjF9LFZhbGlkYXRpb25FcnJvcjp7VGl0bGU6MX19LFZhbGlkYXRpb246e0F1dGhlbnRpY2F0aW9uRXJyb3I6MSxDYW50RmluZFVzZXJXaXRoRW1haWw6MSxDdXJyZW50UGFzc3dvcmRNaXNtYXRjaDoxLERlbGV0ZUZvcmVpZ25LZXlFcnJvcjoxLEVtYWlsQ29uZmlybToxLEVtYWlsSW5Vc2U6MSxJbnZhbGlkQWN0aXZhdGVUb2tlbjoxLEludmFsaWRSZXNldFRva2VuOjEsTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aDoxLFNhdmVQcmltYXJ5S2V5RXJyb3I6MX19KSBhcyBhbnk7XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTGFuZ3VhZ2VGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTGFuZ3VhZ2VGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxMYW5ndWFnZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLkxhbmd1YWdlXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIExhbmd1YWdlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW0xhbmd1YWdlUm93LkZpZWxkcy5MYW5ndWFnZU5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSb2xlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUm9sZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5FZGl0QnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUm9sZVBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlSUQ6IHRoaXMuZW50aXR5LlJvbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZW50aXR5LlJvbGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlJvbGVcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUm9sZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtSb2xlUm93LkZpZWxkcy5Sb2xlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZVBlcm1pc3Npb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8Um9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25DaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUGVybWlzc2lvbkNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUGVybWlzc2lvbnMnKSwge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Jldm9rZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBSb2xlUGVybWlzc2lvblNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBSb2xlSUQ6IHRoaXMub3B0aW9ucy5yb2xlSUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzLm1hcCh4ID0+ICg8VXNlclBlcm1pc3Npb25Sb3c+eyBQZXJtaXNzaW9uS2V5OiB4IH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLmltcGxpY2l0UGVybWlzc2lvbnMgPSBRLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLkltcGxpY2l0UGVybWlzc2lvbnMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCk6IEpRdWVyeVVJLkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb2xlUGVybWlzc2lvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVJRDogdGhpcy5vcHRpb25zLnJvbGVJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLm1hcCh4ID0+IHguUGVybWlzc2lvbktleSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5TYXZlU3VjY2VzcycpKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuRGlhbG9nVGl0bGUnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy50aXRsZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBpZD1cIn5fUGVybWlzc2lvbnNcIj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgcm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVHJhbnNsYXRpb25HcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUcmFuc2xhdGlvbkl0ZW0sIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJLZXlcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRyYW5zbGF0aW9uU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFzQ2hhbmdlczogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIHNvdXJjZUxhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7IFxyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2tleXVwLicgKyB0aGlzLnVuaXF1ZU5hbWUgKyAnIGNoYW5nZS4nICsgdGhpcy51bmlxdWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0LmN1c3RvbS10ZXh0JywgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBRLnRyaW1Ub051bGwoJChlLnRhcmdldCkudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRJdGVtQnlJZCgkKGUudGFyZ2V0KS5kYXRhKCdrZXknKSkuQ3VzdG9tVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgbGV0IGRvbmU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3NvdXJjZS10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlNvdXJjZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uU291cmNlVGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCd0YXJnZXQtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlRhcmdldFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uVGFyZ2V0VGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW107XHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7IGZpZWxkOiAnS2V5Jywgd2lkdGg6IDMwMCwgc29ydGFibGU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnU291cmNlVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzb3VyY2UtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ0N1c3RvbVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxpbnB1dC8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2N1c3RvbS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBjdHgudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEta2V5JywgY3R4Lml0ZW0uS2V5KSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUYXJnZXRUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3RhcmdldC10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9wdDogU2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvb2t1cEtleTogJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNvdXJjZUxhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uVGFyZ2V0TGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlQ2hhbmdlcyhsYW5ndWFnZTogc3RyaW5nKTogUHJvbWlzZUxpa2U8YW55PiB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uc1tpdGVtLktleV0gPSBpdGVtLkN1c3RvbVRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoVHJhbnNsYXRpb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBUYXJnZXRMYW5ndWFnZUlEOiBsYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIFRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zXHJcbiAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSBRLnRyaW1Ub051bGwobGFuZ3VhZ2UpIHx8ICdpbnZhcmlhbnQnO1xyXG4gICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKCdVc2VyIHRyYW5zbGF0aW9ucyBpbiBcIicgKyBsYW5ndWFnZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJ1wiIGxhbmd1YWdlIGFyZSBzYXZlZCB0byBcInVzZXIudGV4dHMuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgKyAnLmpzb25cIiAnICsgJ2ZpbGUgdW5kZXIgXCJ+L0FwcF9EYXRhL3RleHRzL1wiJywgJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy52aWV3LnBhcmFtcztcclxuICAgICAgICAgICAgcmVxdWVzdC5Tb3VyY2VMYW5ndWFnZUlEID0gdGhpcy5zb3VyY2VMYW5ndWFnZS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZUtleSA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2UudmFsdWUgfHwgJyc7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuVGFyZ2V0TGFuZ3VhZ2VJRCA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIub25WaWV3U3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5TYXZlQ2hhbmdlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZSA9PiB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhcHBseS1jaGFuZ2VzLWJ1dHRvbidcclxuICAgICAgICAgICAgfV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAoZmllbGQsIHNlYXJjaFRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogVHJhbnNsYXRpb25JdGVtKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNkID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcztcclxuICAgICAgICAgICAgdmFyIHNlYXJjaGluZyA9IHNkKHRoaXMuc2VhcmNoVGV4dCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hdGNoKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoaW5nKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUS5pc0VtcHR5T3JOdWxsKHNlYXJjaGluZykgfHwgbWF0Y2goaXRlbS5LZXkpIHx8IG1hdGNoKGl0ZW0uU291cmNlVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoKGl0ZW0uVGFyZ2V0VGV4dCkgfHwgbWF0Y2goaXRlbS5DdXN0b21UZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1c2VQYWdlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8VXNlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBVc2VyRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXNBY3RpdmVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaXNBY3RpdmVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBVc2VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVXNlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBVc2VyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDcgY2hhcmFjdGVycyFcIjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlICE9IHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0udmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiVGhlIHBhc3N3b3JkcyBlbnRlcmVkIGRvZXNuJ3QgbWF0Y2ghXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRvb2xiYXJCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b25zID0gc3VwZXIuZ2V0VG9vbGJhckJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdTaXRlLlVzZXJEaWFsb2cuRWRpdFJvbGVzQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcm9sZXMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS11c2VycyB0ZXh0LWJsdWUnLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlclJvbGVEaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IHRoaXMuZW50aXR5LlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuZW50aXR5LlVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdTaXRlLlVzZXJEaWFsb2cuRWRpdFBlcm1pc3Npb25zQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlclBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IHRoaXMuZW50aXR5LlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuZW50aXR5LlVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbignZWRpdC1yb2xlcy1idXR0b24nKS50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhZnRlckxvYWRFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFmdGVyTG9hZEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhlc2UgZmllbGRzIGFyZSBvbmx5IHJlcXVpcmVkIGluIG5ldyByZWNvcmQgbW9kZVxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmQuZWxlbWVudC50b2dnbGVDbGFzcygncmVxdWlyZWQnLCB0aGlzLmlzTmV3KCkpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnc3VwJykudG9nZ2xlKHRoaXMuaXNOZXcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uZWxlbWVudC50b2dnbGVDbGFzcygncmVxdWlyZWQnLCB0aGlzLmlzTmV3KCkpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnc3VwJykudG9nZ2xlKHRoaXMuaXNOZXcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFVzZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5Vc2VyXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFVzZXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtVc2VyUm93LkZpZWxkcy5Vc2VybmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BdXRob3JpemF0aW9uIHtcclxuICAgIGV4cG9ydCBkZWNsYXJlIGxldCB1c2VyRGVmaW5pdGlvbjogU2NyaXB0VXNlckRlZmluaXRpb247XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dGhvcml6YXRpb24sICd1c2VyRGVmaW5pdGlvbicsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0UmVtb3RlRGF0YSgnVXNlckRhdGEnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbktleSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoW1NlcmVuaXR5LklHZXRFZGl0VmFsdWUsIFNlcmVuaXR5LklTZXRFZGl0VmFsdWVdKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25DaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkRhdGFHcmlkPFBlcm1pc3Npb25DaGVja0l0ZW0sIFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIktleVwiOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgYnlQYXJlbnRLZXk6IFEuR3JvdXBpbmc8UGVybWlzc2lvbkNoZWNrSXRlbT47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ6IFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlQnlLZXk6IFEuRGljdGlvbmFyeTxzdHJpbmc+ID0ge307XHJcbiAgICAgICAgICAgIGxldCBwZXJtaXNzaW9uS2V5cyA9IHRoaXMuZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcGVybWlzc2lvbktleXMubWFwKGtleSA9PiA8UGVybWlzc2lvbkNoZWNrSXRlbT57XHJcbiAgICAgICAgICAgICAgICBLZXk6IGtleSxcclxuICAgICAgICAgICAgICAgIFBhcmVudEtleTogdGhpcy5nZXRQYXJlbnRLZXkoa2V5KSxcclxuICAgICAgICAgICAgICAgIFRpdGxlOiB0aXRsZUJ5S2V5W2tleV0sXHJcbiAgICAgICAgICAgICAgICBHcmFudFJldm9rZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIElzR3JvdXA6IGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOidcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5UGFyZW50S2V5ID0gUS50b0dyb3VwaW5nKGl0ZW1zLCB4ID0+IHguUGFyZW50S2V5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGdyYW50OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKGl0ZW0uR3JhbnRSZXZva2UgPT09IGdyYW50KSA/ICcgY2hlY2tlZCcgOiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ZWQgPSBkZXNjLmZpbHRlcih4ID0+IHguR3JhbnRSZXZva2UgPT09IGdyYW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZ3JhbnRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlc2MubGVuZ3RoID09PSBncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkIHBhcnRpYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlT3JJbXBsaWNpdChrZXkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvbGVQZXJtaXNzaW9uc1trZXldKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHRoaXMuX3JvbGVQZXJtaXNzaW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXTtcclxuICAgICAgICAgICAgICAgIGlmIChkICYmIGRba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSBvZiBPYmplY3Qua2V5cyh0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLkdyYW50UmV2b2tlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzYyA9IHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhbnRDb3VudCA9IFEuY291bnQoZGVzYywgeCA9PiB4LkdyYW50UmV2b2tlID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHguR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KHguS2V5KSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSBkZXNjLmxlbmd0aCB8fCBkZXNjLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYWxsb3cnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkZW55JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3BhcnRpYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGl0ZW0uR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgIChpdGVtLkdyYW50UmV2b2tlID09IG51bGwgJiYgdGhpcy5yb2xlT3JJbXBsaWNpdChpdGVtLktleSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChncmFudGVkID8gJyBhbGxvdycgOiAnIGRlbnknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IFNsaWNrLkNvbHVtbltdIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5QZXJtaXNzaW9uJyksXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1RpdGxlJyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogU2VyZW5pdHkuU2xpY2tGb3JtYXR0aW5nLnRyZWVUb2dnbGUoKCkgPT4gdGhpcy52aWV3LCB4ID0+IHguS2V5LCBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzID0gdGhpcy5nZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImVmZmVjdGl2ZS1wZXJtaXNzaW9uICcgKyBrbGFzcyArICdcIj4nICsgUS5odG1sRW5jb2RlKGN0eC52YWx1ZSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OTUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkdyYW50JyksIGZpZWxkOiAnR3JhbnQnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrbGFzczEgPSB0aGlzLmdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW0xLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nY2hlY2stYm94IGdyYW50IG5vLWZsb2F0IFwiICsga2xhc3MxICsgXCInPjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FsaWduLWNlbnRlcidcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dSZXZva2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlJldm9rZScpLCBmaWVsZDogJ1Jldm9rZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMiA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImNoZWNrLWJveCByZXZva2Ugbm8tZmxvYXQgJyArIGtsYXNzMiArICdcIj48L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldEl0ZW1zKGl0ZW1zOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10pOiB2b2lkIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnNldEluZGVudHMoaXRlbXMsIHggPT4geC5LZXksIHggPT4geC5QYXJlbnRLZXksIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKGl0ZW1zLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci5maWx0ZXJCeUlkKGl0ZW0sIHRoaXMudmlldywgeCA9PiB4LlBhcmVudEtleSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaENvbnRhaW5zKGl0ZW0pIHx8IGl0ZW0uSXNHcm91cCAmJiBRLmFueSh0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIGZhbHNlKSwgeCA9PiB0aGlzLm1hdGNoQ29udGFpbnMoeCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbWF0Y2hDb250YWlucyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKGl0ZW0uVGl0bGUgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQpID49IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldERlc2NlbmRhbnRzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGV4Y2x1ZGVHcm91cHM6IGJvb2xlYW4pOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IHN0YWNrID0gW2l0ZW1dO1xyXG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuYnlQYXJlbnRLZXlbaS5LZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhjbHVkZUdyb3VwcyB8fCAhY2hpbGQuSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGUsIHJvdywgY2VsbCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci50b2dnbGVDbGljayhlLCByb3csIGNlbGwsIHRoaXMudmlldywgeCA9PiB4LktleSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ID0gdGFyZ2V0Lmhhc0NsYXNzKCdncmFudCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyYW50IHx8IHRhcmdldC5oYXNDbGFzcygncmV2b2tlJykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZE9yUGFydGlhbCA9IHRhcmdldC5oYXNDbGFzcygnY2hlY2tlZCcpIHx8IHRhcmdldC5oYXNDbGFzcygncGFydGlhbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkT3JQYXJ0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBncmFudCAhPT0gY2hlY2tlZE9yUGFydGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCBvZiB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuR3JhbnRSZXZva2UgPSBncmFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IGdyYW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpY2tHcmlkLmludmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRQYXJlbnRLZXkoa2V5KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOicpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS5zdWJzdHIoMCwga2V5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaWR4ID0ga2V5Lmxhc3RJbmRleE9mKCc6Jyk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgaWR4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS50cmltVG9OdWxsKHRleHQpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFNvcnRlZEdyb3VwQW5kUGVybWlzc2lvbktleXModGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4pOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gPHN0cmluZ1tdPlEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMnKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlV2l0aEdyb3VwID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdChzLmxlbmd0aCAtIDEpID09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBzLnN1YnN0cigwLCBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQnlLZXlbc10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUJ5S2V5W3NdID0gUS5jb2FsZXNjZShRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIHMpLCBzKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IHMuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgIGxldCBncm91cCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwVGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAgPSBncm91cCArIHBhcnRzW2ldICsgJzonO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHQgPSBRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gcGFydHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbZ3JvdXBdID0gdHh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVGl0bGUgPSBncm91cFRpdGxlICsgdGl0bGVCeUtleVtncm91cF0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVXaXRoR3JvdXBbZ3JvdXBdID0gZ3JvdXBUaXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtzXSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W3NdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModGl0bGVCeUtleSk7XHJcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLnNvcnQoKHgsIHkpID0+IFEudHVya2lzaExvY2FsZUNvbXBhcmUodGl0bGVXaXRoR3JvdXBbeF0sIHRpdGxlV2l0aEdyb3VwW3ldKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ga2V5cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCB2YWx1ZSgpOiBVc2VyUGVybWlzc2lvblJvd1tdIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFVzZXJQZXJtaXNzaW9uUm93W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLkdyYW50UmV2b2tlICE9IG51bGwgJiYgaXRlbS5LZXkuY2hhckF0KGl0ZW0uS2V5Lmxlbmd0aCAtIDEpICE9ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgUGVybWlzc2lvbktleTogaXRlbS5LZXksIEdyYW50ZWQ6IGl0ZW0uR3JhbnRSZXZva2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgdmFsdWUodmFsdWU6IFVzZXJQZXJtaXNzaW9uUm93W10pIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uR3JhbnRSZXZva2UgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93IG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQocm93LlBlcm1pc3Npb25LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuR3JhbnRSZXZva2UgPSBRLmNvYWxlc2NlKHJvdy5HcmFudGVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRJdGVtcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3JvbGVQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PGJvb2xlYW4+ID0ge307XHJcblxyXG4gICAgICAgIGdldCByb2xlUGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCByb2xlUGVybWlzc2lvbnModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvbGVQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrIG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zW2tdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaW1wbGljaXRQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PFEuRGljdGlvbmFyeTxib29sZWFuPj4gPSB7fTtcclxuXHJcbiAgICAgICAgc2V0IGltcGxpY2l0UGVybWlzc2lvbnModmFsdWU6IFEuRGljdGlvbmFyeTxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gdmFsdWVba107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBvZiBsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXVtzXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucyB7XHJcbiAgICAgICAgc2hvd1Jldm9rZT86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tJdGVtIHtcclxuICAgICAgICBQYXJlbnRLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIElzR3JvdXA/OiBib29sZWFuO1xyXG4gICAgICAgIEdyYW50UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJQZXJtaXNzaW9uRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogVXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFBlcm1pc3Npb25DaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1Blcm1pc3Npb25zJyksIHtcclxuICAgICAgICAgICAgICAgIHNob3dSZXZva2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5MaXN0Um9sZVBlcm1pc3Npb25zKHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5yb2xlUGVybWlzc2lvbnMgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLmltcGxpY2l0UGVybWlzc2lvbnMgPSBRLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLkltcGxpY2l0UGVybWlzc2lvbnMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCk6IEpRdWVyeVVJLkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdidG4gYnRuLXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuQ2hlY2tUcmVlRWRpdG9yPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55PiwgYW55PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkaXY6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihkaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCkge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyh0ZXh0IHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRyZWVJdGVtcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJvbGVSb3cuZ2V0TG9va3VwKCkuaXRlbXMubWFwKHJvbGUgPT4gPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55Pj57XHJcbiAgICAgICAgICAgICAgICBpZDogcm9sZS5Sb2xlSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJvbGUuUm9sZU5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSAmJlxyXG4gICAgICAgICAgICAgICAgKFEuaXNFbXB0eU9yTnVsbCh0aGlzLnNlYXJjaFRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhpdGVtLnRleHQgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0KSA+PSAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUm9sZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUm9sZURpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUm9sZUNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJSb2xlRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBSb2xlQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdSb2xlcycpKTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJSb2xlU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4geC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW3tcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdidG4gYnRuLXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBRLnNlcnZpY2VSZXF1ZXN0KCdBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9sZXM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUubWFwKHggPT4gcGFyc2VJbnQoeCwgMTApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLlNhdmVTdWNjZXNzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLkRpYWxvZ1RpdGxlJyksIHRoaXMub3B0aW9ucy51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxkaXYgaWQ9J35fUm9sZXMnPjwvZGl2PlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgdXNlcklEOiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuTGFuZ3VhZ2VMaXN0IHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0OiBzdHJpbmdbXVtdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgayBvZiBBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy5nZXRMb29rdXAoKS5pdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoay5MYW5ndWFnZUlkICE9PSAnZW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChbay5JZC50b1N0cmluZygpLCBrLkxhbmd1YWdlTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbi9IZWxwZXJzL0xhbmd1YWdlTGlzdC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLlNjcmlwdEluaXRpYWxpemF0aW9uIHtcclxuICAgIFEuQ29uZmlnLnJlc3BvbnNpdmVEaWFsb2dzID0gdHJ1ZTtcclxuICAgIFEuQ29uZmlnLnJvb3ROYW1lc3BhY2VzLnB1c2goJ1NlcmVuaXR5TW92aWVEYXRhYmFzZScpO1xyXG4gICAgU2VyZW5pdHkuRW50aXR5RGlhbG9nLmRlZmF1bHRMYW5ndWFnZUxpc3QgPSBMYW5ndWFnZUxpc3QuZ2V0VmFsdWU7XHJcbiAgICBTZXJlbml0eS5IdG1sQ29udGVudEVkaXRvci5DS0VkaXRvckJhc2VQYXRoID0gXCJ+L1NlcmVuaXR5LkFzc2V0cy9TY3JpcHRzL2NrZWRpdG9yL1wiO1xyXG5cclxuICAgIGlmICgkLmZuWydjb2xvcmJveCddKSB7XHJcbiAgICAgICAgJC5mblsnY29sb3Jib3gnXS5zZXR0aW5ncy5tYXhXaWR0aCA9IFwiOTUlXCI7XHJcbiAgICAgICAgJC5mblsnY29sb3Jib3gnXS5zZXR0aW5ncy5tYXhIZWlnaHQgPSBcIjk1JVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmVycm9yID0gUS5FcnJvckhhbmRsaW5nLnJ1bnRpbWVFcnJvckhhbmRsZXI7XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgU2lkZWJhclNlYXJjaCBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxhbnk+IHtcclxuICAgICAgICBwcml2YXRlIG1lbnVVTDogSlF1ZXJ5O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihpbnB1dDogSlF1ZXJ5LCBtZW51VUw6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihpbnB1dCk7XHJcblxyXG4gICAgICAgICAgICBuZXcgU2VyZW5pdHkuUXVpY2tTZWFyY2hJbnB1dChpbnB1dCwge1xyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g6IChmaWVsZCwgdGV4dCwgc3VjY2VzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWF0Y2hGbGFncyh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWVudVVMID0gbWVudVVMO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZU1hdGNoRmxhZ3ModGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBsaUxpc3QgPSB0aGlzLm1lbnVVTC5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHRleHQgPSBRLnRyaW1Ub051bGwodGV4dCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3Quc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFydHMgPSB0ZXh0LnJlcGxhY2UoJywnLCAnICcpLnNwbGl0KCcgJykuZmlsdGVyKHggPT4gIVEuaXNUcmltbWVkRW1wdHkoeCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBRLnRyaW1Ub051bGwoU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhwYXJ0c1tpXSkudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IGxpTGlzdDtcclxuICAgICAgICAgICAgaXRlbXMuZWFjaChmdW5jdGlvbiAoaWR4LCBlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9ICQoZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKFEuY29hbGVzY2UoeC50ZXh0KCksICcnKS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgb2YgcGFydHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocCAhPSBudWxsICYmICEodGl0bGUuaW5kZXhPZihwKSAhPT0gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHguYWRkQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hdGNoaW5nSXRlbXMgPSBpdGVtcy5ub3QoJy5ub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2aXNpYmxlcyA9IG1hdGNoaW5nSXRlbXMucGFyZW50cygnbGknKS5hZGQobWF0Y2hpbmdJdGVtcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbm9uVmlzaWJsZXMgPSBsaUxpc3Qubm90KHZpc2libGVzKTtcclxuICAgICAgICAgICAgbm9uVmlzaWJsZXMuaGlkZSgpLmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHZpc2libGVzLnNob3coKTtcclxuICAgICAgICAgICAgbGlMaXN0LmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEdlbnJlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEdlbnJlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEdlbnJlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBHZW5yZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEdlbnJlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBHZW5yZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEdlbnJlU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBHZW5yZVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBHZW5yZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBHZW5yZVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEdlbnJlRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBHZW5yZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEdlbnJlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEdlbnJlQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBHZW5yZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gR2VucmVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gR2VucmVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBHZW5yZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEdlbnJlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckZvcm1hdHRlcigpXHJcbiAgICBleHBvcnQgY2xhc3MgR2VucmVMaXN0Rm9ybWF0dGVyIGltcGxlbWVudHMgU2xpY2suRm9ybWF0dGVyIHtcclxuICAgICAgICBmb3JtYXQoY3R4OiBTbGljay5Gb3JtYXR0ZXJDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGxldCBpZExpc3QgPSBjdHgudmFsdWUgYXMgbnVtYmVyW107XHJcbiAgICAgICAgICAgIGlmICghaWRMaXN0IHx8ICFpZExpc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgYnlJZCA9IEdlbnJlUm93LmdldExvb2t1cCgpLml0ZW1CeUlkO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlkTGlzdC5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZyA9IGJ5SWRbeF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5odG1sRW5jb2RlKGcuTmFtZSk7XHJcbiAgICAgICAgICAgIH0pLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxNb3ZpZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBNb3ZpZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTW92aWVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNb3ZpZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTW92aWVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBNb3ZpZVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gTW92aWVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gTW92aWVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gTW92aWVSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBNb3ZpZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuRGVmYXVsdCB7XHJcblxyXG4gICAgaW1wb3J0IGZsZCA9IE1vdmllUm93LkZpZWxkcztcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPE1vdmllUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIE1vdmllQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBNb3ZpZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTW92aWVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gTW92aWVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNb3ZpZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE1vdmllU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0UXVpY2tTZWFyY2hGaWVsZHMoKTogU2VyZW5pdHkuUXVpY2tTZWFyY2hGaWVsZFtdIHtcclxuICAgICAgICAgICAgY29uc3QgdHh0ID0gKHMpID0+XHJcbiAgICAgICAgICAgICAgICBRLnRleHQoYERiLiR7TW92aWVSb3cubG9jYWxUZXh0UHJlZml4fS4ke3N9YCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwiXCIsIHRpdGxlOiBcImFsbFwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IGZsZC5EZXNjcmlwdGlvbiwgdGl0bGU6IHR4dChmbGQuRGVzY3JpcHRpb24pIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IGZsZC5TdG9yeWxpbmUsIHRpdGxlOiB0eHQoZmxkLlN0b3J5bGluZSkgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogZmxkLlllYXIsIHRpdGxlOiB0eHQoZmxkLlllYXIpIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUNhc3RFZGl0RGlhbG9nIGV4dGVuZHNcclxuICAgICAgICBTZXJlbml0eS5FeHRlbnNpb25zLkdyaWRFZGl0b3JEaWFsb2c8TW92aWVDYXN0Um93PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBNb3ZpZUNhc3RGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTW92aWVDYXN0Um93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNb3ZpZUNhc3RSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtOiBNb3ZpZUNhc3RGb3JtID0gbmV3IE1vdmllQ2FzdEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBNb3ZpZUNhc3RFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5FeHRlbnNpb25zLkdyaWRFZGl0b3JCYXNlPE1vdmllQ2FzdFJvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJEZWZhdWx0Lk1vdmllQ2FzdFwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBNb3ZpZUNhc3RFZGl0RGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1vdmllQ2FzdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRBZGRCdXR0b25DYXB0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJBZGRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0ZUVudGl0eShyb3c6IE1vdmllQ2FzdFJvdywgaWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLnZhbGlkYXRlRW50aXR5KHJvdywgaWQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgcm93LlBlcnNvbkZ1bGxuYW1lID0gUGVyc29uUm93LmdldExvb2t1cCgpXHJcbiAgICAgICAgICAgICAgICAuaXRlbUJ5SWRbcm93LlBlcnNvbklkXS5GdWxsbmFtZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygnU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkRlZmF1bHQuUGVyc29uRGlhbG9nJylcclxuICAgIGV4cG9ydCBjbGFzcyBQZXJzb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UGVyc29uUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFBlcnNvbkZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUGVyc29uUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUGVyc29uUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBQZXJzb25Sb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQZXJzb25TZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFBlcnNvblJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQZXJzb25Sb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUGVyc29uUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUGVyc29uRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuICAgICAgICBwcml2YXRlIG1vdmllc0dyaWQ6IFBlcnNvbk1vdmllR3JpZDtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vdmllc0dyaWQgPSBuZXcgUGVyc29uTW92aWVHcmlkKHRoaXMuYnlJZChcIk1vdmllc0dyaWRcIikpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYnMub24oJ3RhYnNhY3RpdmF0ZScsIChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycmFuZ2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBpZD1cIn5fVGFic1wiIGNsYXNzPVwicy1EaWFsb2dDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI35fVGFiSW5mb1wiPjxzcGFuPlBlcnNvbjwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI35fVGFiTW92aWVzXCI+PHNwYW4+TW92aWVzPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwifl9UYWJJbmZvXCIgY2xhc3M9XCJ0YWItcGFuZSBzLVRhYkluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ+X1Rvb2xiYXJcIiBjbGFzcz1cInMtRGlhbG9nVG9vbGJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicy1Gb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwifl9Qcm9wZXJ0eUdyaWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ+X1RhYk1vdmllc1wiIGNsYXNzPVwidGFiLXBhbmUgcy1UYWJNb3ZpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ+X01vdmllc0dyaWRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhZnRlckxvYWRFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFmdGVyTG9hZEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3ZpZXNHcmlkLnBlcnNvbklEID0gdGhpcy5lbnRpdHlJZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoJ1NlcmVuaXR5TW92aWVEYXRhYmFzZS5EZWZhdWx0LlBlcnNvbkdyaWQnKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBlcnNvbkdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFBlcnNvblJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBQZXJzb25Db2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFBlcnNvbkRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUGVyc29uUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFBlcnNvblJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFBlcnNvblJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFBlcnNvblNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUGVyc29uTW92aWVHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxNb3ZpZUNhc3RSb3csIGFueT5cclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiRGVmYXVsdC5QZXJzb25Nb3ZpZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBNb3ZpZUNhc3RSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNb3ZpZUNhc3RSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBNb3ZpZUNhc3RTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbml0aWFsVGl0bGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVzZVBhZ2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0R3JpZENhbkxvYWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBlcnNvbklEICE9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9wZXJzb25JRDogbnVtYmVyO1xyXG5cclxuICAgICAgICBnZXQgcGVyc29uSUQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wZXJzb25JRDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBwZXJzb25JRCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wZXJzb25JRCAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGVyc29uSUQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXF1YWxpdHkoTW92aWVDYXN0Um93LkZpZWxkcy5QZXJzb25JZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5pdHlNb3ZpZURhdGFiYXNlLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExvZ2luUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPExvZ2luUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTG9naW5Gb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnTG9naW5CdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvUmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yLkNvZGUgPT0gXCJSZWRpcmVjdFVzZXJUb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLkVycm9yLkFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IgIT0gbnVsbCAmJiAhUS5pc0VtcHR5T3JOdWxsKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeUVycm9yKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI1Bhc3N3b3JkJykuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuRXJyb3JIYW5kbGluZy5zaG93U2VydmljZUVycm9yKHJlc3BvbnNlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVkaXJlY3RUb1JldHVyblVybCgpIHtcclxuICAgICAgICAgICAgdmFyIHEgPSBRLnBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIHJldHVyblVybCA9IHFbJ3JldHVyblVybCddIHx8IHFbJ1JldHVyblVybCddO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuVXJsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc2ggIT0gbnVsbCAmJiBoYXNoICE9ICcjJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5VcmwgKz0gaGFzaDtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmV0dXJuVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHAtNFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHtRLnJlc29sdmVVcmwoXCJ+L0NvbnRlbnQvc2l0ZS9pbWFnZXMvc2VyZW5pdHktbG9nby13LTEyOC5wbmdcIil9XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBwLTFcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHZhcigtLXMtc2lkZWJhci1iYW5kLWJnKVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIC8+IFNlcmVuaXR5TW92aWVEYXRhYmFzZVxyXG4gICAgPC9oMj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicy1QYW5lbCBwLTRcIj5cclxuICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS00XCI+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLkxvZ2luVG9Zb3VyQWNjb3VudFwiKX08L2g1PlxyXG4gICAgICAgIDxmb3JtIGlkPVwifl9Gb3JtXCIgYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ+X1Byb3BlcnR5R3JpZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmxvYXQtZW5kIHRleHQtZGVjb3JhdGlvbi1ub25lXCIgaHJlZj1cIiR7US5yZXNvbHZlVXJsKCd+L0FjY291bnQvRm9yZ290UGFzc3dvcmQnKX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uRm9yZ290UGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ+X0xvZ2luQnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG15LTMgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uU2lnbkluQnV0dG9uXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZVwiIGhyZWY9XCIke1EucmVzb2x2ZVVybCgnfi9BY2NvdW50L1NpZ25VcCcpfVwiPiR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5TaWduVXBCdXR0b25cIil9PC9hPlxyXG4gICAgPC9kaXY+ICAgXHJcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxDaGFuZ2VQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENoYW5nZVBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogQ2hhbmdlUGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IENoYW5nZVBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5OZXdQYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS53KCdDb25maXJtUGFzc3dvcmQnLCBTZXJlbml0eS5QYXNzd29yZEVkaXRvcikudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9DaGFuZ2VQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJzLVBhbmVsXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJwYWdlLXRpdGxlIG1iLTQgdGV4dC1jZW50ZXJcIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuRm9ybVRpdGxlXCIpfTwvaDM+XHJcbiAgICA8Zm9ybSBpZD1cIn5fRm9ybVwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ+X1Byb3BlcnR5R3JpZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZCBtdC00XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ+X1N1Ym1pdEJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Ym1pdEJ1dHRvblwiKX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuaXR5TW92aWVEYXRhYmFzZS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxGb3Jnb3RQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEZvcmdvdFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogRm9yZ290UGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcmdvdFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxSZXNldFBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUmVzZXRQYXNzd29yZEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IFJlc2V0UGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IFJlc2V0UGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS5mb3JtYXQoUS50ZXh0KCdWYWxpZGF0aW9uLk1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGgnKSwgNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5OZXdQYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuVG9rZW4gPSB0aGlzLmJ5SWQoJ1Rva2VuJykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L1Jlc2V0UGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Mb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbml0eU1vdmllRGF0YWJhc2UuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFNpZ25VcFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNpZ25VcEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IFNpZ25VcEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgU2lnblVwRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtRW1haWwuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybUVtYWlsLnZhbHVlICE9PSB0aGlzLmZvcm0uRW1haWwudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLkVtYWlsQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNwbGF5TmFtZTogdGhpcy5mb3JtLkRpc3BsYXlOYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDogdGhpcy5mb3JtLkVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDogdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuU2lnblVwLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19