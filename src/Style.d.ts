declare function style():Style;
declare class Style {
    font(font:string):Style;
    f(font:string):Style;

    color(color:Color):Style;
    c(color:Color):Style;

    obfuscated():Style;
    o():Style;

    bold():Style;
    b():Style;

    strikethrough():Style;
    s():Style;

    underlined():Style;
    u():Style;

    italic():Style;
    i():Style;

    clickEvent(clickEvent:ClickEvent):Style;
    cl(clickEvent:ClickEvent):Style;

    hoverEvent(hoverEvent:HoverEvent):Style;
    h(hoverEvent:HoverEvent):Style;

    insertion(insertion:string):Style;
    in(insertion:string):Style;
}