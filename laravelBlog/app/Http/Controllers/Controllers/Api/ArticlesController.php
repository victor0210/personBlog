<?php
namespace App\Http\Controllers\Controllers\Api;

/**
 * Created by PhpStorm.
 * User: humengtao
 * Date: 16/9/18
 * Time: 16:34
 */
use App\Article;
use App\Comment;
class ArticlesController
{
    function index(){
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true');
        return Article::all();
    }

    function getArticleItem($id){
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true');
        return Article::where('article_id',$id)->get();
    }

    function getArticleComments($id){
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true');
        return Comment::where('article_id',$id)->get();
    }


    function login(Request $request){
//        header('Access-Control-Allow-Credentials: true');
//        if(User::where('name','humengtao')){
            return 1;
//        }
//        else return 0;
//        $headers = [
//            'Access-Control-Allow-Methods'=> 'POST, GET, OPTIONS, PUT, DELETE',
//            'Access-Control-Allow-Headers'=> 'X-Requested-With, Content-Type, X-Auth-Token, Origin, Authorization'
//        ];
//        if($request->getMethod() == "OPTIONS") {
            // The client-side application can set only headers allowed in Access-Control-Allow-Headers
//            return Response::make('OK', 200, $headers);
//        }

        // ALLOW OPTIONS METHOD

//        return Response::make('You are connected to the API', 200, $headers);
    }
}