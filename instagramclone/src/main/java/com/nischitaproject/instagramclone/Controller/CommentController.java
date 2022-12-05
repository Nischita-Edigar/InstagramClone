package com.nischitaproject.instagramclone.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nischitaproject.instagramclone.Entity.Comment;
import com.nischitaproject.instagramclone.Service.CommentService;

@RestController
@RequestMapping("/comments")
public class CommentController {
	
	@Autowired
	CommentService commentService;
	@PostMapping("")
	private Comment submitCommnet(@RequestBody Comment comment) {
		return commentService.submitCommentToDB(comment);
	}

	@GetMapping("/{postId}")
	private ArrayList<Comment> getCommentsForPost(@PathVariable("postId") String postId){
		return commentService.getAllCommentsForDB(postId);
	}
}
