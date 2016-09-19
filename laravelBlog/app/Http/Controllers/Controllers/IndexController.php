<?php
/**
 * Created by PhpStorm.
 * User: humengtao
 * Date: 16/9/17
 * Time: 22:26
 */

namespace App\Http\Controllers\Controllers;

use App\Article;
use DB;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    function index()
    {
//          $users = User::all()->where('name',123);
//        $users = User::findOrFail(1);
//        return view('welcome', ['users' => $users]);
//        $user=User::find(2)->article;
//        return view('welcome');
//        $user=Article::where('user_id',2)->get();
//        return $user;
        return view('welcome');

    }

    function insert(Request $request)
    {
        $user = new User();
//        $user->name = $request->name;
//        $user->password = $request->password;
//        $user->email = $request->email;
        $user->create(['name'=>$request->name,'password'=>$request->password,'email'=>$request->email]);
        $user->save();
        return view('welcome');
//        return $request;
    }

    function update(Request $request){
        $user=new User();
        $user->where('name','123')->update(['name'=>'dddd']);
    }

    function delete(){
        $user=new User();
//        $user->find(1)->delete();
        $user->first()->delete();
//        $user->destroy([primary_keys...]);
    }

}