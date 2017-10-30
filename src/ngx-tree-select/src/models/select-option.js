var SelectOption = /** @class */ (function () {
    function SelectOption() {
        this.idProperty = 'id';
        this.textProperty = 'text';
        this.childProperty = null;
        this.allowMultiple = false;
        this.closeOnSelection = true;
        this.items = [];
        this.isOpen = false;
        this.filter = '';
        this.filterCaseSensitive = false;
        this.allowParentSelection = false;
    }
    SelectOption.prototype.isHierarchy = function () {
        return this.childProperty && this.childProperty.trim().length > 0;
    };
    SelectOption.prototype.displayCheckbox = function () {
        return this.allowMultiple && this.isHierarchy();
    };
    SelectOption.prototype.isValid = function () {
        // Check id property value
        return this.idProperty && this.idProperty.trim().length > 0 &&
            // Check text property value
            this.textProperty && this.textProperty.trim().length > 0 &&
            // Check items value
            this.items && Array.isArray(this.items) && this.items.length > 0;
    };
    return SelectOption;
}());
export { SelectOption };
//# sourceMappingURL=select-option.js.map