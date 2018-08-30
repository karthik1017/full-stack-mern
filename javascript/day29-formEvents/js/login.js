var formHandle = document.getElementById('loginform');

        var usernameHandle = document.getElementById('username');
        var usernameErrorHandle = document.getElementById('usernameError');

        var passwordHandle = document.getElementById('password');
        var passwordErrorHandle = document.getElementById('passwordError');

        var hasErrors = {
            username: true,
            password: true
        }
        
        var showHandle = document.getElementById('show');
        
        showHandle.addEventListener('mouseover',function(){
          passwordHandle.setAttribute('type','text');
        },false);

        showHandle.addEventListener('mouseout',function(){
            passwordHandle.setAttribute('type','password');
          },false);
        
        function validateUsername() {
            if(usernameHandle.value === '') {
                usernameErrorHandle.innerHTML = 'username cannot be empty';
                hasErrors.username = true;
            } else {
                usernameErrorHandle.innerHTML = '';
                hasErrors.username = false;
            }
        }

        function validatePassword() {
            if(passwordHandle.value === '') {
                passwordErrorHandle.innerHTML = 'Password is required';
                hasErrors.password = true;
            } else if (passwordHandle.value.length < 8 || passwordErrorHandle.value.length > 128) {
                passwordErrorHandle.innerHTML = 'Password must be of the length between 8 to 128 characters';
                hasErrors.password = true;
            } else {
                passwordErrorHandle.innerHTML = '';
                hasErrors.password = false;
            }
        }

        formHandle.addEventListener('submit', function(e){
            // e.preventDefault();
            validatePassword();
            validateUsername();
            console.log(hasErrors);
            if(Object.values(hasErrors).includes(true)){
                e.preventDefault();
            }
        }, false);