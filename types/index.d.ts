
/**  component common definition */
export declare class BaseComponent {
    /** Install component into Vue */
    static install(app: any, ...options: any): any
}
export default class VTouchshow extends BaseComponent {

}

export type Callback = (e: Event, el: HTMLElement) => void;