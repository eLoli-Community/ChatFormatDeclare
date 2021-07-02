declare class HoverEvent {
    static showText(text:Component):HoverEvent;
    static showItem(itemId:string):HoverEvent;
    static showEntity(id:string, name:Component):HoverEvent;
}