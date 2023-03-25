
export class RandomGenerator {

    public static numbers(charsAmount: number) {
      let text: string = '';
      const possible: string = '123456789';
      for (let i = 0; i < charsAmount; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return +text;
    };
  
    public static lowerCaseText(charsAmount: number) {
      let text: string = '';
      const possible: string = 'abcdefghijklmnopqrstuvwxyz';
      for (let i = 0; i < charsAmount; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };
  
    public static textAndNumbers(charsAmount: number) {
      let text: string = '';
      const possible: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < charsAmount; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };

  }