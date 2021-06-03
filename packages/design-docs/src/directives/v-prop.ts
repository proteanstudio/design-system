import { Directive } from '@vue/runtime-core';

const vProp: Directive = {
    mounted(element, binding) {
        if (binding.arg) {
            element[binding.arg] = binding.value;
        }
    },
    updated(element, binding) {
        if (binding.arg) {
            element[binding.arg] = binding.value;
        }
    },
};

export default vProp;
