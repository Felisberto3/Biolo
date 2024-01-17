import { FollowerRepository } from "../../../follower/repository/FollowerRepository";
import { NotificationRepository } from "../../../notification/repository/NotificationRepository";
import { IcreatePostDto } from "../../interface";
import { PostRepository } from "../../repository/PostRepository";

class CreatePostUseCase {
    constructor(
        private postRepository: PostRepository,
        private notificationRepository: NotificationRepository,
        private followerRepository: FollowerRepository
    ) { }

    async execute({ authorId, category, description, stage, title }: IcreatePostDto) {

        const follower = await this.followerRepository.findByfollowedId(authorId)

        const newPost = await this.postRepository.create({ authorId,category,description,stage,title})

        for (const iterator of follower!) {
            const { followerId } = iterator
            await this.notificationRepository.create({
                notifiedBy: authorId,
                type: 'Posted a new Biolo',
                recipientId: followerId,
                postId : newPost.id
            })
        }

        return newPost

    }
}

export { CreatePostUseCase }