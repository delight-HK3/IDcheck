<?php
class Id_check extends CI_Controller {
	function __construct(){
        	parent::__construct();
        	$this->load->database(); //DB 연결   
        	$this->load->model("id_check_m "); //model id_check_m 연결  
	}
    public function index(){
		$this->load->view("id_check_view");
	}
	public function check_id(){
		$uid=$this->input->post("uid",TRUE); 
        	// Script에서 data이름이 uid인 value값을 $uid 변수에 저장합니다.
		$rerult = $this->id_check_m->searchid($uid); 
        	// clientmember_m.php 파일에 있는 searchid 함수에 쿼리를 실행하여 나온 결괏값을 $result변수에 저장합니다.
		$returnArray['responseText'] = $result; 
        	// $returnArray ['responseText'] 배열에 해당되어있는 값을 가진 $result변수를 배열 형태로 저장시킵니다. 
		echo json_encode($returnArray); 
        	// echo json_encode($returnArray) 는 DB에서 가져온 데이터를 JSON형태로 인코딩하여 
            	// 다시 스크립트에 리턴 시키기 위해 반드시 해야 하는 작업입니다.
	}
}
?>
