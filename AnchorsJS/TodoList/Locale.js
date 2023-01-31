import { state } from "./index.js";

export const [language,setLanguage,listLanguage]=state(0);


export const Locale={
    //0 Turkish , 1 English
    Add:["Ekle","Add"],
    Delete:["Sil","Delete"],
    Edit:["Düzenle","Edit"],
    Application:["Öncelikli Yapılacaklar Listesi","Priority TodoList"],
    Language:["Dil","Language"],
    Priority:["Önem","Priority"],
    PriorityRatio:["Önem Yüzdesi","Priority Ratio"]
}
