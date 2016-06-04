var components = require('../components/components');

exports.componentsSortedByOrderProperty = componentsSortedByOrderProperty;
exports.componentsFilteredByRole = componentsFilteredByRole;

function componentsSortedByOrderProperty () {

    // sort component objects in array by 'order'
    // property number value
    return components.sort(function (a, b) {
        if (a.order > b.order) return 1;
        if (a.order < b.order) return -1;

        return 0;
    });
}

function componentsFilteredByRole (user) {
    
    // filter component objects from returned
    // array by 'role' property value matching
    return componentsSortedByOrderProperty().filter(function (component) {
        if (user) return component.roles.indexOf(user.role) !== -1;

        return [];
    });
}