package com.nischitaproject.instagramclone.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nischitaproject.instagramclone.Entity.Comment;
import com.nischitaproject.instagramclone.Entity.Status;
import com.nischitaproject.instagramclone.Repository.CommentRepo;

@Service
public class CommentService {
	
	@Autowired
	CommentRepo commentRepo;
	
	UserService userService;
	public Comment submitCommentToDB(Comment comment) {
		return commentRepo.save(comment);
	}
	public ArrayList<Comment> getAllCommentsForDB(String postId){
		
	
		ArrayList<Comment> commentList=commentRepo.findAllByPostId(postId);
		for(int i=0;i<commentList.size();i++) {
			Comment commentItem=commentList.get(i);
			commentItem.setUserName(userService.displayUserMetaData(commentItem.getUserId()).getUserName());
		}
		return commentList;
	}

}
