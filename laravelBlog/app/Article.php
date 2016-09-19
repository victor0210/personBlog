<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    function comment()
    {
        return $this->hasMany('Article\Comment');
    }
}
