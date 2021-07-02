declare class Textual extends Component{
    static of(text:string):Textual;
    static of(text:string,color:Color):Textual;
    static of(text:string,style:Style):Textual;
}
declare function text(text:string,data?:Color|Style):Textual;
declare function plain(text:string,data?:Color|Style):Textual;