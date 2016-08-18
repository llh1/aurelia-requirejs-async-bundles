export class App {
  constructor() {
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.options.root = '/';
    
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home' },
      { route: 'profile', name: 'profile', moduleId: 'profile' }
    ]);
  }
}
