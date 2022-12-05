package com.nischitaproject.instagramclone.Service;

import java.util.ArrayList;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nischitaproject.instagramclone.Entity.Post;
import com.nischitaproject.instagramclone.Entity.Status;
import com.nischitaproject.instagramclone.Repository.PostRepo;

@Service
public class PostService {
	@Autowired
	UserService userService;
	PostRepo postRepo;
	public Post submitPostToDataBase(Post post) {
		return postRepo.save(post);
	}
	public ArrayList<Post> retrivePostFromDB(){
	
		ArrayList<Post> postList=postRepo.findAll();
		for(int i=0;i<postList.size();i++) {
			Post postItem=postList.get(i);
			postItem.setUserName(userService.displayUserMetaData(postItem.getUserId()).getUserName());
			
	}
		Collections.sort(postList,(a,b)->b.getId()-a.getId());
		return postList;

   }
}
