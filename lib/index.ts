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

const caches: {
    key: string,
    touch: AnyTouch
}[] = []


function init(el: HTMLElement, binding: DirectiveBinding<Callback>) {
    let at: AnyTouch;
    let elKey: string;
    const arg = binding.arg;
    const opts = binding.value;

    const item = caches.find(it => it.key == el.dataset.tkey);
    if (el.dataset.tkey && item) {
        at = item.touch;
        elKey = item.key;
    }
    else {
        const config = Object.assign({
            // tParam1: ''
        }, typeof opts == 'object' ? opts : {});
        at = new AnyTouch(el, config as any);
        elKey = 'tkey_' + new Date().getTime();
        el.dataset['tkey'] = elKey as any;
    }

    caches.push({
        key: elKey,
        touch: at
    });



    console.log(arg, opts);

    // Object.keys(opts).forEach(eName => {
    //     at.on(eName as any, (e: Event) => {
    //         opts[eName](e, el);
    //     })
    // })
    at.on(arg as any, (e: Event) => {
        opts(e, el);
    })
}

function install(app: App, options: any) {
    app.directive("touchshow", {
        mounted(el, binding) {
            init(el, binding);
        },
        unmounted(el, binding) {

            const item = caches.find(it => it.key == el.dataset.tkey)
            if (item) {
                item.touch.destroy();
                const index = caches.findIndex(it => it.key == item.key);
                caches.splice(index, 1);
            }
            item && console.log(`[v-touchshow:${item.key}]:touchshow events destroyed`)
        }
    });
}

export default {
    install
}