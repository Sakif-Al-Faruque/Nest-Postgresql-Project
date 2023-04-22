import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { Observable } from 'rxjs';
import { FeedPost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
    constructor(
        private readonly feedService: FeedService,
    ){}

    @Get()
    findAll(): Observable<FeedPost[]>{
        return this.feedService.findAllPosts();
    }

    @Post()
    create(@Body() post: FeedPost): Observable<FeedPost>{
        return this.feedService.createPost(post);
    }
}
