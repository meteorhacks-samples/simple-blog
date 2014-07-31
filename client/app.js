Template.addPost.events({
  "click button": function() {
    var title = $('#title').val();
    var content = $('#content').val();

    var post = {
      title: title,
      content: content
    };

    Meteor.call('addPost', post, function(err, postId) {
      if(err) {
        alert(err.reason);
      } else {
        Router.go('/post/' + postId);
      }
    });
  }
});

Template.post.getPost = function() {
  if(Router.current() && Router.current().data()) {
    var post = Posts.findOne({_id: Router.current().data().postId});
    console.log(post);
    return post;
  }
}

Template.postList.posts = function() {
  return Posts.find();
}
