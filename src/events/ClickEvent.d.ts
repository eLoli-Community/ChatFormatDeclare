declare class ClickEvent {
    static openUrl(url:string):ClickEvent;
    static runCommand(command:string):ClickEvent;
    static suggestCommand(command:string):ClickEvent;
    static changePage(page:string|number):ClickEvent;
    static copyToClipboard(text:string):ClickEvent;
}