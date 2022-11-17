/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace SerenityMovieDatabase.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('SerenityMovieDatabase');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
    Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";

    if ($.fn['colorbox']) {
        $.fn['colorbox'].settings.maxWidth = "95%";
        $.fn['colorbox'].settings.maxHeight = "95%";
    }

    window.onerror = Q.ErrorHandling.runtimeErrorHandler;
}