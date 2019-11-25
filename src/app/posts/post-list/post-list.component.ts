import { Component, Input } from '@angular/core';
import {Post} from '../post.model';

@Component({
    selector:         'app-post-list',
    templateUrl:      './post-list.component.html',
    styleUrls:         ['./post-list.component.css']    
})

export class PostListComponent{
    @Input()
    posts: Post[] =[
    //    {title:'First Post', content: 'this is 1st post'},
    //    {title:'Second Post', content: 'this is 2nd post'},
    //    {title:'Third Post', content: 'this is 3rd post'}
    ];

}