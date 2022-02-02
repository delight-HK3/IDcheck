<?php
class Id_check_m extends CI_Model {
    public function searchid($uid){
        $sql = "select * from <테이블이름> where <컬럼> like '$uid'"; //1
        $query = $this->db->query($sql); //2
        if( $query->num_rows() > 0 ){ //아이디 중복
            return "no";
        } else { //아이디 중복없음
            return "ok"; 
        }
    }
}