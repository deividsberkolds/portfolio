declare module State {
  interface Root {
    app: App;
    nav: Navigation;
  }

  interface App {
    title: string;
    env: string;
    version: string;
  }

  interface Navigation {
    pageName: string;
  }
}
