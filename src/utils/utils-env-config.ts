class ProcessENV {
  public VITE_BACK_URL: string = 'https://....';
}

export default class UtilsENVConfig {
  static getProcessEnv(): ProcessENV {
    return {
      VITE_BACK_URL: import.meta.env.VITE_BACK_URL,
    };
  }
}
