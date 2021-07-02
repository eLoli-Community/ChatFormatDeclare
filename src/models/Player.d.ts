interface Player {
    getUuid():string;
    getName():string;
    getDisplayName():string;
    getLocation():string;
    hasPermission(permission:string):boolean;
}