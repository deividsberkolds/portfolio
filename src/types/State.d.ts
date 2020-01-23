declare module State {
  interface Root {
    app: App;
    nav: Navigation;
    todo: Todo;
  }

  interface App {
    title: string;
    env: string;
    version: string;
  }

  interface Navigation {
    pageName: string;
  }

  interface Todo { 
    text: string; 
    date: string; 
    completed: boolean 
  }
  
}
