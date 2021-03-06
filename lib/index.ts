/**
 * v-touchshow
 * Vue3 directive for touch
 * @author maybe
 * @description Vue移动端手势指令
 * 基于 any-touch https://github.com/any86/any-touch
 */

import AnyTouch from 'any-touch';
import { Callback } from '../types'

import { App, DirectiveBinding } from "vue-demi";

const caches = new WeakMap<HTMLElement, AnyTouch>()


function init(el: HTMLElement, binding: DirectiveBinding<Callback>) {
    let at: AnyTouch;
    const arg = binding.arg;
    const opts = binding.value;

    const reAt = caches.get(el);
    if (reAt) {
        at = reAt;
    }
    else {
        const config = Object.assign({
            // tParam1: ''
        }, typeof opts == 'object' ? opts : {});
        at = new AnyTouch(el, config as any);
    }

    if (typeof opts == 'function') {
        at.on(arg as any, (e: Event) => {
            opts(e, el);
        })
    }

    caches.set(el, at)

}

function install(app: App, options: any) {
    app.directive("touchshow", {
        mounted(el, binding) {
            init(el, binding);
        },
        unmounted(el, binding) {

            const reAt = caches.get(el)
            if (reAt) {
                reAt.destroy();
                caches.delete(el)
            }
            reAt && console.log(`[v-touchshow:${el}]:touchshow events destroyed`)
        }
    });
}

export default {
    install
}