app.controller("myController", ["$scope", "firebaseMessages",
    function($scope, firebaseMessages) {
        $scope.user = ""; //USUARI PER DEFECTE
        $scope.message=""; //MISSATGE PER DEFECTE
        $scope.messages = firebaseMessages; //SINCRONITZEM AMB FIREBASE
        $scope.messagesSee = $scope.messages;

        $scope.addMessages = function() {
            $scope.messages.$add({
                user: $scope.user,
                text: $scope.message
            });
        };

        $scope.showFollowing = function () { //MOSTRARA NOMES ELS TWEETS DE QUI VOLGUEM SEGUIR
            if($scope.following != "") {
                $scope.messagesSee = [];
                for (var i = 0; i < $scope.messages.length; i++) {
                    if ($scope.messages[i].user == $scope.following) {
                        $scope.messagesSee.push({
                            user: $scope.messages[i].user,
                            text: $scope.messages[i].text
                        });
                    }
                }
            }
            else
            {
                $scope.messagesSee = firebaseMessages;
            }
        }
    }
]);

//FUNCIO PER AGAFAR EL ARRAY DE MISSATGES GUARDATS AL FIREBASE
app.factory("firebaseMessages", ["$firebaseArray",
    function($firebaseArray) {
        var ref = new Firebase("https://angularjstwitter.firebaseio.com/");
        return $firebaseArray(ref);
    }
]);