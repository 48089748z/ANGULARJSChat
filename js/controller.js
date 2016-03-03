app.controller("myTwitter", ["$scope", "chatMessages",
    // Enviamos nuestr chatMessages al controller
    function($scope, chatMessages) {
        $scope.username = "DefaultUser";
        $scope.messages = chatMessages;
        $scope.addMessage = function()
        {
            $scope.messages.$add({
                user: $scope.username,
                text: $scope.message
            });
            $scope.message = ""; //UN COP ENVIAT EL MISATGE TORNEM A POSAR EL SCOPE BUIT
        };
    }
]);

app.factory("chatMessages", ["$firebaseArray",
    function($firebaseArray)
    {
        var ref = new Firebase("https://angularjstwitter.firebaseio.com/"); //REFERENCIA AL MEU FIREBASE PER GUARDAR ELS MISATGES
        return $firebaseArray(ref);
    }
]);

