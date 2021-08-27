import {
    h, //eslint-disable-line
    VNode,
} from '@stencil/core';
import { Dict } from '@/types';

type ReusableIcon = (modifier?: string) => VNode;

const reusableIcons: Dict<ReusableIcon> = {
    error(modifier = ''): VNode {
        return (
            <g transform="translate(0 -1)">
                <path
                    class={`stroke-primary ${modifier}`}
                    d="M13.576 3.163L22.71 21.43a1.768 1.768 0 01-1.581 2.559H2.86a1.768 1.768 0 01-1.581-2.56l9.133-18.266a1.768 1.768 0 013.163 0z"
                />
                <path
                    class="fill-secondary"
                    d="M12 7.583a.877.877 0 01.876.916l-.345 7.748a.526.526 0 01-1.052 0L11.125 8.5A.876.876 0 0112 7.583z"
                />
                <circle cx="12" cy="19.5" r="1" class="fill-secondary" />
            </g>
        );
    },
    info(modifier = ''): VNode {
        return (
            <g transform="translate(1 1)">
                <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    class={`stroke-primary ${modifier}`}
                />
                <path
                    class="fill-secondary"
                    d="M11.083 9.167h.834V15.5a1 1 0 01-1 1h-.834v-6.333a1 1 0 011-1z"
                />
                <circle class="fill-secondary" cx="11" cy="6.417" r="1" />
            </g>
        );
    },
    success(modifier = ''): VNode {
        return (
            <g transform="translate(1 1)">
                <circle
                    class={`stroke-primary ${modifier}`}
                    cx="11"
                    cy="11"
                    r="10.5"
                />
                <path
                    class="stroke-secondary"
                    d="M5.5 11.828L9.314 15.5 16.5 6.333"
                />
            </g>
        );
    },
    warning(modifier = ''): VNode {
        return (
            <g transform="translate(1 1)">
                <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    class={`stroke-primary ${modifier}`}
                />
                <path
                    class="fill-secondary"
                    d="M11 4.583a.877.877 0 01.876.916l-.345 7.748a.526.526 0 01-1.052 0L10.125 5.5A.876.876 0 0111 4.583z"
                />
                <circle class="fill-secondary" cx="11" cy="16.5" r="1" />
            </g>
        );
    },
};

interface Icon {
    markup: () => VNode;
}

const icons: Dict<Icon> = {
    checkmark: {
        markup: () => (
            <path
                class="stroke-primary"
                d="M5.5 11.828L9.314 15.5 16.5 6.333"
            />
        ),
    },
    'chevron-down': {
        markup: () => (
            <path class="stroke-primary" d="M2.003 7.5L12 16l10-8.5" />
        ),
    },
    'chevron-left': {
        markup: () => (
            <path class="stroke-primary" d="M16.251 1.752l-8.5 9.997 8.5 10" />
        ),
    },
    'chevron-right': {
        markup: () => (
            <path class="stroke-primary" d="M7.751 21.748l8.5-9.997-8.5-10" />
        ),
    },
    'chevron-up': {
        markup: () => (
            <path class="stroke-primary" d="M2.003 16L12 7.5 22 16" />
        ),
    },
    clipboard: {
        markup: () => (
            <g class="stroke-primary">
                <path d="M7.441 16.706h4.706M7.441 13.765h8.235M7.441 10.824h8.235" />
                <path d="M16.323 5.53h1.118c.65 0 1.177.46 1.177 1.029V20.97c0 .568-.527 1.029-1.177 1.029H5.676c-.65 0-1.176-.46-1.176-1.03V6.56c0-.569.527-1.03 1.176-1.03h1.197" />
                <path d="M11.559 2c1.3 0 2.353 1.053 2.353 2.353h2.059c.162 0 .294.132.294.294V7a.294.294 0 01-.294.294H7.147A.294.294 0 016.853 7V4.647c0-.162.132-.294.294-.294h2.059c0-1.3 1.053-2.353 2.353-2.353z" />
            </g>
        ),
    },
    menu: {
        markup: () => (
            <path
                class="stroke-primary"
                d="M1.5 12.5h21M1.5 18.5h21M1.5 6.5h21"
            />
        ),
    },
    'status-error': {
        markup: () => reusableIcons['error'](),
    },
    'status-error-filled': {
        markup: () => reusableIcons['error']('fill-primary'),
    },
    'status-info': {
        markup: () => reusableIcons['info'](),
    },
    'status-info-filled': {
        markup: () => reusableIcons['info']('fill-primary'),
    },
    'status-success': {
        markup: () => reusableIcons['success'](),
    },
    'status-success-filled': {
        markup: () => reusableIcons['success']('fill-primary'),
    },
    'status-warning': {
        markup: () => reusableIcons['warning'](),
    },
    'status-warning-filled': {
        markup: () => reusableIcons['warning']('fill-primary'),
    },
    swap: {
        markup: () => (
            <path
                class="stroke-primary"
                d="M5 14h16l-4.513 4M19 10H3l4.513-4"
            />
        ),
    },
};
export default icons;
