<?php

namespace App\Controllers;

class Home extends BaseController
{

    public function index(){

        $data = [
            'title' => 'NIVEA MEN DEEP BRIGHT OIL CLEAR MUD FOAM'
        ];
        
        return view('nivea',$data);
    }


}
