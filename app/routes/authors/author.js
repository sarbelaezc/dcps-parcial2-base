import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    this.store.find('author', 'posts');
  },
  actions: {
    delete(post){
      console.log('llega');
      this.posts.removeObject(post);
    },
  },
});
