app.controller("myController", ["$scope", "firebaseMessages",
    function($scope, firebaseMessages) {
        $scope.user = "";
        $scope.messages = firebaseMessages; //SINCRONITZEM AMB FIREBASE

        $scope.addMessage = function() { //METODE PER AFEGIR MISATGES
            $scope.messages.$add({
                user: $scope.user,
                text: $scope.message
            });
            $scope.message = ""; //FIQUEM EL SCOPE BUIT DESPRES D'ENVIAR UN MISATGE
        };
    }
]);

//FUNCIO PER AGAFAR EL ARRAY DE MISSATGES GUARDATS AL FIREBASE
app.factory("firebaseMessages", ["$firebaseArray",
    function($firebaseArray) {
        var ref = new Firebase("https://angularjstwitter.firebaseio.com/");
        return $firebaseArray(ref);
    }
]);