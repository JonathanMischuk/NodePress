function AdminCategoriesNewService (
    AdminCategoriesAPIService,
    $location,
    $rootScope
) {
    var sv = {};

    sv.category = {};
    sv.pages = null;
    sv.errorTitle = null;
    sv.errors = require('../errors/admin.client.categories.errors');

    sv.setPages = setPages;
    sv.newCategory = newCategory;

    function setPages (pages) {
        sv.pages = pages;
    }

    function newCategory () {
        console.log(sv.category.children);

        var Category = new AdminCategoriesAPIService({
            title: sv.category.title,
            createdBy: $rootScope.np.auth.user.username,
            description: sv.category.description,
            children: sv.category.children,
            slug: sv.category.slug
        });

        Category.$save()
            .then(function (category) {
                $location.path('/categories/' + category._id);
            })
            .catch(function (error) {
                sv.errorTitle = error.data.errors.title;
            });
    }
    
    return sv;
}

AdminCategoriesNewService.$inject = [
    'AdminCategoriesAPIService',
    '$location',
    '$rootScope'
];

module.exports = angular.module('categories')
    .factory('AdminCategoriesNewService', AdminCategoriesNewService);
