/**
 * Created by rakeshchouhan on 1/5/17.
 */
export enum MenuType {
    BRAND,
    CENTER,
    LEFT,
    RIGHT
}

export interface RouteInfo {
    path: string;
    title: string;
    menuType: MenuType;
}