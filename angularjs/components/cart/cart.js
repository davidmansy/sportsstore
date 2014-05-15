angular.module('cart', [])
.factory('cart', function() {
  var cartData = [];

  return {
    addProduct: function(id, name, price) {
      var addedToExistingItem = false;
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id === id) {
          addedToExistingItem = true;
          cartData[i].count++;
          break;
        }
      }
      if (!addedToExistingItem) {
        cartData.push({
          count:1,
          id: id,
          name: name,
          price: price
        });
      }
    },

    removeProduct: function(id) {
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id == id) {
          cartData.splice(i, 1);
          break;
        }
      }
    },

    getProducts: function() {
      return cartData;
    }
  };
})
.directive('cartSummary', function(cart) {
  return {
    restrict: 'E',
    templateUrl: 'components/cart/cartSummary.html',
    controller: function($scope) {
      var cartData = cart.getProducts();

      $scope.total = function() {
        var total = 0;
        for (var i = 0; i < cartData.length; i++) {
          total += (cartData[i].count * cartData[i].price);
        }
        return total;
      };

      $scope.itemCount = function() {
        var total = 0;
        for (var i = 0; i < cartData.length; i++) {
          total += cartData[i].count;
        }
        return total;
      };
    }

  };
});




















