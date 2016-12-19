function AdminCategoriesListService () {
    var sv = {};

    sv.categories = null;
    sv.selectedCategory = null;

    sv.removeCategory = removeCategory;
    sv.setCategories = setCategories;
    sv.setSelectedCategory = setSelectedCategory;

    function setCategories (categories) {
        sv.categories = categories;
    }

    function setSelectedCategory (category) {
        sv.selectedCategory = category;
    }

    function removeCategory() {
        var index = sv.categories.indexOf(sv.selectedCategory);

        sv.selectedCategory.$remove(function () {
            sv.categories.splice(index, 1);
            sv.selectedCategory = null;

            // display success dialog
            Materialize.toast(
                'Category removed successfully',
                4000,
                'success'
            );
        });
    }
    
    return sv;
}

AdminCategoriesListService.$inject = [];

module.exports = angular.module('categories')
    .factory('AdminCategoriesListService', AdminCategoriesListService);
