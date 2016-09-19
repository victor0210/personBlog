<?php

use Illuminate\Database\Seeder;

class ArticleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (range(1, 50) as $i) {
            DB::table('articles')->insert([
                'title' => str_random(5),
                'content'=> str_random(200),
                'comments_count'=>random_int(100,1000),
                'created_at' => gmdate('Y-m-d H:i:s'),
                'updated_at' => gmdate('Y-m-d H:i:s')
            ]);
        }
    }
}