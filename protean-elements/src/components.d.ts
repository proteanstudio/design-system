/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FormattedValue } from "@/utils/formatting/types";
export namespace Components {
    interface ProteanButton {
        "disabled": boolean;
        "type": string;
        "variant": string;
    }
    interface ProteanCheckbox {
        "alignment": 'left' | 'right';
        "ariaLabel": string;
        "checked": boolean;
        "disabled": boolean;
        "indeterminate": boolean;
        "label": string;
        "type": string;
    }
    interface ProteanIcon {
        "type": string;
        "use": string;
    }
    interface ProteanInput {
        "ariaExpanded": boolean | undefined;
        "ariaHasPopup": string;
        "ariaLabel": string;
        "disabled": boolean;
        "errors": string[];
        "format": string;
        "hints": string[];
        "label": string;
        "maxlength": number;
        "optional": boolean;
        "readonly": boolean;
        "role": string;
        "suppressMessages": boolean;
        "type": string;
        "value": string;
    }
    interface ProteanMessage {
        "level": string;
        "type": string;
        "variant": string;
    }
    interface ProteanOptgroup {
        "disabled": boolean;
        "label": string;
    }
    interface ProteanOption {
        "active": boolean;
        "disabled": boolean;
        "disabledGroup": boolean;
        "label": string;
        "selected": boolean;
        "value": string;
    }
    interface ProteanSelect {
        "disabled": boolean;
        "errors": string[];
        "label": string;
        "multiple": boolean;
        "optional": boolean;
        "selectedOptions": string[];
        "value": string;
    }
    interface ProteanTabContainer {
        "name": string;
        "value": string;
    }
    interface ProteanTabPane {
        "guid": number;
        "index": number;
        "label": string;
        "name": string;
        "selected": boolean;
        "value": string;
    }
}
declare global {
    interface HTMLProteanButtonElement extends Components.ProteanButton, HTMLStencilElement {
    }
    var HTMLProteanButtonElement: {
        prototype: HTMLProteanButtonElement;
        new (): HTMLProteanButtonElement;
    };
    interface HTMLProteanCheckboxElement extends Components.ProteanCheckbox, HTMLStencilElement {
    }
    var HTMLProteanCheckboxElement: {
        prototype: HTMLProteanCheckboxElement;
        new (): HTMLProteanCheckboxElement;
    };
    interface HTMLProteanIconElement extends Components.ProteanIcon, HTMLStencilElement {
    }
    var HTMLProteanIconElement: {
        prototype: HTMLProteanIconElement;
        new (): HTMLProteanIconElement;
    };
    interface HTMLProteanInputElement extends Components.ProteanInput, HTMLStencilElement {
    }
    var HTMLProteanInputElement: {
        prototype: HTMLProteanInputElement;
        new (): HTMLProteanInputElement;
    };
    interface HTMLProteanMessageElement extends Components.ProteanMessage, HTMLStencilElement {
    }
    var HTMLProteanMessageElement: {
        prototype: HTMLProteanMessageElement;
        new (): HTMLProteanMessageElement;
    };
    interface HTMLProteanOptgroupElement extends Components.ProteanOptgroup, HTMLStencilElement {
    }
    var HTMLProteanOptgroupElement: {
        prototype: HTMLProteanOptgroupElement;
        new (): HTMLProteanOptgroupElement;
    };
    interface HTMLProteanOptionElement extends Components.ProteanOption, HTMLStencilElement {
    }
    var HTMLProteanOptionElement: {
        prototype: HTMLProteanOptionElement;
        new (): HTMLProteanOptionElement;
    };
    interface HTMLProteanSelectElement extends Components.ProteanSelect, HTMLStencilElement {
    }
    var HTMLProteanSelectElement: {
        prototype: HTMLProteanSelectElement;
        new (): HTMLProteanSelectElement;
    };
    interface HTMLProteanTabContainerElement extends Components.ProteanTabContainer, HTMLStencilElement {
    }
    var HTMLProteanTabContainerElement: {
        prototype: HTMLProteanTabContainerElement;
        new (): HTMLProteanTabContainerElement;
    };
    interface HTMLProteanTabPaneElement extends Components.ProteanTabPane, HTMLStencilElement {
    }
    var HTMLProteanTabPaneElement: {
        prototype: HTMLProteanTabPaneElement;
        new (): HTMLProteanTabPaneElement;
    };
    interface HTMLElementTagNameMap {
        "protean-button": HTMLProteanButtonElement;
        "protean-checkbox": HTMLProteanCheckboxElement;
        "protean-icon": HTMLProteanIconElement;
        "protean-input": HTMLProteanInputElement;
        "protean-message": HTMLProteanMessageElement;
        "protean-optgroup": HTMLProteanOptgroupElement;
        "protean-option": HTMLProteanOptionElement;
        "protean-select": HTMLProteanSelectElement;
        "protean-tab-container": HTMLProteanTabContainerElement;
        "protean-tab-pane": HTMLProteanTabPaneElement;
    }
}
declare namespace LocalJSX {
    interface ProteanButton {
        "disabled"?: boolean;
        "type"?: string;
        "variant"?: string;
    }
    interface ProteanCheckbox {
        "alignment"?: 'left' | 'right';
        "ariaLabel"?: string;
        "checked"?: boolean;
        "disabled"?: boolean;
        "indeterminate"?: boolean;
        "label"?: string;
        "onChange"?: (event: CustomEvent<any>) => void;
        "type"?: string;
    }
    interface ProteanIcon {
        "type"?: string;
        "use"?: string;
    }
    interface ProteanInput {
        "ariaExpanded"?: boolean | undefined;
        "ariaHasPopup"?: string;
        "ariaLabel"?: string;
        "disabled"?: boolean;
        "errors"?: string[];
        "format"?: string;
        "hints"?: string[];
        "label"?: string;
        "maxlength"?: number;
        "onChange"?: (event: CustomEvent<FormattedValue>) => void;
        "onInput"?: (event: CustomEvent<FormattedValue>) => void;
        "optional"?: boolean;
        "readonly"?: boolean;
        "role"?: string;
        "suppressMessages"?: boolean;
        "type"?: string;
        "value"?: string;
    }
    interface ProteanMessage {
        "level"?: string;
        "type"?: string;
        "variant"?: string;
    }
    interface ProteanOptgroup {
        "disabled"?: boolean;
        "label"?: string;
    }
    interface ProteanOption {
        "active"?: boolean;
        "disabled"?: boolean;
        "disabledGroup"?: boolean;
        "label"?: string;
        "selected"?: boolean;
        "value"?: string;
    }
    interface ProteanSelect {
        "disabled"?: boolean;
        "errors"?: string[];
        "label"?: string;
        "multiple"?: boolean;
        "onChange"?: (event: CustomEvent<any>) => void;
        "optional"?: boolean;
        "selectedOptions"?: string[];
        "value"?: string;
    }
    interface ProteanTabContainer {
        "name"?: string;
        "onChange"?: (event: CustomEvent<any>) => void;
        "value"?: string;
    }
    interface ProteanTabPane {
        "guid"?: number;
        "index"?: number;
        "label"?: string;
        "name"?: string;
        "selected"?: boolean;
        "value"?: string;
    }
    interface IntrinsicElements {
        "protean-button": ProteanButton;
        "protean-checkbox": ProteanCheckbox;
        "protean-icon": ProteanIcon;
        "protean-input": ProteanInput;
        "protean-message": ProteanMessage;
        "protean-optgroup": ProteanOptgroup;
        "protean-option": ProteanOption;
        "protean-select": ProteanSelect;
        "protean-tab-container": ProteanTabContainer;
        "protean-tab-pane": ProteanTabPane;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "protean-button": LocalJSX.ProteanButton & JSXBase.HTMLAttributes<HTMLProteanButtonElement>;
            "protean-checkbox": LocalJSX.ProteanCheckbox & JSXBase.HTMLAttributes<HTMLProteanCheckboxElement>;
            "protean-icon": LocalJSX.ProteanIcon & JSXBase.HTMLAttributes<HTMLProteanIconElement>;
            "protean-input": LocalJSX.ProteanInput & JSXBase.HTMLAttributes<HTMLProteanInputElement>;
            "protean-message": LocalJSX.ProteanMessage & JSXBase.HTMLAttributes<HTMLProteanMessageElement>;
            "protean-optgroup": LocalJSX.ProteanOptgroup & JSXBase.HTMLAttributes<HTMLProteanOptgroupElement>;
            "protean-option": LocalJSX.ProteanOption & JSXBase.HTMLAttributes<HTMLProteanOptionElement>;
            "protean-select": LocalJSX.ProteanSelect & JSXBase.HTMLAttributes<HTMLProteanSelectElement>;
            "protean-tab-container": LocalJSX.ProteanTabContainer & JSXBase.HTMLAttributes<HTMLProteanTabContainerElement>;
            "protean-tab-pane": LocalJSX.ProteanTabPane & JSXBase.HTMLAttributes<HTMLProteanTabPaneElement>;
        }
    }
}
