Posts = new Meteor.Collection('posts');

Meteor.methods({
  addPost: function(post) {
    // add a delay to mimic the network time
    if(Meteor.isServer) {
      Meteor._sleepForMs(2000);
    }
    var postId = Posts.insert(post);
    return postId;
  }
});
