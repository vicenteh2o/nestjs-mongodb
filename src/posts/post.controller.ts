import { Body, Controller, Post } from "@nestjs/common";
import { CreatePostDto } from "./dto/CreatePost.dto";
import { PostService } from "./post.service";

@Controller('posts')
export class PostsController {
    constructor(private postService: PostService) {}

    @Post()
    createPost(@Body() createPostDto: CreatePostDto) {
        return this.postService.createPost(createPostDto);
    }

}