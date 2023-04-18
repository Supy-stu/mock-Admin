import { defineStore } from "pinia";
import { getCurrentLanguage, setCurrentLanguage } from "@/lang";

const useLanguage = defineStore("language-pinia",{
  state: () => ({
    language: <string>{},
  }),

  getters: {
    getLanguage(): string {
      this.language = getCurrentLanguage() + "";
      return this.language;
    },
  },

  actions: {
    setLanguage(str: string) {
      this.language = str;
      setCurrentLanguage(this.language);
    },
  },
});

export default useLanguage;
