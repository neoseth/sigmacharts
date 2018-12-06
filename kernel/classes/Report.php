<?php
class Report {

    private $password;
    private $login;

    function Report() {
    }
    function populate($name) {
        $str = list_all_str();
        $json = json_decode($str, true);
        foreach ($json as $field => $value) {
            $this_report = $json[0];
            if ($name === $this_report['name']) {
                return true;
            }
        }
        return false;
    }
    public static function list_all_str() {
        $str = file_get_contents('http://sigmacharts.000webhostapp.com/data/reports.json');
        return $str;
    }
}
