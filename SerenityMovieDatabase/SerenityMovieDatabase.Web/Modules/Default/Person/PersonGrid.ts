namespace SerenityMovieDatabase.Default {

    @Serenity.Decorators.registerClass('SerenityMovieDatabase.Default.PersonGrid')
    export class PersonGrid extends Serenity.EntityGrid<PersonRow, any> {
        protected getColumnsKey() { return PersonColumns.columnsKey; }
        protected getDialogType() { return PersonDialog; }
        protected getIdProperty() { return PersonRow.idProperty; }
        protected getInsertPermission() { return PersonRow.insertPermission; }
        protected getLocalTextPrefix() { return PersonRow.localTextPrefix; }
        protected getService() { return PersonService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}