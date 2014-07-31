Template.addPost.events({
  "click button": function() {
    var title = $('#title').val();
    var content = $('#content').val();

    var post = {
      title: title,
      content: content,
      _id: Meteor.uuid()
    };

    Meteor.call('addPost', post, function(err) {
      if(err) {
        alert(err.reason);
      }
    });

    Router.go('/post/' + post._id);
  }
});

Template.post.getPost = function() {
  if(Router.current() && Router.current().data()) {
    var post = Posts.findOne({_id: Router.current().data().postId});
    return post;
  }
}

Template.postList.posts = function() {
  return Posts.find();
}
