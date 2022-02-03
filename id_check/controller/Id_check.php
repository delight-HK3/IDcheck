<?php
class Id_check extends CI_Controller {
	function __construct(){
        	parent::__construct();
        	$this->load->database(); //DB 연결   
        	$this->load->model("id_check_m "); //model id_check_m 연결  
	}
	public function check_id(){
		$uid=$this->input->post("uid",TRUE); 
		$rerult = $this->id_check_m->searchid($uid); 
		$returnArray['responseText'] = $result; 
		echo json_encode($returnArray); 
	}
}
?>
