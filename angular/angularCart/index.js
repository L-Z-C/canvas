/**
 * Created by Liulc on 2016/8/27.
 */
var app = angular.module('Cart',[]);
app.controller('cartController',function($scope){
    $scope.cart = [
        {
            id:1000,
            name:'篮球',
            quantity:3,
            price:4300
        },
        {
            id:3300,
            name:'足球',
            quantity:30,
            price:3300
        },
        {
            id:232,
            name:'乒乓球',
            quantity:4,
            price:23000
        },
        {
            id:1100,
            name:'排球',
            quantity:5,
            price:6906
        },
        {
            id:1200,
            name:'棒球',
            quantity:25,
            price:5900
        },
        {
            id:1140,
            name:'悠悠球',
            quantity:15,
            price:5800
        }
    ];

    $scope.totalPrice = function(){
        var total = 0;
        angular.forEach($scope.cart,function(item){
            total += parseInt(item.price) * parseInt(item.quantity);
        });
        return total;
    };
    $scope.totalQuantity = function(){
        var total = 0;
        angular.forEach($scope.cart,function(item){
            total += parseInt(item.quantity);
        });
        return total;
    };
    $scope.remove = function(id){
        var index = findIndex(id);
        if (index !== -1){
            $scope.cart.splice(index,1);
        }
    };
    var findIndex = function(id){
        var index = -1;
        angular.forEach($scope.cart,function(item,key){
            if (item.id === id){
                index = key;
                return;
            }
        });
        return index;
    };
    $scope.add = function(id){
        var index = findIndex(id);
        if (index !== -1){
            ++$scope.cart[index].quantity;
        }
    };
    $scope.reduce = function(id){
        var index = findIndex(id);
        if (index !== -1){
            var item = $scope.cart[index];
            if (item.quantity > 1){
                --item.quantity;
            }else {
                var returnKey = confirm('是否从该购物车删除该产品!');
                if (returnKey){
                    $scope.remove(id);
                }
            }
        }
    };
    $scope.$watch('cart',function(newValue,oldValue){
        angular.forEach(newValue,function(item,key){
            if (item.quantity < 1){
                var returnKey = confirm('是否从该购物车删除该产品!');
                if (returnKey){
                    $scope.remove(item.id);
                }else {
                    item.quantity = oldValue[key].quantity;
                }
            }
        });
    },true);
});