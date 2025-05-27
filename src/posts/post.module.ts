import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "src/schemas/Post.schema";
import { PostsController } from "./post.controller";
import { PostService } from "./post.service";
import { UsersModule } from "src/users/users.module";
import { User, UserSchema } from "src/schemas/User.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Post.name,
                schema: PostSchema
            },
            {
                name: User.name,
                schema: UserSchema
            }
        ]),
    ],
    controllers: [PostsController],
    providers: [PostService],
})
export class PostModule {

}