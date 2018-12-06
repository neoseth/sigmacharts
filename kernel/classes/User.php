<?php
class User {

    private $password;
    private $login;

    function User() {
    }
    function populate($login, $password) {
        $str = file_get_contents('http://sigmacharts.000webhostapp.com/data/users.json');
        $json = json_decode($str, true);
        foreach ($json as $field => $value) {
            $this_user = $json[0];
            if ($login === $this_user['login'] && password_verify($password, $this_user['password'])) {
                return true;
            }
        }
        return false;
    }
}
