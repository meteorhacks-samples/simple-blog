Router.map(function() {
  this.route('postList', {path: '/'});
  this.route('addPost', {path: '/addPost'});
  this.route('post', {
    path: "/post/:_id",
    data: function() {
      return {postId: this.params._id};
    }
  });
});
