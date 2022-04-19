<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

class Id_check_m extends CI_Model {
    public function searchid($uid){
        $sql = "select * from <테이블이름> where <컬럼> like '$uid'"; // $sql에 sql문을 입력합니다.
        $query = $this->db->query($sql); //쿼리문을 실행한 결과를 $query변수에 저장시킵니다.
        if( $query->num_rows() > 0 ){ //아이디 중복
            return "no";
        } else { //아이디 중복없음
            return "ok"; 
        }
    }
}
