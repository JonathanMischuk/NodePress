function AdminCategoriesUpdateService (
    AdminUtilitiesServices,
    $rootScope
) {
    var sv = {};

    sv.pages = null;
    sv.category = null;
    sv.errors = require('../errors/admin.client.categories.errors');

    sv.setPages = setPages;
    sv.setCategory = setCategory;
    sv.updateCategory = updateCategory;
    sv.getCategoryChildrenName = getCategoryChildrenName;
    sv.isSelected = isSelected;

    function setPages (pages) {
        sv.pages = pages;
    }

    function setCategory (category) {
        sv.category = category;
    }

    function getCategoryChildrenName (category) {
        return category.children.map(function (category) {
            return category.slug;
        });
    }

    function isSelected () {
        return true;
    }

    function updateCategory () {
        var date = AdminUtilitiesServices.createHumanReadableDate();

        sv.category.modifiedBy = $rootScope.np.auth.user.username;
        sv.category.modifiedDate = date;

        // sv.category.$update()
        //     .then(function () {
        //
        //         // display success dialog
        //         Materialize.toast(
        //             'Category updated successfully',
        //             4000,
        //             'success'
        //         );
        //     })
        //     .catch(function (error) {
        //         sv.errorTitle = error;
        //     });
    }
    
    return sv;
}

AdminCategoriesUpdateService.$inject = [
    'AdminUtilitiesServices',
    '$rootScope'
];

module.exports = angular.module('categories')
    .factory('AdminCategoriesUpdateService', AdminCategoriesUpdateService);
